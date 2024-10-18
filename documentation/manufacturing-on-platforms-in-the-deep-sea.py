'''
Deep sea manufacturing platforms
Documentation created: October 18, 2024. Last substantial update: October 18, 2024.

To-do:
- Why is the refurbishment cost based sole on the industrial desalter figure?
- Find more recent decommissioning ocst estimates that are also based on a worldwide perspective.
'''

import discount

# Average rig count for 2023 was 1814, according to Baker Hughes. https://rigcount.bakerhughes.com/intl-rig-count

# https://www.westwoodenergy.com/news/infographics/weekly-global-offshore-rig-counts-2023
floating_rigs = 149 # Not counting jackups. For the final week of 2023.

# Cost per platform to decomission.
# From https://www.sciencedirect.com/science/article/pii/S0964569118304484#sec7

# From the CPI calculator. CPI factors from the base year to 2024.
cpi_factors = {
    "1983": 3.15354806,
    "2015": 1.31967378,
    "2014": 1.31849467,
    "2018": 1.24428423,
    "2019": 1.22527730
}

# Avoided decomissioning costs

# Several estimates of per-platform costs
decommissioning_costs = {
    "larson1987low":25 * 10**9 / 6000 * cpi_factors["1983"], # Worldwide
    "larson1987high":50 * 10**9 / 6000 * cpi_factors["1983"],
    "gao": 39 * 10**9 / 3000 * cpi_factors["2015"], # Gulf of Mexico OCS
    "bsee": 1.5 * 10**9 / 23 * cpi_factors["2014"], # California
    "byrd": 8 * 10**9 / 23 * cpi_factors["2018"] # Federal waters off California
}

# Selecting the high Larson cost, because it is the median of the five figures cited, and also it has worldwide scope.
# It suffers a major deficiency in that it is old.

cost = floating_rigs * decommissioning_costs["larson1987high"] * discount.discount_rate()
print("Avoided decommissioning costs: ",cost/10**6, "million.")






# Refurbishment costs

euro_to_usd_exchange = 1.1 # Approximate value for 2019
# Refurbishment cost
capital_cost = 16*10**6 * euro_to_usd_exchange * cpi_factors["2019"] # Euros
om_cost = 2.4 * 10**6 * euro_to_usd_exchange * cpi_factors["2019"]
revenue_stream = discount.RevenueStream([capital_cost],end_value = om_cost)
annualized_refurbishment_cost = revenue_stream.annualize()
total_refurbishment_cost = annualized_refurbishment_cost * floating_rigs
print("Cost based on refurbishments: ",total_refurbishment_cost / 10**6," million.",sep="")