import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import Menu from "../Menu/Menu";

import "./styles/colorful-styles.css";

interface HeaderProps {
  isMenuOpen?: any;
  toggleMenu?: any;
}

const logo = require("../../assets/logo.svg").default;

const ColorfulHeader: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    return () => {
      document.body.style.overflowY = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="c-header">
      <img src={logo} alt="logo" className="c-logo" />
      <Hamburger
        color="#EB7F38"
        toggled={isMenuOpen ? true : false}
        onToggle={toggleMenu}
      ></Hamburger>
    </header>
  );
};

export default ColorfulHeader;
