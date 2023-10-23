import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "./styles/footer-styles.css";

const white_logo = require("../../assets/white_logo.svg").default;

const Footer = () => {
  return (
    <footer className="footer mt64">
      <div className="content center">
        <img src={white_logo} className="white-logo" alt="white-logo" />
        <nav className="links">
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
        <figure className="separator-linez"></figure>
        <span className="all-rights">2023 All right reserved.</span>
      </div>
      <div className="content-pc">
        <div className="upper-row mt32">
          <img src={white_logo} className="white-logo" alt="white-logo" />
          <nav className="links">
            <ScrollLink className="nav-link mt16" to="main" smooth>
              Главная
            </ScrollLink>
            <ScrollLink className="nav-link mt16" to="about" smooth>
              О нас
            </ScrollLink>
            <ScrollLink className="nav-link mt16" to="services" smooth>
              Услуги
            </ScrollLink>
            <ScrollLink className="nav-link mt16" to="contact" smooth>
              Контакты
            </ScrollLink>
          </nav>
          <a href="mailto: info@example.com" className="mail-link">
            info@example.com
          </a>
        </div>
        <figure className="separator-linez mt16"></figure>
        <span className="all-rights mt32">2023 All right reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
