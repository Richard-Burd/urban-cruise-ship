// This is a React component that renders markdown 
// The markdown can render footnotes
// This will eventually be incorporated into SolutionTable.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkFootnotes from 'remark-footnotes';
import { Footnotes } from 'react-markdown';

// we want to call our footnotes "References"
const CustomFootnotes = ({ children, ...props }) => (
  <Footnotes {...props}>
    <h2>References</h2>
    {children}
  </Footnotes>
);

const MyComponent = () => {

  // The markdown itself is defined as a variable,
  // in our solutionTable, this would be defined here:

  // const columns = React.useMemo(() => [
  //   Header: "Sources",
  //   accessor: "sources",
  //   Cell: ({ value }) => {
  //    "this-is-where-we-tell-the-table-we-want-to-render-markdown"
  //   },
  // ], []);
  const markdownText = `
  # This is a heading
  This is a paragraph with **bold** text.[^1]

  [^1]: This is a footnote.
  `;

  // everything in the <ReactMarkdown> tag would have to be 
  // incorporated into the SolutionTable.js return statement
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkFootnotes]}
        components={{ footnotes: CustomFootnotes }}
      >
        {markdownText}
      </ReactMarkdown>
    </div>
  );
};

export default MyComponent;
