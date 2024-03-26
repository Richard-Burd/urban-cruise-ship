# Created March 26, 2024. Last substantive update: March 26, 2024.
# Enhanced Geothermal

'''
To-do
- This could be said for some other R&D solutions, but we are only valuing potential electricity benefits, when direct heat may be a greater benefit.
'''
import research_elec

params = {
    "base_price":0.06, # See http://www2.itif.org/2019-budget-geothermal.pdf
    "ghg":42.5,
    "other_price":0.005, # Geothermal isn't on the plot for external costs so I'm guessing
	"share":0.5, # A wild guess, based on Western US being good territory.
	"rd_time":10,
	"rd_cost":8.3 # Same cost as wave
}

print("\nEnhanced Geothermal")
research_elec.cost_benefit(params)

