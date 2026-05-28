"""
Animal Welfare Cost Estimation for US Meat Consumption
=======================================================
Estimates the annual monetized welfare cost imposed on chickens, beef cattle,
and pigs by US meat consumption, using a Rethink Priorities-style moral weight
framework anchored to the US Value of a Statistical Life (VSL).

Formula (per species):
    Annual welfare cost = animal_life_years
                        * welfare_level
                        * welfare_range
                        * sentience_probability
                        * human_welfare_year_value

Note on welfare_range × sentience_probability:
    These two parameters share a common evidence base (behavioral and
    neurological proxies for sentience and intensity of experience), so
    treating them as fully independent overstates certainty and may
    double-count the same empirical signal. They are kept separate here
    for transparency, but the product (= "moral weight") is the operative
    quantity. See METHODOLOGICAL NOTES below.

All dollar values in 2023 USD.
All slaughter figures from 2023.

SOURCES
-------
[S1]  USDA NASS. "Poultry - Production and Value 2023 Summary." April 2024.
      https://esmis.nal.usda.gov/sites/default/release-files/
      m039k491c/b2775j31b/9k4213149/plva0424.pdf
      -> 9.16 billion broilers produced in 2023.

[S2]  Farm Forward. "Broiler chickens: Who are they and how long do they live?"
      October 2025. https://www.farmforward.com/news/broiler-chickens/
      -> Average slaughter age: 47 days (citing National Chicken Council).

[S3]  USDA NASS. "Livestock Slaughter - 2023 Summary." April 2024.
      https://esmis.nal.usda.gov/sites/default/release-files/
      r207tp32d/wh248d422/p5549g65c/lsan0424.pdf
      -> Commercial cattle slaughter 2023: 32.8 million head.
      -> Commercial hog slaughter 2023: 128.0 million head.

[S4]  Daona Farm. "Friday Fact: Slaughter Age."
      https://www.daonawagyu.com/blog/blog-post-title-four-wde5f
      -> Average beef cattle slaughter age: 18 months.

[S5]  CLEAR Center, UC Davis. "What is the Lifecycle of a Pig in Market
      Production?" October 2023.
      https://clear.ucdavis.edu/explainers/what-lifecycle-pig-market-production
      -> Pigs mature from birth to slaughter in 22-26 weeks; central 6 months.

[S6]  Fischer, B. "Rethink Priorities' Welfare Range Estimates."
      Rethink Priorities, January 2023.
      https://rethinkpriorities.org/research-area/welfare-range-estimates/
      -> Vertebrate welfare ranges cluster within one order of magnitude of
         humans (credence 0.65). RP formally covers pigs and chickens but not
         cattle; cattle welfare range is inferred from RP principles plus the
         mammalian neuroscience literature.

[S7]  Fischer, B. "An Introduction to the Moral Weight Project."
      Rethink Priorities, November 2022.
      https://rethinkpriorities.org/research-area/an-introduction-to-the-moral-weight-project/
      -> Framework: moral weight combines welfare range and sentience
         probability. RP: credence >= 0.3 that chickens, pigs, carp, and
         salmon are sentient; credence >= 0.9 for mammals widely assigned.

[S8]  US Dept of Health and Human Services, ASPE. "HHS Standard Values for
      Regulatory Analysis, 2024." January 2024.
      https://aspe.hhs.gov/sites/default/files/documents/
      cd2a1348ea0777b1aa918089e4965b8c/standard-ria-values.pdf
      -> Central VSL: $13.1 million (2023 USD); range $6.1M-$19.9M.
         Per-year value derived by dividing by ~40 remaining life-years:
         low $150k, central $330k, high $500k.

[S9]  Jelinski, M.D., Ribble, C.S., Campbell, J.R., Janzen, E.D.
      "A review of foot-related lameness in feedlot cattle."
      Canadian Journal of Animal Science, 2024.
      https://doi.org/10.1139/cjas-2024-0047
      -> Lameness: 30-40% of all feedlot treatments; informs beef welfare level.

[S10] MSPCA-Angell. "Farmed Animal Welfare: Pigs."
      https://www.mspca.org/animal_protection/farm-animal-welfare-pigs/
      -> Confinement conditions for market hogs; informs pig welfare level.
"""

from dataclasses import dataclass, field
from typing import Tuple


# ---------------------------------------------------------------------------
# Data structures
# ---------------------------------------------------------------------------

