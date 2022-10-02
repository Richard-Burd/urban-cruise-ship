const ArticlesNavbar = (props) => {
  // This is a global variable in the ".env.local" file located in the main directory...
  // ...it defines the legacy path to Michael's old version of the UCS Website so that we can
  // use all of his original article files until we import them into
  const legacyPath = `${process.env.NEXT_PUBLIC_LEGACY_UCS_WEBSITE_ARTICLE_URI}/${props.site}/`;

  const articleSet = props.articles;
  return (
    <>
      <div>
        {articleSet.map((article) => (
          <a
            key={article.article_url}
            href={legacyPath + article.article_url}
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <h3
                className={`${props.site}-article-button-background-color ${props.site}-article-button-font-color m-2 p-2`}
              >
                {article.article_title}
              </h3>
            </button>
          </a>
        ))}
      </div>
    </>
  );
};

export default ArticlesNavbar;
