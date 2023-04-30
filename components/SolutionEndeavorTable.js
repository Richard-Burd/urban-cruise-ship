import React, { useState } from "react";
import Link from "next/link";
import { useTable, useSortBy } from "react-table";
import ReactMarkdown from "react-markdown";
import { solutionData } from '../data/solutionData';
import { endeavorData } from '../data/endeavorData';

// This allows us to combine endeavors & solutions into one table
const endeavorDataWithSolutionKey = endeavorData.map(item => {
  return {
    ...item,
    solution: item.endeavor
  };
});


const CustomLink = ({ node, ...props }) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

function renderFootnotes(data) {
  const footnotesObj = {};

  data.forEach((row) => {
    if (row.sources) {
      row.sources.forEach((source) => {
        const matches = source.match(/\[\^(\d+)\]:\s(.*)/);
        if (!matches) return;
        const footnoteNumber = parseInt(matches[1], 10);
        const footnoteContent = matches[2];

        if (!footnotesObj[footnoteNumber]) {
          footnotesObj[footnoteNumber] = (
            <div
              key={`footnote-${footnoteNumber}`}
              id={`fn-${footnoteNumber}`}
              style={{ display: "block" }}
            >
              <span style={{ display: "inline-flex", alignItems: "baseline" }}>
                {footnoteNumber}.{" "}
                <ReactMarkdown components={{ a: CustomLink }}>
                  {footnoteContent.trim()}
                </ReactMarkdown>
                <a
                  href={`#fnref-${footnoteNumber}`}
                  className="footnote-backref"
                  style={{ marginLeft: "8px" }}
                >
                  ↩
                </a>
              </span>
            </div>
          );
        }
      });
    }
  });

  const sortedKeys = Object.keys(footnotesObj).sort(
    (a, b) => parseInt(a, 10) - parseInt(b, 10)
  );
  const footnotes = sortedKeys.map((key) => footnotesObj[key]);

  return (
    <div className="solution-endeavor-footnotes">
      <h2 id="footnote-label">References:</h2>
      {footnotes}
    </div>
  );
}

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

endeavorDataWithSolutionKey.sort((a, b) => {
  if (siteOrder[a.site] === siteOrder[b.site]) {
    // If sites are the same, sort alphabetically by solution
    return a.solution.localeCompare(b.solution);
  }

  // Sort by site order
  return siteOrder[a.site] - siteOrder[b.site];
});

// This function grabs the data above and translates it into data for the table
function SolutionEndeavorTable() {
  // It uses the React "useMemo" hook that allows you to memoize the result of a function
  const columns = React.useMemo(
    () => [
      {
        // Creates a column with the title: "Solution / Endeavor"
        Header: "Solution / Endeavor",

        // React Table uses the "accessor" property to determine what data to display
        // In our case we want the "solution" property from the data above for our title
        // ...we also want the "link" property so we can inject it into each row
        accessor: (row) => ({ solution: row.solution, link: row.link }),

        // The first column in the table has both a title as well as a link,
        // ...therefore both the title (solution) and link (link) are passed into the
        // ... "Cell" property
        Cell: ({ value, row }) => (
          <Link href={value.link}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={
                row.original.site === "oceans" || row.original.site === "space"
                  ? "light-text-for-colored-tables"
                  : ""
              }
            >
              {value.solution}
            </a>
          </Link>
        ),
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
        Header: "Net Benefit (Benefit - Cost)",
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
      {
        Header: "Sources",
        accessor: "sources",
        Cell: ({ value }) => {
          if (!value || value.length === 0) return null;
          return value.map((source, index) => {
            const matches = source.match(/\[\^(\d+)\]/);
            if (!matches) return null;
            const footnoteNumber = matches[1];
            return (
              <React.Fragment key={`fnref-${footnoteNumber}`}>
                {index > 0 && ", "}
                <a
                  href={`#fn-${footnoteNumber}`}
                  id={`fnref-${footnoteNumber}`}
                >
                  {footnoteNumber}
                </a>
              </React.Fragment>
            );
          });
        },
      },
    ],
    []
  );

  // This combines the data from the two tables into one array
  const combinedData = solutionData.concat(endeavorDataWithSolutionKey);

  // In functional React components, useState is used to define state
  const [data, setData] = useState(combinedData);

  // This creates an instance of the React table
  const tableInstance = useTable({ columns, data }, useSortBy);

  // This line destructures the table instance to extract properties & methods
  // ...to prepare rows for rendering.
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  // This is the actual JSX that gets rendered
  return (
    <>
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
      {renderFootnotes(data)}
    </>
  );
}

function rowStyle(row) {
  return row.site + "-table-background-color";
}

export default SolutionEndeavorTable;
