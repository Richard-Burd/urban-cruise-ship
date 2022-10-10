import Logos from "./Logos";
import FocusAreaNavbar from "./FocusAreaNavbar";
import ArticleNavbar from "./ArticleNavbar";
import ArticleButton from "./ArticleButton";
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
      <div
        className={`border-t-2 border-gray-300 ${props.site}-background-gradient`}
      >
        <FocusAreaDescriptions
          site={props.site}
          focusAreaDescription={props.focusAreaDescription}
        />
        <Logos site={props.site} />
        <span
          className={`border-current ${props.site}-focus-area-title-color ${props.site}-site-focus-area-button-border-n-font-color focus-area-title-border-width focus-area-title-shadow focus-area-title-elliptical-geometry px-10 pb-1 ml-10 standard-font-1 text-5xl`}
        >
          {props.focusAreaName}
        </span>
        <div className="flex flex-wrap ml-8 mt-12">
          {findChildren(props.focusAreaUrl).map((article) => {
            return (
              <div key={article.article_url}>
                <a
                  href={legacyPath + article.article_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArticleButton site={props.site} articleTitle={article.article_title} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .focus-area-title-border-width {
          border-width: 2px;
        }
        .focus-area-title-shadow {
          box-shadow: 9px 12px 7px rgb(150, 150, 150);
        }
        .focus-area-title-elliptical-geometry {
          border-bottom-left-radius: 76px 32px;
          border-bottom-right-radius: 76px 32px;
          border-top-left-radius: 76px 32px;
          border-top-right-radius: 76px 32px;
        }
      `}</style>
    </>
  );
};

export default FocusArea;
