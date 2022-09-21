import Head from "next/head";
import AboutPageDropdown from "../components/AboutPageDropdown";
import NavbarTitleBlock from "../components/NavbarTitleBlock";

const About = () => {
  return (
    <>
      <Head>
        <title>About UCS</title>
        <meta name="keywords" content="about, about us, about UCS" />
      </Head>
      <div>
      <i>this is the about page</i>
      <br></br>
      <NavbarTitleBlock 
        title={"About Us"}
        subtitle={"Founded in 2014, Urban Cruise Ship presents environmental solutions."}
      />
      </div>
      <AboutPageDropdown />
    </>
  );
};

export default About;
