import React from "react";

import "./styles/home.css";

// Components
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import MainScreen from "../screens/MainScreen/MainScreen";
import CharacteristicScreen from "../screens/CharacteristicScreen/CharacteristicScreen";
import ServicesScreen from "../screens/ServicesScreen/ServicesScreen";
import ContactScreen from "../screens/ContactScreen/ContactScreen";

const Home = () => {
  return (
    <section className="main-page">
      <MainScreen />
      <AboutScreen />
      <CharacteristicScreen />
      <ServicesScreen />
      <ContactScreen />
    </section>
  );
};

export default Home;
