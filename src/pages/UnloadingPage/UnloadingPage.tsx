import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "../../components/Button/Button";
import { Helmet } from "react-helmet";

// Components
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Separator from "../../components/Separator/Separator";
import ColorfulHeader from "../../components/ColorfulHeader/ColorfulHeader";
import Menu from "../../components/Menu/Menu";

// Styles
import "../ContainPage/styles/contain-styles.css";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const service = require("../../assets/service_03_m.webp");

const UnloadingPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Услуги по отгрузке зерновых и масличных культур - Sharbakty Bidai
          Terminal
        </title>
        <meta
          property="og:title"
          content="Услуги по отгрузке зерновых и масличных культур  - Sharbakty Bidai
          Terminal"
        ></meta>
        <meta
          property="og:description"
          content="Безопасная и быстрая разгрузка зерна с использованием нашего опыта и высококачественного оборудования."
        ></meta>
        <meta
          name="description"
          content="Безопасная и быстрая разгрузка зерна с использованием нашего опыта и высококачественного оборудования."
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
          <h1 className="main-heading blue mt8 w50 mb16">
            Отгрузка зерновых и масличных культур
          </h1>
          <p className="paragraph blue fw300 center m-auto ">
            Доверьте процесс отгрузки ваших зерновых и масличных культур
            профессионалам – ТОО «Sharbakty Bidai Terminal». Наш терминал
            предоставляет полный спектр услуг по эффективной и безопасной
            отгрузке Вашего урожая на вагоны.
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
            <h1 className="main-heading blue mt8 mb16 w50 left">
              Отгрузка зерновых и масличных культур
            </h1>
            <p className="paragraph blue fw300 left w40">
              Доверьте процесс отгрузки ваших зерновых и масличных культур
              профессионалам – ТОО «Sharbakty Bidai Terminal». Наш терминал
              предоставляет полный спектр услуг по эффективной и безопасной
              отгрузке Вашего урожая на вагоны.
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
                Отгрузка зерновых и масличных культур
              </h5>
              <p className="paragraph w60">
                Мы ценим Ваше время и готовы к оперативной отгрузке Вашего
                урожая на вагоны, обеспечивая минимальные задержки. Наш терминал
                оборудован передовыми технологиями, что обеспечивает высокую
                производительность и эффективность процесса отгрузки. Мы
                предоставляем гибкие условия отгрузки, учитывая Ваши
                индивидуальные требования и потребности. Доверьте отгрузку
                своего урожая нам и мы обеспечим безупречный процесс, который
                соответствует Вашим ожиданиям и стандартам качества.
              </p>
            </div>
            <div className="separator-line mt64"></div>
            <div className="service-content-tab mt64" id="price">
              <h5 className="heading-third">Цены</h5>
              <div className="column">
                <p className="paragraph w90 mt16">
                  <strong>
                    Отгрузка пшеницы насыпью в зерновозы и крытые вагоны с
                    верхними люками (*оборудование крытых вагонов не входит в
                    стоимость) = <span className="orange">2 500 ₸ / тонна</span>
                  </strong>{" "}
                </p>
                <p className="paragraph w90 mt16">
                  <strong>
                    Отгрузка пшеницы насыпью в крытые вагоны без верхних люков
                    (*оборудование крытых вагонов не входит в стоимость) ={" "}
                    <span className="orange">3 000₸ / тонна</span>
                  </strong>
                </p>
                <p className="paragraph w90 mt16">
                  <strong>
                    Отгрузка масличных культур насыпью в зерновозы и крытые
                    вагоны с верхними люками (*оборудование крытых вагонов не
                    входит в стоимость) ={" "}
                    <span className="orange"> 3 000₸ / тонна</span>
                  </strong>
                </p>
                <p className="paragraph w90 mt32">
                  <strong>
                    Отгрузка масличных культур в крытые вагоны без верхних люков
                    (*оборудование крытых вагонов не входит в стоимость) ={" "}
                    <span className="orange"> 3 500₸ / тонна</span>
                  </strong>
                </p>
                <p className="paragraph mt16">
                  Так же наш терминал предлагает услуги по отгрузке в крытые
                  вагоны в мешках, в полувагоны насыпью, стоимость услуг по
                  запросу
                </p>
              </div>
            </div>
          </div>
        </main>
        <div className="content-pc mt128" id="contacts">
          <Separator number="01" />
          <Form />
        </div>
        <img src={service} className="img mt64" alt="service" />
        <div className="content mt32 ">
          <figure className="separator bg-blue"></figure>
          <span className="about-text">Об услуге</span>
          <h3 className="heading-t mt32">
            Отгрузка зерновых и масличных культур
          </h3>
          <p className="paragraph  mb32">
            Мы ценим Ваше время и готовы к оперативной отгрузке Вашего урожая на
            вагоны, обеспечивая минимальные задержки. Наш терминал оборудован
            передовыми технологиями, что обеспечивает высокую производительность
            и эффективность процесса отгрузки. Мы предоставляем гибкие условия
            отгрузки, учитывая Ваши индивидуальные требования и потребности.
            Доверьте отгрузку своего урожая нам и мы обеспечим безупречный
            процесс, который соответствует Вашим ожиданиям и стандартам
            качества.
          </p>
          <figure className="separator bg-blue mt16"></figure>
          <span className="about-text">Об услуге</span>
          <h3 className="heading-t mt32">Цены</h3>
          <div className="column w90">
            <p className="paragraph w90 mt16">
              <strong>
                Отгрузка пшеницы насыпью в зерновозы и крытые вагоны с верхними
                люками (*оборудование крытых вагонов не входит в стоимость) ={" "}
                <span className="orange">2 500 ₸ / тонна</span>
              </strong>{" "}
            </p>
            <p className="paragraph w90 mt16">
              <strong>
                Отгрузка пшеницы насыпью в крытые вагоны без верхних люков
                (*оборудование крытых вагонов не входит в стоимость) ={" "}
                <span className="orange">3 000₸ / тонна</span>
              </strong>
            </p>
            <p className="paragraph w90 mt16">
              <strong>
                Отгрузка масличных культур насыпью в зерновозы и крытые вагоны с
                верхними люками (*оборудование крытых вагонов не входит в
                стоимость) = <span className="orange"> 3 000₸ / тонна</span>
              </strong>
            </p>
            <p className="paragraph w90 mt32">
              <strong>
                Отгрузка масличных культур в крытые вагоны без верхних люков
                (*оборудование крытых вагонов не входит в стоимость) ={" "}
                <span className="orange"> 3 500₸ / тонна</span>
              </strong>
            </p>
            <p className="paragraph mt16">
              Так же наш терминал предлагает услуги по отгрузке в крытые вагоны
              в мешках, в полувагоны насыпью, стоимость услуг по запросу
            </p>
          </div>
          <figure className="separator bg-blue mt16"></figure>
          <h3 className="heading-s center mt32">Контакты</h3>
          <Form />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default UnloadingPage;
