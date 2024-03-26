# Created March 26, 2024. Last substantive update: March 26, 2024.
# Advanced Solar Cells

'''
To-do
- Revisit the greenhouse gas intensity. It seems way too high, and I don't know where it comes from.
- R&D parameters for specific for advanced solar cells.
'''
import research_elec

params = {
    "base_price":0.04,
    "ghg":99,
    "other_price":0.0081,
	"share":1., # Price may vary by location
	"rd_time":10,
	"rd_cost":8.3 # Same annual cost as wave energy
}

print("\nAdvanced Solar Cells")
research_elec.cost_benefit(params)

