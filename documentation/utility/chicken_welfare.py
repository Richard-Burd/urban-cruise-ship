# These calculations estimate the Welfare Level of chickens in captivity. A value of 0 is a neutral state, and a while of 1 is the worst possible condition.

# Pain time reduced by Better Chicken Commitment. https://welfarefootprint.org/broilers/, bottom of page. Hours per chicken
pain_time = {
    "excruciating":30.20 / 3600,
    "disabling":50.27,
    "hurtful":333.60,
    "annoying":324.67
}

# Subjective estimates suggested by Claude.
welfare_levels = {
    "annoying":0.1,
    "hurtful":0.25,
    "disabling":0.5,
    "excruciating":1.0
}

chicken_life_hours = 47*16 # Elsewhere, links are to an average lifespan of 47 days. We are assuming 16 awake hours per day.

def chicken_welfare_level():
    pain_hours = sum({
        pain_time[k] * welfare_levels[k]
        for k in pain_time
    })
    welfare_level = pain_hours / chicken_life_hours
    print(welfare_level)

chicken_welfare_level()
