import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

const siteConfig = require("./site_config.json");
const site = siteConfig.specialized_site_name;

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
      <SpecializedSite
        site={site}
        focusAreas={hierarchy}
        siteDescription={"Perspective and Perception"}
      />
    </>
  );
};

export default Habitat;