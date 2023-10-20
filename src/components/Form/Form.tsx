import React, { useState } from "react";
import { FormButton } from "../Button/Button";
import Select from "react-select";

import "./styles/form.css";

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
      color: "$blue", // Replace with your color code if $blue is not directly accessible here.
      fontFamily: "Open Sans",
      fontSize: "$font18mob", // Replace with your font size if $font18mob is not directly accessible here.
      fontWeight: 300,
      border: "none",
      borderBottom: "2px solid #2D3A53",
      boxShadow: "none",
      "&:hover": {
        borderColor: "none",
      },
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color: "$blue", // Replace with your color code.
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: "$blue",
      textAlign: "left",
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      color: "$blue", // Replace with your color code.
    }),
  };

  return (
    <form className="form mt48">
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
        <FormButton marginTop="mt32" text="Отправить"></FormButton>
      </div>
    </form>
  );
};

export default Form;
