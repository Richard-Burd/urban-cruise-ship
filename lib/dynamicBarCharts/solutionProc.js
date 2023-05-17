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
import {
  processGreenhouseGasReduction,
  processHabitatPreservation,
} from "./greenhouseGasHabitatPreservation.js";

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
  let processedSolutionData = processGreenhouseGasReduction(solutionData);

  // Filter out items where barlength is null
  processedSolutionData = processedSolutionData.filter(item => item.barlength !== null);

  processedSolutionData.sort((a, b) => b.barlength - a.barlength);

  // NOTE: The first element in the array is too large to fit in the bar chart
  // ...so we divide it by 6 to make it fit, the only alternative is to use a
  // ...logarithmic scale, but that means we can have no 0 or negative values
  // ...and that would mean redoing a lot of our logic
  // Create a new array that is a copy of the processedSolutionData array
  processedSolutionData = [...processedSolutionData];

  // Check if there's at least one element in the array
  if (processedSolutionData.length > 0) {
    // Create a copy of the first object
    const firstElement = { ...processedSolutionData[0] };
    
    // Update the barlength of the copied object
    firstElement.barlength = firstElement.barlength / 6;

    // Replace the first object in the array with the copied and updated object
    processedSolutionData[0] = firstElement;

    // NOTE: If the second element in the array were to be too large to fit as well
    // ...we would do the same thing here:
    // const secondElement = { ...processedSolutionData[1] };
    // secondElement.barlength = secondElement.barlength / 6;
    // processedSolutionData[1] = secondElement;
  }

  return processedSolutionData;
}

// Solution data for the habitat preservation calculation
// https://www.urbancruiseship.org/history/solutions/habitat-preservation
export function solutionHabitatPreservation() {
  let processedSolutionData = processHabitatPreservation(solutionData);

  // Filter out items where barlength is null
  processedSolutionData = processedSolutionData.filter(item => item.barlength !== null);
  
  processedSolutionData.sort((a, b) => b.barlength - a.barlength);

  // NOTE: The first element in the array is too large to fit in the bar chart
  // ...so we divide it by 30 to make it fit, the only alternative is to use a
  // ...logarithmic scale, but that means we can have no 0 or negative values
  // ...and that would mean redoing a lot of our logic
  // Create a new array that is a copy of the processedSolutionData array
  processedSolutionData = [...processedSolutionData];

  // Check if there's at least one element in the array
  if (processedSolutionData.length > 0) {
    // Create a copy of the first object
    const firstElement = { ...processedSolutionData[0] };
    
    // Update the barlength of the copied object
    firstElement.barlength = firstElement.barlength / 30;

    // Replace the first object in the array with the copied and updated object
    processedSolutionData[0] = firstElement;

    // NOTE: If the second element in the array were to be too large to fit as well
    // ...we would do the same thing here:
    // const secondElement = { ...processedSolutionData[1] };
    // secondElement.barlength = secondElement.barlength / 6;
    // processedSolutionData[1] = secondElement;
  }

  return processedSolutionData;
}