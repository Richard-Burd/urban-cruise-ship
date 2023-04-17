import React, { useState } from "react";
import Link from "next/link";
import { useTable, useSortBy } from "react-table";

const siteOrder = {
  "energy": 1,
  "matter": 2,
  "habitat": 3,
  "cities": 4,
  "waste": 5,
  "oceans": 6,
  "space": 7,
  "costs": 8,
  "history": 9,
};

// this is raw data for our solutions
// We can move this to a separate file if we want
// We will import this data onto the "Solutions & Endeavors" page...
// ...thus the "export" statement below.
export const solutionTableData = [
  {
    solution: "5% Methanol in Gasoline - U.S.",
    link: "/energy/energy_distribution/methanol#blend-5-methanol-into-the-us-gas-supply",
    site: "energy",
    cost: 11.2,
    benefit: 13.2,
    co2: 11,
    habitat: null,
    sources: null,
  },
  {
    solution: "Ban Bottom Trawling - E.U.",
    link: "/oceans/ocean_industry/seafood#ban-bottom-trawling-on-the-high-seas",
    site: "oceans",
    cost: 0.34,
    benefit: 2.42,
    co2: 5,
    habitat: 162000,
    sources: null,
  },
  {
    solution: "Building Envelope Modeling Software Standardization - U.S.",
    link: "/energy/cities/building_energy#building-envelope-modeling-software-standardization",
    site: "energy",
    cost: 0.002,
    benefit: 1,
    co2: 12,
    habitat: null,
    sources: null,
  },
  {
    solution: "Clean Energy Standard - U.S.",
    link: "/energy/energy_socioeconomics/policy_se#clean-energy-standard",
    site: "energy",
    cost: 36.7,
    benefit: 58.9,
    co2: 1000,
    habitat: null,
    sources: null,
  },
  {
    solution: "Coal Phase Out - World",
    link: "/energy/energy_production/coal#coal-should-be-phased-out",
    site: "energy",
    cost: 1700,
    benefit: 5100,
    co2: 17000,
    habitat: null,
    sources: null,
  },
  {
    solution: "Construct a High-Voltage-Direct-Current Grid - U.S.",
    link: "https://urban-cruise-ship.vercel.app/energy/energy_distribution/grid_design",
    site: "energy",
    cost: 220,
    benefit: 671,
    co2: 480,
    habitat: null,
    sources: null,
  },
  {
    solution: "Dam Decommissioning Fund - U.S.",
    link: "/energy/energy_production/hydro#dam-decommissioning-fund",
    site: "energy",
    cost: 0.11,
    benefit: 0.23,
    co2: null,
    habitat: null,
    sources: null,
  },
  {
    solution: "Development Set Patterns - U.S.",
    link: "/cities/cities_mobility/development_sets#development-set-patterns",
    site: "cities",
    cost: 1540,
    benefit: 1633,
    co2: 21,
    habitat: 42000,
    sources: null,
  },
  {
    solution: "Fund Wave Energy Research - U.S.",
    link: "/energy/energy_production/mhk#fund-wave-energy-r-d-at-8-3-billion-over-10-years",
    site: "energy",
    cost: 0.008,
    benefit: 0.019,
    co2: 3,
    habitat: null,
    sources: null,
  },
  {
    solution: "Greater Up-front Incentives for Electric Vehicles - U.S.",
    link: "/energy/transport/transpo_cars#congress-should-institute-greater-up-front-incentives",
    site: "energy",
    cost: 373,
    benefit: 435,
    co2: 130,
    habitat: null,
    sources: null,
  },
  {
    solution: "Heat Pump Mandate - U.S.",
    link: "/energy/cities/heating#heat-pump-water-heater-mandate-for-new-home-construction",
    site: "energy",
    cost: 0.03,
    benefit: 0.1,
    co2: null,
    habitat: null,
    sources: null,
  },
  {
    solution: "Heat Recovery Loan Program - U.S",
    link: "/energy/industry/industrial_systems#industrial-waste-heat-recovery-loan-program",
    site: "energy",
    cost: 1.1,
    benefit: 2,
    co2: 15,
    habitat: null,
    sources: null,
  },
  {
    solution:
      "Increase Marine Protected Areas from 8% to 30% of the Ocean - World",
    link: "/oceans/ocean_environment/ocean_biodiversity#increase-marine-protected-areas-from-8-to-30-of-the-ocean",
    site: "oceans",
    cost: 835,
    benefit: 1274,
    co2: 680,
    habitat: 78000000,
    sources: null,
  },
  {
    solution: "Loosen Floor Area Ratio Rules for Residential - U.S.",
    link: "/cities/cities_land_use/cities_zoning_rules#loosen-floor-area-ratio-rules",
    site: "cities",
    cost: 139,
    benefit: 274,
    co2: 3,
    habitat: 7947,
    sources: null,
  },
  {
    solution: "Loosen Minimum Parking Lot Size Rules - U.S.",
    link: "/cities/cities_land_use/cities_zoning_rules#loosen-minimum-lot-size-rules",
    site: "cities",
    cost: 0.703,
    benefit: 16.4,
    co2: 5,
    habitat: 2456,
    sources: null,
  },
  {
    solution: "Meat Tax - U.S.",
    link: "/matter/diet/diet_fw#u-s-meat-tax",
    site: "matter",
    cost: 0.027,
    benefit: 26.3,
    co2: 135,
    habitat: 341000,
    sources: null,
  },
  {
    solution: "Modular Island Desalination - Mediterranean Islands",
    link: "/matter/water/water_provision#renewable-energy-powered-desalinization-expansion-prioritization",
    site: "matter",
    cost: 0.004,
    benefit: 0.037,
    co2: null,
    habitat: null,
    sources: null,
  },
  {
    solution: "Plant-based Inf. Advocacy Campaign - U.S.",
    link: "/matter/diet/diet_fw#plant-based-informational-advocacy-campaign",
    site: "matter",
    cost: 0.48,
    benefit: 10.65,
    co2: 88,
    habitat: null,
    sources: null,
  },
  {
    solution: "Remove Parking Minimums - U.S.",
    link: "/cities/cities_land_use/cities_zoning_rules#remove-parking-minimums",
    site: "cities",
    cost: 0.044,
    benefit: 0.929,
    co2: null,
    habitat: 139,
    sources: null,
  },
  {
    solution: "School Lunch Meat Removal - U.S.",
    link: "/matter/diet/diet_fw#school-lunch-meat-removal",
    site: "matter",
    cost: 0.013,
    benefit: 7.65,
    co2: 28,
    habitat: null,
    sources: null,
  },
  {
    solution: "Scientific Whaling Ban - World",
    link: "/oceans/ocean_environment/ocean_biodiversity#ban-whaling-for-scientific-research",
    site: "oceans",
    cost: 0.31,
    benefit: 1.456,
    co2: null,
    habitat: null,
    sources: null,
  },
  {
    solution: "Set Ship Speed Limits - World",
    link: "/oceans/ocean_environment/ocean_biodiversity#set-ship-speed-limits",
    site: "oceans",
    cost: 16.5,
    benefit: 55.4,
    co2: 93,
    habitat: null,
    sources: null,
  },
  {
    solution: "Wildlife Corridors - U.S.",
    link: "/habitat/environment/land_use_socio#wildlife-corridors",
    site: "habitat",
    cost: 4.8,
    benefit: 9.4,
    co2: 1,
    habitat: null,
    sources: null,
  },
];

