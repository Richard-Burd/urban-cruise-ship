//
import { solutionData } from './solutionData.js';
import { endeavorData } from './endeavorData.js';

const siteOrder = {
  energy: 1,
  matter: 2,
  habitat: 3,
  cities: 4,
  waste: 5,
  oceans: 6,
  space: 7,
  costs: 8,
  history: 9,
};

export function getCombinedData() {
  const endeavorDataWithSolutionKey = endeavorData.map(item => {
    return {
      ...item,
      solution: item.endeavor
    };
  });

  endeavorDataWithSolutionKey.sort((a, b) => {
    if (siteOrder[a.site] === siteOrder[b.site]) {
      // If sites are the same, sort alphabetically by solution
      return a.solution.localeCompare(b.solution);
    }

    // Sort by site order
    return siteOrder[a.site] - siteOrder[b.site];
  });

  return solutionData.concat(endeavorDataWithSolutionKey);
}
