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
const focusAreaUrl = "cities";

const focusAreaName = findFocusAreaName(focusAreaUrl);

const focusAreaDescription = (
  <p>
    Industry is the largest energy-consuming sector in the world economy. We
    compare major options for production of industrial heat--for which
    non-fossil fuel options are not yet readily available--and for major
    commodities such as iron and steel, chemicals and plastics, aluminum, paper
    and pulp, and cement. We review methods for capture, storage, and utilizing
    CO2 and energy efficiency potential in design of industrial systems.
    Recycling, and to a lesser extent material reduction, are readily available
    tools to reduce the impacts of major commodities.
  </p>
);

const CitiesEnergy = () => {
  return (
    <>
      <FocusArea
        site={site}
        focusAreaName={focusAreaName}
        focusAreaUrl={focusAreaUrl}
        hierarchy={hierarchy}
        /* focusAreaDescription={focusAreaDescription} */
      />
    </>
  );
};

export default CitiesEnergy;
