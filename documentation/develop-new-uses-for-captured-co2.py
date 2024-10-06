'''New uses for captured CO2.

This solution is an umbrella solution, meaning that it summarizes and refers to more detailed solutions elsewhere.

To-do
- Fill in the rest of the chart
'''

co2_carbon_share = 12/(12+16+16)
print("")

# Enhanced Oil Recovery
# From https://www.iea.org/reports/storing-co2-through-enhanced-oil-recovery
total_eor = [60 * 10**9,240 * 10**9] # Billion tons CO2 from 2015-2050
eor_time_frame = 2050-2015
eor_per_year = [total_eor[i]/eor_time_frame for i in range(len(total_eor))]
print("CO2 sequestration potential from EOR: ",round(eor_per_year[0]/10**9,2)," to ",round(eor_per_year[1]/10**9,2)," billion tons per year.",sep="")

# Methane

# https://www.eia.gov/international/data/world/natural-gas/dry-natural-gas-production?pd=3002&p=00g&u=0&f=A&v=mapbubble&a=-&i=none&vo=value&t=C&g=00000000000000000000000000000000000000000000000001&l=249-ruvvvvvfvtvnvv1vrvvvvfvvvvvvfvvvou20evvvvvvvvvvnvvvs0008&s=315532800000&e=1640995200000&
world_natural_gas = 145068 # Billion cubic feet as of 2022.
world_natural_gas_m3 = world_natural_gas / 35.3147 * 10**9
density_ch4 = 0.65 # kg/m^3. https://www.plinovodi.si/en/transmission-system/environment-and-safety/about-natural-gas
world_natural_gas_mass = world_natural_gas_m3 * density_ch4 / 1000 # In tons

methane_carbon_share = 12/(12+4)
world_natural_gas_mass_co2 = world_natural_gas_mass * methane_carbon_share / co2_carbon_share

print("\nWorld natural gas: ",world_natural_gas_mass_co2 / 10**9," billion tons",sep="")

# Methanol

meoh_demand = 126 * 10**6 # Tons. https://www.nexanteca.com/blog/202406/global-methanol-market-snapshot
meoh_share_carbon = 12/(12+4+16)
meoh_demand_co2 = meoh_demand * meoh_share_carbon / co2_carbon_share

print("\nWorld methanol: ",meoh_demand_co2/10**6," million tons",sep="")

# Olefins

# https://www.sciencedirect.com/science/article/pii/S2095809917302965
olefin_demand_ethylene = 150 * 10**6
olefin_demand_propylene = 70 * 10**6
olefin_demand = olefin_demand_ethylene + olefin_demand_propylene

olefin_co2_factor = 4.88 # https://www.sciencedirect.com/science/article/pii/S0959652624025927
olefin_co2 = olefin_co2_factor * olefin_demand
print("\nOlefins: ",olefin_co2/10**6," million tons",sep="")

olefin_price_co2 = 3.67 # Pounds per kg https://www.sciencedirect.com/science/article/pii/S0959652624025927
olefin_price_baseline = [1.05, 1.4]
olefin_price_ratio = [olefin_price_co2 / olefin_price_baseline[1], olefin_price_co2 / olefin_price_baseline[0]]
print("Olefin price ratio: ",olefin_price_ratio,".",sep="")

# Jet fuel

jet_fuel_demand = 1.61 # Million barrels per day. https://www.opisnet.com/blog/jet-fuel-demand-continues-to-recover/
jet_fuel_demand_tons = 205000 * 365.2425 # https://aviationbenefits.org/environmental-efficiency/climate-action/sustainable-aviation-fuel/conversions-for-saf/
jet_fuel_carbon_ratio = (12*12)/(12*12 + 26) # Taking kerosene to be C12H26. It doesn't have a single fixed formula.
jet_fuel_co2 = jet_fuel_demand_tons * jet_fuel_carbon_ratio / co2_carbon_share
print("\nJet fuel: ",jet_fuel_co2/10**6," million tons.",sep="")

# Algae

algae_demand = 35.82 *10**6 # Tons, as of 2019. https://openknowledge.fao.org/server/api/core/bitstreams/97409d09-2f8e-4712-b11e-60105d89959b/content
algae_co2_ratio = 2 # Two tons of CO2 for each ton of algae. https://www.sciencedirect.com/science/article/abs/pii/S0048969724004601
algae_co2 = algae_demand * algae_co2_ratio
print("\nAlgae: ",algae_co2/10**6," million tons",sep="")

# Carbon nanotubes

cnt_demand = 7000 # https://www.researchgate.net/publication/349228304_Global_scale_life_cycle_environmental_impacts_of_single-_and_multi-walled_carbon_nanotube_synthesis_processes
cnt_co2 = cnt_demand / co2_carbon_share
print("\nCarbon Nanotubes: ",cnt_co2," tons",sep="")

# Cement

# https://www.nature.com/articles/s41467-021-21148-w
print("\nCement CO2: 100M-1.4B tons")

# Urea

#https://www.iea.org/reports/putting-co2-to-use
print("\nUrea: 130 million tons")