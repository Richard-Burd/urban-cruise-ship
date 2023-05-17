// These calculations are used to generate the bar chats in the
// "Solutions" section of the site located here: 
// https://www.urbancruiseship.org/history/solutions

import { endeavorData } from "../../data/endeavorData.js";
import { stripData } from "./stripData.js";
import {
  processBenefitOverCost,
  processBenefitMinusCost,
  processCostEfficiencyComparison,
} from "./efficiencyNetBenefitCost.js";

// Combine solution & endeavor data for the benefit/cost calculation
// https://www.urbancruiseship.org/history/solutions/benefit-over-cost
export function endeavorBenefitOverCost() {
  const processedEndeavorData = processBenefitOverCost(endeavorData);
  processedEndeavorData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(processedEndeavorData);
  return strippedData;
}

// Combine solution & endeavor data for the benefit-cost calculation
// https://www.urbancruiseship.org/history/solutions/benefit-minus-cost
export function solutionBenefitMinusCost() {
  const processedEndeavorData = processBenefitMinusCost(endeavorData);
  processedEndeavorData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(processedEndeavorData);
  return strippedData;
}

// Combine solution & endeavor data for the cost and efficiency calculation
// https://www.urbancruiseship.org/history/solutions/cost-efficiency-comparison
export function solutionCostEfficiencyComparison() {
  const processedEndeavorData = processCostEfficiencyComparison(endeavorData);
  processedEndeavorData.sort((a, b) => a.barlength - b.barlength);
  return processedEndeavorData;
}