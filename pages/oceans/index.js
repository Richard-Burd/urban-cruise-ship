import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

const siteConfig = require("./site_config.json");
const site = siteConfig.specialized_site_name;

const Oceans = () => {
  return (
    <>
      <Head>
        <title>UCS | Oceans Site</title>
        <meta
          name="keywords"
          content="ocean, water, biodiversity, plastic, pollution, acidification, floating cities, seafood"
        />
      </Head>
      <SpecializedSite
        site={site}
        focusAreas={hierarchy}
        /* siteDescription={"Health, resources, and energy"} */
      />
    </>
  );
};

export default Oceans;