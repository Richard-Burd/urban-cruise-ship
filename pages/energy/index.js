import Head from "next/head";
const data = require("../../data/multi_solutions.json");

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
      <div className="m-12 p-12 text-8xl">
        this is the &quot;Energy&quot; specialized site
      </div>
    </>
  );
};

export default Energy;
