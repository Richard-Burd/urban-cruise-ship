// These calculations are used to generate the bar chats in the
// "Solutions" section of the site located here: 
// https://www.urbancruiseship.org/history/solutions

import { solutionData } from "../../data/solutionData.js";
import { stripData } from "./stripData.js";
import {
  processBenefitOverCost,
  processBenefitMinusCost,
  processCostEfficiencyComparison,
} from "./efficiencyNetBenefitCost.js";

// Combine solution & endeavor data for the benefit/cost calculation
// https://www.urbancruiseship.org/history/solutions/benefit-over-cost
export function solutionBenefitOverCost() {
  const processedSolutionData = processBenefitOverCost(solutionData);
  processedSolutionData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(processedSolutionData);
  return strippedData;
}

// Combine solution & endeavor data for the benefit-cost calculation
// https://www.urbancruiseship.org/history/solutions/benefit-minus-cost
export function solutionBenefitMinusCost() {
  const processedSolutionData = processBenefitMinusCost(solutionData);
  processedSolutionData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(processedSolutionData);
  return strippedData;
}

// Combine solution & endeavor data for the cost and efficiency calculation
// https://www.urbancruiseship.org/history/solutions/cost-efficiency-comparison
export function solutionCostEfficiencyComparison() {
  const processedSolutionData = processCostEfficiencyComparison(solutionData);
  processedSolutionData.sort((a, b) => a.barlength - b.barlength);
  return processedSolutionData;
}