import JavaScriptArticlePage from "../../../components/JavaScriptArticlePage";
import SolutionEndeavorDropdown from "../../../components/SolutionEndeavorDropdown";

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
console.log('subset:', subset); // Add this debug statement to check the value of the subset prop
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
        <h2>This Page is Under Construction</h2>
        <p>Please check back soon for updates!</p>
        <SolutionEndeavorDropdown title={"Ecology & Environment"} focusAreaUrl={focusAreaUrl}  subset={"ecology-environment"}/>
        <SolutionEndeavorDropdown title={"Energy Production & Efficiency"} focusAreaUrl={focusAreaUrl} />
        <SolutionEndeavorDropdown title={"Public Health Campaigns"} focusAreaUrl={focusAreaUrl} />
        <SolutionEndeavorDropdown title={"Public Health Projects"} focusAreaUrl={focusAreaUrl} />
        <SolutionEndeavorDropdown title={"Research and Development"} focusAreaUrl={focusAreaUrl} />
        <SolutionEndeavorDropdown title={"Transportation Infrastructure"} focusAreaUrl={focusAreaUrl} />
        <SolutionEndeavorDropdown title={"Miscellaneous"} focusAreaUrl={focusAreaUrl} />
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
console.log('TOP LEVEL', subset); // Add this debug statement to check the value of the subset prop
export default Solutions;