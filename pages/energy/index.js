import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

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
        site={"energy"}
        focusAreas={hierarchy}
      />
    </>
  );
};

export default Energy;