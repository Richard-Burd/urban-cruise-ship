# Created March 25, 2024. Last substantive update: March 27, 2024.
# Concentrated Solar

'''
To-do
- Revisit the LCOE estimate. This seems maybe a bit low.
- Revisit the potential share for CSP. 60% seems high.
- Look for estimtes of an R&D program that are specific to CSP.
- Consider reducing the time, since CSP is already a commercial technology.
'''
import research_elec

params = {
        "base_price":0.05,
        "ghg":36,
        "other_price":0.0081,
		"share":0.6, # Hard to say how much of the world is suitable for CSP. This seems optimistic
		"rd_time":10, # Changed from 5 to 10 years from this source: https://www.energy.gov/eere/solar/concentrating-solar-thermal-power
		"rd_cost":8.3 # Same cost per year as wave energy
	}

print("\nConcenrated Solar")
research_elec.cost_benefit(params)

#############################################################################

'''
Carbon intensity from the Ivanpah CSP plant. This is just from the natural gas burning, and does not include other factors such as embedded emissions in materials.
Figures are for 2014.
Despite the sources cited, all numbers are really taken from here: https://en.wikipedia.org/wiki/Ivanpah_Solar_Power_Facility
'''
ivanpah_co2 = 46084 # Tons CO2 emitted from natural gas in 2014.
ivanpah_production = 419085 # MWh production in 2014.
print("Ivanpah emissions intensity from gas combustion:",ivanpah_co2/ivanpah_production*1000,"grams/kWh")
# Output is 109.96337258551368. I'm calling it 110 g/kWh on the site.