import FocusAreaNavbar from "./FocusAreaNavbar.js";
import ArticleNavbar2 from "./ArticleNavbar2.js";

const Article = ({ children, focusAreaUrl, site, hierarchy }) => {
	const searchValue = focusAreaUrl;
	function findArticles(searchValue, hierarchy) {
		return hierarchy.find(({ focus_area_url }) => {
			return focus_area_url === searchValue;
		}).articles;
	}
  return (
    <>
      <FocusAreaNavbar site={site} focusAreas={hierarchy} />
      <ArticleNavbar2
        site={site}
        focusAreas={hierarchy}
        articles={findArticles(searchValue, hierarchy)}
        focusAreaUrl={focusAreaUrl}
      />
      <div className={`article-wrap ${site}-background-gradient`}>
        {children}
      </div>
    </>
  );
};

export default Article;
