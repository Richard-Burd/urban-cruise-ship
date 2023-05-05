// a function that renders Solution+Endeavor Efficiency - Benefit over Cost Ratio
// https://www.urbancruiseship.org/history/solutions-and-endeavors/benefit-over-cost
// This page needs to be created after the dynamic bar chart is created
// START HERE: This is thie first function to be built
// - 1. create a <SolutionEndeavorBarChart /> component; copy/past from TestBarChart.js
// - 2. import empty exported function from here (lib/solutionEndeavorProc.js) to ensure it works
// - 3. create the function and have <solutionEndeavorBarChart /> receive & render it.

import { endeavorData } from "../data/endeavorData.js";
import { solutionData } from "../data/solutionData.js";

// process the benefit-cost for solution & endeavor data
function processBenefitMinusCost(data) {
  return data.map((item) => {
    const barlength = item.benefit - item.cost;
    const formatNumber = (num) => {
      let formattedNumber = num.toPrecision(5);
      if (
        parseFloat(formattedNumber) === Math.round(parseFloat(formattedNumber))
      ) {
        return Math.round(parseFloat(formattedNumber)).toLocaleString();
      } else {
        formattedNumber = parseFloat(formattedNumber).toFixed(
          5 - Math.floor(Math.log10(Math.abs(parseFloat(formattedNumber))))
        );
        // Remove trailing zeros after the decimal point
        formattedNumber = formattedNumber.replace(/(\.\d*?[1-9])0+$/, "$1");

        // Add commas for the whole number part
        const [whole, decimal] = formattedNumber.split(".");
        const formattedWhole = parseInt(whole, 10).toLocaleString();
        return decimal ? `${formattedWhole}.${decimal}` : formattedWhole;
      }
    };

    const displayedValue = `${barlength >= 0 ? "$" : "-$"}${formatNumber(
      Math.abs(barlength)
    )}`;

    const name = item.endeavor || item.solution;
    return {
      ...item,
      barlength,
      displayedValue,
      name,
    };
  });
}

// process the benefit-cost for solution & endeavor data
function processBenefitOverCost(data) {
  return data.map((item) => {
    const barlength = item.benefit / item.cost;
    const formatNumber = (num) => {
      let formattedNumber = num.toPrecision(5);
      if (
        parseFloat(formattedNumber) === Math.round(parseFloat(formattedNumber))
      ) {
        return Math.round(parseFloat(formattedNumber)).toLocaleString();
      } else {
        formattedNumber = parseFloat(formattedNumber).toFixed(
          5 - Math.floor(Math.log10(Math.abs(parseFloat(formattedNumber))))
        );
        // Remove trailing zeros after the decimal point
        formattedNumber = formattedNumber.replace(/(\.\d*?[1-9])0+$/, "$1");

        // Add commas for the whole number part
        const [whole, decimal] = formattedNumber.split(".");
        const formattedWhole = parseInt(whole, 10).toLocaleString();
        return decimal ? `${formattedWhole}.${decimal}` : formattedWhole;
      }
    };

    const displayedValue = `${barlength >= 0 ? "$" : "-$"}${formatNumber(
      Math.abs(barlength)
    )}`;

    const name = item.endeavor || item.solution;
    return {
      ...item,
      barlength,
      displayedValue,
      name,
    };
  });
}

// strip unwanted key-value pairs from the data
function stripData(data) {
  return data.map((item) => {
    const { name, link, barlength, displayedValue, site } = item;
    return {
      name,
      link,
      barlength,
      displayedValue,
      site,
    };
  });
}

// combine solution & endeavor data for the benefit-cost calculation
export function solutionEndeavorBenefitMinusCost() {
  const processedEndeavorData = processBenefitMinusCost(endeavorData);
  const processedSolutionData = processBenefitMinusCost(solutionData);

  const combinedData = [...processedEndeavorData, ...processedSolutionData];

  combinedData.sort((a, b) => b.barlength - a.barlength);

  const strippedData = stripData(combinedData);

  // console.log(strippedData);
  return strippedData;
}

// combine solution & endeavor data for the benefit/cost calculation
export function solutionEndeavorBenefitOverCost() {
  const processedEndeavorData = processBenefitOverCost(endeavorData);
  const processedSolutionData = processBenefitOverCost(solutionData);

  const combinedData = [...processedEndeavorData, ...processedSolutionData];

  combinedData.sort((a, b) => b.barlength - a.barlength);

  const strippedData = stripData(combinedData);

  // console.log(strippedData);
  return strippedData;
}

// a function that renders Solution+Endeavor Net Benefit - Benefit minus Cost
// https://www.urbancruiseship.org/history/solutions-and-endeavors/benefit-minus-cost
// This page needs to be created after the dynamic bar chart is created

// a function that renders Solution+Endeavor Cost and Efficiency Comparison
// https://www.urbancruiseship.org/history/solutions-and-endeavors/cost-efficiency-comparison
// This page needs to be created after the dynamic bar chart is created
