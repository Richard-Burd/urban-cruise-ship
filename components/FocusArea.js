import Logos from "./Logos";
import FocusAreasNavbar from "./FocusAreasNavbar";
import ArticlesNavbar from "./ArticlesNavbar";

const FocusArea = (props) => {
  const searchValue = props.focusAreaUrl;
  const hierarchy = props.hierarchy;
  function findChildren(searchValue) {
    return hierarchy.find(({ focus_area_url }) => {
      return focus_area_url === searchValue;
    }).articles;
  }
  return (
    <>
      <FocusAreasNavbar site={props.site} focusAreas={hierarchy} />
      <ArticlesNavbar
        site={props.site}
        focusAreas={hierarchy}
        articles={findChildren(searchValue)}
      />
      <div className={`${props.site}-background-gradient`}>
        <Logos site={props.site} />
        <div className="standard-font-1 text-4xl">{props.focusAreaName}</div>
        <div>
          {findChildren(props.focusAreaUrl).map((article) => {
            return (
              <div key={article.article_url}>
                <a
                  href={`/${props.site}/${props.focusAreaUrl}/${article.article_url}`}
                >
                  {article.article_title}
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
