'''
Methane capture from waste
Documentation created: May 8, 2024. Last substantial update: May 9, 2024.

To-do:
- Find a more recent data source for methane capture costs.
'''

import social_cost

import pandas as pd

# See "Report Data Annex" in the following:
# https://19january2017snapshot.epa.gov/global-mitigation-non-co2-greenhouse-gases/global-mitigation-non-co2-ghgs-report-download-report_.html
xls = pd.ExcelFile('~/Downloads/MACCs_Final_Result_2013/lan_mac_output_EPA.xlsx')
df = pd.read_excel(xls, '2030', skiprows=7)

scc = social_cost.get_scc()
num_rows = df.shape[0]

cost = 0
last_cr = 0
emissions_reduced = 0
for i in range(1,num_rows):
    cost_per_ton = df["Unnamed: 0"][i]
    emissions_reductions = df["Global"][i] - last_cr
    if cost_per_ton < scc:
        cost += cost_per_ton * emissions_reductions * 10**6
        emissions_reduced = df["Global"][i]
    last_cr = df["Global"][i]
    
benefit = emissions_reduced * scc * 10**6

# CPI adjustor from 2010 to 2024.
cpi_adjustor = 1.42332950
cost *= cpi_adjustor
benefit *= cpi_adjustor
    
# Costs and benefits are in 2010 dollars
print("Cost: $",cost / 10**9,"billion")
print("Benefit: $",benefit / 10**9,"billion")
print("CO2 reduction: ",emissions_reduced,"million tons")
