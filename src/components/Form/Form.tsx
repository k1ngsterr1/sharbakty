import React, { useState, useRef, useEffect } from "react";
import { FormButton, Button } from "../Button/Button";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Select from "react-select";
import emailjs from "@emailjs/browser";

import "./styles/form.css";
import ThanksPopup from "../ThanksPopup/ThanksPopup";

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

  const mapData = {
    geometry: [51.386693, 78.292507],
    zoom: 9,
  };

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
        <img src={logo} alt="logo" className="logo-colorful mt64" />
        <p className="paragraph center mt32">
          Свяжитесь с Нами и Вместе Достигнем Успеха! В Шербакты Бидай мы всегда
          открыты для общения и сотрудничества
        </p>
        <a href="tel:+77772922262" className="link mt32">
          +7 777 292 22 62
        </a>
        <a href="mailto:info@shbt.kz" className="link mt16 mb32">
          info@shbt.kz
        </a>
        {mapLoaded && (
          <YMaps>
            <Map
              defaultState={{
                center: [51.386693, 78.292507],
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
        <img src={logo} alt="logo" className="logo-colorful mt64" />
        <p className="paragraph right mt32">
          Свяжитесь с Нами и Вместе Достигнем Успеха! В Шербакты Бидай мы всегда
          открыты для общения и сотрудничества
        </p>
        <a href="tel:+77772922262" className="link mt32">
          +7 777 292 22 62
        </a>
        <a href="mailto:info@shbt.kz" className="link mt16 mb32">
          info@shbt.kz
        </a>
        {mapLoaded && (
          <YMaps>
            <Map
              defaultState={{
                center: [51.386693, 78.292507],
                zoom: 15,
              }}
              width="clamp(196.5px,20.46744vw,786px)"
              height="clamp(172.5px,17.9676vw,690px)"
              marginTop="clamp(16,8vw,64px)"
            >
              <Placemark {...placeMark1}></Placemark>
            </Map>
          </YMaps>
        )}
      </div>
      <ThanksPopup open={isOpen} closeMenu={() => setOpen(false)} />
    </div>
  );
};

export default Form;
