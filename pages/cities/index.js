// This would read the hierarchy.json file and create
// a link to each focus area

// If I had information outside the hierarchy that I
// wanted to put on the CITIES Specialized site landing page,
// I could add that in here.

import Head from "next/head";
import Link from "next/link";
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
