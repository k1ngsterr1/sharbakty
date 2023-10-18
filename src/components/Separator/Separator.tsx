import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAwn } from "@fortawesome/free-solid-svg-icons";

interface SeparatorProps {
  number: string;
  marginTop?: string;
}

const Separator: React.FC<SeparatorProps> = ({ number, marginTop }) => {
  return (
    <div className={`separator-container ${marginTop}`}>
      <span className="icon-container">
        <FontAwesomeIcon
          icon={faWheatAwn}
          className="wheat-icon"
        ></FontAwesomeIcon>
        <span className="numeric">{number}</span>
      </span>
      <figure className="separator mt8"></figure>
    </div>
  );
};

export default Separator;
