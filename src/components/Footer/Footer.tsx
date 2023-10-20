import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "./styles/footer-styles.css";

const white_logo = require("../../assets/white_logo.svg").default;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content center">
        <img src={white_logo} className="white-logo mt48" alt="white-logo" />
        <nav className="links mt32">
          <ScrollLink className="nav-link mt16" to="main">
            Главная
          </ScrollLink>
          <ScrollLink className="nav-link mt16" to="main">
            О нас
          </ScrollLink>
          <ScrollLink className="nav-link mt16" to="main">
            Услуги
          </ScrollLink>
          <ScrollLink className="nav-link mt16" to="main">
            Контакты
          </ScrollLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
