import React from "react";
import Header from "../../components/Header/Header";

import "./styles/main-screen.css";

const MainScreen = () => {
  return (
    <main className="main-screen" id="main">
      <Header></Header>
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
