import FocusArea from "../../../components/FocusArea";
import FocusAreaArticleLink from "../../../components/FocusAreaArticleLink";

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

const focusAreaDescription = (
  <p>
   
  </p>
);

const HistoryEndeavors = () => {
  return (
    <>
      <FocusArea
        site={site}
        focusAreaName={focusAreaName}
        focusAreaUrl={focusAreaUrl}
        hierarchy={hierarchy}
        focusAreaDescription={focusAreaDescription}
      />
      <div className={`${site}-background-gradient`}>
        <FocusAreaArticleLink
          site={site}
          text={`Our legacy site has an Endeavors page`}
          urlPath={`${process.env.NEXT_PUBLIC_LEGACY_UCS_WEBSITE_URL}/solution/history/endeavors`}
        />
      </div>
    </>
  );
};

export default HistoryEndeavors;
