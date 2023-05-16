// import statements used by all three services
import { endeavorData } from "../data/endeavorData.js";
import { solutionData } from "../data/solutionData.js";

// strip unwanted key-value pairs from the data in benefit-cost,
// and benefit/cost calculations (used by the first two services)
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

function formatDecimalAndThousandsSeparator(num) {
  let formattedNumber = num;

  if (formattedNumber >= 100) {
    // if ≥ 100, no decimal places
    formattedNumber = Math.round(formattedNumber);
  } else if (formattedNumber < 1 && formattedNumber > 0) {
    // for numbers less than 1 and greater than 0, use precision of 2 significant digits
    // If the number is smaller than 0.01, use toFixed to avoid scientific notation
    formattedNumber = formattedNumber < 0.01 ? formattedNumber.toFixed(8) : Number(formattedNumber).toPrecision(2);
  } else {
    formattedNumber = Number(formattedNumber).toFixed(2); // For numbers between 1 and 100, use 2 decimal places
  }

  // Convert to string for further processing
  formattedNumber = formattedNumber.toString();

  // Remove insignificant trailing zeros
  while (formattedNumber.includes('.') && formattedNumber.slice(-1) === '0') {
    formattedNumber = formattedNumber.slice(0, -1);
  }

  // Remove dot if number ends with it
  if (formattedNumber.slice(-1) === '.') {
    formattedNumber = formattedNumber.slice(0, -1);
  }

  // Add thousands separator for numbers ≥ 1000
  if (Number(formattedNumber) >= 1000) {
    formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return formattedNumber;
}

// Service # 1
// Benefit Over Cost Service (Part 1 of 2)
// process the benefit/cost for solution & endeavor data
function processBenefitOverCost(data) {
  return data.map((item) => {
    const barlength = item.benefit / item.cost;
    const displayedValue = `${formatDecimalAndThousandsSeparator(Math.abs(barlength))}`;
    const name = item.endeavor || item.solution;
    return {
      ...item,
      barlength,
      displayedValue,
      name,
    };
  });
}

// Service # 1
// Benefit Over Cost Service (Part 2 of 2)
// combine solution & endeavor data for the benefit/cost calculation
export function solutionEndeavorBenefitOverCost() {
  const processedEndeavorData = processBenefitOverCost(endeavorData);
  const processedSolutionData = processBenefitOverCost(solutionData);
  const combinedData = [...processedEndeavorData, ...processedSolutionData];
  combinedData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(combinedData);
  return strippedData;
}
////////////////////////// end of service # 1 //////////////////////////

// Service # 2
// Benefit - Cost Service (Part 1 of 2)
// process the benefit-cost for solution & endeavor data
function processBenefitMinusCost(data) {
  return data.map((item) => {
    const barlength = item.benefit - item.cost;
    const displayedValue = `${barlength >= 0 ? "$" : "-$"}${formatDecimalAndThousandsSeparator(Math.abs(barlength))}`;
    const name = item.endeavor || item.solution;
    return {
      ...item,
      barlength,
      displayedValue,
      name,
    };
  });
}

// Service # 2
// Benefit - Cost Service (Part 2 of 2)
// combine solution & endeavor data for the benefit-cost calculation
export function solutionEndeavorBenefitMinusCost() {
  const processedEndeavorData = processBenefitMinusCost(endeavorData);
  const processedSolutionData = processBenefitMinusCost(solutionData);
  const combinedData = [...processedEndeavorData, ...processedSolutionData];
  combinedData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(combinedData);
  return strippedData;
}
////////////////////////// end of service # 2 //////////////////////////

// Service # 3
// Coat and Efficiency Comparison Service (Part 1 of 2)
// process the cost & efficiency comparison for solution & endeavor data
function processEndeavorCostEfficiencyComparison(data) {
  return data.map((item) => {
    const barlength = item.cost;
    const barlengthTwo = item.benefit / item.cost;

    const formattedBarlength = formatDecimalAndThousandsSeparator(Math.abs(barlength));
    const formattedBarlengthTwo = formatDecimalAndThousandsSeparator(Math.abs(barlengthTwo));

    const displayedValue = `${barlength >= 0 ? "$" : "-$"}${formattedBarlength.toString()}`;
    const displayedValueTwo = `${formattedBarlengthTwo.toString()}`;

    const name = item.endeavor || item.solution;
    return {
      ...item,
      barlength,
      barlengthTwo,
      displayedValue,
      displayedValueTwo,
      name,
    };
  });
}

// Service # 3
// Coat and Efficiency Comparison Service (Part 2 of 2)
// combine solution & endeavor data for the cost and efficiency calculation
export function solutionEndeavorCostEfficiencyComparison() {
  const processedEndeavorData =
    processEndeavorCostEfficiencyComparison(endeavorData);
  const processedSolutionData =
    processEndeavorCostEfficiencyComparison(solutionData);
  const combinedData = [...processedEndeavorData, ...processedSolutionData];
  combinedData.sort((a, b) => a.barlength - b.barlength);
  return combinedData;
}