@dataclass
class ScenarioParams:
    """Low / central / high values for a single parameter."""
    low: float
    central: float
    high: float

    def values(self) -> Tuple[float, float, float]:
        return self.low, self.central, self.high


@dataclass
class Species:
    name: str

    # Step 1: Scale
    animals_slaughtered: float   # head per year
    slaughter_age_years: float   # years of life per animal
    source_slaughter_count: str
    source_slaughter_age: str

    # Step 2: Welfare level
    # Fraction of negative welfare range occupied on average across life.
    # 0 = neutral (no suffering), 1 = worst possible suffering.
    welfare_level: ScenarioParams
    welfare_level_notes: str

    # Step 3: Welfare range (relative to humans)
    # How intense can this animal's suffering be, relative to a human's?
    # Source: Rethink Priorities Moral Weight Project [S6][S7].
    welfare_range: ScenarioParams
    welfare_range_notes: str

    # Step 4: Sentience probability
    # Credence that this species has morally relevant subjective experience.
    # Source: Rethink Priorities [S7].
    # NOTE: Correlated with welfare_range (shared evidence base); see
    # METHODOLOGICAL NOTES. The product welfare_range * sentience_probability
    # is the operative "moral weight" used in the final calculation.
    sentience_probability: ScenarioParams
    sentience_notes: str

    # Computed in __post_init__
    animal_life_years: float = field(init=False)

    def __post_init__(self):
        self.animal_life_years = self.animals_slaughtered * self.slaughter_age_years


# ---------------------------------------------------------------------------
# Human welfare-year value  [S8]
# Central VSL $13.1M / ~40 remaining life-years = ~$330k/yr
# ---------------------------------------------------------------------------
HUMAN_WELFARE_YEAR = ScenarioParams(
    low=150_000,
    central=330_000,
    high=500_000,
)
HUMAN_WELFARE_YEAR_SOURCE = (
    "[S8] HHS VSL 2024: central $13.1M (range $6.1M-$19.9M) / ~40 life-years"
)


# ---------------------------------------------------------------------------
# Species definitions
# ---------------------------------------------------------------------------

CHICKEN = Species(
    name="Chicken (broiler)",

    animals_slaughtered=9.16e9,         # [S1]
    slaughter_age_years=47 / 365,       # [S2]  47 days = 0.129 years
    source_slaughter_count="[S1] USDA NASS Poultry Production & Value 2023",
    source_slaughter_age="[S2] Farm Forward / NCC: avg slaughter age 47 days",

    welfare_level=ScenarioParams(
        low=0.30,
        central=0.45,
        high=0.60,
    ),
    welfare_level_notes=(
        "Entire life under intensive production. Severe growth-related "
        "pathologies (skeletal malformation, cardiovascular stress from "
        "selective breeding for rapid growth), stocking density ~0.06 m2/bird "
        "under NCC guidelines, no outdoor access, slaughtered before maturity."
    ),

    welfare_range=ScenarioParams(
        low=0.05,
        central=0.15,
        high=0.30,
    ),
    welfare_range_notes=(
        "[S6][S7] RP central estimates for chickens cluster ~10-20% of human "
        "welfare range before the CFF (critical flicker-fusion frequency) "
        "adjustment. High end (30%) reflects RP with full CFF adjustment "
        "(birds experience more subjective moments/sec than humans). "
        "Low end (5%) reflects conservative reading without CFF."
    ),

    sentience_probability=ScenarioParams(
        low=0.30,
        central=0.70,
        high=0.90,
    ),
    sentience_notes=(
        "[S7] RP: 'no good argument for assigning credence below 0.3 to "
        "chicken sentience.' Central 0.70 reflects broad scientific consensus "
        "on avian sentience post-Cambridge Declaration (2012). High 0.90 "
        "reflects near-certainty view held by most animal welfare scientists."
    ),
)

