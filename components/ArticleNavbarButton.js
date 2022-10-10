const ArticleNavbarButton = (props) => {
  return (
    <>
      <div className="pb-1.5">
        <button
          className={`article-navbar-elliptical-geometry article-navbar-height article-navbar-shadow ${props.site}-article-button-background-color ${props.site}-article-button-font-color m-2 p-0.5 standard-font-1 text-center hover:-translate-y-1 hover:scale-110 duration-100 active:scale-100 tracking-wide w-full`}
        >
          {props.articleTitle}
        </button>
      </div>
      <style jsx>{`
        .article-navbar-height {
          height: 55px;
        }
        .article-navbar-shadow {
          box-shadow: 5px 6px 4px rgb(150, 150, 150);
        }
        .article-navbar-elliptical-geometry {
          border-bottom-left-radius: 33px 14px;
          border-bottom-right-radius: 33px 14px;
          border-top-left-radius: 33px 14px;
          border-top-right-radius: 33px 14px;
        }
      `}</style>
    </>
  );
};

export default ArticleNavbarButton;
