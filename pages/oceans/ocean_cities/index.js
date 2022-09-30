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
const focusAreaUrl = "ocean_cities";

const focusAreaName = findFocusAreaName(focusAreaUrl);

const OceanCities = () => {
  return (
    <>
      <FocusArea
        site={site}
        focusAreaName={focusAreaName}
        focusAreaUrl={focusAreaUrl}
        hierarchy={hierarchy}
      />
      <div className={`${site}-background-gradient`}>
        a link to Michael&apos;s Cities article in the Oceans Site will go here
        (ISSUE: oddly-placed-articles)
      </div>
    </>
  );
};

export default OceanCities;
