'''
Orbital Use Fee.
Documentation created October 4, 2024. Last substantive update on October 4, 2024.

To-do:
- Better estimate of the number of satellites in future years.
- Should costs be discounted in the way benefits are discounted?
'''

# https://www.pnas.org/doi/10.1073/pnas.1921260117
# See Results, the sentence,
# "Assuming a 5% market rate of return, an increase of $2.5 trillion in NPV would be equivalent to annual benefits of approximately $120 billion in perpetuity."
benefit = 120 * 10**9

print("Benefit: $",benefit/10**9," billion",sep="")

# See p. 3: https://www.gao.gov/assets/gao-22-105166.pdf
# This is the number of launches to 2030, as of 2022.
# I don't know if this should be interpreted as the number of satellites to expect in orbit. That number seems to be very fuzzy.
num_satellites = 58000

# https://www.pnas.org/doi/10.1073/pnas.1921260117
# This is the optimal level in 2040. The optimal level starts lower and rises over time.
orbital_use_fee = 235*10**3

cost = num_satellites * orbital_use_fee
print("Cost: $",cost/10**9," billion",sep="")