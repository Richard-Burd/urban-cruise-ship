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
const focusAreaUrl = "endeavors";

const focusAreaName = findFocusAreaName(focusAreaUrl);

const focusAreaDescription = (
  <div className="italic standard-font-3 text-zinc-800">
    Here, we compare historical Endeavors on the basis of performance:
    benefit/cost ratio and net benefits.
  </div>
);

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
    </>
  );
};

export default HistoryEndeavors;
