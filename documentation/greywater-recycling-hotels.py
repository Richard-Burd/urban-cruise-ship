# Reduction of road noise with quieter pavement.

social_cost_carbon=141.4

print("\n=========================================\nGreywater recycling hotels\n=========================================")
print("Documentation Created: June 23, 2024")
print("Last Substantial Update: June 23, 2024")

#Annual discount rate (%) taken from http://doi.org/10.1088/1755-1315/725/1/012009 original paper
discount_factor=(sum([1.04 ** -i for i in range(20)]))

#tons unit
#combined toilet flushing and cooling tower applications for hotels of 150 rooms.
emission_reduction_20y=1102+661
gw_infrastructure_cost=143300
gw_annual_maintenance=7200
annual_energy_cost=5700
cooling_profit=190000
toilet_profit=65000
# number of hotel openings around the world, we assume half could use these systems effectively and for similar values as seen in the case study. We use the figure in 2022 of new hotels opening.  https://lodgingeconometrics.com/the-global-hotel-construction-pipeline-projects-in-early-planning-stage-rise-year-over-year/
# half of all hotels that opened in 2022
number_hotels=3122/2


annual_cost_per=(gw_infrastructure_cost/discount_factor)+gw_annual_maintenance+annual_energy_cost

annual_cost=annual_cost_per*number_hotels

annual_cooling_profit=(cooling_profit/discount_factor)*number_hotels
annual_toilet_profit=(toilet_profit/discount_factor)*number_hotels

#costs are added back in because the study has already subtracted costs
annual_gross=(annual_toilet_profit+annual_cooling_profit+annual_cost)

#tons unit
annual_emission_reduction=(emission_reduction_20y/20)*number_hotels
annual_avoided_carbon_costs=annual_emission_reduction*social_cost_carbon

annual_benefit=annual_avoided_carbon_costs+annual_gross

print("Yearly emission reduct   : ",annual_emission_reduction," tons",sep="")
print("Yearly Cost   : $",annual_cost/10**9," billion",sep="")

print("Yearly Benefit: $",annual_benefit/10**9," billion",sep="")

#print("qaly gained   : ",qaly_gained," years",sep="")
#print("qaly benefit: $",qaly_benefit/10**9," billion",sep="")
#print("avoided healthcare costs Benefit: $",reduced_cost_benefit/10**9," billion",sep="")
print("Annual CO2 reduction: ",annual_emission_reduction/10**6," megatons",sep="")
print("Avoided Carbon Costs: $",annual_avoided_carbon_costs/10**9," billion",sep="")

# print("Habitat Restored (ha): ",restoration_area," hectares",sep="")



print("Yearly Cost   : $",annual_cost/10**6," million",sep="")
print("Yearly Benefit: $",annual_benefit/10**6," million",sep="")

print("Annual CO2 reduction: ",annual_emission_reduction/10**6," megatons",sep="")
print("Avoided Carbon Costs: $",annual_avoided_carbon_costs/10**6," million",sep="")


print("annual gross: $",annual_gross/10**6," million",sep="")





