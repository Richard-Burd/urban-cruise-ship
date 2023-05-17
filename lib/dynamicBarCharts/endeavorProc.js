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
export function endeavorBenefitOverCost() {
  const processedEndeavorData = processBenefitOverCost(endeavorData);
  processedEndeavorData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(processedEndeavorData);
  return strippedData;
}

// Endeavor data for the benefit-cost calculation
// https://www.urbancruiseship.org/history/endeavors/benefit-minus-cost
export function solutionBenefitMinusCost() {
  const processedEndeavorData = processBenefitMinusCost(endeavorData);
  processedEndeavorData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(processedEndeavorData);
  return strippedData;
}

// Endeavor data for the cost and efficiency comparison calculation
// https://www.urbancruiseship.org/history/endeavors/cost-efficiency-comparison
export function solutionCostEfficiencyComparison() {
  const processedEndeavorData = processCostEfficiencyComparison(endeavorData);
  processedEndeavorData.sort((a, b) => a.barlength - b.barlength);
  return processedEndeavorData;
}