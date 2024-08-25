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
export function solutionBenefitOverCost(subset) {
  const processedSolutionData = processBenefitOverCost(solutionData, subset);
  processedSolutionData.sort((a, b) => b.barlength - a.barlength);
  const strippedData = stripData(processedSolutionData);
  return strippedData;
}

// Solution data for the benefit-cost calculation
// https://www.urbancruiseship.org/history/solutions/benefit-minus-cost
export function solutionBenefitMinusCost(subset) {
  const processedSolutionData = processBenefitMinusCost(solutionData, subset);
  processedSolutionData.sort((a, b) => b.barlength - a.barlength);
    //appends Billions USD/Year to the end of a string
    if (processedSolutionData.length > 0) {
      processedSolutionData[1].displayedValue += ' Billions USD/Year'; //adjust index [] value to the position you want the string
   }
  const strippedData = stripData(processedSolutionData);
  return strippedData;
}

// Solution data for the cost and efficiency comparison calculation
// https://www.urbancruiseship.org/history/solutions/cost-efficiency-comparison
export function solutionCostEfficiencyComparison(efficiencyBarScaleFactor, subset) {
  let processedSolutionData = processCostEfficiencyComparison(solutionData, subset);
  processedSolutionData.sort((a, b) => a.barlength - b.barlength);

  // Create a new array that is a copy of the processedEndeavorData array
  processedSolutionData = [...processedSolutionData];

  // Iterate over each item in the array
  for (let i = 0; i < processedSolutionData.length; i++) {
    // Create a copy of the current item
    const itemCopy = { ...processedSolutionData[i] };
    
    // NOTE: the top bar and the bottom measures cost while the bottom bar
    //       measures efficiency; thus, they are not the same thing and can
    //       use different scales if we wish.  The "efficiencyBarScaleFactor"
    //       is number that makes the BOTTOM BAR several times larger than the
    //       top bar.  This is done to make the bottom bar more visible.
    itemCopy.barlengthTwo = itemCopy.barlengthTwo * efficiencyBarScaleFactor;
    
    // Replace the current item in the array with the copied and updated item
    processedSolutionData[i] = itemCopy;
    
  }
    //appends Billions USD/Year to the end of a string
    if (processedSolutionData.length > 0) {
      processedSolutionData[0].displayedValue += ' Billions USD/Year'; //adjust index [] value to the position you want the string
   }
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
    
    // Update the barlength of the copied object [currently turned off -jye]
    firstElement.barlength = firstElement.barlength / 1;

    // Replace the first object in the array with the copied and updated object
    processedSolutionData[0] = firstElement;

    // NOTE: If the second element in the array were to be too large to fit as well
    // ...we would do the same thing here:
    // const secondElement = { ...processedSolutionData[1] };
    // secondElement.barlength = secondElement.barlength / 6;
    // processedSolutionData[1] = secondElement;
  }
    //appends carbon dioxide eq to the end of a string
    if (processedSolutionData.length > 0) {
      processedSolutionData[1].displayedValue += 'ons reduced CO₂ equivalent/year'; //adjust index [] value to the position you want the string
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
    
    // Update the barlength of the copied object... This is where the element was being divided by 30. Removed after adding reforestation solution
    firstElement.barlength = firstElement.barlength;

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