BEEF = Species(
    name="Beef cattle",

    animals_slaughtered=32.8e6,         # [S3]
    slaughter_age_years=18 / 12,        # [S4]  18 months = 1.5 years
    source_slaughter_count="[S3] USDA NASS Livestock Slaughter 2023: 32.8M head",
    source_slaughter_age="[S4] Industry average: 18 months at slaughter",

    welfare_level=ScenarioParams(
        low=0.15,
        central=0.22,
        high=0.30,
    ),
    welfare_level_notes=(
        "Three-phase life with different welfare profiles per phase. "
        "Cow-calf (~6 mo, pasture): low burden ~0.10. "
        "Backgrounding (~6 mo, pasture/crop residue): moderate ~0.15. "
        "Feedlot (~6 mo, confined pens): higher ~0.25-0.35 due to lameness "
        "[S9], acidosis, respiratory disease, no pasture. "
        "Weighted average across phases is substantially lower than broilers "
        "because ~two-thirds of life is in lower-intensity conditions."
    ),

    welfare_range=ScenarioParams(
        low=0.10,
        central=0.20,
        high=0.40,
    ),
    welfare_range_notes=(
        "RP does not formally cover cattle. Inferred from RP principles "
        "plus mammalian neuroscience literature. [S6][S7] "
        "Central higher than chicken central: stronger neurological evidence "
        "for mammalian sentience (developed limbic system, anterior cingulate "
        "cortex) and broader cognitive proxies (social cognition, learning). "
        "Upper bound not pushed as high as some chicken estimates because "
        "CFF adjustment does NOT favor cattle (lower flicker-fusion frequency "
        "than birds). Per RP, vertebrate ranges cluster within an order of "
        "magnitude of each other."
    ),

    sentience_probability=ScenarioParams(
        low=0.30,
        central=0.70,
        high=0.90,
    ),
    sentience_notes=(
        "[S7] Strong neurological and behavioral evidence for mammalian "
        "sentience. RP lower bound (0.3) applies to all vertebrates. "
        "Central 0.70 and high 0.90 are consistent with broad scientific "
        "consensus; uncertainty primarily reflects contested theories of "
        "consciousness rather than empirical gaps."
    ),
)

PORK = Species(
    name="Pig (market hog)",

    animals_slaughtered=128.0e6,        # [S3]
    slaughter_age_years=6 / 12,         # [S5]  6 months = 0.5 years
    source_slaughter_count="[S3] USDA NASS Livestock Slaughter 2023: 128.0M head",
    source_slaughter_age=(
        "[S5] CLEAR Center UC Davis: 22-26 weeks; central estimate 6 months"
    ),

    welfare_level=ScenarioParams(
        low=0.30,
        central=0.42,
        high=0.55,
    ),
    welfare_level_notes=(
        "Entire life in confinement on slatted floors. [S10] "
        "Tail docking without anesthesia, no rooting or foraging opportunity, "
        "gestation crates for breeding sows during pregnancy. Pigs have "
        "complex social and exploratory behavioral needs largely unmet in "
        "conventional production. Welfare level assessed similarly to "
        "broilers; slightly lower upper bound as growth-related pathologies "
        "are less severe than in fast-growing broiler chickens."
    ),

    welfare_range=ScenarioParams(
        low=0.05,
        central=0.20,
        high=0.40,
    ),
    welfare_range_notes=(
        "[S6][S7] RP formally includes pigs in welfare range estimates. "
        "Per RP, pigs score similarly to chickens on most welfare proxies; "
        "some evidence of slightly higher scores on social cognition and "
        "reversal learning. No CFF uplift (lower flicker-fusion frequency "
        "than birds). Treated as equivalent to cattle given uncertainty. "
        "Central 20% consistent with RP mammalian estimates."
    ),

    sentience_probability=ScenarioParams(
        low=0.30,
        central=0.70,
        high=0.90,
    ),
    sentience_notes=(
        "[S7] RP formally includes pigs; strong behavioral and neurological "
        "evidence for pig sentience. Same range as cattle applies. "
        "Uncertainty primarily reflects philosophical disagreement about "
        "theories of consciousness rather than empirical gaps."
    ),
)

ALL_SPECIES = [CHICKEN, BEEF, PORK]


# ---------------------------------------------------------------------------
# Core calculation
# ---------------------------------------------------------------------------

def compute_welfare_cost(
    species: Species,
    welfare_level: float,
    welfare_range: float,
    sentience_probability: float,
    human_welfare_year_value: float,
) -> float:
    """
    Annual welfare cost =
        animal_life_years
        * welfare_level
        * welfare_range
        * sentience_probability
        * human_welfare_year_value

    Note: welfare_range * sentience_probability = "moral weight".
    These two parameters share a common evidence base; see module docstring.
    """
    return (
        species.animal_life_years
        * welfare_level
        * welfare_range
        * sentience_probability
        * human_welfare_year_value
    )


