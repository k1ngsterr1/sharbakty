import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

import "./styles/footer-styles.css";

const white_logo = require("../../assets/white_logo.svg").default;
const spark_logo = require("../../assets/spark_logo.svg").default;

const Footer = () => {
  const navigate = useNavigate();

  function ScrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function SparkRedirect() {
    window.open("https://sparkstudio.kz/", "_blank");
  }

  function navigateToMain() {
    navigate("/home");
  }

  return (
    <footer className="footer mt64">
      <div className="content center">
        <img
          src={white_logo}
          className="white-logo mt64"
          alt="white-logo"
          onClick={ScrollTop}
        />
        <nav className="links mt16">
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
        <figure className="separator-linez mt16" />
        <span className="all-rights mt16">
          © ТОО «Sharbakty Bidai Terminal»
        </span>
        <img
          onClick={SparkRedirect}
          className="spark-logo mt64 mb32"
          src={spark_logo}
          alt="spark-logo"
        />
      </div>
      <div className="content-pc">
        <div className="upper-row mt32">
          <img
            src={white_logo}
            className="white-logo"
            alt="white-logo"
            onClick={ScrollTop}
          />
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
          <a href="mailto: info@shbt.kz" className="mail-link">
            info@shbt.kz
          </a>
        </div>
        <figure className="separator-linez mt16"></figure>
        <span className="all-rights mt32">
          © ТОО «Sharbakty Bidai Terminal»
        </span>
        <img
          onClick={SparkRedirect}
          className="spark-logo mt16 mb16"
          src={spark_logo}
          alt="spark-logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
