'''
Documentation associated with the CAFE standards solution
Created July 18, 2024. Last substantive update on July 18, 2024.

To-do:
- Compare with more analyses
- Is the 3% discount rate appropriate?
- For GHG and fuel savings
'''

import discount
import social_cost

# The following are on p. 27 of the report: https://www.nhtsa.gov/sites/nhtsa.gov/files/2023-07/CAFE-2027-2032-HDPUV-2030-2035-NPRM-web-version.pdf
cost_per_car = 932
benefit_per_car = 1043

# https://www.economy.com/united-states/new-vehicle-sales-total/seasonally-adjusted
# Number sold in the United States from July 2023 to June 2024
num_cars = 16081000

# HDPUV
hdpuv_cost = discount.RevenueStream([2.1*10**9])
hdpuv_benefit = discount.RevenueStream([4.3*10**9])
hdpuv_cost.discount_rate = 0.03
hdpuv_benefit.discount_rate = 0.03

overall_ghg_savings = (885+22)*10**6 # p.12 of the report
annual_ghg_savings = overall_ghg_savings / 20 # Straight division with no discounting applied

print("Cost: $",(cost_per_car * num_cars + hdpuv_cost.annualize())/10**9," billion",sep="")
print("Benefit: $",(benefit_per_car * num_cars + hdpuv_benefit.annualize() + annual_ghg_savings * social_cost.get_scc(2024))/10**9," billion",sep="")
print("GHG Reduction: ",annual_ghg_savings/10**6," million tons",sep="")

'''
# Following are two attempts to estimate greenhouse gas savings. Neither appear to be accurate, but they are retained for achival purposes.

##################################################### GHG reduction. This part pertains to light duty vehicles only

# https://www.cbo.gov/publication/58861
personal_vehicle_emissions = 1.8*10**9 * 0.58 # Tons CO2 as of 2019.
current_fuel_economy = 33.3 # Miles per gallon, new cars as of 2022. https://www.fueleconomy.gov/feg/info.shtml
target_fuel_economy = 58
ghg_savings = personal_vehicle_emissions * (current_fuel_economy / target_fuel_economy)
monetized_ghg_savings = ghg_savings * social_cost.get_scc(2024)

##################################################### GHG reduction, take 2.

# https://www.caranddriver.com/research/a32758625/how-many-miles-does-a-car-last/
car_longevity = 200000 # Miles
fuel_savings = car_longevity * (1/current_fuel_economy - 1/target_fuel_economy) # Gallons of gasoline, per car over its lifetime
ghg_savings = fuel_savings * 0.08887 # Per car basis, https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references
annual_ghg_savings = ghg_savings * num_cars
'''