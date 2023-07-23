import JavaScriptArticlePage from "../../../components/JavaScriptArticlePage";
import SubsetDropdown from "../../../components/wipSolutionSubsetDropdown";

const siteConfig = require("../site_config.json");
const site = siteConfig.specialized_site_name;

const hierarchy = require("../hierarchy.json");
const focusAreaUrl = "solutions";

import ArticleImage from "/components/ArticleImage.js";
function findFocusAreaName(searchValue) {
  return hierarchy.find(({ focus_area_url }) => {
    return focus_area_url === searchValue;
  }).focus_area_name;
}

/* README: you must uncomment any sections where we get more than 1 solution. Some have been
commented out for this reason */

const focusAreaName = findFocusAreaName(focusAreaUrl);
const focusAreaDescription = <p></p>;

const Solutions = () => {
  return (
    <div>
      <JavaScriptArticlePage
        site={site}
        focusAreaName={focusAreaName}
        focusAreaUrl={focusAreaUrl} 
        hierarchy={hierarchy} 
        focusAreaDescription={focusAreaDescription}
      />
      <div className="custom-background">
      <center>
          <h2>{focusAreaName} broken down by category</h2>
          <h4>Click the bars to expand the section</h4>
        </center>
        <SubsetDropdown title={"Ecology & Environment"} focusAreaUrl={focusAreaUrl} />
        <SubsetDropdown title={"Energy Production & Efficiency"} focusAreaUrl={focusAreaUrl} />
        <SubsetDropdown title={"Public Health Campaigns"} focusAreaUrl={focusAreaUrl} />
        {/* Commented out until there is more than 1 item to compare */}
        {/* <SubsetDropdown title={"Public Health Projects"} focusAreaUrl={focusAreaUrl} /> */}
        {/* <SubsetDropdown title={"Research and Development"} focusAreaUrl={focusAreaUrl} /> */}
        {/* <SubsetDropdown title={"Transportation Infrastructure"} focusAreaUrl={focusAreaUrl} /> */}
        <SubsetDropdown title={"Miscellaneous"} focusAreaUrl={focusAreaUrl} />
      </div>
      <style>
        {`
          .custom-background {
            background-image: linear-gradient(90deg, #fff, #aed1d7);;
          }
        `}
      </style>
    </div>
  );
};

export default Solutions;