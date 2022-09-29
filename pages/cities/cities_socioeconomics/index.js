import FocusArea from "../../../components/FocusArea";
const hierarchy = require("../hierarchy.json");

function findChildren(searchValue) {
  return hierarchy.find(({ focus_area_url }) => {
    return focus_area_url === searchValue;
  }).articles;
}

// The parent Specialized site name is inputted here
const site = "cities";

// The parent Specialized site name is inputted here
const focusAreaName = "Socioeconomics";

// The Focus Area URL is inputted here
const focusAreaUrl = "cities_socioeconomics";

const CitiesSocioeconomics = () => {
  return (
    <>
      <FocusArea
        site={site}
        focusAreaName={focusAreaName}
        focusAreaUrl={focusAreaUrl}
        hierarchy={hierarchy}
      />
    </>
  );
};

export default CitiesSocioeconomics;
