# Reduction of road noise with quieter pavement.

print("\n=========================================\nCardiovascular solution\n=========================================")
print("Documentation Created: June 16, 2024")
print("Last Substantial Update: June 16, 2024")


discount_factor=(sum([1.03 ** -i for i in range(5)]))
# https://www.semanticscholar.org/reader/4a8ffddd74ac6c87381efc1e53a0c8a011782497# used in the study, cites that 3% is used for health

target_poplulation=93947000
genetic_test_cost=145
genetic_consultation_cost=114
percentage_of_population=0.5
willingness_to_pay=50000
qaly=0.001
#these values are added back in as they are accounted for in the study cited https://www.semanticscholar.org/reader/4a8ffddd74ac6c87381efc1e53a0c8a011782497#
reduced_costs=53+genetic_consultation_cost+genetic_test_cost
time_horizon_years=5

cost=(genetic_test_cost+genetic_consultation_cost)*(target_poplulation*percentage_of_population)
annual_cost=cost/discount_factor

reduced_cost_benefit=(reduced_costs*(target_poplulation*percentage_of_population))/discount_factor
qaly_gained=qaly*(target_poplulation*percentage_of_population)
qaly_benefit=(qaly_gained*willingness_to_pay)/discount_factor
qaly_benefit=qaly_benefit/discount_factor

annual_benefit=reduced_cost_benefit+qaly_benefit

print("Yearly Cost   : $",annual_cost/10**9," billion",sep="")
print("Yearly Benefit: $",annual_benefit/10**9," billion",sep="")

print("qaly gained   : ",qaly_gained," years",sep="")
print("qaly benefit: $",qaly_benefit/10**9," billion",sep="")
print("avoided healthcare costs Benefit: $",reduced_cost_benefit/10**9," billion",sep="")
# print("Annual CO2 reduction: ",annual_co2_reduction/10**6," megatons",sep="")
# print("Habitat Restored (ha): ",restoration_area," hectares",sep="")


