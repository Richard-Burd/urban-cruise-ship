# Phase out remain asbestos usage. Documentation created July 22, 2024. Last substantive update on July 25, 2024.

################################################# Health Benefit ###################################

import daly

# See the 2022 XLS yearbook. https://www.usgs.gov/centers/national-minerals-information-center/asbestos-statistics-and-information
world_production_2022 = 1330000
world_production_1984 = 4311842 # https://pubs.usgs.gov/circ/2006/1298/c1298.pdf
world_production_1979 = 4758022

# Latency period of 20-60 years for mesotheliomia. https://www.mayoclinic.org/diseases-conditions/mesothelioma/symptoms-causes/syc-20375022
# That is why we invoke the 1984 numbers.

asbestos_daly_cost = 4189000 # https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10946175/

valuation = asbestos_daly_cost * daly.daly_value / world_production_1979 * world_production_2022
# This is all past and present asbestos exposure and today's damage.
print("Asbestos exposure damage in terms of DALYs: $",valuation/10**9," billion.",sep="")

################################################# Cost of phaseout ###################################

import discount

# Phaseout in Poland: https://chrysotileassociation.com/data/cost_estimation_poland.pdf
# See the total on the last page of the document.
cost_poland = 45506200000 # In złoty
conversion_factor = 0.32 # Approximate zł to USD conversion in 2014.
cpi_adjustment = 1.31849467 # 2014 to 2024
cost_poland_2024usd = cost_poland * conversion_factor * cpi_adjustment

poland_tons = 30000 # Tons of asbestos consumption as of 1991. http://www.ibasecretariat.org/eas_mf_poland.php

# The cost per ton is multiplied by the discount rate because previous figures are in capacity, not annual tonnage.
cost_per_ton = cost_poland_2024usd/poland_tons * discount.discount_rate()
print(cost_per_ton)

total_cost = world_production_2022 * cost_per_ton
print("Cost of replacement and remediation: $",total_cost / 10**9," billion.",sep="")