# Define functions for calculations
def calculate_annuity_factor(r, n):
    return (1 - (1 + r) ** -n) / r

def calculate_eav(npv, af):
    return npv / af

# Given values
discount_rate = 0.04
years = 20

# Given NPV values for profits
npv_cooling_profit = 190000
npv_toilet_profit = 65000

# Calculate the annuity factor
annuity_factor = calculate_annuity_factor(discount_rate, years)

# Calculate the equivalent annual profit for each profit type
annual_cooling_profit = calculate_eav(npv_cooling_profit, annuity_factor)
annual_toilet_profit = calculate_eav(npv_toilet_profit, annuity_factor)

# Summarize the annual profits
annual_profit = annual_cooling_profit + annual_toilet_profit

# Print the results
print(f"Annual Cooling Profit: ${annual_cooling_profit:.2f}")
print(f"Annual Toilet Profit: ${annual_toilet_profit:.2f}")
print(f"Total Annual Profit: ${annual_profit:.2f}")

# If you want to include the costs and other details, let's add those too

# Infrastructure and maintenance costs
gw_infrastructure_cost = 143300
gw_annual_maintenance = 7200
annual_energy_cost = 5700

# Discount factor calculation for spreading infrastructure cost over 20 years
discount_factor = sum([1.04 ** -i for i in range(1, 21)])

# Annual cost calculation
annual_infrastructure_cost = gw_infrastructure_cost / discount_factor
annual_cost_per = annual_infrastructure_cost + gw_annual_maintenance + annual_energy_cost

# Emission reduction and avoided carbon costs
emission_reduction_20y = 1102 + 661
annual_emission_reduction = emission_reduction_20y / 20

# Example social cost of carbon (assumed)
social_cost_carbon = 50  # Example value in USD per ton
annual_avoided_carbon_costs = annual_emission_reduction * social_cost_carbon

# Annual benefits including avoided carbon costs
annual_benefit = annual_avoided_carbon_costs + annual_profit

# Print additional results
print(f"Yearly Emission Reduction: {annual_emission_reduction:.2f} tons")
print(f"Yearly Cost: ${annual_cost_per:.2f}")
print(f"Yearly Benefit: ${annual_benefit:.2f}")
print(f"Avoided Carbon Costs: ${annual_avoided_carbon_costs:.2f}")
