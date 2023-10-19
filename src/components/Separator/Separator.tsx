import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAwn } from "@fortawesome/free-solid-svg-icons";

interface SeparatorProps {
  number: string;
  color?: string;
  colorBg?: string;
  marginTop?: string;
}

const Separator: React.FC<SeparatorProps> = ({
  number,
  marginTop,
  color,
  colorBg,
}) => {
  return (
    <div className={`separator-container ${marginTop}`}>
      <span className="icon-container">
        <FontAwesomeIcon
          icon={faWheatAwn}
          className={`wheat-icon ${color}`}
        ></FontAwesomeIcon>
        <span className={`numeric ${color}`}>{number}</span>
      </span>
      <figure className={`separator mt8 ${colorBg}`}></figure>
    </div>
  );
};

export default Separator;
