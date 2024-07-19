'''
Dimethyl Ether
Created on July 17, 2024. Last substantive update on July 17, 2024.

Specifically, use of DME instead of diesel for trucks.
'''

import social_cost

# 2,717,233*10**6 trillion ton-miles of trucking freight per year in the US: https://www.bts.gov/content/us-ton-miles-freight . See Excel file.
truck_ton_miles = 2717233*10**6

# Emissions factors of various fuels, in grams CO2e/MJ.
emissions = {
    "dme": 21.11, # https://www.sciencedirect.com/science/article/pii/S0959652620335265
    "diesel": 97*1.055055853, # https://www.epa.gov/fuels-registration-reporting-and-compliance-help/lifecycle-greenhouse-gas-results
    "biodme": 0 # Very generous I think. https://pubs.acs.org/doi/pdf/10.1021/acssuschemeng.1c03783
}

# Converting all of these to dollars per MJ
dme_price = {
    "electrolyzed":75.62 * 1.1 / 1000, # 2019, Euros/GJ. https://www.sciencedirect.com/science/article/abs/pii/S0196890419300925
    "shale_gas":10.38 * 1.055055853 / 1000, # 2019, dollars per MMTBU. https://www.sciencedirect.com/science/article/abs/pii/S0306261919300455
    "diesel":3 / 135.5, # Dollars per gallon, wholesale. It fluctulates a lot, so that's a guess. https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=pet&s=ema_epd2d_pwg_nus_dpg&f=m
    # For the following, costs are -0.370 Euros/kg to 0.924 Euro/kg. Not sure which figure is best to use.
    "sludge":(0.9240-0.370)/2 * 1.1 * 69.4 / 1000 # Euros/kg, high end cost. https://www.cetjournal.it/cet/22/94/181.pdf
}

# Carbon mitigation cost, dollars per time, for using bioDME instead of diesel.
#print( 10**6 * (dme_price["sludge"]-dme_price["diesel"])/(emissions["diesel"]-emissions["biodme"]) )

##################################################### Overall numbers ############################################################

# Ton-miles per gallon of diesel
fuel_efficiency = 140 # https://rotella.shell.com/en_us/info-hub/freight-ton-efficiency-a-better-energy-use-measure.html
diesel_share = 0.76 # https://www.foodlogistics.com/transportation/trucking/news/22327396/diesel-technology-forum-76-of-commercial-trucks-run-on-diesel
total_mj = truck_ton_miles / fuel_efficiency * diesel_share

cost = total_mj * (dme_price["sludge"] + emissions["biodme"]*social_cost.get_scc(2024)/10**6)
benefit = total_mj * (dme_price["diesel"] + emissions["diesel"]*social_cost.get_scc(2024)/10**6)

print("Cost: $",cost/10**6," million",sep="")
print("Benefit: $",benefit/10**6," million",sep="")

co2savings = (emissions["diesel"]-emissions["biodme"])*total_mj / 10**6
print(co2savings / 10**6)