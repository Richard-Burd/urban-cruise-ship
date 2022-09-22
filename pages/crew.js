import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";

const Crew = () => {
  return (
    <>
      <Head>
        <title>UCS Crew</title>
        <meta
          name="keywords"
          content="team, cohort, leadership, about us, people, persons"
        />
      </Head>
      <div>
        <NavbarTitleBlock
          title={"The Crew"}
          subtitle={
            "Urban Cruise Ship is comprised of the following current and past crewmembers."
          }
        />
      </div>
    </>
  );
};

export default Crew;
