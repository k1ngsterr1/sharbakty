import React, { useState, useEffect } from "react";

import Hamburger from "hamburger-react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Fade, Slide } from "react-awesome-reveal";

import "./styles/menu-styles.css";

interface MenuProps {
  isMenuOpen?: any;
  toggleMenu?: any;
  isMenuPcOpen?: any;
  togglePcMenu?: any;
  openModal?: any;
}

const logo = require("../../assets/white_logo.svg").default;

const Menu: React.FC<MenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();

  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  function navigateToMain() {
    navigate("/");
    if (isMenuOpen) {
      toggleMenu();
    }
  }

  return (
    <>
      <Slide className="menu" direction="down" triggerOnce={isMenuOpen}>
        <div className="menu-content">
          <div className="hamburger-btn">
            <Hamburger toggled={true} toggle={closeMenu} color="white" />
          </div>
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={navigateToMain}
          />
          <figure className="separator mt32"></figure>
          <nav className="links">
            <Fade direction="right" className="">
              <ScrollLink className="menu-link" to="main" onClick={closeMenu}>
                Главная
              </ScrollLink>
            </Fade>
            <Fade direction="left" delay={200} className="mt16">
              <ScrollLink
                className="menu-link mt16"
                to="about"
                onClick={closeMenu}
              >
                О нас
              </ScrollLink>
            </Fade>
            <Fade direction="right" delay={300} className="mt16">
              <ScrollLink className="menu-link " to="char" onClick={closeMenu}>
                Характеристики
              </ScrollLink>
            </Fade>
            <Fade direction="left" delay={400} className="mt16">
              <ScrollLink
                className="menu-link "
                to="services"
                onClick={closeMenu}
              >
                Услуги
              </ScrollLink>
            </Fade>
            <Fade direction="right" delay={500} className="mt16">
              <ScrollLink
                className="menu-link  send"
                to="contact"
                onClick={closeMenu}
              >
                Отправить заявку
              </ScrollLink>
            </Fade>
          </nav>
        </div>
      </Slide>
    </>
  );
};

export default Menu;
