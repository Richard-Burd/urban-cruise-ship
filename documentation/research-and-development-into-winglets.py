# Winglets

print("Winglets")

# Most figures for calculations derive from this paper: https://soar.wichita.edu/items/eb91c2cb-51e8-45c6-a458-41991c12047e

baseline_turbine = {
    "capacity":5, # MW
    "production":21777132, # kWh
    "lcoe":0.0335 # Cents / kWh
}

winglet_value = 40046 # Number of dollars that the winglets are worth. All three designs are valued at the same. Valuation at $0.1083/kWh.
winglet_cost = 15469 # This is design C
winglet_production = 0.0169 # Increase in production of 1.69%

wind_generation = 2104.8 # TWh. From the EI Statistical Review of World Energy.

multiplier = wind_generation / baseline_turbine["production"] * 10**9
benefit = winglet_value * multiplier
cost = winglet_cost * multiplier

print("Benefit: $",benefit/10**9,"billion")
print("Cost: $",cost/10**9,"billion")

# Price elasticity of renewables: https://repository.gatech.edu/server/api/core/bitstreams/8c243b16-d083-4184-99b7-ef7ae45ba8cd/content
price_elasticity = 2.7
embodied_emissions = (7+56)/2 # See environmental impacts of energy page
world_electricity_ghg = 14.65 # Billions of tons CO2, https://www.iea.org/reports/co2-emissions-in-2022
world_elec = 29165.1 # TWh

print("GHG Saved:",embodied_emissions*wind_generation*10**3 * winglet_production/10**6,"million tons")