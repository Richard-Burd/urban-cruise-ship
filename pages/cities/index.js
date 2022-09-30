import Head from "next/head";
const hierarchy = require("./hierarchy.json");
import SpecializedSite from "../../components/SpecializedSite";

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
        site={"cities"}
        focusAreas={hierarchy}
      />
    </>
  );
};

export default Cities;
