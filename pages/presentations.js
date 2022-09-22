import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";

const Presentations = () => {
  return (
    <>
      <Head>
        <title>UCS Presentations</title>
        <meta
          name="keywords"
          content="presentations, exhibitions, talks, lecture, handouts, materials"
        />
      </Head>
      <div>
        <NavbarTitleBlock
          title={"Presentations"}
          subtitle={
            "John will think of a good subtitle for this presentations page."
          }
        />
      </div>
    </>
  );
};

export default Presentations;
