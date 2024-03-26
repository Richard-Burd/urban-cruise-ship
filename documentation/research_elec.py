# Created March 21, 2024. Last substantial update: March 25, 2024.
# This module supersedes research.py

'''
# To-do
# - Model the benefits (LCOE reduction, externality reduction, GHG reduction) that (better) accounts for changing prices and energy sources over time.
# - Regional electricity markets rather than a single global market.
'''

# This is the main module for the R&D solutions into individual energy technologies. Wrappers are used for each individual solution.

import lcoe
import discount
import world_elec
import rd_success

# Parameters
success_prob = rd_success.success_probability() # This is a single parameter, rather than technology-specific. We eventually want the latter.
deployment_time = 50 # My guess as to how long it would take for the technology to reach full deployment, after R&D success.
current_year = 2024

'''
# For each electricity technology, the following dictionary is expected.
{
    "base_price": The LCOE without any externalities taken into account. Note that all prices are expressed in cents/kWh,
	"final_price": LCOE with monetized greenhouse gas and other externalities taken into account,
    "ghg_price": Monetized greenhouse gas price,
    "other_price": Monetizes price of non-GHG externalities,
	"share": The share of US electricity market that the technology may be appropriate for. A value of 1.0 means that it could theoretically be used for all electricity,
	"rd_time": Number of years that the R&D is expected to take,
	"rd_cost": Total undiscounted cost, over all years, expected for R&D.
}
'''

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

