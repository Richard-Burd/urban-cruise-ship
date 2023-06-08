import React from "react";
import JavaScriptArticlePage from "../../../components/JavaScriptArticlePage";
import { solutionEndeavorBenefitOverCost } from "../../../lib/dynamicBarCharts/solutionEndeavorProc";
import dynamic from "next/dynamic";

const DynamicSingleBarChart2 = dynamic(
  () => import("../../../components/DynamicSingleBarChart2"),
  { ssr: false }
);

const siteConfig = require("../site_config.json");
const site = siteConfig.specialized_site_name;

const hierarchy = require("../hierarchy.json");
const focusAreaUrl = "solutions-and-endeavors";

function findFocusAreaName(searchValue) {
  return hierarchy.find(({ focus_area_url }) => {
    return focus_area_url === searchValue;
  }).focus_area_name;
}

const focusAreaName = findFocusAreaName(focusAreaUrl);
const focusAreaDescription = <p></p>;

const Solutions = () => {
  const scaleSize = 0.3; // Reduce the size by 50%
  const translateX = -340; // Adjust the translate value to move left or right
  const translateY = -3900; // Adjust the translate value to move up or down

  const chartContainerStyle = {
    transform: `scale(${scaleSize}) translate(${translateX}px, ${translateY}px)`,
  };

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
        <h2>This is a new test page</h2>
        <p>We will try shrink-wrapping our dynamic bar charts in here</p>
        <br></br><br></br>
        <center><b>Solutions & Endeavors - Efficiency (Benefit Over Cost Ratio)</b></center>
        <div style={chartContainerStyle}>
          <DynamicSingleBarChart2
            barChartTitle={""}
            barChartSubTitle={""}
            scale={"positive"}
            rightSide={55}
            leftSide={455}
            titleText={0}
            fetchDataFunc={solutionEndeavorBenefitOverCost}
          />
        </div>
      </div>
      <style jsx>{`
        .custom-background {
          background-image: linear-gradient(90deg, #fff, #aed1d7);
        }
      `}</style>
    </div>
  );
};

export default Solutions;
