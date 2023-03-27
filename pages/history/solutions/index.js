import FocusArea2 from "../../../components/FocusArea2";
import SolutionTable from "../../../components/SolutionTable";

//place any drop down elements breaking solutions into categories here

//This is the document that includes the images and tables for the main content of the page. 5 images, multiple tables.

// This is replaced by the component below, delete in future refactoring
// import FullSetOfSolutions from "/solutions/full-set-of-solutions.mdx";


const siteConfig = require("../site_config.json");
const site = siteConfig.specialized_site_name;

const hierarchy = require("../hierarchy.json");
// const hierarchy = require("../newhierarchy.json");
function findFocusAreaName(searchValue) {
  return hierarchy.find(({ focus_area_url }) => {
    return focus_area_url === searchValue;
  }).focus_area_name;
}

// The Focus Area URL is inputted here,
// it should be the same as the folder name,
// You will have to change this each time you
// create or move a focus area.
const focusAreaUrl = "solutions";

const focusAreaName = findFocusAreaName(focusAreaUrl);

const focusAreaDescription = <p></p>;

const Solutions = () => {
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
        
        {/* This is replaced by the component below, delete in future refactoring */}
        {/* <FullSetOfSolutions /> */}

        <SolutionTable />
      </div>
    </>
  );
};

export default Solutions;