def run_scenarios(species: Species) -> dict:
    """
    Return low / central / high welfare cost estimates.
    Each scenario uses the corresponding (low, central, or high) value
    for all parameters simultaneously.
    """
    results = {}
    for label, wl, wr, sp, hwy in zip(
        ["low", "central", "high"],
        species.welfare_level.values(),
        species.welfare_range.values(),
        species.sentience_probability.values(),
        HUMAN_WELFARE_YEAR.values(),
    ):
        results[label] = compute_welfare_cost(species, wl, wr, sp, hwy)
    return results


# ---------------------------------------------------------------------------
# Display helpers
# ---------------------------------------------------------------------------

def fmt_dollars(value: float) -> str:
    if value >= 1e12:
        return f"${value/1e12:.1f} trillion"
    elif value >= 1e9:
        return f"${value/1e9:.1f} billion"
    elif value >= 1e6:
        return f"${value/1e6:.0f} million"
    else:
        return f"${value:,.0f}"


def fmt_count(value: float) -> str:
    if value >= 1e9:
        return f"{value/1e9:.2f} billion"
    elif value >= 1e6:
        return f"{value/1e6:.1f} million"
    else:
        return f"{value:,.0f}"


def print_species_report(species: Species) -> dict:
    print("=" * 72)
    print(f"  {species.name.upper()}")
    print("=" * 72)

    # Step 1
    print("\n--- Step 1: Animal-Life-Years ---")
    print(f"  Animals slaughtered (2023): {fmt_count(species.animals_slaughtered)}")
    age_y = species.slaughter_age_years
    print(
        f"  Avg slaughter age:          {age_y:.3f} yr "
        f"({age_y*12:.1f} mo / {age_y*365:.0f} days)"
    )
    print(f"  Animal-life-years/yr:       {fmt_count(species.animal_life_years)}")
    print(f"  Source (count): {species.source_slaughter_count}")
    print(f"  Source (age):   {species.source_slaughter_age}")

    # Step 2
    print("\n--- Step 2: Welfare Level  (0=neutral, 1=worst possible) ---")
    wl = species.welfare_level
    print(f"  Low / Central / High:  {wl.low:.2f} / {wl.central:.2f} / {wl.high:.2f}")
    print(f"  Notes: {species.welfare_level_notes}")

    # Step 3
    print("\n--- Step 3: Welfare Range  (fraction of human welfare range) ---")
    wr = species.welfare_range
    print(f"  Low / Central / High:  {wr.low:.2f} / {wr.central:.2f} / {wr.high:.2f}")
    print(f"  Notes: {species.welfare_range_notes}")

    # Step 4
    print("\n--- Step 4: Sentience Probability ---")
    sp = species.sentience_probability
    print(f"  Low / Central / High:  {sp.low:.2f} / {sp.central:.2f} / {sp.high:.2f}")
    print(f"  Notes: {species.sentience_notes}")

    # Step 5
    print("\n--- Step 5: Human Welfare-Year Value ---")
    hwy = HUMAN_WELFARE_YEAR
    print(
        f"  Low / Central / High:  "
        f"${hwy.low:,.0f} / ${hwy.central:,.0f} / ${hwy.high:,.0f}"
    )
    print(f"  Source: {HUMAN_WELFARE_YEAR_SOURCE}")

    # Effective moral weights (product of steps 3 and 4)
    print("\n--- Effective Moral Weight  (welfare_range * sentience_prob) ---")
    for label, wr_val, sp_val in zip(
        ["Low", "Central", "High"],
        wr.values(),
        sp.values(),
    ):
        print(f"  {label:8s}: {wr_val:.2f} * {sp_val:.2f} = {wr_val*sp_val:.4f}")

    # Results
    print("\n--- Results: Annual Welfare Cost ---")
    print(
        "  Formula: animal_life_years * welfare_level * welfare_range"
        " * sentience_prob * hwy\n"
    )

    results = run_scenarios(species)
    for scenario, wl_val, wr_val, sp_val, hwy_val in zip(
        ["low", "central", "high"],
        species.welfare_level.values(),
        species.welfare_range.values(),
        species.sentience_probability.values(),
        HUMAN_WELFARE_YEAR.values(),
    ):
        cost = results[scenario]
        aly = species.animal_life_years
        print(
            f"  {scenario.capitalize():8s}: "
            f"{fmt_count(aly)} * {wl_val:.2f} * {wr_val:.2f}"
            f" * {sp_val:.2f} * ${hwy_val:,.0f}"
            f"  =  {fmt_dollars(cost)}/yr"
        )

    print()
    return results


