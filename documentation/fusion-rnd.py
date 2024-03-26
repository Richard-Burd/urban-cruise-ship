# Created March 26, 2024. Last substantive update: March 26, 2024.
'''
Fusion R&D
These calculations do not apply to a specific solution.
As of March 26, 2024, the numbers are very poor due. The high cost, long research times, and high expected LCOE are major problems.
This decision may be revisited in the future. We may also have use for these calculations even if there is no specific solution.

To-do
- If we seriously analyze the outlook for fusion investment, we have to consider alternate route to ITER.
'''
import research_elec

params = {
    "base_price":0.13,
    "ghg":57,
    "other_price":0.0031,
	"share":1.,
	"rd_time":40,
	"rd_cost":65 # https://physicstoday.scitation.org/do/10.1063/PT.6.2.20180416a/full/#:~:text=The%20US%20Department%20of%20Energy,its%20figure%20of%20%2422%20billion.
}

print("\nFusion")
research_elec.cost_benefit(params)

'''
Output as of March 26, 2024

Fusion
R&D Cost: 1.5358397438560798 billion/yr
Benefit:  0.31137559285370714 billion/yr
Base:     0.10959105775757401 billion/yr
GHG:      0.2987392156197837 million tons/yr
Other:    0.11096094597954367 billion/yr
'''