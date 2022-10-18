import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

const siteConfig = require("./site_config.json");
const site = siteConfig.specialized_site_name;

const Energy = () => {
  return (
    <>
      <Head>
        <title>UCS | Energy Site</title>
        <meta
          name="keywords"
          content="energy, energy research, carbon pricing, solar, wind, biomass, nuclear, coal"
        />
      </Head>
      <SpecializedSite
        site={site}
        focusAreas={hierarchy}
        /* siteDescription={"Production, distribution, and consumption"} */
      />
    </>
  );
};

export default Energy;