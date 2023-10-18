import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAwn } from "@fortawesome/free-solid-svg-icons";

interface SeparatorProps {
  number: string;
  color?: string;
  marginTop?: string;
}

const Separator: React.FC<SeparatorProps> = ({ number, marginTop, color }) => {
  return (
    <div className={`separator-container ${marginTop}`}>
      <span className="icon-container">
        <FontAwesomeIcon
          icon={faWheatAwn}
          className="wheat-icon"
        ></FontAwesomeIcon>
        <span className={`numeric ${color}`}>{number}</span>
      </span>
      <figure className={`separator mt8 ${color}`}></figure>
    </div>
  );
};

export default Separator;
