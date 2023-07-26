import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import convertToUrlSlug from "../lib/convertToUrlSlug";
import DynamicSingleBarChart from "/components/DynamicSingleBarChart.js";
import DynamicDoubleBarChart from "/components/DynamicDoubleBarChart.js";
import SubsetTable from "/components/SubsetTable.js";
import {
  endeavorBenefitMinusCost,
  endeavorBenefitOverCost,
  endeavorCostEfficiencyComparison,
} from "/lib/dynamicBarCharts/endeavorProc";


const NoSsrAnimatePresence = dynamic(() => import("framer-motion").then((m) => m.AnimatePresence), {
  ssr: false,
});

const SolutionEndeavorDropdown = ({ title, focusAreaUrl }) => {
  const [isVisible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes(`#${convertToUrlSlug(title)}`)) {
      setVisible(true);
    }
  }, [router.asPath, title]);

  const handleDropdownClick = () => {
    setVisible((prevVisible) => !prevVisible);
  };
const subsetProp = convertToUrlSlug(title); //sets the value of the subset so that it can pass this prop to the table to be used for filtering

  return (
    <>
      <div className="endeavor-dropdown" id={convertToUrlSlug(title)}>
        <div className="overflow-hidden pb-8">
          <motion.div onClick={handleDropdownClick}>
            <div className="endeavor-dropdown-color cursor-pointer endeavor-dropdown-elliptical-geometry font-bold relative endeavor-dropdown-shadow-geometry mx-2 sm:mx-16 standard-font-3 text-center hover:text-gray-100 tracking-wider transition text-3xl z-20">
              <div className="p-4">{title}</div>
            </div>
          </motion.div>
        </div>
        <NoSsrAnimatePresence>
          {isVisible && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { height: "auto", y: 0 },
                collapsed: { height: 0, y: "any-prefer-fixed" },
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <div className="this-is-the-dropdown-that-needs-to-be-style bg-slate-200 border border-slate-900 mx-2 sm:mx-16 endeavor-dropdown-elliptical-geometry endeavor-dropdown-shadow-geometry -translate-y-24">
                <div className="pt-20" style={{paddingBottom: '40px'}}>
                  {/* the paddingBottom value here ensures the table does not overhang the edges,
                  this is due to there being no references listed as a footnote on these dropdowns*/}
                  <center>
                  <section style={{paddingBottom: '30px'}}>
{/* there is a problem with the negative ratios showing up as positive. TODO */}
                  <DynamicSingleBarChart
                    barChartTitle={`Benefit Over Cost Ratio`}
                    scale={"positive"}
                    rightSide={75}
                    leftSide={425}
                    titleText={0}
                    fetchDataFunc={endeavorBenefitOverCost}
                    
                    subset={subsetProp}
                  />
                  <DynamicSingleBarChart
                    barChartTitle={"Net Benefit (Benefit minus Cost)"}
                    barChartSubTitle={""}
                    scale={"positive"}
                    rightSide={75}
                    leftSide={425}
                    titleText={0}
                    fetchDataFunc={endeavorBenefitMinusCost}

                    subset={subsetProp}
                  />
                 <DynamicSingleBarChart
                    barChartTitle={""}
                    scale={"negative"}
                    rightSide={295}
                    leftSide={-50}
                    solutionBackgroundOffset={605}
                    titleText={495}
                    fetchDataFunc={endeavorBenefitMinusCost}
                    
                    subset={subsetProp}
                  />
                                    {/* TODO the double bar chart should get worked on once the single is functioning. */}
                <DynamicDoubleBarChart
                    barChartTitle={`Cost and Efficiency`}
                    barChartSubTitle={"Benefit / cost ratio listed below cost"}
                    scale={"positive"}
                    rightSide={75}
                    leftSide={425}
                    titleText={0}
                    fetchDataFunc={
                      /* 
                        This "6.7" input value below is the number times the lower bar
                        (that represents the benefit / cost ratio) is multiplied by its
                        length.  The input value is determined by the longest benefit / cost
                        bar such that this bar does not exceed the width of the chart.  If 
                        you add a new endeavor to the endeavorData.js file, and it has a 
                        benefit / cost ratio that is longer than the longest benefit / cost
                        ratio in the endeavorData.js file, then you will need to decrease this
                        input value below so that the lower bar does not exceed the width of
                        the chart.
                      */
                      () => endeavorCostEfficiencyComparison(6.7, subsetProp)}
                    
                  /> 
                  </section>

                  <>
                    <h2>Interactive Table</h2>
                    <h4>Sort this table by clicking on the black column headings</h4>
                  </>

                  <SubsetTable subset={subsetProp} focusAreaUrl = {focusAreaUrl} />
                
                

  
                  </center>
                  {/*
                      Eventually this component will replace the <EndeavorDropdown /> component
                      This component takes in "focusAreaUrl" as a prop so you can display either
                      solutions or solutions and endeavors, depending on the parent component.

                      Pseudocode:
                      - Get data from the ./data directory; either solutions or solutions and endeavors
                        ...depending on the "focusAreaUrl" value.
                      - Create a [displayData] array of data you want to display in the components below:
                          1.) get the right data based on "focusAreaUrl"
                          2.) solutionData has the subset in the "subset" property
                          3.) endeavorData also now has the subset in the "subset" property 
                                if "subset" == this SolutionEndeavorDropdown's "title" prop..
                                   pull it into the [displayData] array
                      - Import the bar chart components from the ./components directory
                          1.) pass in the [displayData] array
                          2.) render the items in the [displayData] array
                      - Import the table component from the ./components directory
                          1.) pass in the [displayData] array
                          2.) render the items in the [displayData] array
                  */}
                </div>
              </div>
            </motion.div>
          )}
        </NoSsrAnimatePresence>
      </div>
      <style jsx>{`
        .endeavor-dropdown-elliptical-geometry {
          border-bottom-left-radius: 110px 46px;
          border-bottom-right-radius: 110px 46px;
          border-top-left-radius: 110px 46px;
          border-top-right-radius: 110px 46px;
        }
        .endeavor-dropdown-shadow-geometry {
          box-shadow: 4px 6px 6px #86888f;
        }
        .endeavor-dropdown-color {
          background-color: #bfc4cdff;
        }
        .endeavor-dropdown-color:hover {
          background-color: #374151;
        }
      `}</style>
    </>
  );
};

export default SolutionEndeavorDropdown;
