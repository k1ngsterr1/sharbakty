import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "../../components/Button/Button";
import { Helmet } from "react-helmet";

// Components
import ColorfulHeader from "../../components/ColorfulHeader/ColorfulHeader";
import Menu from "../../components/Menu/Menu";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Separator from "../../components/Separator/Separator";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

// Styles
import "./styles/contain-styles.css";

const service = require("../../assets/service_01_m.webp");

const ContainPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Услуги по хранению зерновых и масличных культур</title>
        <meta
          property="og:title"
          content="Услуги по хранению зерновых и масличных культур"
        ></meta>
        <meta
          property="og:description"
          content="Мы предоставляем современные услуги по хранению зерна, используя высококачественное оборудование и проверенные методы."
        ></meta>
        <meta
          name="description"
          content="Мы предоставляем современные услуги по хранению зерна, используя высококачественное оборудование и проверенные методы."
        ></meta>
      </Helmet>
      <LoadingScreen />
      <section className="screen">
        <ColorfulHeader
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        ></ColorfulHeader>
        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
        <main className="content mt64">
          <span className="main-subtext orange">Sharbakty Bidai Terminal</span>
          <h1 className="main-heading blue mt8 mb16 w40">
            Услуги по хранению зерновых и масличных культур{" "}
          </h1>
          <p className="paragraph blue fw300 center m-auto ">
            ТОО «Sharbakty Bidai Terminal» - Ваш надежный партнер в области
            хранения зерновых и масличных культур. Наш современный терминал
            обеспечивает оптимальные условия для долгосрочного хранения Вашего
            урожая.
          </p>
          <div className="btn-c mt64">
            <Button text="Заказать" scroll="contacts" marginTop="mt48" />
          </div>
        </main>
        <main className="content-pc-service mt90">
          <div className="text-content">
            <span className="main-subtext-small orange left">
              Sharbakty Bidai Terminal
            </span>
            <h1 className="main-heading blue mt8 mb16 left w40">
              {" "}
              Услуги по хранению зерновых и масличных культур{" "}
            </h1>
            <p className="paragraph blue fw300 left w40">
              ТОО «Sharbakty Bidai Terminal» - Ваш надежный партнер в области
              хранения зерновых и масличных культур. Наш современный терминал
              обеспечивает оптимальные условия для долгосрочного хранения Вашего
              урожая.
            </p>
            <Button text="Заказать" scroll="contacts" marginTop="mt64" />
          </div>
        </main>
        <img src={service} className="img-pc mt64" alt="service" />
        <main className="content-pc-service mt300">
          <div className="fixed-nav-container">
            <div className="fixed-nav">
              <span className="text">Содержание</span>
              <div className="nav-links">
                <ScrollLink to="about" className="blue-link mt16" smooth>
                  Основная информация
                </ScrollLink>
                <ScrollLink to="price" className="blue-link mt16" smooth>
                  Цены
                </ScrollLink>
                <ScrollLink to="contacts" className="blue-link mt16" smooth>
                  Заказать услугу
                </ScrollLink>
              </div>
            </div>
          </div>
          <div className="service-content">
            <span className="text">Об услуге</span>
            <div className="service-content-tab" id="about">
              <h5 className="heading-third">
                Хранение зерновых и масличных культур
              </h5>
              <p className="paragraph w60">
                Наши складские помещения оборудованы передовыми системами
                хранения, обеспечивая максимальную эффективность использования
                пространства и безопасность Вашего урожая. Мы тщательно
                контролируем параметры влажности и температуры, минимизируя
                риски и обеспечивая долгосрочное безопасное хранение. Благодаря
                обширному опыту и высокой квалификации нашей команды, Вы можете
                быть уверены в сохранности и целостности вашего зерна от момента
                поступления на хранение и до момента его отгрузки. ТОО
                «Sharbakty Bidai Terminal» - Ваш надежный партнер в обеспечении
                безупречного хранения зерновых и масличных культур.
              </p>
            </div>
            <div className="separator-line mt64"></div>
            <div className="service-content-tab mt64" id="price">
              <h5 className="heading-third">Цены</h5>
              <p className="paragraph w60">
                Стоимость услуги по хранению по запросу
              </p>
            </div>
          </div>
        </main>
        <div className="content-pc mt128" id="contacts">
          <Separator number="01" />

          <Form />
        </div>
        <img src={service} className="img mt64" alt="service" />
        <div className="content mt32">
          <figure className="separator bg-blue"></figure>
          <span className="about-text">Об услуге</span>
          <h3 className="heading-t mt32">
            {" "}
            Хранение зерновых и масличных культур
          </h3>
          <p className="paragraph  mb32">
            Наши складские помещения оборудованы передовыми системами хранения,
            обеспечивая максимальную эффективность использования пространства и
            безопасность Вашего урожая. Мы тщательно контролируем параметры
            влажности и температуры, минимизируя риски и обеспечивая
            долгосрочное безопасное хранение. Благодаря обширному опыту и
            высокой квалификации нашей команды, Вы можете быть уверены в
            сохранности и целостности вашего зерна от момента поступления на
            хранение и до момента его отгрузки. ТОО «Sharbakty Bidai Terminal» -
            Ваш надежный партнер в обеспечении безупречного хранения зерновых и
            масличных культур.
          </p>
          <figure className="separator bg-blue mt16"></figure>
          <span className="about-text">Об услуге</span>
          <h3 className="heading-t mt32">Цены</h3>
          <p className="paragraph  mb32">
            Стоимость услуги по хранению по запросу
          </p>
          <figure className="separator bg-blue mt16"></figure>
          <h3 className="heading-s center mt32">Контакты</h3>
          <Form />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ContainPage;
