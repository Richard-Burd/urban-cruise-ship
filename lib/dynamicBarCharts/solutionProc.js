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

// Solution data for the benefit/cost calculation
// https://www.urbancruiseship.org/history/solutions/benefit-over-cost
export function solutionBenefitOverCost() {
  const processedSolutionData = processBenefitOverCost(solutionData);
  processedSolutionData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(processedSolutionData);
  return strippedData;
}

// Solution data for the benefit-cost calculation
// https://www.urbancruiseship.org/history/solutions/benefit-minus-cost
export function solutionBenefitMinusCost() {
  const processedSolutionData = processBenefitMinusCost(solutionData);
  processedSolutionData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(processedSolutionData);
  return strippedData;
}

// Solution data for the cost and efficiency comparison calculation
// https://www.urbancruiseship.org/history/solutions/cost-efficiency-comparison
export function solutionCostEfficiencyComparison() {
  const processedSolutionData = processCostEfficiencyComparison(solutionData);
  processedSolutionData.sort((a, b) => a.barlength - b.barlength);
  return processedSolutionData;
}

// Solution data for the greenhouse gas reduction calculation
// https://www.urbancruiseship.org/history/solutions/co2-reduction
export function solutionGreenhouseGasReduction() {
  const processedSolutionData = processGreenhouseGasReduction(solutionData);
  processedSolutionData.sort((a, b) => a.barlength - b.barlength);
  return processedSolutionData;
}

// Solution data for the habitat preservation calculation
// https://www.urbancruiseship.org/history/solutions/co2-reduction
export function solutionHabitatPreservation() {
  const processedSolutionData = processHabitatPreservation(solutionData);
  processedSolutionData.sort((a, b) => a.barlength - b.barlength);
  return processedSolutionData;
}