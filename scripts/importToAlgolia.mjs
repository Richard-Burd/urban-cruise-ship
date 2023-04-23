// scripts/importToAlgolia.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import algoliasearch from "algoliasearch";
import dotenv from "dotenv";

dotenv.config();

// Read and parse all pages in the "pages" directory
function getAllPages(dir) {
  const pages = fs.readdirSync(dir);
  const pageData = [];

  pages.forEach((filename) => {
    const filePath = path.join(dir, filename);

    // Check if the file is a file, not a directory
    if (fs.statSync(filePath).isFile()) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      // Ignore pages you don't want to index, like _app.js or _document.js
      if (!filename.startsWith("_") && !filename.startsWith("api")) {
        pageData.push({
          objectID: filename,
          title: data.title || filename,
          url: `/${filename.replace(/\.mdx?$/, "")}`,
          content,
        });
      }
    }
  });

  return pageData;
}

async function importPagesToAlgolia() {
  const client = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_USAGE_API_KEY
  );

  const index = client.initIndex("your_index_name"); // Replace with your Algolia index name

  const pages = getAllPages("./pages");

  try {
    await index.saveObjects(pages);
    console.log("Pages imported to Algolia successfully!");
  } catch (error) {
    console.error("Error importing pages to Algolia:", error);
  }
}

importPagesToAlgolia();