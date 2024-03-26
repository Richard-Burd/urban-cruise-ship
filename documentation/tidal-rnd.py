# Created March 26, 2024. Last substantive update: March 26, 2024.
'''
Tidal Power R&D
These calculations do not apply to a specific solution.
As of March 26, 2024, the numbers are very poor due to low applicability and high expected LCOE.
This decision may be revisited in the future. We may also have use for these calculations even if there is no specific solution.

To-do
- R&D cost and benefit model that is more specific to island grids.
'''
import research_elec

params = {
    "base_price":0.10556,
    "ghg":20,
    "other_price":0.002,
	"share":0.04, # Based on 1200 TWh potential. See https://energypost.eu/unlocking-the-potential-of-ocean-energy-from-megawatts-to-gigawatts/
	"rd_time":10,
	"rd_cost":8.3 # Same annual cost as wave energy
}

print("\nTidal")
research_elec.cost_benefit(params)

'''
Output as of March 26, 2024

Tidal
R&D Cost: 0.42829468504118656 billion/yr
Benefit:  0.13027964696261848 billion/yr
Base:     0.059523684417690986 billion/yr
GHG:      0.43880451779899693 million tons/yr
Other:    0.03842621464580919 billion/yr
'''