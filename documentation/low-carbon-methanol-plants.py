'''Methanol with CCS
Documentation created on September 8, 2024. Last substantive update on September 8, 2024.
'''

import social_cost

# From the following:
# https://deepblue.lib.umich.edu/bitstream/handle/2027.42/174094/Implementing%20CO2%20capture%20and%20utilization%20at%20scale%20and%20speed%282022%29.pdf?sequence=5&isAllowed=y
# Discounting avoided to prevent low-balling of costs.

time = 2050-2022

# From https://www.nationalacademies.org/our-work/carbon-utilization-infrastructure-markets-research-and-development
co2_parameters = {
    "pipeline_cost":15, # $5-25 per ton
    "capture_cost":55, # $55/ton based on upper end for ethanol plants. Lots of variation by industry.
    "valuation":social_cost.get_scc(2024)
}

# There are scenarios for a baseline, optimstic, and best case
baseline_parameters = {
    "investment_cost":38 * 10**9,
    "co2_utilized":0.9 * 10**9
}
params = baseline_parameters

print("Cost: $",( params["investment_cost"] + params["co2_utilized"]*(co2_parameters["pipeline_cost"]+co2_parameters["capture_cost"]) )/time/10**6," million",sep="")
print("CO2 reduction: ",params["co2_utilized"]/time/10**6," million tons",sep="")
print("Benefit: $",params["co2_utilized"]*co2_parameters["valuation"]/time/10**6," million",sep="")