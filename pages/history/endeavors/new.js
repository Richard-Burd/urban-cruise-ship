import FocusArea2 from "../../../components/FocusArea2";
import EcologyAndEnvironment from "./ecology-and-environment.mdx";

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
const focusAreaUrl = "endeavors";

const focusAreaName = findFocusAreaName(focusAreaUrl);

const focusAreaDescription = <p></p>;

const HistoryEndeavors = () => {
  return (
    <>
      <FocusArea2
        site={site}
        focusAreaName={focusAreaName}
        focusAreaUrl={focusAreaUrl}
        hierarchy={hierarchy}
        focusAreaDescription={focusAreaDescription}
      />
      <div className={`article-wrap ${site}-background-gradient pb-12`}>
        <div className={`pt-20`}>
          <EcologyAndEnvironment />
        </div>
      </div>
    </>
  );
};

export default HistoryEndeavors;
