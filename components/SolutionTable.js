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
    "Name": "Jye",
    "Age": 20,
    "State": "TN",
    "Specialized Site": "energy"
  },
  {
    "Name": "Rick",
    "Age": 30,
    "State": "OR",
    "Specialized Site": "matter"
  },
  {
    "Name": "Lee",
    "Age": 40,
    "State": "MI"
  }
];

function SolutionTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "Name"
      },
      {
        Header: "Age",
        accessor: "Age"
      },
      {
        Header: "State",
        accessor: "State"
      }
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
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={
                  column.isSorted
                    ? column.isSortedDesc
                      ? "sort-desc"
                      : "sort-asc"
                    : ""
                }
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={rowStyle(row.original)}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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