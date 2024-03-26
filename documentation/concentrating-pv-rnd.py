# Created March 26, 2024. Last substantive update: March 26, 2024.
# Concentrating PV

'''
To-do
- The greenhouse gas intensity looks too high. Look for a better reference.
'''
import research_elec

params = {
    "base_price":0.07,
    "ghg":99,
    "other_price":0.0081,
	"share":0.5, # Wild guess, based on the fact that CPV is a bit fussy about location
	"rd_time":5,
	"rd_cost":8.3 * 5 / 10 # Same annual cost as wave energy
}

print("\nConcenrated Solar")
research_elec.cost_benefit(params)

