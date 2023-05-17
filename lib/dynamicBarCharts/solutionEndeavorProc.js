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
export function solutionEndeavorBenefitOverCost() {
  const processedEndeavorData = processBenefitOverCost(endeavorData);
  const processedSolutionData = processBenefitOverCost(solutionData);
  const combinedData = [...processedEndeavorData, ...processedSolutionData];
  combinedData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(combinedData);
  return strippedData;
}

// Combine solution & endeavor data for the benefit-cost calculation
// https://www.urbancruiseship.org/history/solutions-and-endeavors/benefit-minus-cost
export function solutionEndeavorBenefitMinusCost() {
  const processedEndeavorData = processBenefitMinusCost(endeavorData);
  const processedSolutionData = processBenefitMinusCost(solutionData);
  const combinedData = [...processedEndeavorData, ...processedSolutionData];
  combinedData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(combinedData);
  return strippedData;
}

// Combine solution & endeavor data for the cost and efficiency comparison calculation
// https://www.urbancruiseship.org/history/solutions-and-endeavors/cost-efficiency-comparison
export function solutionEndeavorCostEfficiencyComparison() {
  const processedEndeavorData = processCostEfficiencyComparison(endeavorData);
  const processedSolutionData = processCostEfficiencyComparison(solutionData);
  const combinedData = [...processedEndeavorData, ...processedSolutionData];
  combinedData.sort((a, b) => a.barlength - b.barlength);
  return combinedData;
}
