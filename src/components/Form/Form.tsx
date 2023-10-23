import React, { useState } from "react";
import { FormButton, Button } from "../Button/Button";
import Select from "react-select";

import "./styles/form.css";

const logo = require("../../assets/logo.svg").default;

interface FormProps {
  marginTop: string;
}

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const options = [
    { value: "Хранение + Приемка", label: "Хранение + Приемка" },
    { value: "Хранение + Сушка", label: "Хранение + Сушка" },
    { value: "Сушка + Приемка", label: "Сушка + Приемка" },
  ];

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
    <form className="form">
      <div className="form-mobile-content">
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
          className="form-input mt32"
          name="name_value"
          id="name"
          placeholder="Ваш Телефон"
          required={true}
        />
        <Select
          options={options}
          placeholder="Выберите услугу"
          className="select-styles mt32"
          styles={customStyles}
        ></Select>
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
        <p className="paragraph mt32">
          Свяжитесь с Нами и Вместе Достигнем Успеха! В Шербакты Бидай мы всегда
          открыты для общения и сотрудничества
        </p>
        <a href="tel:+77759932587" className="link mt32">
          +7 (775) 993 25-87
        </a>
        <a href="mailto:info@example.com" className="link mt16">
          info@example.com
        </a>
      </div>
      <div className="pc-contacts">
        {" "}
        <img src={logo} alt="logo" className="logo-colorful mt64" />
        <p className="paragraph right mt32">
          Свяжитесь с Нами и Вместе Достигнем Успеха! В Шербакты Бидай мы всегда
          открыты для общения и сотрудничества
        </p>
        <a href="tel:+77759932587" className="link mt32">
          +7 (775) 993 25-87
        </a>
        <a href="mailto:info@example.com" className="link mt16">
          info@example.com
        </a>
      </div>
    </form>
  );
};

export default Form;
