import Head from "next/head";
import AboutPageDropdown from "../components/AboutPageDropdown";

const About = () => {
  return (
    <>
      <Head>
        <title>About UCS</title>
        <meta name="keywords" content="about ucs" />
      </Head>
      <div className="m-12 p-12 text-8xl">
        this is the &quot;About&quot; page
      </div>
      <AboutPageDropdown />
    </>
  );
};

export default About;
