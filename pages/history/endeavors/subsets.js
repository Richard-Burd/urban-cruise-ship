import JavaScriptArticlePage from "../../../components/JavaScriptArticlePage";
import SubsetDropdown from "../../../components/wipEndeavorSubsetDropdown";

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
        <div className="pt-6 pb-12 italic standard-font-3 text-zinc-800 text-2xl">
          Here, we examine the financial performance of historical Endeavors,
          grouped into several categories. Metrics include benefit/cost ratio
          and net benefit.
        </div>
        <center>
          <h2>{focusAreaName} broken down by category</h2>
          <h4>Click the bars to expand the section</h4>
        </center>
        <SubsetDropdown
          title={"Ecology & Environment"}
          focusAreaUrl={focusAreaUrl}
        />
        <SubsetDropdown
          title={"Energy Production & Efficiency"}
          focusAreaUrl={focusAreaUrl}
        />
        <SubsetDropdown
          title={"Public Health Campaigns"}
          focusAreaUrl={focusAreaUrl}
        />
        <SubsetDropdown
          title={"Public Health Projects"}
          focusAreaUrl={focusAreaUrl}
        />
        <SubsetDropdown
          title={"Research and Development"}
          focusAreaUrl={focusAreaUrl}
        />
        <SubsetDropdown
          title={"Transportation Infrastructure"}
          focusAreaUrl={focusAreaUrl}
        />
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
