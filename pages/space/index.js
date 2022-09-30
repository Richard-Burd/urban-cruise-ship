import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

const siteConfig = require("./site_config.json");
const site = siteConfig.specialized_site_name;

const Space = () => {
  return (
    <>
      <Head>
        <title>UCS | Space Site</title>
        <meta
          name="keywords"
          content="space, orbital debris, planetary protection, life, matter, scale, time"
        />
      </Head>
      <SpecializedSite
        site={site}
        focusAreas={hierarchy}
        siteDescription={"Human vs. robotic ventures"}
      />
    </>
  );
};

export default Space;