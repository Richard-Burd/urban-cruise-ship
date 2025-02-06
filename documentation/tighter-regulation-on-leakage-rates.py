# Created February 5, 2025. Last substantive update: February 5, 2025.
'''
Methane leakage solution.
These calculations also are relevant to general discussion of methane leakage.

To-do
'''

# General parameters
gas_density = (0.668+0.717)/2 # https://www.teknopoli.com/PDF/Gas_Density_Table.pdf . kg/m^3
convert_m3_ft3 = 35.3147 # Convert cubic meters to cubic feet.

# Values reported are the ratio of
leakage_rates = {
    # From https://www.science.org/doi/10.1126/science.aar7204
    "EPA":0.014,
    "Alvarez et al.":0.023
}

# Convert the value in this paper to a percentage. https://pubs.acs.org/doi/10.1021/acs.est.0c00437\\
# I am confused about the following, especially what the denominator is in calculating total leakage.
weller_tons = 690000
weller_volume = weller_tons / gas_density # 1000s of m^3
weller_ft3 = weller_volume * convert_m3_ft3 * 1000


