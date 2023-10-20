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

  return (
    <form className="form">
      <div className="form-mobile-content">
        <input
          type="text"
          className="form-input"
          name="name_value"
          id="name"
          required={true}
        />
        <input
          type="text"
          className="form-input"
          name="name_value"
          id="name"
          required={true}
        />
        <Select
          options={options}
          placeholder="Выберите услугу"
          className="select-styles"
        ></Select>
      </div>
    </form>
  );
};

export default Form;
