import Head from "next/head";
import AboutPageDropdown from "../components/AboutPageDropdown";

const About = () => {
  return (
    <>
      <Head>
        <title>About UCS</title>
        <meta name="keywords" content="about, about us, about UCS" />
      </Head>
      <div className="m-12 p-12 text-8xl standard-font-2">
      Who started Urban Cruise Ship and why?
      </div>
      <AboutPageDropdown />
    </>
  );
};

export default About;
