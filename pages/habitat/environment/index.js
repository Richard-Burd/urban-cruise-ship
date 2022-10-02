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
const focusAreaUrl = "environment";

const focusAreaName = findFocusAreaName(focusAreaUrl);

const focusAreaDescription = (
  <p>
    In this section, we review the most important environmental issues and their
    major drivers.
  </p>
);

const HabitatEnvironment = () => {
  return (
    <>
      <FocusArea
        site={site}
        focusAreaName={focusAreaName}
        focusAreaUrl={focusAreaUrl}
        hierarchy={hierarchy}
        focusAreaDescription={focusAreaDescription}
      />
      <div>add the following with the appropriate links:</div>
      <div>
        See also solutions within the food system to nutrient pollution and
        urban design solutions to light pollution, and noise pollution.
      </div>
    </>
  );
};

export default HabitatEnvironment;
