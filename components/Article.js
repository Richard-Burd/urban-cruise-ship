import FocusAreaNavbar from "./FocusAreaNavbar.js";
import ArticleNavbar from "./ArticleNavbar.js";

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
      <ArticleNavbar
        site={site}
        focusAreas={hierarchy}
        articles={findArticles(searchValue, hierarchy)}
      />
      <div className={`article-wrap ${site}-background-gradient pb-12`}>
        {children}
      </div>
    </>
  );
};

export default Article;
