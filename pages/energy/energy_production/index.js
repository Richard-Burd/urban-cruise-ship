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
const focusAreaUrl = "energy_production";

const focusAreaName = findFocusAreaName(focusAreaUrl);

const focusAreaDescription = (
  <p>
    Today&apos;s energy system is dominated by fossil fuels: coal, natural gas, and
    oil. Among potential alternatives, hydropower and nuclear fission play
    important roles but are now relatively stagnant; solar and wind are small
    but rapidly growing options; and geothermal, ocean, and fusion power play
    niche roles or are still under development, but they may have great
    potential in the future.
  </p>
);

const EnergyProduction = () => {
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

export default EnergyProduction;
