// This file is based on the following code here:
// https://github.com/vercel/next.js/discussions/36310#discussioncomment-2602491
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import remarkRehype from 'remark-rehype'

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
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[remarkRehype, {footnoteLabel: "References"}]],
  },
});

export default withMDX(nextConfig);