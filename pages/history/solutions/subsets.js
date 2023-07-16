import JavaScriptArticlePage from "../../../components/JavaScriptArticlePage";
import SolutionSubsetDropdown from "../../../components/SolutionSubsetDropdown";

const siteConfig = require("../site_config.json");
const site = siteConfig.specialized_site_name;

const hierarchy = require("../hierarchy.json");
const focusAreaUrl = "solutions";

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
        <SolutionSubsetDropdown title={"Ecology & Environment"} focusAreaUrl={focusAreaUrl}/>
        <SolutionSubsetDropdown title={"Energy Production & Efficiency"} focusAreaUrl={focusAreaUrl} />
        <SolutionSubsetDropdown title={"Public Health Campaigns"} focusAreaUrl={focusAreaUrl} />
        <SolutionSubsetDropdown title={"Public Health Projects"} focusAreaUrl={focusAreaUrl} />
        {/* These two presently contain no solutions. */}
{/*         <SolutionSubsetDropdown title={"Research and Development"} focusAreaUrl={focusAreaUrl} />
        <SolutionSubsetDropdown title={"Transportation Infrastructure"} focusAreaUrl={focusAreaUrl} /> */}
        <SolutionSubsetDropdown title={"Miscellaneous"} focusAreaUrl={focusAreaUrl} />
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