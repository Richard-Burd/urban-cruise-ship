// This "2" version (ans in ArticleNavbar2.js) is for rendering Richard's
// new MDX Markdown article files as opposed to Michael's older article files
import Link from "next/link";
import ArticleNavbarButton from "./ArticleNavbarButton";

const ArticleNavbar2 = (props) => {
  // This is a global variable in the ".env.local" file located in the main directory...
  // ...it defines the legacy path to Michael's old version of the UCS Website so that we can
  // use all of his original article files until we import them into

  const articleSet = props.articles;
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-0.5 mr-3 ml-2 lg:mr-0 lg:ml-0 my-1">
        {articleSet.map((article) => (
          <Link
            key={article.article_url}
            href={`/${props.site}/${props.focusAreaUrl}/${article.article_url}`}
          >
            <a key={article.article_url} rel="noreferrer">
              <ArticleNavbarButton
                site={props.site}
                focusAreaUrl={props.focusAreaUrl}
                articleTitle={article.article_title}
                articleUrl={article.article_url}
              />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ArticleNavbar2;
