''' Green steel solution.
Documentation created August 8, 2024. Last substantive update on August 8, 2024.

To-do:
- Make more explicit how the price of DRI steel depends on learning curve cost reductions of renewable energy, electrolyzers
'''

import social_cost

# Costs in dollars per ton
cost = {
    # https://www.iea.org/data-and-statistics/charts/simplified-levelised-cost-of-competing-low-carbon-technologies-in-steel-production
    "BF-BOF":400,
    # https://www.nature.com/articles/s41467-023-38123-2
    "Hydrogen DR":(535+831)/2
}

cost["BF-BOF"] = 450 # https://www.transitionzero.org/insights/global-steel-production-costs, as reported in the Norway paper
cost["Hydrogen DR"] = (622+722)/2 # https://www.sciencedirect.com/science/article/pii/S0959652622009659

# Lifecycle tons CO2 per ton steel
ghg = {
    # https://www.sciencedirect.com/science/article/pii/S0959652622009659
    "BF-BOF":1.8,
    # https://www.sciencedirect.com/science/article/abs/pii/S095965261400540X
    "Hydrogen DR":0.2
}
scc = social_cost.get_scc(2024)

######################################## Overall production
# https://worldsteel.org/data/annual-production-steel-data/?ind=P1_crude_steel_total_pub/CHN/IND
world_production = 1892036 # Thousand tons
world_bf_bof_production = world_production * 0.72 * 1000 # https://www.globalefficiencyintel.com/global-steel-production-costs-report

s_cost = world_bf_bof_production*(cost["Hydrogen DR"]+ghg["Hydrogen DR"]*scc)
s_benefit = world_bf_bof_production*(cost["BF-BOF"]+ghg["BF-BOF"]*scc)

print("Cost:    $",s_cost/10**9," billion",sep="")
print("Benefit: $",s_benefit/10**9," billion",sep="")

ghg_reduction = (ghg["BF-BOF"]-ghg["Hydrogen DR"])*world_bf_bof_production
print("CO2 reduction: ",ghg_reduction/10**6," million tons",sep="")