# ---------------------------------------------------------------------------
# Cross-species comparison
# ---------------------------------------------------------------------------

# Approximate US annual consumption by species (pounds, 2023)
# Source: USDA ERS per-capita consumption estimates * 335M population
# Chicken: ~100 lb/capita -> ~33.5B lb
# Beef:    ~58 lb/capita  -> ~19.4B lb
# Pork:    ~51 lb/capita  -> ~17.1B lb
CONSUMPTION_LB = {
    "Chicken (broiler)": 33.5e9,
    "Beef cattle":       19.4e9,
    "Pig (market hog)":  17.1e9,
}
CONSUMPTION_SOURCE = (
    "USDA ERS per-capita meat consumption estimates * 335M US population (2023)"
)


def print_comparison(all_results: dict):
    print("=" * 72)
    print("  CROSS-SPECIES COMPARISON")
    print("=" * 72)

    # Total costs
    header = f"  {'Species':<22} {'Low':>15} {'Central':>15} {'High':>15}"
    print(header)
    print("  " + "-" * 69)
    for species in ALL_SPECIES:
        res = all_results[species.name]
        print(
            f"  {species.name:<22}"
            f"  {fmt_dollars(res['low']):>13}"
            f"  {fmt_dollars(res['central']):>13}"
            f"  {fmt_dollars(res['high']):>13}"
        )

    # Per-pound (central)
    print("\n  Per-pound welfare cost (central scenario)")
    print("  " + "-" * 69)
    for species in ALL_SPECIES:
        cost = all_results[species.name]["central"]
        lb = CONSUMPTION_LB[species.name]
        print(f"  {species.name:<22}  ${cost/lb:.2f}/lb")
    print(f"\n  Consumption source: {CONSUMPTION_SOURCE}")

    # Scale reference
    print("\n  Animal-life-years (scale driver)")
    print("  " + "-" * 69)
    for species in ALL_SPECIES:
        print(f"  {species.name:<22}  {fmt_count(species.animal_life_years)}")

    # Effective moral weights (central)
    print("\n  Effective moral weight, central scenario")
    print("  (= welfare_range * sentience_probability)")
    print("  " + "-" * 69)
    for species in ALL_SPECIES:
        mw = species.welfare_range.central * species.sentience_probability.central
        print(f"  {species.name:<22}  {mw:.3f}  ({mw*100:.1f}% of human welfare-year)")


# ---------------------------------------------------------------------------
# Methodological notes
# ---------------------------------------------------------------------------

METHODOLOGICAL_NOTES = """
METHODOLOGICAL NOTES
====================

1. WELFARE_RANGE AND SENTIENCE_PROBABILITY ARE CORRELATED
   Both parameters are estimated from the same behavioral and neurological
   proxies (nociceptors, opioid receptors, reversal learning, etc.). An animal
   that scores highly on these proxies will be assigned both a wider welfare
   range AND a higher sentience probability. Multiplying the two parameters
   therefore double-counts the same underlying evidence to some degree.
   A cleaner approach would use a single consolidated "moral weight" parameter.
   The parameters are kept separate here for transparency and to match the
   published RP framework structure, but users should be aware that the
   combined range (low to high across both parameters) is wider than would be
   justified by treating them as truly independent.

2. CFF (CRITICAL FLICKER-FUSION FREQUENCY) ADJUSTMENT
   RP proposes adjusting welfare ranges upward for species with higher temporal
   resolution (more subjective moments per calendar second than humans).
   This adjustment tends to raise chicken estimates (birds have high CFF)
   and not favor cattle or pigs (lower CFF than birds). It is reflected in
   the chicken welfare_range high end (0.30) and is one reason chicken and
   beef/pork high-end moral weights differ despite similar sentience estimates.
   The CFF-to-welfare mapping is contested; see Fischer (2023) for discussion.

3. WELFARE LEVEL: MOST EMPIRICALLY IMPROVABLE PARAMETER
   Welfare Quality Protocol scoring and similar instruments could yield
   better species- and system-specific estimates of the fraction of the welfare
   range occupied. The values here are informed by the welfare literature but
   are not derived from formal welfare scoring instruments applied to US
   production systems specifically.

4. BEEF CATTLE: THREE-PHASE LIFE
   The welfare_level for beef cattle is a weighted average across cow-calf
   (~0.10), backgrounding (~0.15), and feedlot (~0.28) phases. This yields
   a substantially lower average than for species that spend their entire
   lives under intensive conditions (broilers, pigs).

5. SCOPE
   Covers US production in 2023. Excludes laying hens (~300M birds with
   longer lives under worse conditions than broilers -- adding these would
   increase the chicken estimate by ~20-30%), veal calves, and wild-caught
   fish. Import/export adjustments not applied; production used as proxy
   for consumption.

6. NOTE ON EARLIER ESTIMATES IN THIS ANALYSIS
   A prior manual calculation in the accompanying discussion stated a chicken
   "low" estimate of ~$800 million. The correct value using the parameters
   specified is ~$797 billion. The prior figure contained an arithmetic error.
   The script here is internally consistent.
"""


