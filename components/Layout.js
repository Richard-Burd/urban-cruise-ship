import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from 'next/script';

const Layout = ({ children }) => {
  return (
    <>
      <div>This is the layout component</div>
      {/* https://tailwindcss.com/docs/installation/play-cdn
      this is a tempoary script for copy & pasting to Michael's code...
      ...in the final build, this will be deleted and we will use the command:
      $npm run build-css */}
        <Script src="https://cdn.tailwindcss.com"></Script>
      <Navbar />
      <div className="page-content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
