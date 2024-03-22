# Created March 21, 2024. Last substantive update: March 21, 2024.
# Advanced reactors

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

# Output: 
# Advanced Reactor
# R&D Cost: 0.3850396603793013 billion/yr
# Benefit:  3.9349830198476057 billion/yr
# Base:     1.078685700621365 billion/yr
# GHG:      26.495035663087144 milion tons/yr
# Other:    1.5315455360718844 billion/yr