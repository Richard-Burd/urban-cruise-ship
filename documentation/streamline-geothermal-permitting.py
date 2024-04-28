# File created April 16, 2024. Last substantive updated April 19, 2024.

'''
To do
- Monetary costs and benefits are based strictly on the new geothermal, while GHG reduction considers what it might displace. Is there a way to build a harmonized model for all of these things?
- GHG reduction assumes constant GHG intensity of electricity indefinitely, when in reality it will probably decline.
- GHG reduction assumes a one-for-one replacement of EGS with other sources, which is probably not accurate.
'''

# Geothermal

import social_cost
import discount

######################################### Annual production time series ################################

# https://www.energy.gov/eere/geothermal/permitting-geothermal-power-development-projects
# In MW. This is based on the first plot. It looks like about 12,500 MW of capacity in 2050 from the chart. The text says that is a 113% improvement,
# so the overall gain would have been this.
eventual_capacity = 12500 * (113/213)
time_to_capacity = 32 # 32 years, roughly what it looks like from the plot.

# Capacity in MW
capacity_time_series = [eventual_capacity / time_to_capacity * i for i in range(33)]
# Capacity factor: 90%+. https://www.energy.gov/eere/geothermal/geothermal-faqs
capacity_factor = 0.9
# Production by year in kWh
production_time_series = [capacity_time_series[i]*capacity_factor * 8766 * 1000 for i in range(len(capacity_time_series))]

######################################### Cost and benefit #################################

# Value per kWh is based on EGS electricity on the geothermal main page.
value_per_kwh = 19.44 / 1000 * 3.6
cost_per_kwh = 0.0093 # https://www.sciencedirect.com/science/article/pii/S2214629620304606
ghg_per_kwh = 32 # Grams CO2 per kWh, https://www.nrel.gov/docs/fy17osti/68474.pdf
ghg_cost_per_kwh = ghg_per_kwh * social_cost.get_scc()*10**(-6)
# Greenhouse gas intensity of electricity in the US in 2022. https://www.eia.gov/environment/emissions/carbon/
ghg_per_kwh_2022 = 376

benefit_time_series = [value_per_kwh * production_time_series[i] for i in range(len(production_time_series))]
cost_time_series = [(cost_per_kwh+ghg_cost_per_kwh) * production_time_series[i] for i in range(len(production_time_series))]
print((cost_per_kwh+ghg_cost_per_kwh))
ghg_time_series = [(ghg_per_kwh_2022-ghg_per_kwh) / 10**6 * production_time_series[i] for i in range(len(production_time_series))]

######################################### Convert to single annual values ######################

benefit = discount.RevenueStream(benefit_time_series, end_value = benefit_time_series[-1]).value()
cost = discount.RevenueStream(cost_time_series, end_value = cost_time_series[-1]).value()
ghg = discount.RevenueStream(ghg_time_series, end_value = ghg_time_series[-1]).value()

print("Benefit: $",benefit/10**9,"billion")
print("Cost: $",cost/10**9,"billion")
print("GHG:",ghg/10**6,"million tons")

#Benefit: $ 19.587103079650223 billion
#Cost: $ 3.492618142791577 billion
#GHG: 96.27862739197069 million tons