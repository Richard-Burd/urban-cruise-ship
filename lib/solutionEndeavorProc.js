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

// Service # 1
// Benefit Over Cost Service (Part 1 of 2)
// process the benefit/cost for solution & endeavor data
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

    const displayedValue = `${formatNumber(Math.abs(barlength))}`;

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

  // console.log(strippedData);
  return strippedData;
}
////////////////////////// end of service # 1 //////////////////////////

// Service # 2
// Benefit - Cost Service (Part 1 of 2)
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

// Service # 2
// Benefit - Cost Service (Part 2 of 2)
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
////////////////////////// end of service # 2 //////////////////////////

// Service # 3
// Coat and Efficiency Comparison Service (Part 1 of 2)
// process the cost & efficiency comparison for solution & endeavor data
function processEndeavorCostEfficiencyComparison(data) {
  return data.map((item) => {
    const barlength = item.cost;
    const barlengthTwo = item.benefit / item.cost;
    const formatNumberOne = (num) => {
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
    const formatNumberTwo = (num) => {
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

    const displayedValue = `${barlength >= 0 ? "$" : "-$"}${formatNumberOne(
      Math.abs(barlength)
    )}`;

    const displayedValueTwo = `${formatNumberTwo(Math.abs(barlengthTwo))}`;

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
  // strip unwanted key-value pairs from the data in benefit-cost,
  // and benefit/cost calculations (used by the first two services)
  function stripData(data) {
    return data.map((item) => {
      const { name, link, barlength, barlengthTwo, displayedValue, displayedValueTwo, site } = item;
      return {
        name,
        link,
        barlength,
        barlengthTwo,
        displayedValue,
        displayedValueTwo,
        site,
      };
    });
  }
  const processedEndeavorData =
    processEndeavorCostEfficiencyComparison(endeavorData);
  const processedSolutionData =
    processEndeavorCostEfficiencyComparison(solutionData);

  const combinedData = [...processedEndeavorData, ...processedSolutionData];

  combinedData.sort((a, b) => a.barlength - b.barlength);

  // const strippedData = stripData(combinedData);

  return combinedData;

  // const data = [
  //   {
  //     name: "This is some placeholder text to see how it looks",
  //     link: "/history/endeavors#public-health-projects",
  //     barlength: 4000,
  //     barlengthTwo: 3500,
  //     displayedValue: "4-Thousand",
  //     displayedValueTwo: "Another value",
  //     site: "energy",
  //   },
  //   {
  //     name: "These bars don't refer to anything",
  //     link: "/history/endeavors#public-health-projects",
  //     barlength: 1200,
  //     barlengthTwo: 1400,
  //     displayedValue: "Twelve - Hundred",
  //     displayedValueTwo: "Fourteen - Hundred",
  //     backgroundColor: "#FCD34D",
  //     site: "otter",
  //   },
  //   {
  //     name: "These bars will eventualy display Cost & Efficiency Comparison",
  //     link: "/history/endeavors#public-health-projects",
  //     barlength: 300,
  //     barlengthTwo: 132,
  //     displayedValue: "Three Hundred and forty",
  //     displayedValueTwo: "asdfg",
  //     link: "/history/endeavors",
  //     site: "zaza",
  //   },
  //   {
  //     name: "solutions on our OCEANS site will look like this",
  //     link: "/history/endeavors#public-health-projects",
  //     barlength: 120,
  //     barlengthTwo: 90,
  //     displayedValue: "One Hundred Twenty",
  //     displayedValueTwo: "zxcv",
  //     backgroundColor: "#0f4085",
  //     site: "oceans",
  //   },
  //   {
  //     name: "Test Row E",
  //     link: "/history/endeavors",
  //     barlength: 90,
  //     barlengthTwo: 50,
  //     displayedValue: "Ninety",
  //     displayedValueTwo: "Fiftey",
  //   },
  // ];

  // console.log(data)
  // return data
}
