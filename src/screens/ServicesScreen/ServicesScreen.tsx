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

interface ServiceProps {
  serviceName: string;
  servicePrice: string;
  marginTop: string;
  marginBottom?: string;
  imageSrc: string;
}

const ServiceLink: React.FC<LinkProps> = (props) => {
  return (
    <button className={`service-btn ${props.marginTop}`} onClick={props.url}>
      <span className="service-number">{props.number}</span>
      <h3 className="btn-name">{props.linkName}</h3>
      <HiArrowUpRight className="arrow-icon" />
    </button>
  );
};

const ServicePrice: React.FC<ServiceProps> = (props) => {
  return (
    <div className={`service-card ${props.marginTop} ${props.marginBottom}`}>
      <img className="service-img" src={props.imageSrc} alt="service-img" />
      <h4 className="service-card-name mt16">{props.serviceName}</h4>
      <span className="price mt8">{props.servicePrice}</span>
    </div>
  );
};

const service01 = require("../../assets/service_01.webp");
const service02 = require("../../assets/service_02.webp");
const service03 = require("../../assets/service_03.webp");

const ServicesScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="screen bg-blue mt64" id="services">
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
            url={() => navigate("/services/containing")}
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
        <div className="services">
          <ServicePrice
            marginTop="mt64"
            marginBottom=""
            imageSrc={service01}
            serviceName="Хранение + Приемка"
            servicePrice="50.000тг / тонна"
          ></ServicePrice>
          <ServicePrice
            marginTop="mt64"
            marginBottom=""
            imageSrc={service02}
            serviceName="Сушка + Приемка"
            servicePrice="50.000тг / тонна"
          ></ServicePrice>
          <ServicePrice
            marginTop="mt64"
            marginBottom="mb64"
            imageSrc={service03}
            serviceName="Сушка + Приемка"
            servicePrice="50.000тг / тонна"
          ></ServicePrice>
        </div>
      </section>
      <section className="content-pc mt64">
        <Separator
          number="03"
          marginTop="mt64"
          colorBg="bg-white"
          color="white"
        ></Separator>
        <div className="screen-content column mt64">
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
              url={() => navigate("/services/containing")}
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
          <div className="services">
            <ServicePrice
              marginTop="mt64"
              marginBottom=""
              imageSrc={service01}
              serviceName="Хранение + Приемка"
              servicePrice="50.000тг / тонна"
            ></ServicePrice>
            <ServicePrice
              marginTop="mt64"
              marginBottom=""
              imageSrc={service02}
              serviceName="Сушка + Приемка"
              servicePrice="50.000тг / тонна"
            ></ServicePrice>
            <ServicePrice
              marginTop="mt64"
              marginBottom="mb64"
              imageSrc={service03}
              serviceName="Сушка + Приемка"
              servicePrice="50.000тг / тонна"
            ></ServicePrice>
          </div>
          <div className="discount-container">
            <span className="discount-text">
              При покупке всех услуг действует скидка в x%,
            </span>
            <span className="discount-price">250.000гт</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesScreen;
