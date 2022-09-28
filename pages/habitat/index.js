import Head from "next/head";
import Link from "next/link";
const data = require("./focusAreas.json");

console.log(data);

data.map((item) => {
  console.log(item.title);
});

const Habitat = () => {
  return (
    <>
      <Head>
        <title>UCS | Habitat Site</title>
        <meta
          name="keywords"
          content="habitat, diet, health, population, social well-being, environment, Consumerism"
        />
      </Head>
      <nav>
        {data.map((item) => (
          <Link href={"/habitat/" + item.url} key={item.url}>
            <a>
              <span className="m-4 p-4">{item.title}</span>
            </a>
          </Link>
        ))}
      </nav>
      <div className="mt-12">
        the Navbar above will appear in the HABITAT site and child focus area
        sites; the data to generate this navbar comes from the
        ./pages/habitat/focusAreas.json file
      </div>
      <div className="m-12 p-12 text-8xl">
        this is the &quot;Habitat&quot; specialized site
      </div>
      <div className="m-12 p-12 text-4xl">
        The Focus Areas below are being dynamically rendered per from:
        ./pages/habitat/focusAreas.json
      </div>
      <div>
        {data.map((item) => (
          <Link href={"/habitat/" + item.url} key={item.url}>
            <a>
              <h3>{item.title}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Habitat;
