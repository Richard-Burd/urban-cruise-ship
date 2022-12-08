// This file is based on the following code here:
// https://github.com/vercel/next.js/discussions/36310#discussioncomment-2602491
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // we want to modify the remarkGfm plugin so that it
    // renders 'References' instead of 'Footnotes'.
    // We tried running the following line of code here:
    // remarkPlugins: [() => remarkGfm({label: 'references'})], 
    // but it didn't work.
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);