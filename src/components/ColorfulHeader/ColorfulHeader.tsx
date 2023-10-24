import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import Menu from "../Menu/Menu";
import { Link as ScrollLink } from "react-scroll";

import { useNavigate } from "react-router-dom";

import "./styles/colorful-styles.css";

interface HeaderProps {
  isMenuOpen?: any;
  toggleMenu?: any;
}

const logo = require("../../assets/logo.svg").default;

const ColorfulHeader: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();

  function navigateToMain() {
    navigate("/");
  }

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
      <img src={logo} alt="logo" className="c-logo" onClick={navigateToMain} />
      <div className="hamburger-button">
        <Hamburger
          color="#EB7F38"
          toggled={isMenuOpen ? true : false}
          onToggle={toggleMenu}
        ></Hamburger>
      </div>
      <nav className="nav">
        <ScrollLink className="link" to="main" onClick={navigateToMain} smooth>
          Главная
        </ScrollLink>
        <ScrollLink
          className="link ml32"
          to="about"
          onClick={navigateToMain}
          smooth
        >
          О нас
        </ScrollLink>
        <ScrollLink
          className="link ml32"
          to="services"
          onClick={navigateToMain}
          smooth
        >
          Услуги
        </ScrollLink>
        <ScrollLink
          className="link ml32"
          to="contact"
          onClick={navigateToMain}
          smooth
        >
          Контакты
        </ScrollLink>
      </nav>
      <button className="contact-btn">Связаться с нами</button>
    </header>
  );
};

export default ColorfulHeader;
