// LoadingScreen.js
import React, { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const logo = require("../../assets/white_logo.svg").default;

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const customAnimation = keyframes`
      from {
        opacity: 1;
        transform: translate3d(0px, 0px, 0);
      }
      
      to {
        opacity: 0;
        transform: translate3d(-2000, 0, 0);
      }
    `;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Reveal
          keyframes={customAnimation}
          delay={1000}
          style={{ zIndex: 60000000 }}
        >
          <div className={`loader ${isLoading ? "" : "hidden"}`}>
            <div className="loader-container">
              <img className="logo" src={logo} alt="logo"></img>
              <h1 className="loading-heading mt32">Sharbakty Bidai Terminal</h1>
            </div>
          </div>
        </Reveal>
      ) : null}
    </>
  );
};

export default LoadingScreen;
