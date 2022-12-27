// This file is based on the following code here:
// https://github.com/vercel/next.js/discussions/36310#discussioncomment-2602491
// ...which answers the question: 
// "How to import remark plugins (remark-gfm) in next.config.js?"

// This is used to configure Next.js to support MDX files.
import createMDX from '@next/mdx';

// This is used to auto-generate footnotes in MDX files.
import remarkGfm from 'remark-gfm';

// We are using this to rename the 'Footnotes' to say 'References' instead.
import remarkRehype from 'remark-rehype'

// These are used to auto-generate links next to each heading in MDX files.
// This allows us to cite a sub-section of a page like this: 
// url/site/focua-area/article#subsection-name (title is always lower case)
// e.g.: urbancruiseship.org/energy/energy_production/hydro#dam-removal
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// This is used to configure Next.js to support MDX files.
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

// These are all of the possible behaviors for inserting a link icon next to each heading
// We may want to implement this in the future (or not)
const behaviors = ['prepend', 'append', 'wrap', 'before', 'after'] // only 'append' is called in the code below

// How to insert a link icon next to each heading in the future:
// https://daily-dev-tips.com/posts/modifying-rehype-autolink-headings/#modify-the-rehype-autolink-headings-plugin

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [remarkRehype, {footnoteLabel: 'References'}], // can be anything: e.g. 'Citations'
      [rehypeSlug],
      [rehypeAutolinkHeadings, 
        {
          // a future link icon should be appended to each heading
          // prepending creates margin width issues
          behaviors: 'append',
          properties: {
            ariaHidden: false, // for accessability
          }
        }
      ]
    ],
  },
});

export default withMDX(nextConfig);