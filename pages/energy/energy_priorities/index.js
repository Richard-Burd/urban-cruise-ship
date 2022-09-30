import FocusArea from "../../../components/FocusArea";

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
const focusAreaUrl = "energy_priorities";

const focusAreaName = findFocusAreaName(focusAreaUrl);

const EnergyPriorities = () => {
  return (
    <>
      <FocusArea
        site={site}
        focusAreaName={focusAreaName}
        focusAreaUrl={focusAreaUrl}
        hierarchy={hierarchy}
      />
      <div className={`${site}-background-gradient`}>
        a link to Michael&apos;s Energy page Priorities article will go here (ISSUE: oddly-placed-articles)
      </div>
    </>
  );
};

export default EnergyPriorities;
