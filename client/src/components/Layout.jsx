import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

// eslint-disable-next-line react/prop-types
const Layout= ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
