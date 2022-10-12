import ArticleNavbarButton from "./ArticleNavbarButton";

const ArticleNavbar = (props) => {
  // This is a global variable in the ".env.local" file located in the main directory...
  // ...it defines the legacy path to Michael's old version of the UCS Website so that we can
  // use all of his original article files until we import them into
  const legacyPath = `${process.env.NEXT_PUBLIC_LEGACY_UCS_WEBSITE_ARTICLE_URI}/${props.site}/`;

  const articleSet = props.articles;
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-0.5 mr-4 my-2">
        {articleSet.map((article) => (
          <a
            key={article.article_url}
            href={legacyPath + article.article_url}
            target="_blank"
            rel="noreferrer"
          >
            <ArticleNavbarButton
              site={props.site}
              articleTitle={article.article_title}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default ArticleNavbar;
