import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Photography</h1>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
