import Link from "next/link";

const ArticlesNavbar = (props) => {
  const articleSet = props.articles
  console.log(articleSet);
  return (
    <>
      <div>This is the navbar that will display the individual articles</div>
      <div>Here are all my articles</div>
      <div>
        {articleSet.map((article) => (
          <Link 
            key={article.article_title}
            href={`/${props.site}/${props.focusAreaUrl}/${article.article_url}`}
          >
           <button>
              <h3 className={`${props.site}-article-button-background-color m-2 p-2`}>{article.article_title}</h3>
           </button>
          </Link>
        ))};
      </div>
    </>
  );
};

export default ArticlesNavbar;
