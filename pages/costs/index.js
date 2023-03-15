import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import Head from "next/head";
// const hierarchy = require("./hierarchy.json");
// import SpecializedSite from "../../components/SpecializedSite";

const siteConfig = require("./site_config.json");
// const site = siteConfig.specialized_site_name;

const Costs = () => {
  const router = useRouter();
  // Since there's nothing else in the costs page, 
  // ...we are redirecting to the priorities page
  useEffect(() => {
    // Perform client-side navigation to the /about/team route
    router.replace('/costs/economy');
  }, []);

  return null;
  
  // return (
  //   <>
  //     <Head>
  //       <title>UCS | Costs Site</title>
  //       <meta
  //         name="keywords"
  //         content="costs, cost internalization, economic, externalities, property rights"
  //       />
  //     </Head>
  //     <SpecializedSite
  //       site={site}
  //       focusAreas={hierarchy}
  //       /* siteDescription={"Internalized vs. subsidized"} */
  //     />
  //   </>
  // );
};

export default Costs;