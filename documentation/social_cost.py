# Created March 21, 2024, last substantial update March 21, 2024.

import pandas as pd
import numpy as np

'''
This module is for social costs of various pollutants. At some point, this is intended to be used for all calculations involving the monetization of pollution.
For each pollutant, costs are to be presented in an array. Each element of the array has a numerical value, unit as a string, and context as a string.
'Context' is the applicability of the estimate. For example, CO2 emissions are globally applicable, as the damages does not depend on where the emissions occurs.
Some might have a more localized context; for example, damages from PM2.5 emissions depend greatly on where the emission takes place.
To allow for multiple estimates of the social cost of a given pollutant in different contexts is the reason for using a list.
If no context is specified, then the default_context tag allows a default to be defined. Only one default should be specified for each pollutant.

To-do
- Include source data for each estimate.
- Include the date for which the estimate is made.
- Make the API call flexible. For example, if different a context that is not listed, it will look for the context that is most similar. This is obviously a difficult NLP problem.
- Have the API call return source data to make it easy to collect for solutions.
- Thorough reevalulation of the social cost of carbon.
- Municipal solid waste disposal.
- Nitrogen runoff.
- Ozone depleting substances.
- Sulfer dioxide.
- PM2.5 and PM10.
- Land use, based on ecosystem service evaluation.
- Marine plastic.
- Nitrogen oxide.
- Ammonia.
- PFAS.
- Mercury.
- Lead.

For each estimate, potential fields are as follows
{
    "value": Numerical value. This is a mandatory field
    "unit": Units for the numerical value, e.g. dollars per ton.
    "context": The setting in which the estimate is applicable.
    "default_context": If present, should be a non-zero value. There should only be one default context for every pollutant. This is what gets pulled from the API if a context is not specified.
    "note": No direct effect; use is similar to that of a comment.
    "discount_rate": This field is expected unless the value is unknown or inapplicable. Should be in absolute terms rather than percentage terms.
    "source": Where the estimate came from. Should be in words.
    "link": A URL to the estimate. Doesn't necessary have to be the source.
    "year": Year that the currency is denominated in. Should be present if known.
}
'''

sc = \
{
    "co2":
    [
        {
            "value":50,
            "unit":"Dollars per ton",
            "context":"Global",
            "default_context":1,
            "note":"This is the value mostly used current (as of April 2024) on the UCS site."
        },
        {
            "value":75,
            "unit":"Dollars per ton",
            "context":"Global",
            "discount_rate":0.025,
            "source":"Affordable Clean Energy Rule",
            "link":"https://www.rff.org/publications/explainers/social-cost-carbon-101/",
            "year":2019
        },
        {
            "value":50,
            "unit":"Dollars per ton",
            "context":"Global",
            "discount_rate":0.03,
            "source":"Affordable Clean Energy Rule",
            "link":"https://www.rff.org/publications/explainers/social-cost-carbon-101/",
            "year":2019
        },
        {
            "value":14,
            "unit":"Dollars per ton",
            "context":"Global",
            "discount_rate":0.05,
            "source":"Affordable Clean Energy Rule",
            "link":"https://www.rff.org/publications/explainers/social-cost-carbon-101/",
            "year":2019
        },
        {
            "value":5,
            "unit":"Dollars per ton",
            "context":"Global",
            "discount_rate":0.07,
            "source":"Affordable Clean Energy Rule",
            "link":"https://www.rff.org/publications/explainers/social-cost-carbon-101/",
            "year":2019
        },
        {
            "value":307,
            "unit":"Dollars per ton",
            "context":"Global",
            "link":"https://doi.org/10.1088%2F1748-9326%2Fac1d0b",
            "year":2015
        },
        {
            "value":185,
            "unit":"Dollars per ton",
            "context":"Global",
            "link":"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9605864/",
            "year":2020,
            "discount_rate":0.02
        },
        {
            # I have not been able to ascertain the year these costs are denominated
            "value":417,
            "unit":"Dollars per ton",
            "context":"Global",
            "link":"https://www.nature.com/articles/s41558-018-0282-y.epdf",
            "discount_rate":0.03 # Also uses a growth-adjusted discount rate, so there is variability. But the fixed rate is reported at 3%. https://country-level-scc.github.io/explorer/
        },
        {
            # It looks like this is an average of different estimates at different discount rates, so no rate is reported.
            # I also cannot ascertain the year.
            "value":54.7,
            "unit":"Dollars per ton",
            "context":"Global",
            "link":"https://www.sciencedirect.com/science/article/abs/pii/S0959652618334589?via%3Dihub"
        },
        {
            "value":30.78,
            "unit":"Dollars per ton",
            "context":"Global",
            "link":"https://www.sciencedirect.com/science/article/abs/pii/S0959652618334589?via%3Dihub",
            "discount_rate":0.03
        }
    ]
}

'''
API usage examples
get_sc("co2","Global")
get_sc("co2") returns the same as the above because 'Global' is the default context.
'''
def get_sc(pollutant, context=""):
    p = sc[pollutant]
    default_index = -1
    for i in range(len(p)):
        if p[i]["context"] == context:
            return p[i]
        if p[i]["default_context"]:
            default_index = i
    if default_index >= 0:
        return p[default_index]
    return "Not found"
    
    
    
    
# Social cost of carbon: using Tol's data set
# See https://arxiv.org/pdf/2310.12760.pdf
# Shiny app: https://richardtol.shinyapps.io/MetaSCC/
# GitHub repo: https://github.com/rtol/ShinyMetaSCC/tree/main

recency = 0.90 # For weightings that use the recency of papers, the rate at which the weight decays.
# E.g. 0.9 means that a paper one year earlier is weighted at 0.9 as much.
convert_to_co2 = 12/44. # Since the numbers are in tons of carbon, we apply this factor to convert to tons CO2.

# Figures are all in 2010 USD

scc = pd.read_csv("../../Energy Model/Data/socialcostcarbon.csv")
scc = scc.dropna(subset=["SCC"])
def weighted_median(weights):
    scc["weight"] = weights
    sorted_scc = scc.sort_values('SCC')
    cumsum = sorted_scc.weight.cumsum()
    cutoff = sorted_scc.weight.sum() / 2.0
    return convert_to_co2 * sorted_scc.SCC[cumsum >= cutoff].iloc[0]

def get_scc():
    # The following gets our estimate of the SCC.
    #print("By recency:",weighted_median(recency**(2021-scc["year"])))
    print("Social cost of carbon estimate: $",99.34363636363635,"per ton, 2010 dollars.")
    
    '''
    The following calculations to into the SCC estimate above.
    - Based on Richard Tol's paper. Publication dates range from 1980 to 2021. All figures are adjusted to 2010 dollars.
    - None of the in-built weights are used. Any one of them would significantly decrease the value.
    - A 10%/year weight penalty is applied to all publications so as to give more weight to recent ones.
    - A weighted median is used.
    '''
get_scc()