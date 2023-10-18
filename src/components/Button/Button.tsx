import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "./styles/button-styles.css";

interface ButtonProps {
  text: string;
  scroll: string;
  marginTop: string;
}

const Button: React.FC<ButtonProps> = ({ text, scroll, marginTop }) => {
  return (
    <div className={`btn-container ${marginTop}`}>
      <ScrollLink to={scroll} className="btn">
        {text}
      </ScrollLink>
      <figure className="pseudo"></figure>
    </div>
  );
};

export default Button;
