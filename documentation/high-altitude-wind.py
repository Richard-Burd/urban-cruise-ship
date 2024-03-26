# Created March 26, 2024. Last substantive update: March 26, 2024.
'''
High Altitude Wind R&D
These calculations do not apply to a specific solution.
As of March 26, 2024, the numbers are slightly favorable, but they fall short of many other R&D solutions.
This decision may be revisited in the future. We may also have use for these calculations even if there is no specific solution.

To-do
- Revise the 'share' parameter, taking into account possible need for access to the gulf stream.
'''
import research_elec

params = {
    "base_price":0.09,
    "ghg":31.5,
    "other_price":0.0009,
	"share":1., # Might be lower if access to the gulf stream is needed. There is also ultimate potential
	"rd_time":25,
	"rd_cost":8.3*25/10 # Assuming case cost per year as wave
}

print("\nHigh Altitude Wind")
research_elec.cost_benefit(params)

'''
Output as of March 26, 2024

High Altitude Wind
R&D Cost: 0.6947454741626524 billion/yr
Benefit:  1.5705762074676914 billion/yr
Base:     0.6887294254600426 billion/yr
GHG:      1.2896942433668792 million tons/yr
Other:    0.5538428133821299 billion/yr
'''