
import FocusAreaNavbar from "./FocusAreaNavbar";
import ArticleNavbar2 from "./ArticleNavbar2";

const JavaScriptArticlePage = (props) => {
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
      <ArticleNavbar2
        site={props.site}
        focusAreas={hierarchy}
        articles={findChildren(searchValue)}
        focusAreaUrl={props.focusAreaUrl}
      />
    </>
  );
};

export default JavaScriptArticlePage;
