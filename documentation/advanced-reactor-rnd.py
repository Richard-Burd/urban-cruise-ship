# Created March 21, 2024. Last substantive update: March 21, 2024.
# Advanced reactors

'''
To-do
- Review the R&D time in particular. 25 years seem longer than necessary.
'''
import research_elec

params = {
    "base_price":0.06,
	"final_price":0.06+0.00285+0.0031, # 6 cents per kWh forecast,
    "ghg_price":0.00285,
    "other_price":0.0031,
	"share":1.,
	"rd_time":25,
	"rd_cost":11.5, # $11.5 billion of R&D money and 25 years.
}

print("\nAdvanced Reactor")
research_elec.cost_benefit(params)

