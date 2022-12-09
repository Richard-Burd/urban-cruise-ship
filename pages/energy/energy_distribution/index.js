import FocusArea2 from "../../../components/FocusArea2";

const siteConfig = require("../site_config.json");
const site = siteConfig.specialized_site_name;

const hierarchy = require("../hierarchy.json");
function findFocusAreaName(searchValue) {
  return hierarchy.find(({ focus_area_url }) => {
    return focus_area_url === searchValue;
  }).focus_area_name;
}

// The Focus Area URL is inputted here,
// it should be the same as the folder name,
// You will have to change this each time you
// create or move a focus area.
const focusAreaUrl = "energy_distribution";

const focusAreaName = findFocusAreaName(focusAreaUrl);

const focusAreaDescription = (
  <p>
    In this section, we present key data on the forms in which energy can be
    transported and used. The main issues in the power grid are in overall
    design, reliability--particularly with the advent of variable energy power
    sources--and storge of electricity. We review the roles, possibilities, and
    limitations of hydrogen, ammonia, methanol, synfuels, and methane as fuels.
    We also review the distribution of fossil fuels, which may remain important
    as a distribution network of fuels of non-fossil origin.
  </p>
);

const EnergyDistribution = () => {
  return (
    <>
      <FocusArea2
        site={site}
        focusAreaName={focusAreaName}
        focusAreaUrl={focusAreaUrl}
        hierarchy={hierarchy}
        /* focusAreaDescription={focusAreaDescription} */
      />
    </>
  );
};

export default EnergyDistribution;
