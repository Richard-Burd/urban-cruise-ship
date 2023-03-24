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
  // ...we are redirecting to the priorities page located at:
  // "./costs/economy"
  useEffect(() => {
    // Perform client-side navigation to the "./costs/economy" route
    router.replace('/costs/economy');
  }, [router]);

  return null;
  
  // If we ever expand the costs page, such that we have another focus area
  // besides just the "Priorities" one (located at "./costs/economy") we can
  // go ahead and uncomment the following code: 

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