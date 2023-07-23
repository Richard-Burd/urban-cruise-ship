// This file is responsible for calulating the following:
//   1. Efficiency (Benefit / Cost)
//   2. Net Benefit (Benefit - Cost)
//   3. Cost & Efficiency Comparison
//   4. Deciding whether to show all data elements or 
//        only a subset via the "filterLink" variable

// NOTE: The "filterLink" variable below is used in on this page:
//       https://www.urbancruiseship.org/history/endeavors/subsets
//       id the "filterLink" matches the "link" property of the data item,
//       then the data item will be included in the calculation, otherwise
//       if no "filterLink" is provided, then all data items will be included

// REVISION: filterLink variable now points to subset prop to streamline filtering. -jye

import { numberFormater } from "../numberFormater.js";

// process the benefit / cost comparison calculation
export function processBenefitOverCost(data, filterLink = null) {
  return data
    .filter((item) => filterLink === null || item.subset === filterLink)
    .map((item) => {
      const barlength = item.benefit / item.cost;
      const displayedValue = `${numberFormater(Math.abs(barlength))}`;
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
export function processBenefitMinusCost(data, filterLink = null) {
  return data
    .filter((item) => filterLink === null || item.subset === filterLink)
    .map((item) => {
      const barlength = item.benefit - item.cost;
      const displayedValue = `${barlength >= 0 ? "$" : "-$"}${numberFormater(
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

// process the cost & efficiency comparison calculation
export function processCostEfficiencyComparison(data, filterLink = null) {
  return data
    .filter((item) => filterLink === null || item.subset === filterLink)
    .map((item) => {
      const barlength = item.cost;
      const barlengthTwo = item.benefit / item.cost;

      const formattedBarlength = numberFormater(Math.abs(barlength));
      const formattedBarlengthTwo = numberFormater(Math.abs(barlengthTwo));

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
