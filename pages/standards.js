import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";

const Standards = () => {
  return (
    <>
      <Head>
        <title>UCS Standards</title>
        <meta name="keywords" content="standards, graphic standards, convention, criteria principles" />
      </Head>
      <div>
        <NavbarTitleBlock
          title={"Our Standards"}
          subtitle={
            "Urban Cruise Ship operates according to the following principles:"
          }
        />
      </div>
    </>
  );
};

export default Standards;
