import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <div>This is the layout component</div>
      <Navbar />
      <div className="page-content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
