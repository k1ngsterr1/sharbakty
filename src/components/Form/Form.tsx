import React, { useState, useRef, useEffect } from "react";
import { FormButton, Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import Select from "react-select";
import emailjs from "@emailjs/browser";
import ThanksPopup from "../ThanksPopup/ThanksPopup";

import "./styles/form.css";

const logo = require("../../assets/logo.svg").default;

interface FormProps {
  marginTop: string;
}

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  function ScrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const placeMark1 = {
    geometry: [51.386693, 78.292507],
    properties: {
      hintContent: "Село Шарбакты",
      balloonContent: "Село Шарбакты",
    },
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMapLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const options = [
    { value: "Хранение + Приемка", label: "Хранение + Приемка" },
    { value: "Хранение + Сушка", label: "Хранение + Сушка" },
    { value: "Сушка + Приемка", label: "Сушка + Приемка" },
  ];

  function sendEmail(e: any) {
    e.preventDefault();
    setFullName("");
    setPhone("");
    setService("");
    setOpen((o) => !o);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        e.target,
        process.env.REACT_APP_EMAILJS_KEY!
      )
      .then((res) => {
        console.log("SUCCESS");
      })
      .catch((err) => console.log(err));
  }

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      width: "100%",
      color: "$blue",
      fontFamily: "Open Sans",
      fontSize: "$font18mob",
      fontWeight: 300,
      border: "none",
      borderBottom: "2px solid #2D3A53",
      boxShadow: "none",
      borderRadius: "0px",
      "&:hover": {
        borderColor: "none",
      },
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color: "$blue",
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: "$blue",
      textAlign: "left",
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      textAlign: "left",
      color: "$blue",
    }),
  };

  return (
    <div className="form" id="contact">
      <form className="form-mobile-content" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="form-input"
          name="fullName"
          id="fullName"
          placeholder="Ваше Имя"
          required={true}
          onChange={(event) => setFullName(event.target.value)}
        />
        <input
          type="text"
          className="form-input mt32"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Ваш Телефон"
          required={true}
          onChange={(event) => setPhone(event.target.value)}
        />
        <Select
          options={options}
          required={true}
          onChange={(selectedOption) => {
            if (selectedOption && "value" in selectedOption) {
              setService(selectedOption.value);
            } else {
              setService("");
            }
          }}
          value={options.find((opt) => opt.value === service) || null}
          placeholder="Выберите услугу"
          name="selectedOption"
          className="select-styles mt32"
          styles={customStyles}
        />
        <div className="btn-center">
          <FormButton text="Отправить" marginTop="mt32"></FormButton>
        </div>
      </form>
      <form className="form-pc-content" ref={form} onSubmit={sendEmail}>
        <div className="form-row">
          {" "}
          <input
            type="text"
            className="form-input"
            name="fullName"
            id="fullName"
            placeholder="Ваше Имя"
            required={true}
            onChange={(event) => setFullName(event.target.value)}
          />
          <input
            type="text"
            className="form-input l"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Ваш Телефон"
            required={true}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <Select
          options={options}
          required={true}
          onChange={(selectedOption) => {
            if (selectedOption && "value" in selectedOption) {
              setService(selectedOption.value);
            } else {
              setService("");
            }
          }}
          value={options.find((opt) => opt.value === service) || null}
          placeholder="Выберите услугу"
          name="selectedOption"
          className="select-styles mt32"
          styles={customStyles}
        />
        <FormButton text="Отправить" marginTop="mt64"></FormButton>
      </form>
      <div className="mob-contacts">
        <img
          src={logo}
          alt="logo"
          className="logo-colorful mt64"
          onClick={ScrollTop}
        />
        <p className="paragraph center mt32">
          ТОО «Sharbakty Bidai Terminal» БИН: 190740008443 Адрес: Республика
          Казахстан, Павлодарская область, Щербактинский р-н, село Шарбакты, ул.
          Победа, здание 105
        </p>
        <div className="contact-container mt32">
          <FontAwesomeIcon className="icon" icon={faPhone} />
          <a href="tel:+77772922262" className="link ">
            +7 777 292 22 62
          </a>
        </div>
        <div className="contact-container mt32 mb64">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <a href="mailto:info@shbt.kz" className="link ">
            info@shbt.kz
          </a>
        </div>
        {mapLoaded && (
          <YMaps>
            <Map
              defaultState={{
                center: [52.485575, 78.176394],
                zoom: 15,
              }}
              width="90%"
              height="clamp(150px,76vw, 600px)"
              marginTop="clamp(16,8vw,64px)"
            >
              <Placemark {...placeMark1}></Placemark>
            </Map>
          </YMaps>
        )}
      </div>
      <div className="pc-contacts">
        {" "}
        <img
          src={logo}
          alt="logo"
          className="logo-colorful mt64"
          onClick={ScrollTop}
        />
        <p className="paragraph right mt32">
          ТОО «Sharbakty Bidai Terminal» БИН: 190740008443 Адрес: Республика
          Казахстан, Павлодарская область, Щербактинский р-н, село Шарбакты, ул.
          Победа, здание 105
        </p>
        <div className="contact-container mt16">
          <FontAwesomeIcon className="icon" icon={faPhone} />
          <a href="tel:+77772922262" className="link">
            +7 777 292 22 62
          </a>
        </div>
        <div className="contact-container mt16">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <a href="mailto:info@shbt.kz" className="link">
            info@shbt.kz
          </a>
        </div>
      </div>
      <ThanksPopup open={isOpen} closeMenu={() => setOpen(false)} />
    </div>
  );
};

export default Form;
