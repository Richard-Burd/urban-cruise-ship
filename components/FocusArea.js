import Logos from "./Logos";
import FocusAreaNavbar from "./FocusAreaNavbar";
import ArticleNavbar from "./ArticleNavbar";
import FocusAreaDescriptions from "./FocusAreaDescriptions";

const FocusArea = (props) => {

  // This is a global variable in the ".env.local" file located in the main directory...
  // ...it defines the legacy path to Michael's old version of the UCS Website so that we can
  // use all of his original article files until we import them into the new site
  const legacyPath = `${process.env.NEXT_PUBLIC_LEGACY_UCS_WEBSITE_ARTICLE_URI}/${props.site}/`;

  const searchValue = props.focusAreaUrl;
  const hierarchy = props.hierarchy;
  function findChildren(searchValue) {
    return hierarchy.find(({ focus_area_url }) => {
      return focus_area_url === searchValue;
    }).articles;
  }
  return (
    <>
      <FocusAreaNavbar site={props.site} focusAreas={hierarchy} />
      <ArticleNavbar
        site={props.site}
        focusAreas={hierarchy}
        articles={findChildren(searchValue)}
        focusAreaUrl={props.focusAreaUrl}
      />
      <div className={`${props.site}-background-gradient`}>
        <FocusAreaDescriptions site={props.site} focusAreaDescription={props.focusAreaDescription} />
        <Logos site={props.site} />
        <div className="standard-font-1 text-4xl">{props.focusAreaName}</div>
        <div>
          {findChildren(props.focusAreaUrl).map((article) => {
            return (
              <div key={article.article_url}>
                <a
                  href={legacyPath + article.article_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={`${props.site}-article-button-background-color ${props.site}-article-button-font-color m-2 p-2`}>{article.article_title}</button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FocusArea;
