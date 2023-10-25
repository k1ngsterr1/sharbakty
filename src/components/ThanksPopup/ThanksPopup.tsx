import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAwn } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import { Slide } from "react-awesome-reveal";

import "./styles/popup.css";

const wheatIcon = require("../../assets/wheat.svg").default;

interface PopupProps {
  closeMenu: any;
  open: boolean;
}

const ThanksPopup: React.FC<PopupProps> = ({ open, closeMenu }) => {
  return (
    <>
      <Popup
        open={open}
        modal
        nested
        className="popup-container"
        position="center center"
        overlayStyle={{ background: "rgba(0,0,0,0.7)" }}
      >
        <Slide direction="up">
          <div className="modal-window">
            <div className="modal-window-content">
              <img className="wheat-icon" src={wheatIcon} />
              <span className="modal-text">Спасибо за вашу заявку!</span>
              <span className="paragraph-text">
                В скором времени мы с вами свяжемся
              </span>
              <button className="modal-btn" onClick={closeMenu}>
                Закрыть
              </button>
            </div>
          </div>
        </Slide>
      </Popup>
    </>
  );
};

export default ThanksPopup;
