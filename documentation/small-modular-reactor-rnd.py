# Created March 25, 2024. Last substantive update: March 25, 2024.
# Small Modular Reactors

'''
To-do
- The 57 g/kWh emissions factor seems high.
- The R&D cost is adapted from an advanced reactor analysis. See if there is one more direct for SMR.
'''
import research_elec

params = {
    "base_price":0.09,
    "ghg":57,
    "other_price":0.0031,
	"share":1.,
	"rd_time":10,
	"rd_cost":11.5*10/25 # Haven't found figures for the cost, so assuming the same per-year as advanced reactors
}

print("\nSmall Modular Reactor")
research_elec.cost_benefit(params)

