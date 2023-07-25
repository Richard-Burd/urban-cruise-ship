// strip unwanted key-value pairs from the data in benefit-cost,
// and benefit/cost calculations (used by the first two services)
export function stripData(data) {
  return data.map((item) => {
    const { name, link, barlength, displayedValue, site, cost, benefit } = item;
    return {
      name,
      link,
      barlength,
      displayedValue,
      site,
      cost,
      benefit,
    };
  });
}