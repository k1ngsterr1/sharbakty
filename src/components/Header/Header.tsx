import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import Menu from "../Menu/Menu";

import "./styles/header.css";
import { Link as ScrollLink } from "react-scroll";

interface HeaderProps {
  isMenuOpen?: any;
  toggleMenu?: any;
}

const logo = require("../../assets/white_logo.svg").default;

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
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
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav">
        <ScrollLink className="link" to="">
          Главная
        </ScrollLink>
        <ScrollLink className="link ml32" to="">
          О нас
        </ScrollLink>
        <ScrollLink className="link ml32" to="">
          Услуги
        </ScrollLink>
        <ScrollLink className="link ml32" to="">
          Контакты
        </ScrollLink>
      </nav>
      <button className="contact-btn">Связаться с нами</button>
      <div className="hamburger-btn">
        <Hamburger
          color="white"
          toggled={isMenuOpen ? true : false}
          onToggle={toggleMenu}
        ></Hamburger>
      </div>
    </header>
  );
};

export default Header;
