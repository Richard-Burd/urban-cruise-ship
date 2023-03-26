import React, { useState } from "react";
import Link from "next/link";
import { useTable, useSortBy } from "react-table";
import ReactMarkdown from "react-markdown";
import remarkFootnotes from "remark-footnotes";
import { Footnotes } from "react-markdown";

const CustomLink = ({ node, ...props }) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

function renderFootnotes(data) {
  const footnotes = [];

  data.forEach((row) => {
    if (row.sources) {
      row.sources.forEach((source) => {
        const matches = source.match(/\[\^(\d+)\]:(.*)/);
        if (!matches) return;
        const footnoteNumber = matches[1];
        const footnoteContent = matches[2];

        if (!footnotes.find((footnote) => footnote.key === `footnote-${footnoteNumber}`)) {
          footnotes.push(
            <div key={`footnote-${footnoteNumber}`} id={`fn-${footnoteNumber}`} style={{ display: 'block' }}>
              <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
                {footnoteNumber}. <ReactMarkdown components={{a: CustomLink}} children={footnoteContent.trim()} />
                <a href={`#fnref-${footnoteNumber}`} className="footnote-backref" style={{ marginLeft: '8px' }}>
                  ↩
                </a>
              </span>
            </div>
          );
        }
      });
    }
  });

  return (
    <div className="footnotes">
      <h2>References:</h2>
      {footnotes}
    </div>
  );
}

// this is raw data for our solutions
// We can move this to a separate file if we want
// We will import this data onto the "Solutions & Endeavors" page...
// ...thus the "export" statement below.
export const tableData = [
  {
    solution: "5% Methanol in Gasoline - U.S.",
    link: "/energy/energy_distribution/methanol#blend-5-methanol-into-the-us-gas-supply",
    site: "energy",
    cost: 11.2,
    benefit: 13.2,
    co2: 11,
    habitat: null,
    sources: [
      `[^1]: This is the first footnote linking to [Google](https://google.com)`,
      `[^2]: This is the second footnote`,
    ],
  },
  {
    solution: "Ban Bottom Trawling - E.U.",
    link: "/oceans/ocean_industry/seafood#ban-bottom-trawling-on-the-high-seas",
    site: "oceans",
    cost: 0.34,
    benefit: 2.42,
    co2: 5,
    habitat: 162000,
    sources: [
      `[^3]: This is the third footnote`,
      `[^4]: This is the fourth footnote`,
      `[^1]: `,
    ],
  },
];

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
        Cell: ({ value }) => (
          <Link href={value.link}>
            <a target="_blank" rel="noopener noreferrer">
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
        Cell: ({ value }) =>
          value !== null
            ? `$${Intl.NumberFormat(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              }).format(value)}`
            : null,
      },
      {
        // Same as above re: number formatting without the $ sign
        Header: "CO² Reduction megaTon/yr",
        accessor: "co2",
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

  // In functional React components, useState is used to define state
  const [data, setData] = useState(tableData);

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
      {renderFootnotes(data)}
    </>
  );
}

function rowStyle(row) {
  return row.site + "-article-button-background-color";
}

export default SolutionEndeavorTable;
