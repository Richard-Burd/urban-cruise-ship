import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div>This is the layout component</div>
      {/* https://tailwindcss.com/docs/installation/play-cdn
      this is a tempoary script for copy & pasting to Michael's code...
      ...in the final build, this will be deleted and we will use the command:
      $npm run build-css */}
        <script src="https://cdn.tailwindcss.com" defer></script>
      <Navbar />
      <div className="page-content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
