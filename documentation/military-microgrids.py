print("\n=========================================\nMicrogrids\n=========================================")
print("Documentation Created: June 9, 2024")
print("Last Substantial Update: June 9, 2024")

years=25
discount=0.08
bases=200
pv_array=15000
batteries=1672500
waste_heat_recovery=50000
solar_hot_water=49530
steel_tank=21600
microgrid_cost=pv_array+batteries+waste_heat_recovery+solar_hot_water+steel_tank
baseline_fuel_costs=6071055
microgrid_fuel_costs=4117074
fuel_savings=baseline_fuel_costs-microgrid_fuel_costs
#emmissions are in ton values
baseline_emmissions_Brandon=919.500
baseline_emmissions_Vancouver=788.879
baseline_emmissions_Kanoya=831.462
baseline_emmissions_Churchill=1036.790
baseline_emmissions_Changi=938.783
average_baseline_emissions=(baseline_emmissions_Brandon+baseline_emmissions_Changi+baseline_emmissions_Churchill+baseline_emmissions_Kanoya+baseline_emmissions_Vancouver)/5
microgrid_emmissions_Brandon=583.270
microgrid_emmissions_Vancouver=517.335
microgrid_emmissions_Kanoya=606.460
microgrid_emmissions_Churchill=636.805
microgrid_emmissions_Changi=743.139
average_microgrid_emissions=(microgrid_emmissions_Brandon+microgrid_emmissions_Changi+microgrid_emmissions_Churchill+microgrid_emmissions_Kanoya+microgrid_emmissions_Vancouver)/5
emission_reductions=average_baseline_emissions-average_microgrid_emissions
social_cost_carbon=141.4
discount_factor=(sum([1.08 ** -i for i in range(25)]))

annual_cost=microgrid_cost/discount_factor
annual_fuel_savings=fuel_savings/discount_factor
annual_scc=social_cost_carbon*emission_reductions
number_of_bases=200

print("Yearly Cost  200 bases : $",(annual_cost/10**6)*number_of_bases," million",sep="")
print("Yearly Fuel Savings  200 bases : $",(annual_fuel_savings/10**6)*number_of_bases," million",sep="")
print("Yearly SCC  200 bases : $",((annual_scc)*number_of_bases)/10**6," million",sep="")
print("Yearly emission reductions million tons  200 bases : ",(emission_reductions/10**6)*number_of_bases," million tons",sep="")
print("yearly emission reductions : ",(emission_reductions)*number_of_bases," tons",sep="")
print("BENEFIT : $",(((annual_fuel_savings/10**6)*number_of_bases)+(annual_scc*number_of_bases)/10**6)," million",sep="")
print("COST : $",(annual_cost/10**6)*number_of_bases," million",sep="")