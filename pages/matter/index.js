import Head from "next/head";
import Link from "next/link";

const Matter = () => {
  return (
    <>
      <Head>
        <title>UCS | Matter Site</title>
        <meta
          name="keywords"
          content="farming, diet, crops, water, forestry, mining waste, cooking, distribution"
        />
      </Head>
      <div className="m-6 p-6 text-6xl">
        this is the &quot;Matter&quot; specialized site
      </div>
      <div className="m-6 p-6 text-2xl">
        below are a list of Our focus areas in this MATTER specialized site,
        they are manually rendered and do not iterate over the
        "data/multi_solutions.json" file that is part of Michael's original
        build:
      </div>
      <div>
        <Link className="text-2xl" href="/matter/foodwater_priorities">
          Priorities
        </Link>
      </div>
      <div>
        <Link className="text-2xl" href="/matter/diet">
          Diets
        </Link>
      </div>
      <div>
        <Link className="text-2xl" href="/matter/ag_env">
          Impacts
        </Link>
      </div>
      <div>
        <Link className="text-2xl" href="/matter/practices">
          Farming Practices
        </Link>
      </div>
      <div>
        <Link className="text-2xl" href="/matter/ag_dist">
          Food Distribution
        </Link>
      </div>
      <div>
        <Link className="text-2xl" href="/matter/nonfood">
          Non-Food Crops
        </Link>
      </div>
      <div>
        <Link className="text-2xl" href="/matter/water">
          Water
        </Link>
      </div>
      <div>
        <Link className="text-2xl" href="/matter/forestry">
          Forestry
        </Link>
      </div>
      <div>
        <Link className="text-2xl" href="/matter/mining">
          Mining
        </Link>
      </div>
    </>
  );
};

export default Matter;
