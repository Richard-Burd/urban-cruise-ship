# Created March 26, 2024. Last substantive update: March 26, 2024.
'''
Hydrothermal Sea Vents R&D
These calculations do not apply to a specific solution.
As of March 26, 2024, the numbers are poor. The low applicability and high expected LCOE are problems.
This decision may be revisited in the future. We may also have use for these calculations even if there is no specific solution.

To-do

'''
import research_elec

params = {
    "base_price":(7.7+11.1)/200,
    "ghg":42.5,
    "other_price":0.005,
	"share":0.2, # 0.4 for coast times 0.5 for share accessible by sea vents
	"rd_time":25,
	"rd_cost":8.3*25/10 # Same annual cost as wave energy
}

print("\nHydrothermal Sea Vents")
research_elec.cost_benefit(params)

'''
Output as of March 26, 2024

Hydrothermal Sea Vents
R&D Cost: 0.6947454741626524 billion/yr
Benefit:  0.2865133730835246 billion/yr
Base:     0.12498201530703108 billion/yr
GHG:      0.2510381553680761 million tons/yr
Other:    0.09768559614682412 billion/yr
'''