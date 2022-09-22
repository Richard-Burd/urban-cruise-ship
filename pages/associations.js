import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";

const Associations = () => {
  return (
    <>
      <Head>
        <title>UCS Associations</title>
        <meta
          name="keywords"
          content="associations, partnerships, fellowship, affiliation, alliance"
        />
      </Head>
      <div>
        <NavbarTitleBlock
          title={"Associations"}
          subtitle={
            "Our connections with others are important parts of our history"
          }
        />
      </div>
    </>
  );
};

export default Associations;
