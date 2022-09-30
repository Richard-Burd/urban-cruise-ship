import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

const Waste = () => {
  return (
    <>
      <Head>
        <title>UCS | Energy Site</title>
        <meta
          name="keywords"
          content="waste, recycling, composition, landfill, wet, dry, funding, hazardous waste, material reduction"
        />
      </Head>
      <SpecializedSite
        site={"waste"}
        focusAreas={hierarchy}
      />
    </>
  );
};

export default Waste;