import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import "./styles/main-screen.css";
import { Link as ScrollLink } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const MainScreen = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <main className="main-screen" id="main">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      <div className="main-screen-content">
        <Fade direction="up" triggerOnce={true}>
          <span className="main-subtext">ТОО «Sharbakty Bidai Terminal»</span>
        </Fade>
        <Fade
          direction="up"
          className="anim center"
          delay={200}
          triggerOnce={true}
        >
          <h1 className="main-heading">
            Хранение, приемка и отгрузка зерновых и масличных культур
          </h1>
        </Fade>
        <Fade
          direction="up"
          className="anim center"
          delay={300}
          triggerOnce={true}
        >
          <p className="main-paragraph">
            В нашей компании Ваше зерно в приоритете. С передовыми методами и
            стандартами качества мы гарантируем оптимальное хранение, сушку и
            отгрузку Вашей сельхозпродукции. Ваше доверие — наша
            ответственность.
          </p>
        </Fade>
        <ScrollLink className="main-btn" to="contact" smooth>
          Связаться с нами
        </ScrollLink>
      </div>
    </main>
  );
};

export default MainScreen;
