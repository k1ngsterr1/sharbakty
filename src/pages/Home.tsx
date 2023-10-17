import React from "react";

import "./styles/home.css";
import Header from "../components/Header/Header";
import MainScreen from "../components/screens/MainScreen/MainScreen";

const Home = () => {
  return (
    <div className="main-page">
      <MainScreen />
    </div>
  );
};

export default Home;
