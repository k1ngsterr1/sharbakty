import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import "./styles/main-screen.css";

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
        <span className="main-subtext">Sharbakty Bidai Terminal</span>
        <h1 className="main-heading">
          Хранение, приемка и отгрузка зерновых культур
        </h1>
        <p className="main-paragraph">
          В Шербакты Бидай ваше зерно в приоритете. С передовыми методами и
          стандартами качества мы гарантируем оптимальное хранение, сушку и
          обработку вашего урожая. Ваше доверие — наша ответственность.
        </p>
        <button className="main-btn">Связаться с нами</button>
      </div>
    </main>
  );
};

export default MainScreen;
