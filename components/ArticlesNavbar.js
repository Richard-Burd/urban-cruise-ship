const ArticlesNavbar = (props) => {
  // This defines the native article path within Richard's new rebuild of the UCS Website
  const nativePath = `/${props.site}/${props.focusAreaUrl}/`;

  // This defines the legacy path to Michael's old version of the UCS Website so that we can
  // use all of his original article files
  const legacyPath = `http://urbancruiseship.org/solution/${props.site}/`;

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
