import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

const siteConfig = require("./site_config.json");
const site = siteConfig.specialized_site_name;

const Matter = () => {
  return (
    <>
      <Head>
        <title>UCS | Matter Site</title>
        <meta
          name="keywords"
          content="farming, diet, crops, water, forestry, mining waste, cooking, distribution"
        />
      </Head>
      <SpecializedSite
        site={site}
        focusAreas={hierarchy}
      />
    </>
  );
};

export default Matter;