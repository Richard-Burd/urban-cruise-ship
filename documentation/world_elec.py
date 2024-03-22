# Module created March 21, 2024. Last major update: March 21, 2024.

# Vital stats on world electricity. Use this module if it contains the needed information.
# This module is created by updating old code, and it needs to be updated.

# Share of world electricity by major source. From 2018, guessing from the URL.
# See https://www.iea.org/data-and-statistics/charts/world-gross-electricity-production-by-source-2018
shares2020 = {
	"Geothermal":0.005,
	"Wind":0.048,
	"Hydro":0.162,
	"Natural Gas":0.23,
	"Nuclear":0.101,
	"Solar":0.021,
	"Biofuel":0.024,
	"Coal":0.38,
	"Oil":0.029
}

# Total electricity by year
# From BP, and for 2019 because 2020 was an usual year.
electricity2020 = 27004.7

# Projection for 2050. Is this right? It needs to be updated anyway.
# https://www.eia.gov/outlooks/ieo/pdf/ieo2020.pdf
electricity2050 = 27004.7 * 42./26.

# Get the forecast for a given year.
# This function is meant to be a placeholder for now and needs to be updated with real data.
def forecast(year):
    if year < 2020:
        return electricity2020
    if year < 2050:
        return electricity2020 + (electricity2050-electricity2020)*(year-2020)/30
    return electricity2050