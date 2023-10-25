import React, { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

// Components
import AboutScreen from "../../screens/AboutScreen/AboutScreen";
import MainScreen from "../../screens/MainScreen/MainScreen";
import CharacteristicScreen from "../../screens/CharacteristicScreen/CharacteristicScreen";
import ServicesScreen from "../../screens/ServicesScreen/ServicesScreen";
import ContactScreen from "../../screens/ContactScreen/ContactScreen";
import Footer from "../../components/Footer/Footer";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

// Styles
import "./styles/home.css";

const logo = require("../../assets/white_logo.svg").default;

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sharbakty Bidai - Элеватор зерна в Шарбакты</title>
        <meta
          property="og:title"
          content="Sharbakty Bidai - Элеватор зерна в Шарбакты"
        ></meta>
        <meta
          property="og:description"
          content="Добро пожаловать на главную страницу Шарбакты Бидаи Терминал. Узнайте больше о нашей компании и услугах зерновых лифтов"
        ></meta>
        <meta
          name="description"
          content="Добро пожаловать на главную страницу Шарбакты Бидаи Терминал. Узнайте больше о нашей компании и услугах зерновых лифтов"
        ></meta>
      </Helmet>
      <LoadingScreen />
      <section className="main-page">
        <MainScreen />
        <AboutScreen />
        <CharacteristicScreen />
        <ServicesScreen />
        <ContactScreen />
        <Footer />
      </section>
    </>
  );
};

export default Home;
