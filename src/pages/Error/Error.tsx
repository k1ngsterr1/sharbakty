import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles/error-styles.css";

const Error = () => {
  const navigate = useNavigate();

  function navigateToMain() {
    navigate("/");
  }

  return (
    <div className="error-screen">
      <h1 className="heading-s-error">
        <span className="orange">404</span>
      </h1>
      <button className="error-btn mt32" onClick={navigateToMain}>
        Перейти на главную
      </button>
    </div>
  );
};

export default Error;
