# Reduction of road noise with quieter pavement.

print("\n=========================================\nReforestation solution\n=========================================")
print("Documentation Created: June 9, 2024")
print("Last Substantial Update: June 9, 2024")

# https://www.science.org/doi/10.1126/science.aay7976 adjusted ha based upon corrections which removed certain biomes from calculations for restoration. Where there is a 0, the ha of the area has also been removed from the total. value is in ha
restoration_area = 304000000
carbon_gain_gt=41.6
carbon_gain_tons=carbon_gain_gt*10**9
carbon_to_co2_multiplier=3.6667
co2_sequestration=carbon_gain_tons*carbon_to_co2_multiplier

# CPI adjustment from January 2017 to January 2024. Source 
# https://data.bls.gov/cgi-bin/cpicalc.pl
cpi_adjustor_2017 = 1.29117
# taken as the average cost between 2000 and 10000 noted here. A per-ton cost was not able to be found. Per ton co2 costs were based on the logic of a carbon tax that would stimulate forest growth, not an actual project cost. [^"12"]: https://sdgs.un.org/partnerships/reforesting-brazils-biomes-facilitating-biodiverse-genomic-flow-between-atlantic 
cost_per_hectare=6000*cpi_adjustor_2017
social_cost_carbon=141.4
discount_factor=(sum([1.06 ** -i for i in range(20)]))
reforestation_costs_20y=cost_per_hectare*restoration_area
avoided_carbon_costs_20y=social_cost_carbon*co2_sequestration
annual_cost=reforestation_costs_20y/discount_factor
annual_benefit=avoided_carbon_costs_20y/discount_factor
annual_co2_reduction=co2_sequestration/20


print("NPV Cost   : $",cost/10**9," billion",sep="")
print("NPV Benefit: $",benefit/10**9," billion",sep="")

# https://swcpa.org/omb-publishes-discount-rate-for-2022/
discount_rate = 0.04 # Caltrans evidently uses a 4% discount rate, which is controversial, but it's what we have.

# A yearly benefit of $1 at a 4% discount rate is valued at $(1+0.96+0.96**2 + ...), which, by a dark art known as math, is 1/0.04 = 25.
# Thus a simple way to convert from net present value to yearly value is to multiply by the discount rate.

print("Yearly Cost   : $",annual_cost/10**9," billion",sep="")
print("Yearly Benefit: $",annual_benefit/10**9," billion",sep="")
print("Annual CO2 reduction: $",annual_co2_reduction/10**6," megatons",sep="")
print("Habitat Restored (ha): $",restoration_area," hectares",sep="")


