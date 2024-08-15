''' Inert Anodes
Documentation created August 14, 2024. Last substantive update on August 14, 2024.

General strategy
- Costs are assessed on a per-cell retrofit basis.

To-do
- Assess remaning research, development, and demonstration costs.
- Is there a more recent cost estimate of inert anode deployment?
- Consider environmental benefits of energy efficiency if appropriate.
'''

import discount
import social_cost

############################### Costs

# Dollars per cell
# https://www.ctc-n.org/technologies/inert-anode-technology-aluminium-smelters
# CPI-adjust from 2010 to 2024
cost_per_cell = 1.5 * 10**6 * 1.42332950

# https://www.aluminiumleader.com/production/how_aluminium_is_produced
tons_per_day_per_cell = 3 # 2-4
tons_per_year_per_cell = tons_per_day_per_cell * 365.2425

cost_per_ton_per_year = cost_per_cell / tons_per_year_per_cell

# https://international-aluminium.org/statistics/primary-aluminium-production/
# World production in tons per year in 2023.
aluminum_production = 70581000

total_cost = discount.npv_to_annual(cost_per_ton_per_year * aluminum_production)

############################### Benefit

# Approximate prevailing price from late 2022 to the August 2024.
price_ton = 2400 # https://tradingeconomics.com/commodity/aluminum
# Savings. This parameter may require the most adjustment.
operational_savings = 0.03 # https://www.ctc-n.org/technologies/inert-anode-technology-aluminium-smelters
total_benefit = price_ton * operational_savings * aluminum_production

print("Percent operating cost reduction required with no carbon price: ",round(100*total_cost/(price_ton*aluminum_production),1),"%",sep="")

############################### Greenhouse gas savings

# https://international-aluminium.org/statistics/greenhouse-gas-emissions-intensity-primary-aluminium/
# From the above (2023 values), we are assuming that inert anodes would remove PFC emissions, process emissions from electrolysis, and process emissions from anode production.
# No efficiency effect on electrolysis energy is modeled.
# Reference on PFCs: https://archive.ipcc.ch/ipccreports/tar/wg3/index.php?idp=110

co2_reduction_per_ton = 2.4
co2_reduction = co2_reduction_per_ton * aluminum_production
# Incorporate GHG savings into benefit
total_benefit += co2_reduction * social_cost.get_scc(2024)
print("CO2 price needed to break even with no operating cost savings: $",round(total_cost / co2_reduction)," per ton",sep="")










print("Annualized Cost: $",total_cost / 10**9," billion at 7% discount rate.",sep="")
print("Annualized Benefit: $",total_benefit/10**9, " billion",sep="")
print("CO2 reduction per year: ",co2_reduction/10**6," million tons.",sep="")