# ---------------------------------------------------------------------------
# Sources appendix
# ---------------------------------------------------------------------------

SOURCES = """
SOURCES
=======
[S1]  USDA NASS. "Poultry - Production and Value 2023 Summary." April 2024.
      https://esmis.nal.usda.gov/sites/default/release-files/
      m039k491c/b2775j31b/9k4213149/plva0424.pdf

[S2]  Farm Forward. "Broiler chickens: Who are they and how long do they live?"
      October 2025. https://www.farmforward.com/news/broiler-chickens/
      Citing National Chicken Council: average slaughter age 47 days.

[S3]  USDA NASS. "Livestock Slaughter - 2023 Summary." April 2024.
      https://esmis.nal.usda.gov/sites/default/release-files/
      r207tp32d/wh248d422/p5549g65c/lsan0424.pdf
      Cattle: 32.8 million head. Hogs: 128.0 million head.

[S4]  Daona Farm. "Friday Fact: Slaughter Age."
      https://www.daonawagyu.com/blog/blog-post-title-four-wde5f
      Average beef slaughter age: 18 months.

[S5]  CLEAR Center, UC Davis. "What is the Lifecycle of a Pig in Market
      Production?" October 2023.
      https://clear.ucdavis.edu/explainers/what-lifecycle-pig-market-production
      Slaughter age: 22-26 weeks; central estimate 6 months used here.

[S6]  Fischer, B. "Rethink Priorities' Welfare Range Estimates."
      Rethink Priorities, January 2023.
      https://rethinkpriorities.org/research-area/welfare-range-estimates/
      Vertebrate welfare ranges cluster within one order of magnitude of humans.

[S7]  Fischer, B. "An Introduction to the Moral Weight Project."
      Rethink Priorities, November 2022.
      https://rethinkpriorities.org/research-area/an-introduction-to-the-moral-weight-project/
      Framework: moral weight = welfare range * sentience probability.
      RP: credence >= 0.3 for chicken/pig/salmon sentience.

[S8]  US Department of Health and Human Services, ASPE. "HHS Standard Values
      for Regulatory Analysis, 2024." January 2024.
      https://aspe.hhs.gov/sites/default/files/documents/
      cd2a1348ea0777b1aa918089e4965b8c/standard-ria-values.pdf
      Central VSL: $13.1M (2023 USD); range $6.1M-$19.9M.
      Human welfare-year value = VSL / ~40 remaining life-years.

[S9]  Jelinski, M.D., Ribble, C.S., Campbell, J.R., Janzen, E.D.
      "A review of foot-related lameness in feedlot cattle."
      Canadian Journal of Animal Science, 2024.
      https://doi.org/10.1139/cjas-2024-0047

[S10] MSPCA-Angell. "Farmed Animal Welfare: Pigs."
      https://www.mspca.org/animal_protection/farm-animal-welfare-pigs/
"""


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print("\nANIMAL WELFARE COST ESTIMATION -- US MEAT CONSUMPTION (2023)\n")
    all_results = {}
    for species in ALL_SPECIES:
        results = print_species_report(species)
        all_results[species.name] = results
    print_comparison(all_results)
    print(METHODOLOGICAL_NOTES)
    print(SOURCES)


if __name__ == "__main__":
    main()
