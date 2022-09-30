import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

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
        site={"habitat"}
        focusAreas={hierarchy}
      />
    </>
  );
};

export default Habitat;