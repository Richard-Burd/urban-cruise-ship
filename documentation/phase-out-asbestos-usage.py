# Phase out remain asbestos usage. Documentation created July 22, 2024. Last substantive update on July 22, 2024.

import daly

asbestos_daly_cost = 4189000 # https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10946175/

valuation = asbestos_daly_cost * daly.daly_value
# This is all past and present asbestos exposure and today's damage.
print("Asbestos exposure damage in terms of DALYs: $",valuation/10**9," billion.",sep="")