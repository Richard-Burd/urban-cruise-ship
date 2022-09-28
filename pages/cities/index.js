// This would read the hierarchy.json file and create 
// a link to each focus area

// If I had information outside the hierarchy that I 
// wanted to put on the CITIES Specialized site landing page,
// I could add that in here.

import Head from "next/head";
import Link from "next/link";

const Cities = () => {
  return (
    <>
      <Head>
        <title>UCS | Cities Site</title>
        <meta name="keywords" content="cities,  urban development, urban sprawl" />
      </Head>
      <div className="m-12 p-12 text-8xl">
        this is the &quot;Cities&quot; specialized site
      </div>
      <div>
        <Link href={"/cities/cities_socioeconomics"}>
          <a>
            <h3>This is a link to the Socioeconomics Focus Area</h3>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Cities;
