# Created March 21, 2024. Last substantial update: March 25, 2024.
# This module supersedes research.py

# Immediate to-do:
# - Wrappers for each individual solution.
# - Revise the success_prob parameter

# Longer to-do
# - Model the benefits (LCOE reduction, externality reduction, GHG reduction) that (better) accounts for changing prices and energy sources over time.
# - Regional electricity markets rather than a single global market.

# This is the main module for the R&D solutions into individual energy technologies.
# Wrappers are expected for each individual solution.

import lcoe
import discount
import world_elec
import rd_success

# Parameters
success_prob = rd_success.success_probability() # This is a single parameter, rather than technology-specific. We eventually want the latter.
deployment_time = 50 # My guess as to how long it would take for the technology to reach full deployment, after R&D success.
current_year = 2024

# For each electricity technology, the following dictionary is expected.
# {
#        "base_price": The LCOE without any externalities taken into account. Note that all prices are expressed in cents/kWh,
#		"final_price": LCOE with monetized greenhouse gas and other externalities taken into account,
#        "ghg_price": Monetized greenhouse gas price,
#        "other_price": Monetizes price of non-GHG externalities,
#		"share": The share of US electricity market that the technology may be appropriate for. A value of 1.0 means that it could theoretically be used for all electricity,
#		"rd_time": Number of years that the R&D is expected to take,
#		"rd_cost": Total undiscounted cost, over all years, expected for R&D.
#	}
# Many values are filled in with subjective guesses, or taken to be the equal to what seems to be the most similar alternative.
# Much work is required to bring this up to date and fill in uncertanties.
technologies = {
	"Wave Energy":{
        "base_price":0.06,
		"final_price":0.06+0.001+0.002, # From the consultant report. Check to see if other sources corroborate this number
        "ghg_price":0.001,
        "other_price":0.002,
		"share":0.2, # Coastal is 0.4, assuming half is suitable for wave.
		"rd_time":10,
		"rd_cost":8.3
	},
	"High Altitude Wind":{
        "base_price":0.09,
		"final_price":0.09+0.001575+0.0009,
        "ghg_price":0.001575,
        "other_price":0.0009,
		"share":1., # Might be lower if access to the gulf stream is needed. There is also ultimate potential
		"rd_time":25,
		"rd_cost":8.3*25/10 # Assuming case cost per year as wave
	},
	"Enhanced Geothermal":{
        "base_price":0.06,
		"final_price":0.06+0.002125+0.005, # For electricity cost, see http://www2.itif.org/2019-budget-geothermal.pdf. Geothermal isn't on the plot for external costs so I'm guessing
        "ghg_price":0.002125,
        "other_price":0.005,
		"share":0.5, # A wild guess, based on Western US being good territory.
		"rd_time":10,
		"rd_cost":8.3 # Same cost as wave
	},
	"Hydrothermal Sea Vents":{
        "base_price":(7.7+11.1)/200,
		"final_price":(7.7+11.1)/200 +0.002125+0.005, # Based on the notes. Not a very good figure but that's what I have.
        "ghg_price":0.002125,
        "other_price":0.005,
		"share":0.2, # 0.4 for coast times 0.5 for share accessible by sea vents
		"rd_time":25,
		"rd_cost":8.3*25/10 # Same annual cost as wave energy
	},
	"Tidal Power":{
        "base_price":0.10556,
		"final_price":0.10556+0.001+0.002, # See notes for cost
        "ghg_price":0.001,
        "other_price":0.002,
		"share":0.04, # Based on 1200 TWh potential. See https://energypost.eu/unlocking-the-potential-of-ocean-energy-from-megawatts-to-gigawatts/
		"rd_time":10,
		"rd_cost":8.3 # Same annual cost as wave energy
	},
	"OTEC":{
        "base_price":0.13,
		"final_price":0.13+0.001+0.002,
        "ghg_price":0.001,
        "other_price":0.002,
		"share":0.2, # Guessing 50% of coast is suitable for OTEC
		"rd_time":25,
		"rd_cost":8.3*25/10 # Same annual cost as wave energy
	},
	"Fusion":{
        "base_price":0.13,
		"final_price":0.13+0.00285+0.0031,
        "ghg_price":0.00285,
        "other_price":0.0031,
		"share":1.,
		"rd_time":40,
		"rd_cost":65 # https://physicstoday.scitation.org/do/10.1063/PT.6.2.20180416a/full/#:~:text=The%20US%20Department%20of%20Energy,its%20figure%20of%20%2422%20billion.
	},
	"Space Solar":{
        "base_price":0.07,
		"final_price":0.07+0.0018+0.0081,
        "ghg_price":0.0018,
        "other_price":0.0081,
		"share":1.,
		"rd_time":40,
		"rd_cost":65 # Same as fusion
	},
	"Building Integrated Solar":{
        "base_price":0.0372,
		"final_price":0.0372+0.00495+0.0081, # See notes for LSC. Consider a different value
        "ghg_price":0.00495,
        "other_price":0.0081,
		"share":1., # Price may vary by location
		"rd_time":25,
		"rd_cost":8.3*25/10 # Same annual cost as wave energy
	}
}

