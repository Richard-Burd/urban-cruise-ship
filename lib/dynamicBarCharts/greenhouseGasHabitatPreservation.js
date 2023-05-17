// This file is responsible for calulating the following:
// 1. Greenhouse Gas Reduction
// 2. Habitat Preservation

// NOTE: This file is dumb because it should not exist,
// there are no processings of calculations necessary for
// greenhouse gas reduction or habitat preservation,
// other than adding the units to the end of the number,
//  - i.e. "km²" or "mT"
// The only reason this file exists is to keep this
// workflow consistant with the other workflows where we
// do benefit over (or minus) cost, or efficiency comparison

import { numberFormater } from "../numberFormater.js";

// process the greenhouse gas reduction number
export function processGreenhouseGasReduction(data) {
  return data.map((item) => {
    const barlength = item.co2;
    const displayedValue = `${numberFormater(
      Math.abs(barlength)
    )} mT`;
    const name = item.endeavor || item.solution;
    return {
      ...item,
      barlength,
      displayedValue,
      name,
    };
  });
}

// process the habitat preservation number
export function processHabitatPreservation(data) {
  return data.map((item) => {
    const barlength = item.habitat;
    const displayedValue = `${numberFormater(
      Math.abs(barlength)
    )} km²`;
    const name = item.endeavor || item.solution;
    return {
      ...item,
      barlength,
      displayedValue,
      name,
    };
  });
}