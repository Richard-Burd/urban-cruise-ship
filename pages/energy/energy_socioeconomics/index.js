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
const focusAreaUrl = "energy_socioeconomics";

const focusAreaName = findFocusAreaName(focusAreaUrl);

const focusAreaDescription = (
  <p>
    We review policy options for clean energy deployment, major causes and
    impacts of climate change, and economic considerations that govern future
    energy scenarios. Of particular importance is the rebound effect, or the
    tendency for a portion of expected environmental benefits from clean energy
    deployment or energy efficiency to be taken back by new demand.
  </p>
);

const EnergySocioeconomics = () => {
  return (
    <>
      <FocusArea
        site={site}
        focusAreaName={focusAreaName}
        focusAreaUrl={focusAreaUrl}
        hierarchy={hierarchy}
        focusAreaDescription={focusAreaDescription}
      />
    </>
  );
};

export default EnergySocioeconomics;
