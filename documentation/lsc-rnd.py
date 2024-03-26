# Created March 26, 2024. Last substantive update: March 26, 2024.
# Luminescent Solar Concentrators

'''
To-do
- As with the other solar stuff, the GHG intensity looks too high.
'''
import research_elec

params = {
    "base_price":0.0372,
    "ghg":99,
    "other_price":0.0081,
	"share":1., # Price may vary by location
	"rd_time":25,
	"rd_cost":8.3*25/10 # Same annual cost as wave energy
}

print("\nLuminescent Solar Concentrators")
research_elec.cost_benefit(params)

