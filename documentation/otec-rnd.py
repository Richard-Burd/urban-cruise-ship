# Created March 26, 2024. Last substantive update: March 26, 2024.
'''
OTEC R&D
These calculations do not apply to a specific solution.
As of March 26, 2024, the numbers are very poor due to several problems.
This decision may be revisited in the future. We may also have use for these calculations even if there is no specific solution.

To-do
- Find a way to account for coproducts. This probably won't be enough to make the numbers favorable, but it might at least get us close.
'''
import research_elec

params = {
    "base_price":0.13,
    "ghg":20,
    "other_price":0.002,
	"share":0.2, # Guessing 50% of coast is suitable for OTEC
	"rd_time":25,
	"rd_cost":8.3*25/10 # Same annual cost as wave energy
}

print("\nOTEC")
research_elec.cost_benefit(params)

'''
Output as of March 26, 2024

OTEC
R&D Cost: 0.6947454741626524 billion/yr
Benefit:  0.18975771634012484 billion/yr
Base:     0.06509698673760718 billion/yr
GHG:      0.2239631679819376 million tons/yr
Other:    0.06770086620711144 billion/yr
'''