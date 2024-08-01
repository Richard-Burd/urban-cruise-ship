'''
Module created July 30, 2024. Last substantive update on July 30, 2024.
Documentation for the radon solution.
'''

import daly

# Cost is in Euros, needs to be coverted. Also for Germany.
# Models mandatory screen and mitigation for radon levels > 100 Bq/m^3.
eur_to_usd_2010 = 1.33 # https://www.macrotrends.net/2548/euro-dollar-exchange-rate-historical-chart
cpi_2010_2024 = 1.42332950
cost_per_daly = 25181 * eur_to_usd_2010 * cpi_2010_2024 # https://www.sciencedirect.com/science/article/abs/pii/S0301479710001738

benefit_per_daly = daly.daly_value

# Per year. That's the goal, not an estimate.
lives_saved = 3500 # https://www.lung.org/getmedia/8be1e569-b2d4-4841-8a70-158e68069041/nrap-2021-2025-action-plan-508.pdf
# How many DALYs are cost by radon exposure, divided by the number of deaths.
daly_to_death_ratio = 22.7 # https://www.healthdata.org/sites/default/files/disease_and_injury/gbd_2019/topic_pdf/risk/90.pdf

overall_cost    = lives_saved * daly_to_death_ratio * cost_per_daly
overall_benefit = lives_saved * daly_to_death_ratio * benefit_per_daly

print("Cost: $",overall_cost/10**9," billion.",sep="")
print("Benefit: $",overall_benefit/10**9, " billion",sep="")