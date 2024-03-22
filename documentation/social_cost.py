# Created March 21, 2024, last substantial update March 21, 2024.

# This module is for social costs of various pollutants. At some point, this is intended to be used for all calculations involving the monetization of pollution.
# For each pollutant, costs are to be presented in an array. Each element of the array has a numerical value, unit as a string, and context as a string.
# 'Context' is the applicability of the estimate. For example, CO2 emissions are globally applicable, as the damages does not depend on where the emissions occurs.
# Some might have a more localized context; for example, damages from PM2.5 emissions depend greatly on where the emission takes place.
# To allow for multiple estimates of the social cost of a given pollutant in different contexts is the reason for using a list.
# If no context is specified, then the default_context tag allows a default to be defined. Only one default should be specified for each pollutant.

# Things I want to do later:
# - Include source data for each estimate.
# - Include the date for which the estimate is made.
# - Make the API call flexible. For example, if different a context that is not listed, it will look for the context that is most similar. This is obviously a difficult NLP problem.
# - Have the API call return source data to make it easy to collect for solutions.

# Specific pollutants I want to be on this list:
# - Thorough reevalulation of the social cost of carbon.
# - Municipal solid waste disposal.
# - Nitrogen runoff.
# - Ozone depleting substances.
# - Sulfer dioxide.
# - PM2.5 and PM10.
# - Land use, based on ecosystem service evaluation.
# - Marine plastic.
# - Nitrogen oxide.
# - Ammonia.
# - PFAS.
# - Mercury.
# - Lead.

sc = \
{
    "co2":
    [
        {
            "value":50,
            "unit":"Dollars per ton",
            "context":"Global",
            "default_context":1
        }
    ]
}

# API usage examples
# get_sc("co2","Global")
# get_sc("co2") returns the same as the above because 'Global' is the default context.
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
