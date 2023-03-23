// We need logic to import the correct background colors for each 
// ...specialized site from our style sheet
// We need a way to render links to the solutions themselves

import React, { useState } from "react";
import { useTable, useSortBy } from "react-table";

const tableData = [
  {
    solution: "5% Methanol in Gasoline - U.S.",
    link: "https://www.urbancruiseship.org/energy/energy_distribution/methanol#blend-5-methanol-into-the-us-gas-supply",
    site : "energy",
    cost: 11.2,
    benefit: 13.2,
    co2: 11,
    habitat: null,
    sources: null
  },
  {
    solution: "Ban Bottom Trawling - E.U.",
    link: "https://www.urbancruiseship.org/oceans/ocean_industry/seafood#ban-bottom-trawling-on-the-high-seas",
    site : "oceans",
    cost: 0.335,
    benefit: 2.42,
    co2: 5,
    habitat: 162000,
    sources: null
  },
  {
    solution: "Building Envelope Modeling Software Standardization - U.S.",
    link: "https://www.urbancruiseship.org/energy/cities/building_energy#building-envelope-modeling-software-standardization",
    site : "energy",
    cost: 0.002,
    benefit: 1,
    co2: 12,
    habitat: null,
    sources: null
  },
];



function SolutionTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Solution / Endeavor",
        accessor: (row) => ({ solution: row.solution, link: row.link }),
        Cell: ({ value }) => (
          <a href={value.link} target="_blank" rel="noopener noreferrer">
            {value.solution}
          </a>
        ),
      },
      {
        Header: "Cost (Billion USD/yr)",
        accessor: "cost",
        Cell: ({ value }) => (value !== null ? `$${Intl.NumberFormat().format(value)}` : null),
      },
      {
        Header: "Benefit (Billion USD/yr)",
        accessor: "benefit",
        Cell: ({ value }) => (value !== null ? `$${Intl.NumberFormat().format(value)}` : null),
      },
      {
        Header: "CO² Reduction megaTon/yr",
        accessor: "co2",
      },
      {
        Header: "Habitat Preservation (km²)",
        accessor: "habitat",
        Cell: ({ value }) => (value !== null ? `${Intl.NumberFormat().format(value)}km²` : null),
      },
      {
        Header: "Sources",
        accessor: "sources",
      },
    ],
    []
  );

  const [data, setData] = useState(tableData);
  const tableInstance = useTable({ columns, data }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, hgIndex) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={`hg-${hgIndex}`}>
            {headerGroup.headers.map((column, colIndex) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={
                  column.isSorted
                    ? column.isSortedDesc
                      ? "sort-desc"
                      : "sort-asc"
                    : ""
                }
                key={`col-${colIndex}`}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              style={rowStyle(row.original)}
              key={`row-${rowIndex}`}
            >
              {row.cells.map((cell, cellIndex) => {
                return (
                  <td {...cell.getCellProps()} key={`cell-${cellIndex}`}>
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
  if (row["Specialized Site"] === "energy") {
    return { backgroundColor: "orange" };
  } else if (row["Specialized Site"] === "matter") {
    return { backgroundColor: "green" };
  } else {
    return {};
  }
}

export default SolutionTable;