# Display cost and benefit information for a single technology, which is the tech dictionary.
def cost_benefit(tech):
    tech["ghg_price"] = tech["ghg"]*lcoe.scc/10**6
    tech["final_price"] = tech["base_price"]+tech["ghg_price"]+tech["other_price"]
    
    cost = discount.RevenueStream().spread_value(tech["rd_cost"], tech["rd_time"]).annualize()
    total_value = base_value = ghg_value = other_value = 0
    e = world_elec.forecast(current_year)*10**9 # Current overall electricity market in kWh.
    
    '''
	To start total_value calculation, we assume a technology deploys over 50 years when ready, adding 2% of the potential per year
	The following NPV calculations are made from present.
    Forecasts are based on 2024 being the start year.
    '''
    value = discount.RevenueStream( # If the ultimate revenue stream would be $1 annually, what would the net present value be?
        yearly_stream = [i/deployment_time*world_elec.growth_percentage(i+current_year+tech["rd_time"], current_year) for i in range(deployment_time)],
        end_value = world_elec.growth_percentage(deployment_time+current_year+tech["rd_time"], current_year),
        offset = tech["rd_time"]
    ).annualize()
    
    # The following for loop goes over all electricity sources on the grid now and determines which of them the new source might displace.
    # It then adds the values of doing so, in terms of base LCOE, GHG reduction (monetized), other externalities, and a total.
    for share in world_elec.ei_elec:
        if tech["base_price"] < lcoe.lcoe["direct"][share]:
            s = world_elec.ei_elec[share] # Share of the given electricity source in the whole market.
            total_value += s*e*(lcoe.lcoe["electricity_cost"][share]-tech["final_price"]) * success_prob * tech["share"] * value
            base_value += s*e*(lcoe.lcoe["direct"][share]-tech["base_price"]) * success_prob * tech["share"] * value
            '''
            At present, the greenhouse gas reduction benefit is the only one where future evolution of the electric grid is taken into account.
            The benefit is assessed at the projected greenhouse gas intensity of when the R&D is done, assuming it starts now.
            It is a highly simplified model that could stand to be made better, such as accounting for cleaner sources after R&D is done.
            '''
            ghg_value += s*e*(lcoe.lcoe["ghg_cost"][share]-tech["ghg_price"]) * lcoe.projected_ghg(tech["rd_time"]+current_year, current_year) * success_prob * tech["share"] * value
            other_value += s*e*(lcoe.lcoe["externalities"][share]-tech["other_price"]) * success_prob * tech["share"] * value
    
    print("R&D Cost:",cost,"billion/yr")
    print("Benefit: ",total_value/10**9,"billion/yr")
    print("Base:    ",base_value/10**9,"billion/yr")
    print("GHG:     ",ghg_value/lcoe.scc/10**6,"million tons/yr")
    print("Other:   ",other_value/10**9,"billion/yr")
    # Return cost and benefit in billions of dollars.
    return cost, total_value/10**9, base_value/10**9, ghg_value/lcoe.scc/10**6, other_value/10**9
    
# This snippet of code tests the model for all technologies in the techonlogies dictionary. It should eventually be removed.
if(False):
    for t in technologies:
        print(t)
        cost_benefit(technologies[t])
