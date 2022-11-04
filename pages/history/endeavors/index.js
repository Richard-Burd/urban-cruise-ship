import FocusArea2 from "../../../components/FocusArea2";

// these are the drop-down elements that break down endeavors into categories
import EcologyAndEnvironment from "/endeavors/ecology-and-environment.mdx";
import EnergyProductionAndEfficiency from "/endeavors/energy-production-and-efficiency.mdx";
import PollutionRegulations from "/endeavors/pollution-regulations.mdx";
import PublicHealthCampaigns from "/endeavors/public-health-campaigns.mdx";
import PublicHealthProjects from "/endeavors/public-health-projects.mdx";
import ResearchAndDevelopment from "/endeavors/research-and-development.mdx";
import TransportationInfrastructure from "/endeavors/transportation-infrastructure.mdx";
import Miscellaneous from "/endeavors/miscellaneous.mdx";

// This is the three endeavor images that each include all endeavors
import FullSetOfEndeavors from "/endeavors/full-set-of-endeavors.mdx";

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

const focusAreaDescription = <p></p>;

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
      <div className={`article-wrap ${site}-background-gradient pb-12`}>
        <div className={`pt-20`}>
          <EcologyAndEnvironment />
          <EnergyProductionAndEfficiency />
          <PollutionRegulations />
          <PublicHealthCampaigns />
          <PublicHealthProjects />
          <ResearchAndDevelopment />
          <TransportationInfrastructure />
          <Miscellaneous />
          <FullSetOfEndeavors />
        </div>
      </div>
    </>
  );
};

export default HistoryEndeavors;