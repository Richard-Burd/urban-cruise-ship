'''
Agricultural mechanization
Documentation created on June 24, 2024. Last substantive update on June 25, 2024.

To-do:
- Consider using the FAOSTAT API: https://pypi.org/project/faostat/
- Crop production should be a separate module.
- Crop GHG intensity should be a separate module.
- Estimate proportion of crops for which manual methods are used at each stage. Use actual data instead of the 25% guess.
- Estimates of GHG intensity of crops for which specifically manual methods are used.
'''

'''
What portion of cereal crops are harvested, threshed, and dried manually?
I haven't been able to find data, so the following is a guess.
'''
manual_share = 0.25

############################################################## What improvement in yields could we expect from mechanization? #######################################

# Harvesting
# 5-10% yield improvement: https://allaboutfarmequipment.mystrikingly.com/blog/why-mechanized-harvesting-is-better-than-manual-harvesting
# Can result in loss of quality for wine grapes, where quality is at a premium. https://vinoselcielo.com/blogs/contenido/metodos-de-cosecha-manual-vs-mecanica?logged_in_customer_id=&lang=en
# Losses of 4.72% for manual harvesting, 4.22% for mechanical harvesting for sugarcane in Sudan. https://www.sciencedirect.com/science/article/pii/S1658077X13000477
# Mechanical rice harvesting lowers grain losses in Bangladesh by 4.5%. https://www.researchgate.net/publication/333504246_Assessment_of_paddy_harvesting_practices_of_Southern_Delta_Region_in_Bangladesh
harvest_yield_benefit = 1/0.955 # Based on the Bangladesh paper.

# Threshing
# Theshing efficiency improves from 94.6% to 95.8%. https://www.researchgate.net/publication/318726106_Standard_Issue_-_Comparative_evaluation_of_mechanised_and_manual_threshing_options_for_Amankwatia_and_AGRA_rice_varieties_in_Ghana
threshing_yield_benefit = 95.8/94.6

# Drying
# 3-5% losses for sun drying, 1-2% for mechanical drying. https://www.researchgate.net/publication/362545643_SOLAR_BUBBLE_DRYER_ALTERNATIVE_TO_SUN_DRYING_FOR_REDUCING_DRYING_LOSSES
# Another paper on drying losses: https://banglajol.info/index.php/PA/article/view/41556
drying_yield_benefit = 1.04/1.015

yield_benefit = harvest_yield_benefit * threshing_yield_benefit * drying_yield_benefit

############################################################## Greenhouse gas savings and land saving from improved yields #######################################

# Greenhouse gas emissions of crops. At some point, we may spin this off to a separate module for use more widely.
# https://ourworldindata.org/food-choice-vs-eating-local, via Poore and Nemecek. Select crops are included.
# kg emissions per kg product
crop_ghg = {
    "Rice":4.0,
    "Wheat & Rye":1.4,
    "Maize":1.0
}

# Production, via FAOSTAT. https://www.fao.org/faostat/en/#data/FBS
# Production figures for 2021. In thousands of tons.
crop_production = {
    "Wheat & Rye":772997+13223,
    "Rice":787379,
    "Maize":1206984
}

total_crop_ghg = sum([10**3 * crop_production[k]*crop_ghg[k] for k in crop_production])
saved_crop_ghg = total_crop_ghg * (1-1/yield_benefit) * manual_share
print("Gross GHG saving: ",saved_crop_ghg/10**6," million tons CO2e")

# From FAOSTAT, in hectares
land_use_by_crop = {
    "Maize":203470007,
    "Rice":165038826,
    "Wheat & Rye":219153830+4016433
}

# Land savings potential in hectares for the three crops. In km^2
land_savings = sum([land_use_by_crop[k]*manual_share * (1-1/yield_benefit)/100 for k in land_use_by_crop])
print("Land Saving: ",land_savings," km^2",sep="")

############################################################## Energy and GHG cost from more machinery #######################################

# The following is MJ per hectare
harvest_energy_ha = 1160 # https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6446064/

# To convert the harvest energy from combines from MJ/ha into per-ton of crop, need to convert with yields.
# The following are 100g/ha. From FAOSTAT
yields = {
    "Wheat & Rye":36889, # Wheat
    "Rice":47047,
    "Maize":57183
}
# Combine energy per unit crop instead of per hectare. Units are MJ per ton
harvest_energy = {k:harvest_energy_ha/yields[k] * 10**4 for k in yields}

# Estimating 95 gCO2e/MJ for diesel. This should be a separate module.
diesel_ghg = 95
# https://energy-vision.org/pdf/NYC-RNG-Fact-Sheet.pdf
# Figures are calculated as kg/ton crop, or tons CO2e/1000 tons of crops.
harvest_ghg = {k:harvest_energy[k]*diesel_ghg/1000 for k in harvest_energy}

# kWh per ton for beans. https://kesebae.or.ke/journal/index.php/kesebae/article/view/90
threshing_energy = 15.6
# 20-30 kWh per ton for mechanical drying. https://saalasti.com/dewatering-press/
drying_energy = 25

# Emissions intensity of electricity: https://www.iea.org/reports/global-energy-co2-status-report-2019/emissions. In gCO2e/kWh
emissions_intensity_electricity = 475

threshing_ghg = threshing_energy * emissions_intensity_electricity / 1000 # kg CO2e/ton crop
drying_ghg = drying_energy * emissions_intensity_electricity / 1000

total_ghg_by_crop = {k: manual_share * crop_production[k] * (harvest_ghg[k] + threshing_ghg + drying_ghg) for k in crop_production}
# Total GHG cost of equipment.
total_ghg_equipment = sum([total_ghg_by_crop[k] for k in total_ghg_by_crop])
print("Equipment GHG cost: ",total_ghg_equipment/10**6, " million tons CO2e",sep="")
print("Net GHG savings: ",(saved_crop_ghg-total_ghg_equipment)/10**6, " million tons CO2e",sep="")

# Output as of June 25, 2024
'''
Gross GHG saving:  108.64154332152312  million tons CO2e
Land Saving: 117790.87427219859 km^2
Equipment GHG cost: 29.703509612049587 million tons CO2e
Net GHG savings: 78.93803370947352 million tons CO2e
'''