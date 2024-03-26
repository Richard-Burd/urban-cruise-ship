# Created March 26, 2024. Last substantive update: March 26, 2024.
'''
Space Solar R&D
These calculations do not apply to a specific solution.
As of March 26, 2024, the numbers are OK but not great. The long R&D time and high cost are major issues.
This decision may be revisited in the future. We may also have use for these calculations even if there is no specific solution.

To-do
- Collect estimates of potential cost, as they are all over the map. Recent developments in reusable rocketry might change the numbers.
'''
import research_elec

params = {
    "base_price":0.07,
    "ghg":36,
    "other_price":0.0081,
	"share":1.,
	"rd_time":40,
	"rd_cost":65 # Same as fusion
}

print("\nSpace Solar")
research_elec.cost_benefit(params)

'''
Output as of March 26, 2024

Space Solar
R&D Cost: 1.5358397438560798 billion/yr
Benefit:  3.849049835521297 billion/yr
Base:     0.7065438902706014 billion/yr
GHG:      5.306884059954557 million tons/yr
Other:    1.5290911936897988 billion/yr
'''