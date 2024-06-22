'''
Removal of fossil fuel subsidies
Documentation created: June 18, 2024. Last substantive update: June 18, 2024.

Todo:
- Is there any reasonable way to estimate a cost?
'''

# Deadweight loss reported here of $44 billion worldwide: https://hal.science/hal-04141691/document
# Note: Deadweight loss is a more appropriate measure of the cost of subsidies than direct fiscal cost.
# CPI-adjusting from 2012 to 2024.
deadweight_loss = 44*10**9 * 1.36067324

# Amount of GHG emissions saved.
# Taking the midpoint of the range offered here: https://www.nature.com/articles/nature25467
# There are several estimates of this quantity. This paper gives the lowest estimates.
ghg_savings = 1.25 * 10**9

print("Benefit: $",deadweight_loss/10**9," billion",sep="")
print("GHG Savings: ",ghg_savings/10**9," billion tons",sep="")