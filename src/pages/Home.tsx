import React from "react";

import "./styles/home.css";

// Components
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import MainScreen from "../screens/MainScreen/MainScreen";
import CharacteristicScreen from "../screens/CharacteristicScreen/CharacteristicScreen";
import ServicesScreen from "../screens/ServicesScreen/ServicesScreen";

const Home = () => {
  return (
    <section className="main-page">
      <MainScreen />
      <AboutScreen />
      <CharacteristicScreen />
      <ServicesScreen />
    </section>
  );
};

export default Home;
