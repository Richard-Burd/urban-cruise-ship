// These calculations are used to generate the bar chats in the
// "Solutions" section of the site located here: 
// https://www.urbancruiseship.org/history/endeavors

import { endeavorData } from "../../data/endeavorData.js";
import { stripData } from "./stripData.js";
import {
  processBenefitOverCost,
  processBenefitMinusCost,
  processCostEfficiencyComparison,
} from "./efficiencyNetBenefitCost.js";

// Endeavor data for the benefit/cost calculation
// https://www.urbancruiseship.org/history/endeavors/benefit-over-cost
export function endeavorBenefitOverCost(subsetLink) {
  const processedEndeavorData = processBenefitOverCost(endeavorData, subsetLink);
  processedEndeavorData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(processedEndeavorData);
  return strippedData;
}

// Endeavor data for the benefit-cost calculation
// https://www.urbancruiseship.org/history/endeavors/benefit-minus-cost
export function endeavorBenefitMinusCost(subsetLink) {
  const processedEndeavorData = processBenefitMinusCost(endeavorData, subsetLink);
  processedEndeavorData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(processedEndeavorData);
  return strippedData;
}

// Endeavor data for the cost and efficiency comparison calculation
// https://www.urbancruiseship.org/history/endeavors/cost-efficiency-comparison
export function endeavorCostEfficiencyComparison(efficiencyBarScaleFactor, subsetLink) {
  let processedEndeavorData = processCostEfficiencyComparison(endeavorData, subsetLink);
  processedEndeavorData.sort((a, b) => a.barlength - b.barlength);

  // Create a new array that is a copy of the processedEndeavorData array
  processedEndeavorData = [...processedEndeavorData];

  // Iterate over each item in the array
  for (let i = 0; i < processedEndeavorData.length; i++) {
    // Create a copy of the current item
    const itemCopy = { ...processedEndeavorData[i] };
    
    // NOTE: the top bar and the bottom measures cost while the bottom bar
    //       measures efficiency; thus, they are not the same thing and can
    //       use different scales if we wish.  The "efficiencyBarScaleFactor"
    //       is number that makes the BOTTOM BAR several times larger than the
    //       top bar.  This is done to make the bottom bar more visible.
    itemCopy.barlengthTwo = itemCopy.barlengthTwo * efficiencyBarScaleFactor;
    
    // Replace the current item in the array with the copied and updated item
    processedEndeavorData[i] = itemCopy;
  }

  return processedEndeavorData;
}
