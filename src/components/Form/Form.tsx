import React, { useState, useRef } from "react";
import { FormButton, Button } from "../Button/Button";
import Select from "react-select";
import Popup from "reactjs-popup";
import emailjs from "@emailjs/browser";

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

  const closeModal = () => setOpen(false);

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
    <form className="form ">
      <div className="form-mobile-content">
        <input
          type="text"
          className="form-input"
          name="fullName"
          id="name"
          placeholder="Ваше Имя"
          required={true}
          onChange={(event) => setFullName(event.target.value)}
        />
        <input
          type="text"
          className="form-input mt32"
          name="phoneNumber"
          id="name"
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
      </div>
      <div className="form-pc-content">
        <div className="form-row">
          {" "}
          <input
            type="text"
            className="form-input"
            name="name_value"
            id="name"
            placeholder="Ваше Имя"
            required={true}
          />
          <input
            type="text"
            className="form-input l"
            name="name_value"
            id="name"
            placeholder="Ваш Телефон"
            required={true}
          />
        </div>
        <Select
          options={options}
          placeholder="Выберите услугу"
          className="select-styles mt64"
          styles={customStyles}
        ></Select>
        <FormButton text="Отправить" marginTop="mt64"></FormButton>
      </div>
      <div className="mob-contacts">
        <img src={logo} alt="logo" className="logo-colorful mt64" />
        <p className="paragraph center mt32">
          Свяжитесь с Нами и Вместе Достигнем Успеха! В Шербакты Бидай мы всегда
          открыты для общения и сотрудничества
        </p>
        <a href="tel:+77772922262" className="link mt32">
          +7 777 292 22 62
        </a>
        <a href="mailto:info@shbt.kz" className="link mt16">
          info@shbt.kz
        </a>
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
        <a href="mailto:info@shbt.kz" className="link mt16">
          info@shbt.kz
        </a>
      </div>
    </form>
  );
};

export default Form;
