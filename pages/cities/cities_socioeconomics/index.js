const data = require("../hierarchy.json");

function findChildren(searchValue) {
  return data.find(({ focus_area_url }) => {
    return focus_area_url === searchValue;
  }).articles
}
console.log(findChildren("cities_socioeconomics"))

const CitiesSocioeconomics = () => {
  return (
    <>
      <div>CITIES Specialized Site | Socioeconomics Focus Area</div>
      <div>Chris Bloom will help me render the children I am looking for</div>
      <div>
        {findChildren("cities_socioeconomics").map((article) => {
          return (
            <div key={article.article_url}>
              <a href={article.article_url}>{article.article_title}</a>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default CitiesSocioeconomics;
