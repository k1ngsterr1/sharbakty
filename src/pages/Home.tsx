import React from "react";

import "./styles/home.css";

// Components
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import MainScreen from "../screens/MainScreen/MainScreen";
import CharacteristicScreen from "../screens/CharacteristicScreen/CharacteristicScreen";

const Home = () => {
  return (
    <section className="main-page">
      <MainScreen />
      <AboutScreen />
      <CharacteristicScreen />
    </section>
  );
};

export default Home;
