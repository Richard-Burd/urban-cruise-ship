# Created March 21, 2024. Last substantive update: April 9, 2026.
# Clean booking fuels

'''
To-do
'''
import discount

# Cost: https://www.iea.org/reports/a-vision-for-clean-cooking-access-for-all/executive-summary
needed_annual_investment = 8 * 10**9
current_annual_investment = 2.5 * 10**9
incremental_annual_investment = needed_annual_investment - current_annual_investment 
cost_stream = [incremental_annual_investment] * 8 # Report was in 2022 and this is investment to 2030, so 8 years
cost = discount.RevenueStream(cost_stream).annualize()

# Greenhouse gas savings: https://www.iea.org/reports/a-vision-for-clean-cooking-access-for-all/executive-summary
ghg_savings_annual = 1517.25 * 10**9 # Tons CO2e, from avoided combustion and avoided unsustainable harvesting. Includes additional combusion of modern fuels.

# Benefits: https://www.esmap.org/the-state-of-access-to-modern-energy-cooking-services
annual_benefit = {
    "health": 1.4 * 10**12,
    "time": 0.8 * 10**12,
    "climate": 0.2 * 10**12
}
annual_benefit_total = sum([annual_benefit[k] for k in annual_benefit])
# Another benefit estimate. https://www.researchsquare.com/article/rs-3116341/v1
annual_benefit2 = 21376 * 10**6 # Based on the the second (middle) transition secnario. See Figure A2 in supplementary materials.

# Other facts from https://www.iea.org/reports/a-vision-for-clean-cooking-access-for-all/executive-summary
# 2.3 billion people lack clean cooking in 2022, projected to decrease to 1.8 billion in 2030.
# Under Access for All, time gathering firewood/fuel and preparation decreases from 461 to 155 hours (per day?)
# Premature deaths from indoor air pollution decrease from 3.52 million to 0.97 million.

print("\nClean Cooking Fuels")
print(cost_stream)
print("Annual Cost: $",cost / 10**9," billion",sep="")
print("Annual Benefit: $",annual_benefit2 / 10**9," billion",sep="")

