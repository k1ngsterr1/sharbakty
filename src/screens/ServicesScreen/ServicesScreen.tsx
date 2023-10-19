import React from "react";
import Separator from "../../components/Separator/Separator";
import { useNavigate } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

import "./styles/services-styles.css";

interface LinkProps {
  linkName: string;
  number: string;
  url: any;
  marginTop?: string;
}

const ServiceLink: React.FC<LinkProps> = (props) => {
  return (
    <button className={`service-btn ${props.marginTop}`} onClick={props.url}>
      <span className="service-number">{props.number}</span>
      <span className="btn-name">{props.linkName}</span>
      <HiArrowUpRight className="arrow-icon" />
    </button>
  );
};

const ServicesScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="screen bg-blue">
      <section className="content">
        <Separator
          number="03"
          color="white"
          colorBg="bg-white"
          marginTop="mt32"
        ></Separator>
        <div className="heading-container center mt32">
          <h2 className="heading-s white">Наши услуги</h2>
          <span className="wheat-subtext white mt8">
            Sharbakty Bidai Terminal
          </span>
        </div>
        <div className="links">
          <ServiceLink
            number="1"
            linkName="Хранение"
            url={navigate("/")}
            marginTop="mt64"
          ></ServiceLink>
          <ServiceLink
            number="2"
            linkName="Приемка"
            url={navigate("/")}
            marginTop="mt32"
          ></ServiceLink>
          <ServiceLink
            number="3"
            linkName="Отгрузка"
            url={navigate("/")}
            marginTop="mt32"
          ></ServiceLink>
          <ServiceLink
            number="4"
            linkName="Сушка"
            url={navigate("/")}
            marginTop="mt32"
          ></ServiceLink>
        </div>
      </section>
    </div>
  );
};

export default ServicesScreen;
