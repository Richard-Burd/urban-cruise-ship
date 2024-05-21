'''
Documentation created May 16, 2024. Last substantive update: May 20, 2024.

I am framing this solution as Department of Energy support for offshore wind. This could change.
'''

import social_cost
import lcoe
import discount

# https://www.energy.gov/eere/us-department-energys-strategy-advance-offshore-wind-energy-united-states
# GW of deployment. The 2035 target only includes the floating turbines.
# The 110 GW target is for 2050, but I am changing it to 2060 on the grounds that the target may be too ambitious.
# The report also includes a 30 GW offshore wind target for 2030, but again I am excluding it on the grounds that it does not appear to be realistic.
offshore_wind_targets = {
    "2035":15,
    "2060":110
}

# A time series of how many kWh from offshore wind should be expected each year.
# The first element is for 2025, and the last is for 2060. Production is assumed to be constant at 2060 values thereafter.
def make_production_series():
    offshore_wind_capacity_factor = 0.6 # 60% capacity factor by 2050. Seems high, but we'll use it. https://css.umich.edu/publications/factsheets/energy/wind-energy-factsheet
    # Offshore wind production targets in kWh
    offshore_wind_targets_kwh = {k: offshore_wind_targets[k] * 24*365.2425 * 10**6 * offshore_wind_capacity_factor for k in offshore_wind_targets}
    # The series is for the years 2025-2060 and assumed to be constant thereafter.
    production_series = [0]*36
    for i in range(10,36):
        production_series[i] = offshore_wind_targets_kwh["2035"]+(offshore_wind_targets_kwh["2060"]-offshore_wind_targets_kwh["2035"])*(i-10)/25.
    return(production_series)
    
production_series = make_production_series()

def make_cost_series(production_series):
    # LCOE. We'll use the value for floating offshore wind.
    # https://www.energy.gov/eere/wind/articles/driving-force-projecting-offshore-wind-energy-costs
    # In dollars per kWh
    offshore_wind_lcoe = {
        "fixed-bottom":0.053,
        "floating":0.064
    }
    total_cost_per_kwh = offshore_wind_lcoe["floating"]
    
    # Initial investment, based on Wood Mackenzie, investment Wood Mackenzie's base case.
    # https://www.woodmac.com/horizons/cross-currents-charting-a-sustainable-course-for-offshore-wind/
    # Billions of dollars
    # The base case is for 30 GW in 2030. There were already 6 GW in 2023.
    needed_investment = 13.4+5+4+3.5+1
    # In GW
    wood_mackenzie_forecast = {
        "2023":6,
        "base2030":30
    }
    needed_investment_per_gw = needed_investment / (wood_mackenzie_forecast["base2030"]-wood_mackenzie_forecast["2023"])
    print(needed_investment_per_gw)
    
    cost_series = [production_series[i]*total_cost_per_kwh for i in range(len(production_series))]
    cost_series[0] = needed_investment_per_gw * 10**9 * offshore_wind_targets["2035"]
    cost_series[25] = needed_investment_per_gw * 10**9 * offshore_wind_targets["2060"]
    return cost_series

cost_series = make_cost_series(production_series)

# Where will offshore wind go? https://www.energy.gov/eere/wind/articles/offshore-wind-market-report-2023-edition
# Figures are proportional to projects under development as of 2023, by MW of capacity
offshore_wind_potential = {
    "Oregon":3000,
    "California":25000,
    "Maine":156,
    "New York":20000,
    "Massachusettes":23000,
    "Connecticut":5104,
    "Rhode Island":1430,
    "New Jersey":11000,
    "Maryland":8500,
    "Virginia":5200,
    "North Carolina":8000,
    "Louisiana":5000
}
offshore_wind_current = sum([offshore_wind_potential[k] for k in offshore_wind_potential])

def get_displaced_lcoe():
    # See https://emp.lbl.gov/capex-lcoe-and-ppa-prices-region
    # Regions are not perfectly aligned by states, but this is good enough.
    # A 50 state version could be spun off to a separate module.
    region_by_state = {
        "Oregon":"West",
        "California":"CAISO",
        "Maine":"ISO-NE",
        "New York":"NYISO",
        "Massachusettes":"ISO-NE",
        "Connecticut":"ISO-NE",
        "Rhode Island":"ISO-NE",
        "New Jersey":"PJM",
        "Maryland":"PJM",
        "Virginia":"PJM",
        "North Carolina":"Southeast",
        "Louisiana":"MISO"
    }

    # Also https://emp.lbl.gov/capex-lcoe-and-ppa-prices-region
    # Cents per kWh
    # Regions not needed for this analysis are excluded. May perhaps spin this off to a separate module.
    lcoe_by_region = {
        "West":3.323,
        "CAISO":4.103,
        "ISO-NE":6.339,
        "PJM":5.009,
        "Southeast":3.782,
        "MISO":5.22,
        "NYISO":4.897
    }

    # This is the average LCOE in the United States across FERC regions, weighted by offshore wind deployment. In dollars per kWh
    return sum([offshore_wind_potential[k]/offshore_wind_current*lcoe_by_region[region_by_state[k]] for k in offshore_wind_potential]) / 100

weighted_lcoe = get_displaced_lcoe()

def get_weighted_ghg():
    # To estimate GHG reduction, estimate GHG intensity of conventional sources, subtract embodied emissions of wind.
    # Emissions intensity by state: https://emissionsindex.org/
    # Reported in pounds CO2 per MWh. May do this more systematically later and move to another module.
    emissions_by_state = {
        "Oregon":328,
        "California":339,
        "Maine":310,
        "New York":471,
        "Massachusettes":714,
        "Connecticut":540,
        "Rhode Island":807,
        "New Jersey":456,
        "Maryland":507,
        "Virginia":540,
        "North Carolina":626,
        "Louisiana":794
    }
    # Convert to grams/kWh
    for k in emissions_by_state:
        emissions_by_state[k] = emissions_by_state[k] * 453.592 / 1000
    # Weighted average of GHG intensity by potential of offshore wind
    return sum([offshore_wind_potential[k]/offshore_wind_current*emissions_by_state[k] for k in emissions_by_state])

weighted_ghg = get_weighted_ghg()
ghg_reduction = (weighted_ghg - lcoe.lcoe["ghg"]["Wind"]) / 10**6

# Social cost of carbon
scc2024 = social_cost.get_scc() * 1.42332950
# GHG reduction benefit per kWh of offshore wind in dollars per kWh.
ghg_benefit_per_kwh = scc2024 * ghg_reduction
total_benefit_per_kwh = ghg_benefit_per_kwh + weighted_lcoe

def make_benefit_series():
    return [production_series[i]*total_benefit_per_kwh for i in range(len(production_series))]
benefit_series = make_benefit_series()

cost_stream = discount.RevenueStream(yearly_stream = cost_series, end_value = cost_series[-1])
print("Cost: $",cost_stream.annualize() / 10**9,"billion")
benefit_stream = discount.RevenueStream(yearly_stream = benefit_series, end_value = benefit_series[-1])
print("Benefit: $",benefit_stream.annualize() / 10**9,"billion")

def make_ghg_series():
    return [production_series[i]*ghg_reduction for i in range(len(production_series))]
ghg_series = make_ghg_series()
ghg_stream = discount.RevenueStream(yearly_stream = ghg_series, end_value = ghg_series[-1])
print("Annualized GHG reduction:",ghg_stream.annualize(),"tons")

'''
Output, as of May 20, 2024

Cost: $ 11.634940143546842 billion
Benefit: $ 9.01086763648972 billion
Annualized GHG reduction: 34006195.93176555 tons
'''