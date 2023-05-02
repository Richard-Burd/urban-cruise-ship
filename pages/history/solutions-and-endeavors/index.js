import FocusArea2 from "../../../components/FocusArea2";
import dynamic from 'next/dynamic';

// place any drop down elements here

// This is the document that includes the images and tables for the main content of the page. one table, mixing solutions and endeavors

// This is replaced by the component below, delete in future refactoring
// import FullSetOfSolutionsAndEndeavors from "/endeavors/full-set-of-solutions-and-endeavors.mdx";

import SolutionEndeavorTable from "../../../components/SolutionEndeavorTable";

const siteConfig = require("../site_config.json");
const site = siteConfig.specialized_site_name;

const TestBarChart = dynamic(() => import("../../../components/TestBarChart"), { ssr: false });
const TestDualBarChart = dynamic(() => import("../../../components/TestDualBarChart"), { ssr: false });

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
      <div className="custom-background">
        <h2></h2>
        <p></p>
        {/* This is replaced by the component below, delete in future refactoring */}
        {/* <FullSetOfSolutionsAndEndeavors /> */}

        <br></br><br></br>
        <SolutionEndeavorTable />
        <br></br><br></br>
        <br></br><br></br>
        <TestBarChart
          barChartTitle={"This chart is a test under construction"}
          scale={"positive"}
          barHeight={200}
          rightSide={100}
          leftSide={400}
          totalHeight={180} 
          totalWidth={1000}
          solutionBackgroundWidth={400}
          solutionBackgroundOffset={-395}
          labelText={10} // -10 for a negative bar chart, 10 for a positive bar chart
          labelAnchor={"start"} // "end" for a negative bar chart "start" for a positive bar chart
          titleText={0} // {460} for negative values, {0} for positive values
          titleAnchor={"end"} // "start" for a negative bar chart "end" for a positive bar chart
        />
        <TestBarChart
          barChartTitle={null}
          scale={"negative"}
          barHeight={120}
          rightSide={500}
          leftSide={0}
          totalHeight={190} 
          totalWidth={1000}
          solutionBackgroundWidth={400}
          solutionBackgroundOffset={-395}
          labelText={-10} // -10 for a negative bar chart, 10 for a positive bar chart
          labelAnchor={"end"} // "end" for a negative bar chart "start" for a positive bar chart
          titleText={460} // {460} for negative values, {0} for positive values
          titleAnchor={"start"} // "start" for a negative bar chart "end" for a positive bar chart
        />
        {/* <TestDualBarChart /> */}
      </div>
      <style>
        {`
          .custom-background {
            background-image: linear-gradient(90deg, #fff, #aed1d7);;
          }
        `}
      </style>
    </>
  );
};

export default SolutionsAndEndeavors;
