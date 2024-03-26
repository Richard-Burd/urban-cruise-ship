# Created March 26, 2024. Last substantive update: March 26, 2024.
# Wave Energy

'''
To-do
- These numbers are severely out of date.
'''
import research_elec

params = {
    "base_price":0.06,
    "ghg":20,
    "other_price":0.002,
	"share":0.2, # Coastal is 0.4, assuming half is suitable for wave.
	"rd_time":10,
	"rd_cost":8.3
}

print("\nWave Energy")
research_elec.cost_benefit(params)

