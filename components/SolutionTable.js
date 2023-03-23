// defined state (the table described in JSON format)
// column that specifies the specialized site
// ...that the solution belongs to IOT color it
// Jye and anyone else can edit this

// state hooks [useState()]

// logic to handle button clicks below
// "preventDefault" and re-render

// logic to handle the background coloring
// based on which specialized site the solution belongs to
// functional component
// button(s) to select arrangement order
// the table displayed according to the correct arrangement
// <style> tag in this component ".js" file to handle any custom logic

import React, { useState } from "react";
import { useTable, useSortBy } from "react-table";

const tableData = [
  {
    solution: "Under",
    cost: "1",
    benefit: "nifce",
    co2: "57",
    habitat: "MI",
    sources: "55",
    "Specialized Site" : "matter"
  },
  {
    solution: "Construction",
    cost: "2",
    benefit: "nifce",
    co2: "57",
    habitat: "MI",
    sources: "12"
  },
  {
    solution: "Please Return",
    cost: "3",
    benefit: "nifce",
    co2: "57",
    habitat: "MI",
    sources: "23"
  },
];



function SolutionTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Solution / Endeavor",
        accessor: "solution",
      },
      {
        Header: "Cost (Billion USD/yr)",
        accessor: "cost",
      },
      {
        Header: "Benefit (Billion USD/yr)",
        accessor: "benefit",
      },
      {
        Header: "CO² Reduction megaTon/yr",
        accessor: "co2",
      },
      {
        Header: "Habitat Preservation (km²)",
        accessor: "habitat",
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
