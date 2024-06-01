'''
Maglev elevators. Documentation created May 28, 2024. Last substantial revision: May 31, 2024.
'''

import pandas as pd
import discount
import social_cost

df_supertall = pd.read_csv("../../Energy Model/Data/supertall.csv")
df_supertall = df_supertall[df_supertall["Unnamed: 8"]>2008]
df_supertall = df_supertall[df_supertall["Unnamed: 8"]<2024]

# Number of supertalls in the 15 year period from 2009 to 2023 inclusive
num_supertall = df_supertall.shape[0]
num_supertall_year = num_supertall / 15

# Using the Brooklyn Tower as a model
# https://newatlas.com/architecture/brooklyn-tower-shop/
brooklyn_tower = {
    "cost":750*10**6,
    "floor":74, # See Wikipedia. Or is it 92? https://streeteasy.com/building/the-brooklyn-tower-condominiums
    "area":555734 # Square feet
}

# I haven't been able to find how many elevators the tower has, so I am using this estimate: https://www.adlliftservices.com/how-many-elevators-does-your-building-need
# The number seems rather low to me.
num_elevators = brooklyn_tower["area"] / 50000

# https://www.delfarelevator.com/commercial-elevator-cost.html
# Using the overall maximum cost, rather than cost per landing.
cost_per_elevator = 1.5 * 10**6
cost = cost_per_elevator * num_elevators # Overall cost of conventional elevators

# See https://railroads.dot.gov/sites/fra.dot.gov/files/fra_net/1176/maglev-sep05.pdf for ratio of costs between maglev trains and high speed rail.
# This ratio might be too low.
multi_cost = cost * 50.2 / 35.3

space_cost = brooklyn_tower["cost"]*0.1 # 10% of tower goes to elevators. That's a wild guess.
multi_space_cost = space_cost * 0.5

# Energy saved with MULTI
energy_per_m2 = 4.8*12 # In kWh. https://www.sciencedirect.com/science/article/pii/S2772783123000109
brooklyn_tower_energy = brooklyn_tower["area"]*energy_per_m2 / 10.7639 # Convert from ft^2 to m^2
elevator_bt_energy = brooklyn_tower_energy * 0.21 # https://www.mdpi.com/2076-3417/12/14/7184
saved_elevator_bt_energy = elevator_bt_energy * 0.5 # Energy saved by going to MULTI
saved_bt_ghg = saved_elevator_bt_energy * 475 / 10**6 # grams/kWh/yr https://www.iea.org/reports/global-energy-co2-status-report-2019/emissions

# Our model is that MULTI elevators come into play at year 5.
years_modeled = 30
first_year_multi = 5
cost_stream = [0]*years_modeled
benefit_stream = [0]*years_modeled
ghg_stream = [0]*years_modeled
for i in range(first_year_multi, years_modeled):
    cost_stream[i] = (multi_cost+multi_space_cost) * num_supertall_year
    benefit_stream[i] = (cost+space_cost) * num_supertall_year
    ghg_stream[i] = saved_bt_ghg * (num_supertall_year)*(i+1-first_year_multi)
cost_stream = discount.RevenueStream(cost_stream,cost_stream[-1],0)
benefit_stream = discount.RevenueStream(benefit_stream,benefit_stream[-1],0)
ghg_stream = discount.RevenueStream(ghg_stream,ghg_stream[-1],0)

print("Cost: $",cost_stream.value() / 10**9,"billion")
print("Benefit: $",(benefit_stream.value() + ghg_stream.value()*social_cost.get_scc(2024)) / 10**9,"billion")
print("GHG reduction:",ghg_stream.value())

'''
Output to the above code, as of May 31, 2024:

Cost: $ 17.894675517893845 billion
Benefit: $ 26.918681721294274 billion
GHG reduction: 835404.5242540471
'''
