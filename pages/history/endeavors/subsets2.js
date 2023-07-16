import JavaScriptArticlePage from "../../../components/JavaScriptArticlePage";
import SolutionEndeavorSubsetDropdown from "../../../components/SolutionEndeavorSubsetDropdown";

const siteConfig = require("../site_config.json");
const site = siteConfig.specialized_site_name;

const hierarchy = require("../hierarchy.json");
const focusAreaUrl = "endeavors";

import ArticleImage from "/components/ArticleImage.js";
function findFocusAreaName(searchValue) {
  return hierarchy.find(({ focus_area_url }) => {
    return focus_area_url === searchValue;
  }).focus_area_name;
}

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
        <SolutionEndeavorSubsetDropdown title={"Ecology & Environment"} focusAreaUrl={focusAreaUrl} />
        <SolutionEndeavorSubsetDropdown title={"Energy Production & Efficiency"} focusAreaUrl={focusAreaUrl} />
        <SolutionEndeavorSubsetDropdown title={"Public Health Campaigns"} focusAreaUrl={focusAreaUrl} />
        <SolutionEndeavorSubsetDropdown title={"Public Health Projects"} focusAreaUrl={focusAreaUrl} />
        <SolutionEndeavorSubsetDropdown title={"Research and Development"} focusAreaUrl={focusAreaUrl} />
        <SolutionEndeavorSubsetDropdown title={"Transportation Infrastructure"} focusAreaUrl={focusAreaUrl} />
        <SolutionEndeavorSubsetDropdown title={"Miscellaneous"} focusAreaUrl={focusAreaUrl} />
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