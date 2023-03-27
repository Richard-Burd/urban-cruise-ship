import FocusArea2 from "../../../components/FocusArea2";

// place any drop down elements here

// This is the document that includes the images and tables for the main content of the page. one table, mixing solutions and endeavors

// This is replaced by the component below, delete in future refactoring
// import FullSetOfSolutionsAndEndeavors from "/endeavors/full-set-of-solutions-and-endeavors.mdx";

import SolutionEndeavorTable from "../../../components/SolutionEndeavorTable";

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
const focusAreaUrl = "solutions-and-endeavors";

const focusAreaName = findFocusAreaName(focusAreaUrl);

const focusAreaDescription = <p></p>;

const SolutionsAndEndeavors = () => {
  return (
    <>
      <FocusArea2
        site={site}
        focusAreaName={focusAreaName}
        focusAreaUrl={focusAreaUrl}
        hierarchy={hierarchy}
        focusAreaDescription={focusAreaDescription}
      />
      <div className="mx-4 my-16">
        <h2></h2>
        <p></p>
        {/* This is replaced by the component below, delete in future refactoring */}
        {/* <FullSetOfSolutionsAndEndeavors /> */}
        <SolutionEndeavorTable />
      </div>
    </>
  );
};

export default SolutionsAndEndeavors;
