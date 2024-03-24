# Module created March 21, 2024. Last major update: March 23, 2024.

# Vital stats on world electricity. Use this module if it contains the needed information.
# This module is created by updating old code, and it needs to be updated.

electricity_by_year = {
    # EI, 2023
    2022: 29165.1, # EI, 2023
    # Enerdata: https://eneroutlook.enerdata.net/total-electricity-generation-projections.html
    2050: 37077+8603+8264+6300+4012+3699+2296
    # Another forecast for 2050: The EIA's International Energy Outlook forecasts 42297.8 TWh
}

# Get the forecast for a given year.
# This function is meant to be a placeholder for now and needs to be updated with real data.
def forecast(year):
    if year < 2022:
        return electricity_by_year[2022]
    if year < 2050:
        return electricity_by_year[2022] + (electricity_by_year[2050]-electricity_by_year[2022])*(year-2022)/28
    return electricity_by_year[2050]
    
def growth_percentage(year, current_year):
    return forecast(year) / forecast(current_year)
    
###############################################

# Updated numbers from the EI Statistical Review of World Energy. For 2022, from the 2023 report. The following is in TWh
ei_elec = {
    "Oil":728.6,
    "Natural Gas":6631.4,
    "Coal":10317.2,
    "Nuclear":2679.0,
    "Hydro":4334.2,
    "Solar":1322.6,
    "Wind":2104.8,
    "Geothermal":95.251, # 2021, from https://www.irena.org/Energy-Transition/Technology/Geothermal-energy
    "Biofuel":700, # https://www.iea.org/energy-system/renewables/bioenergy . Says "about 700 TWh in 2022".
    "Other Renewables":776.9,
    "Other":270.5 # Based on gross output. Includes uncategorized generation, statistical differences and sources not specified elsewhere e.g. pumped hydro, non renewable waste and heat from chemical sources.
}
# Some adjustments to the above to make calculations work
ei_elec["Other"] = ei_elec["Other"] + ei_elec["Other Renewables"] - ei_elec["Geothermal"] - ei_elec["Biofuel"]
del ei_elec["Other Renewables"]
del ei_elec["Other"]
total_elec = 29165.1 # In 2022
for k in ei_elec:
    ei_elec[k] /= total_elec