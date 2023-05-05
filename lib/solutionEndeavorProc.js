// a function that renders Solution+Endeavor Efficiency - Benefit over Cost Ratio
// https://www.urbancruiseship.org/history/solutions-and-endeavors/benefit-over-cost
// This page needs to be created after the dynamic bar chart is created
// START HERE: This is thie first function to be built
// - 1. create a <SolutionEndeavorBarChart /> component; copy/past from TestBarChart.js
// - 2. import empty exported function from here (lib/solutionEndeavorProc.js) to ensure it works
// - 3. create the function and have <solutionEndeavorBarChart /> receive & render it.
import { endeavorData } from "../data/endeavorData.js";
import { solutionData } from "../data/solutionData.js";

// process the solution & endeavor data
function processData(data) {
  return data.map((item) => {
    const barlength = item.benefit - item.cost;
    const displayedValue =
      barlength >= 100
        ? `$${Math.round(barlength).toLocaleString()}`
        : `$${barlength.toFixed(1)}`;
    const name = item.endeavor || item.solution;
    return {
      ...item,
      barlength,
      displayedValue,
      name,
    };
  });
}

// combine solution & endeavor data into single array
export function solutionEndeavorBenefitOverCost() {
  const processedEndeavorData = processData(endeavorData);
  const processedSolutionData = processData(solutionData);

  const combinedData = [...processedEndeavorData, ...processedSolutionData];

  combinedData.sort((a, b) => b.barlength - a.barlength);

  console.log(combinedData);
}

// strip out all unnecessary data before exporting

// a function that renders Solution+Endeavor Net Benefit - Benefit minus Cost
// https://www.urbancruiseship.org/history/solutions-and-endeavors/benefit-minus-cost
// This page needs to be created after the dynamic bar chart is created

// a function that renders Solution+Endeavor Cost and Efficiency Comparison
// https://www.urbancruiseship.org/history/solutions-and-endeavors/cost-efficiency-comparison
// This page needs to be created after the dynamic bar chart is created
