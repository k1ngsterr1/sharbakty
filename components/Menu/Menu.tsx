import React, { useState, useEffect } from "react";

import Hamburger from "hamburger-react";

import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Slide } from "react-awesome-reveal";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

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
  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <>
      <Slide className="menu" direction="down" triggerOnce={isMenuOpen}>
        <div className="menu-content">
          <div className="hamburger-btn">
            <Hamburger toggled={true} toggle={closeMenu} color="white" />
          </div>
          <nav className="links">
            <ScrollLink className="menu-link" to="main">
              Главная
            </ScrollLink>
            <ScrollLink className="menu-link" to="main">
              О нас
            </ScrollLink>
            <MDBAccordion initialActive={1}>
              <MDBAccordionItem collapseId={1} headerTitle="Услуги">
                <Link to="/">АBC</Link>
              </MDBAccordionItem>
            </MDBAccordion>
            <ScrollLink classID="menu-link" to="main">
              Отправить заявку
            </ScrollLink>
          </nav>
        </div>
      </Slide>
    </>
  );
};

export default Menu;
