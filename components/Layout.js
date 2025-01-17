import Head from "next/head";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import SpecializedSiteNavbar from "./SpecializedSiteNavbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Urban Cruise Ship</title>
        <meta
          name="description"
          content="Founded in 2014, Urban Cruise Ship presents environmental solutions"
        />
      </Head>
      
      {/* Removed transform scale - rely on container sizing instead */}
      <div
        className="mx-auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          // minHeight: "100vh", // Uncomment if you want the layout to stretch full height
        }}
      >
        {/* You can add px-4 or margin if you want more side whitespace:
            e.g., className="sm:max-w-screen-lg lg:max-w-screen-lg mx-auto relative px-4"
        */}
        <div className="sm:max-w-screen-lg lg:px-0 lg:max-w-screen-lg mx-auto relative">
          <div className="relative pr-2.5 z-10">
            <MobileNavbar />
          </div>
          <div className="relative z-10">
            <Navbar />
          </div>
          <div className="relative z-0">
            <SpecializedSiteNavbar />
          </div>
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
