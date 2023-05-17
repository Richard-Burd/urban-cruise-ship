// this file is responsible for calulating the following:
// 1. Efficiency (Benefit / Cost)
// 2. Net Benefit (Benefit - Cost)
// 3. Cost & Efficiency Comparison
import { numberFormater } from "../numberFormater.js";

// process the benefit / cost comparison calculation
export function processBenefitOverCost(data) {
  return data.map((item) => {
    const barlength = item.benefit / item.cost;
    const displayedValue = `${numberFormater(
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

// process the benefit-cost calculation
export function processBenefitMinusCost(data) {
  return data.map((item) => {
    const barlength = item.benefit - item.cost;
    const displayedValue = `${
      barlength >= 0 ? "$" : "-$"
    }${numberFormater(Math.abs(barlength))}`;
    const name = item.endeavor || item.solution;
    return {
      ...item,
      barlength,
      displayedValue,
      name,
    };
  });
}

// process the cost & efficiency comparison calculation
export function processCostEfficiencyComparison(data) {
  return data.map((item) => {
    const barlength = item.cost;
    const barlengthTwo = item.benefit / item.cost;

    const formattedBarlength = numberFormater(
      Math.abs(barlength)
    );
    const formattedBarlengthTwo = numberFormater(
      Math.abs(barlengthTwo)
    );

    const displayedValue = `${
      barlength >= 0 ? "$" : "-$"
    }${formattedBarlength.toString()}`;
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
