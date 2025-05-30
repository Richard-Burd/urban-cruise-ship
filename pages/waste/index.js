import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

const siteConfig = require("./site_config.json");
const site = siteConfig.specialized_site_name;

const Waste = () => {
  return (
    <>
      <Head>
        <title>UCS | Waste Site</title>
        <meta
          name="keywords"
          content="waste, recycling, composition, landfill, wet, dry, funding, hazardous waste, material reduction"
        />
      </Head>
      <SpecializedSite
        site={site}
        focusAreas={hierarchy}
        /* siteDescription={"Zero waste methodology vs. scams"} */
      />
    </>
  );
};

export default Waste;