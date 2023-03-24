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
  # This is a Markdown Heading

  ## This is a Markdown Subheading
  This is a paragraph with **bold** text and a reference.[^1]

  ## Purpose
  This page is just a test page to show how markdown is injected
  directly into a React component.  We need this feature to do all
  the things we want to do with the solution table.  So far, we have
  been wrapping MDX markdown in components but that will not work for
  our solution table specifically, because we need markdown inside one
  of the columns, not just above, or below, the react component that
  renders the actual solution table.

  ## Plan
  This page will eventually get deleted.  It is here as an archetypal 
  guide for how to use the "react-markdown" and "remark-footnotes" libraries
  and get them to do all of the things we (currently) think they must do
  so that later on, we can use these libraries on the solution table.

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
