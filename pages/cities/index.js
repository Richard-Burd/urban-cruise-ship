import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

const siteConfig = require("./site_config.json");
const site = siteConfig.specialized_site_name;

const Cities = () => {
  return (
    <>
      <Head>
        <title>UCS | Cities Site</title>
        <meta
          name="keywords"
          content="cities,  urban development, urban sprawl"
        />
      </Head>
      <SpecializedSite
        site={site}
        focusAreas={hierarchy}
        /* siteDescription={"Sustainable design principles"} */
      />
    </>
  );
};

export default Cities;
