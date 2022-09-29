// This would read the hierarchy.json file and create
// a link to each article inside this focus area

// If I had information outside the hierarchy that I
// wanted to put on this focus area landing page,
// I could add that in here.

// I want to go in and find this:
// "focus_area_url":"cities_socioeconomics",
// ...then render only the children therein
const data = require("../hierarchy.json");

function findChildren(searchValue) {
  return data.find(({ focus_area_url }) => {
    return focus_area_url === searchValue;
  }).articles
}
console.log(findChildren("cities_socioeconomics"))

const citiesSocioeconomics = () => {
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

export default citiesSocioeconomics;
