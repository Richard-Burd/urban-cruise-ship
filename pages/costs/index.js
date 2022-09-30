import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

const siteConfig = require("./site_config.json");
const site = siteConfig.specialized_site_name;

const Costs = () => {
  return (
    <>
      <Head>
        <title>UCS | Costs Site</title>
        <meta
          name="keywords"
          content="costs, cost internalization, economic, externalities, property rights"
        />
      </Head>
      <SpecializedSite
        site={site}
        focusAreas={hierarchy}
      />
    </>
  );
};

export default Costs;