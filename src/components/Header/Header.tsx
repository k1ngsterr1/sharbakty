import React from "react";
import Hamburger from "hamburger-react";

import "./styles/header.css";

const logo = require("../../assets/white_logo.svg").default;

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <Hamburger color="white"></Hamburger>
    </header>
  );
};

export default Header;
