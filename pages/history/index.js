import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

const siteConfig = require("./site_config.json");
const site = siteConfig.specialized_site_name;

const History = () => {
  return (
    <>
      <Head>
        <title>UCS | History Site</title>
        <meta
          name="keywords"
          content="history, timelines, endeavors, cost, benefit"
        />
      </Head>
      <SpecializedSite
        site={site}
        focusAreas={hierarchy}
        siteDescription={"Past and future progress"}
      />
    </>
  );
};

export default History;
