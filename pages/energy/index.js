import Head from "next/head";
const data = require("../../data/multi_solutions.json");
import Link from "next/link";

const Energy = () => {
  // getStaticProps() might need to be used here to get the data from the json file,
  // https://youtu.be/mAHqpdVzJmA?t=84
  // maybe not, since the JSON file is internal, not external and being "fetched" 
  // from an outside server

  // This iterates over Michael's "multi_solutions.json" and finds the "energy" site
  // from here
  data.map((item, index) => {
    if (data[index].site === "energy") {
      console.log("i just found the energy site");
      console.log(`Here i am printing out the name of the site: ${data[index].site}`);
    }
  })
  // Talk to Chris bloom before you try any of this below
  console.log(data[0].topics);

  // iterate over the data's array & find the object whith the key of name with the value of "energy"
  // display the intro on the page (console.log(data[0].intro))

  // once in the energy object, iterate over the topics array &
  // display the topics on the page {console.log(data[0].topics)}
  // create buttons for those topics
  const focusAreas = data[0].topics;

  return (
    <>
      <Head>
        <title>UCS | Energy Site</title>
        <meta
          name="keywords"
          content="energy, energy research, carbon pricing, solar, wind, biomass, nuclear, coal"
        />
      </Head>
      <div className="m-12 p-12 text-8xl">
        this is the &quot;Energy&quot; specialized site
      </div>
      <div>
        <h1>Focus Areas:</h1>
        {focusAreas.map((focusAreas) => (
          <Link href={'/energy/' + focusAreas.url} key={focusAreas.url}>
            <a>
              <h3>{focusAreas.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Energy;
