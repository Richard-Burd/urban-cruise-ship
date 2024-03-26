# Created March 21, 2024. Last substantial update: March 21, 2024.

'''
Information on LCOE of various energy generation technologies.
This module supersedes data_lcoe.py.

To-do
- Redo the LCOE analysis from a few years ago, as the numbers are getting oudated. The LCOE numbers here in particular are not good.
- Different sources for the carbon intensity.
- The visual disamenity cost for wind seems too high.
- The nuclear meltdown cost seems too high.
- Consider whether and how to account for grid integration.
'''

import social_cost
scc = social_cost.get_sc("co2")["value"]

# As of March 21, 2024: these figures are outdated and based on a single source for the United States. A major update, with the incorporation of more sources, is desired.
lcoe = {
    "direct":{ # Financial costs, in dollars per kilowatt-hour
        # See Table 1B, https://www.eia.gov/outlooks/aeo/pdf/electricity_generation.pdf
		"Geothermal":0.03747,
		"Wind":0.03995,
		"Hydro":0.05279,
		"Natural Gas":0.03807,
		"Nuclear":0.08165,
		"Solar":0.03574,
		"Biofuel":0.09483,
		"Coal":0.07644,
		"Oil":0.17 # See LCOE chart on the website
    },
    "ghg":{ # In grams/kWh. See https://ourworldindata.org/cheap-renewables-growth (which pulls from IPCC I think).
		"Geothermal":4, # Assumed to be the same as wind
		"Wind":4,
		"Hydro":34,
		"Natural Gas":490,
		"Nuclear":3,
		"Solar":5,
		"Biofuel":(78+230)/2,
		"Coal":820,
		"Oil":720
    },
    "externalities":{ # Other externalities besides greenhouse gases. See individual pages on website.
		"Geothermal":0.005,
		"Wind":0.0077, # Includes visual disamenity
		"Hydro":0.0069,
		"Natural Gas":0.0055,
		"Nuclear":0.0085, # Includes meltdown
		"Solar":0.0081,
		"Biofuel":0.0273,
		"Coal":0.0436,
		"Oil":0.0436
    }
}

# Monetize greenhouse gas costs based on the social cost of carbon.
lcoe["ghg_cost"] = {k: lcoe["ghg"][k] * scc / 10**6 for k in lcoe["ghg"]}
# Add the three costs to get a full electricity cost.
# It's not really a full cost because it doesn't take into account grid integration, which is a very context-dependent cost.
lcoe["electricity_cost"] = {k: lcoe["direct"][k]+lcoe["ghg_cost"][k]+lcoe["externalities"][k] for k in lcoe["direct"]}

############## Greenhouse gas from electricity projection
# This is the ratio of greenhouse gas emissions in the project year to the current year.
# Based on this: https://eneroutlook.enerdata.net/forecast-world-co2-intensity-of-electricity-generation.html
# They model an 85% reduction of GHG intensity from 2021 to 2050. For these calculations, I linearly interpolate and assume constant GHG intensity after 2050.
# Obviously, we want something better eventually.
def projected_ghg(year, current_year):
    def ratio2021(y):
        if y < 2021:
            return 1
        if y > 2050:
            return 0.15
        return 0.15 + 0.85*(2050-y)/29.
    return ratio2021(year) / ratio2021(current_year)