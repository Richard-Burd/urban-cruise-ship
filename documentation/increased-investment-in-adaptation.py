'''
Adaptation solution. Created August 29, 2024. Last substantive updated on August 29, 2024
'''

# Figures from the main report cited: https://reliefweb.int/report/world/adapt-now-global-call-leadership-climate-resilience
# See Figures ES.1 on p. 4.

figures = {
    "Strengthening early warning systems":{"benefit":100,"cost":11},
    "Making new infrastructure resilient":{"benefit":4000,"cost":900},
    "Improving dryland agriculture crop production":{"benefit":700,"cost":120},
    "Protecting mangroves":{"benefit":1000,"cost":170},
    "Making water resources management more resilient":{"benefit":1400,"cost":300}
}

# No discount rate is used here.
time_range = 2030-2020

cost = sum(figures[k]["benefit"] for k in figures)/time_range
benefit = sum(figures[k]["cost"] for k in figures)/time_range

print([cost, benefit])