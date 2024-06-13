'''
Floating urban developments. Documentation created June 10, 2024. Last substantial update on June 10, 2024.
'''

import discount

# Cost of land reclamation for various projects
# Figures in dollars per square foot, CPI-adjusted to 2024.
land_reclamation_cost = {
    "Manila Bay":90, # https://businessmirror.com.ph/2016/05/17/land-reclamation-tack-fraught-with-challenges-opportunities/
    "Lantau Tomorrow Vision":348.6599816488994, # https://en.wikipedia.org/wiki/Lantau_Tomorrow_Vision
    "Durrat Al Bahrain":35 # https://en.wikipedia.org/wiki/Durrat_Al_Bahrain
}

########################### External costs

# https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8865732/
cost2020 = 184.58 * 10**6 # Ecosystem service valuation
area2020 = 115 # Square kilometers. Estimated from a bar chart.
cost_sqft = cost2020 / (area2020 * 10**6 * 10.7639)
npp_cost_sqft = cost_sqft / discount.discount_rate()
print(npp_cost_sqft)

# https://iopscience.iop.org/article/10.1088/1755-1315/675/1/012036/pdf
willingness_to_pay = 7871.45 # Yuan per hectare
wtp_sqft = willingness_to_pay * 0.13797 / 107639
print(wtp_sqft)

# https://www.sciencedirect.com/science/article/abs/pii/S0921800910002971
# Paper is 2010
cost_per_m2 = [9.73, 14.72, 14.09, 12.83]
f = lambda x: x/10.7639 / 0.07 * 1.42332950 # Convert from m^2 to ft^2, apply 7% discount rate, and CPI adjust from 2010 to 2024.
cost_per_sqft = [f(x) for x in cost_per_m2]
print(cost_per_sqft)