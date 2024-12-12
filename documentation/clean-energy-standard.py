# Clean energy standards

# Documentation created: December 12, 2024
# Last substantial update: December 12, 2024

import discount

# The main purpose of this documentation is to correct some issues around net present value calculations

# Net present value benefits, 2020-2050. In $billions
npv = {
    "climate": 637,
    "health":1130,
    "cost":342
}

discount_rate = 0.05

health_benefit = discount.npv_to_annual(npv["health"], discount_rate)
env_benefit = discount.npv_to_annual(npv["climate"], discount_rate)
total_benefit = health_benefit + env_benefit
cost = discount.npv_to_annual(npv["cost"], discount_rate)

print("Total benefit",total_benefit)
print("Health benefit",health_benefit)
print("Environmental benefit",env_benefit)
print("Cost",cost)