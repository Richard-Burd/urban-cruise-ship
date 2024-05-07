# Oil Spill Liability Trust Fund

'''
Documentation created May 6, 2024. Last substantive update: May 6, 2024.
'''

# https://media.rff.org/archive/files/sharepoint/WorkImages/Download/RFF-BCK-Cohen-DHCosts_update.pdf
# CPI-adjusted from 2010 to 2024.
cost_per_gallon = (16+2) * 1.42332950

# From 1980-2000, 304 million gallons of oil spilled in areas under EPA jurisdiction.
# https://archive.epa.gov/emergencies/content/fss/web/pdf/etkin_04.pdf
annual_spills = 304/20 * 10**6
annual_cost = annual_spills * cost_per_gallon

# https://www.eia.gov/tools/faqs/faq.php?id=33&t=6
annual_consumption = 7.3 * 10**9

print("Recommended price:",annual_cost/annual_consumption,"dollars per barrel")