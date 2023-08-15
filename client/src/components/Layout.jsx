import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

// eslint-disable-next-line react/prop-types
const Layout= ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
