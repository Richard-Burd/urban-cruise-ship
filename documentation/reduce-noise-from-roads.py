# Reduction of road noise with quieter pavement.

print("\n=========================================\nReduce Road Noise with Quieter Pavement\n=========================================")
print("Documentation Created: March 18, 2024")
print("Last Substantial Update: March 18, 2024")

# https://tripnet.org/reports/americas-interstate-highway-system-at-65-june-2021/
miles_urban_highway = 9046
# The report gives 19177 miles of urban interstate highway, of which 9046 are chronically congested. The report is 2021.
# I don't know the date this count was made, but I'd have to assume it is close to the present value.
# I have no idea how much urban highway would be suitable for quiet pavement, so I'm just going to guess that it is the amount that is congested
# and thus would be prime for some kind of treatment (expansion, etc.) soon.

# https://dot.ca.gov/programs/environmental-analysis/noise-vibration/quiet-pavement
# See https://dot.ca.gov/-/media/dot-media/programs/environmental-analysis/documents/env/quieter-pavement-a11y.pdf, p. 6.6-10.
# The following is for an analysis of I-580 Segment 3, E11.
# I presume this is a one-mile segment, and the E means it's the eastbound side. Since that is different from westbound, I am multiplying by 2 later.
# This is the extra cost for the ground rigid pavement option over standard pavement.
cost_per_mile = 1479000
# This is the threshold for the "reasonableness" criterion, which I am taking to be the benefit.
benefit_per_mile = 1980000

# CPI adjustment from January 2018 to January 2024. I am not able to find which dollars are used in the report, so I am going with 2018, the year the report was published.
# https://data.bls.gov/cgi-bin/cpicalc.pl
cpi_adjustor = 1.24428423

cost = cost_per_mile * cpi_adjustor * 2 * miles_urban_highway
benefit = benefit_per_mile * cpi_adjustor * 2 * miles_urban_highway

print("NPV Cost   : $",cost/10**9," billion",sep="")
print("NPV Benefit: $",benefit/10**9," billion",sep="")

# https://swcpa.org/omb-publishes-discount-rate-for-2022/
discount_rate = 0.04 # Caltrans evidently uses a 4% discount rate, which is controversial, but it's what we have.

# A yearly benefit of $1 at a 4% discount rate is valued at $(1+0.96+0.96**2 + ...), which, by a dark art known as math, is 1/0.04 = 25.
# Thus a simple way to convert from net present value to yearly value is to multiply by the discount rate.

print("Yearly Cost   : $",discount_rate*cost/10**9," billion",sep="")
print("Yearly Benefit: $",discount_rate*benefit/10**9," billion",sep="")

print("Noise reduction of 4-10 dB.\n")

# Noise reduction is 4-10 dB.

# To call this solution 100% done, the following things are needed.
# - A better estimate of how many miles of road can be treated.
# - More than just a single cost-benefit estimate for treatment.
# - Verify that using the "reasonableness" criterion as a benefit is appropriate.