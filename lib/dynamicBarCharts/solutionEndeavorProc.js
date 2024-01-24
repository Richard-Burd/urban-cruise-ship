// These calculations are used to generate the bar chats in the
// "Solutions & Endeavors" section of the site located here:
// https://www.urbancruiseship.org/history/solutions-and-endeavors

import { endeavorData } from "../../data/endeavorData.js";
import { solutionData } from "../../data/solutionData.js";
import { stripData } from "./stripData.js";
import {
  processBenefitOverCost,
  processBenefitMinusCost,
  processCostEfficiencyComparison,
} from "./efficiencyNetBenefitCost.js";

// Combine solution & endeavor data for the benefit/cost calculation
// https://www.urbancruiseship.org/history/solutions-and-endeavors/benefit-over-cost
export function solutionEndeavorBenefitOverCost(subset) {
  const processedEndeavorData = processBenefitOverCost(endeavorData, subset);
  const processedSolutionData = processBenefitOverCost(solutionData, subset);
  let combinedData = [...processedEndeavorData, ...processedSolutionData];
  // filters out any objects where cost > benefit TURNED OFF
  //combinedData = combinedData.filter(item => item.benefit > item.cost);
  combinedData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(combinedData);
  return strippedData;
}

// Combine solution & endeavor data for the benefit-cost calculation
// https://www.urbancruiseship.org/history/solutions-and-endeavors/benefit-minus-cost
export function solutionEndeavorBenefitMinusCost(subset) {
  const processedEndeavorData = processBenefitMinusCost(endeavorData, subset);
  const processedSolutionData = processBenefitMinusCost(solutionData, subset);
  const combinedData = [...processedEndeavorData, ...processedSolutionData];
  combinedData.sort((a, b) => b.barlength - a.barlength);
  //appends Billions USD/Year to the end of a string
  if (combinedData.length > 0) {
     combinedData[1].displayedValue += ' Billions USD/Year'; //adjust index [] value to the position you want the string
  }
  const strippedData = stripData(combinedData);
  return strippedData;
}

// Combine solution & endeavor data for the cost and efficiency comparison calculation
// https://www.urbancruiseship.org/history/solutions-and-endeavors/cost-efficiency-comparison
export function solutionEndeavorCostEfficiencyComparison(efficiencyBarScaleFactor, subset) {
  const processedEndeavorData = processCostEfficiencyComparison(endeavorData, subset);
  const processedSolutionData = processCostEfficiencyComparison(solutionData, subset);
  let combinedData = [...processedEndeavorData, ...processedSolutionData];
  // filters out any objects where cost > benefit TURNED OFF
  //combinedData = combinedData.filter(item => item.benefit > item.cost);
  combinedData.sort((a, b) => a.barlength - b.barlength);
  
  //appends Billions USD/Year to the end of a string
  if (combinedData.length > 0) {
    combinedData[0].displayedValue += ' Billions USD/Year'; //adjust index [] value to the position you want the string
 }
  // Iterate over each item in the array
  for (let i = 0; i < combinedData.length; i++) {
    // Create a copy of the current item
    const itemCopy = { ...combinedData[i] };

    // NOTE: the top bar and the bottom measures cost while the bottom bar
    //       measures efficiency; thus, they are not the same thing and can
    //       use different scales if we wish.  The "efficiencyBarScaleFactor"
    //       is number that makes the BOTTOM BAR several times larger than the
    //       top bar.  This is done to make the bottom bar more visible.
    itemCopy.barlengthTwo = itemCopy.barlengthTwo * efficiencyBarScaleFactor;

    // Replace the current item in the array with the copied and updated item
    combinedData[i] = itemCopy;
      //appends Billions USD/Year to the end of a string
  }

  return combinedData;
}
