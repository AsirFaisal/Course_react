import React from "react";
import "./Header.css";
import NavBar from "./Navbar";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <div className="header">
      <NavBar></NavBar>
      <Footer></Footer>
    </div>
  );
};

export default Header;