solutionTableData.sort((a, b) => {
  if (siteOrder[a.site] === siteOrder[b.site]) {
    // If sites are the same, sort alphabetically by solution
    return a.solution.localeCompare(b.solution);
  }

  // Sort by site order
  return siteOrder[a.site] - siteOrder[b.site];
});

// This function grabs the data above and translates it into data for the table
function SolutionTable() {
  // It uses the React "useMemo" hook that allows you to memoize the result of a function
  const columns = React.useMemo(
    () => [
      {
        // Creates a column with the title: "Solution"
        Header: "Solution",

        // React Table uses the "accessor" property to determine what data to display
        // In our case we want the "solution" property from the data above for our title
        // ...we also want the "link" property so we can inject it into each row
        accessor: (row) => ({ solution: row.solution, link: row.link }),

        // The first column in the table has both a title as well as a link,
        // ...therefore both the title (solution) and link (link) are passed into the
        // ... "Cell" property
        Cell: ({ value, row }) => {
          // Get the text color class based on the row's site property
          const textColorClass =
            row.original.site === "oceans" || row.original.site === "space"
              ? "light-text-for-colored-tables"
              : "";
          return (
            <Link href={value.link}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={textColorClass}
              >
                {value.solution}
              </a>
            </Link>
          );
        },
      },
      {
        // We want to display a number like this in out data: "1000"
        // ...like this in our table: "1,000"
        // We also want to keep our decimals when specified.
        // ...so we use .format() & other code below
        Header: "Cost (Billion USD/yr)",
        accessor: "cost",
        sortType: "number",
        Cell: ({ value }) =>
          value !== null
            ? `$${Intl.NumberFormat(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              }).format(value)}`
            : null,
      },
      {
        // Same as above re: number formatting
        Header: "Benefit (Billion USD/yr)",
        accessor: "benefit",
        sortType: "number",
        Cell: ({ value }) =>
          value !== null
            ? `$${Intl.NumberFormat(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              }).format(value)}`
            : null,
      },
      {
        Header: "Efficiency (Benefit / Cost)",
        accessor: (row) => row.benefit / row.cost,
        Cell: ({ value }) => {
          return value ? `${value.toFixed(1)}` : null;
        },
      },
      {
        Header: "Net Benefit (Billions)",
        accessor: (row) => row.benefit - row.cost,
        Cell: ({ value }) => {
          return value ? `${value.toFixed(1)}` : null;
        },
      },
      {
        // Same as above re: number formatting without the $ sign
        Header: "CO² Reduction megaTon/yr",
        accessor: "co2",
        sortType: "number",
        Cell: ({ value }) =>
          value !== null
            ? `${Intl.NumberFormat(undefined, {
                minimumFractionDigits: 0,
              }).format(value)}`
            : null,
      },
      {
        // no formatting here. We don't care about sub-sections of square kilometers
        Header: "Habitat Preservation (km²)",
        accessor: "habitat",
        sortType: "number",
        Cell: ({ value }) =>
          value !== null ? `${Intl.NumberFormat().format(value)}km²` : null,
      },

      // We don't need this for now because Solutions don't have sources, they have links
      // {
      //   Header: "Sources",
      //   accessor: "sources",
      // },
    ],
    []
  );

  // In functional React components, useState is used to define state
  const [data, setData] = useState(solutionTableData);

  // This creates an instance of the React table
  const tableInstance = useTable({ columns, data }, useSortBy);

  // This line destructures the table instance to extract properties & methods
  // ...to prepare rows for rendering.
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  // This is the actual JSX that gets rendered
  return (
    <table className="solution-table dynamic-table" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, hgIndex) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={`hg-${hgIndex}`}>
            {headerGroup.headers.map((column, colIndex) => {
              // This is the modified sorting that should limit the options to asc or desc
              const isSorted = column.isSorted;
              const isSortedDesc = column.isSortedDesc;
              const sortClass = isSorted
                ? isSortedDesc
                  ? "sort-desc"
                  : "sort-asc"
                : "";
              const sortTitle = isSorted
                ? isSortedDesc
                  ? "Sorted Descending"
                  : "Sorted Ascending"
                : "Not Sorted";
              const toggleSort = () => {
                const sortDesc = isSorted ? !isSortedDesc : false;
                tableInstance.setSortBy([{ id: column.id, desc: sortDesc }]);
              };
              return (
                <th
                  {...column.getHeaderProps({
                    className: `sortable ${sortClass}`,
                    onClick: toggleSort,
                    title: sortTitle,
                  })}
                  key={`col-${colIndex}`}
                >
                  {column.render("Header")}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className={rowStyle(row.original)}
              key={`row-${rowIndex}`}
            >
              {row.cells.map((cell, cellIndex) => {
                // Get the text color class based on the row's site property
                const textColorClass =
                  row.original.site === "oceans" ||
                  row.original.site === "space"
                    ? "light-text-for-colored-tables"
                    : "";
                // Apply the textColorClass to the <td> element only if it's not the first column (Solution column)
                const cellClass = cellIndex === 0 ? "" : textColorClass;
                return (
                  <td
                    {...cell.getCellProps()}
                    className={cellClass}
                    key={`cell-${cellIndex}`}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function rowStyle(row) {
  // These are the colors of the article buttons which are lighter versions of the site buttons
  return `${row.site}-table-background-color`;

  // These are the colors of the site buttons, we can use them instead if we want
  // ...show John both options...we can also use custom colors if we want
  // return `${row.site}-site-button-color`;
}

export default SolutionTable;
