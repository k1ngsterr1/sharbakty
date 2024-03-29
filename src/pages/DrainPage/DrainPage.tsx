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
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

// Styles
import "../ContainPage/styles/contain-styles.css";

const service = require("../../assets/service_04_m.webp");

const DrainPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Услуги по сушке зерновых и масличных культур</title>
        <meta
          property="og:title"
          content="Услуги по сушке зерновых и масличных культур - Sharbakty Bidai Terminal"
        ></meta>
        <meta
          property="og:description"
          content="Наши услуги по высушиванию зерна гарантируют сохранность и качество вашего урожая."
        ></meta>
        <meta
          name="description"
          content="Наши услуги по высушиванию зерна гарантируют сохранность и качество вашего урожая."
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
            Cушка зерновых и масличных культур
          </h1>
          <p className="paragraph blue fw300 center m-auto ">
            ТОО «Sharbakty Bidai Terminal» - это команда специалистов с
            многолетним опытом, готовых обеспечить Ваш урожай лучшими решениями
            в области сушки и обработки. Выбрав нас, Вы выбираете надежность,
            качество и индивидуальный подход. Доверьте свой урожай
            профессионалам нашего терминала, и мы сделаем все возможное для
            того, чтобы Ваша продукция сохранила свое высокое качество на
            протяжении всего цикла обработки.
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
              Сушка зерновых и масличных культур
            </h1>
            <p className="paragraph blue fw300 left w40">
              ТОО «Sharbakty Bidai Terminal» - это команда специалистов с
              многолетним опытом, готовых обеспечить Ваш урожай лучшими
              решениями в области сушки и обработки. Выбрав нас, Вы выбираете
              надежность, качество и индивидуальный подход. Доверьте свой урожай
              профессионалам нашего терминала, и мы сделаем все возможное для
              того, чтобы Ваша продукция сохранила свое высокое качество на
              протяжении всего цикла обработки.
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
                Cушка зерновых и масличных культур
              </h5>
              <p className="paragraph w60">
                Наша команда профессионалов бережно следит за процессом сушки,
                гарантируя сохранность и высокое качество Вашего зерна. Мы
                предлагаем гибкие условия сотрудничества, учитывая
                индивидуальные потребности каждого клиента. Все наши процессы
                соответствуют высоким стандартам безопасности и гигиеничности,
                обеспечивая безопасность продукции для конечного потребителя. Мы
                не только предоставляем сушку, но и организуем транспортировку
                Вашего сухого зерна до необходимого пункта назначения.
              </p>
            </div>
            <div className="separator-line mt64"></div>
            <div className="service-content-tab mt64" id="price">
              <h5 className="heading-third">Цены</h5>
              <div className="column">
                <p className="paragraph w60 big-text">
                  <strong className="orange">От 60 тонн:</strong> {""}
                  {""} <strong> {""} 10.000₸ / тонна</strong>
                </p>
                <p className="paragraph w60 big-text mt32">
                  <strong className="orange">До 60 тонн:</strong> {""}
                  {""} <strong> {""} 12.000₸ / тонна</strong>
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
        <div className="content mt32">
          <figure className="separator bg-blue"></figure>
          <span className="about-text">Об услуге</span>
          <h3 className="heading-t mt32">Cушка зерновых и масличных культур</h3>
          <p className="paragraph  mb32">
            Наша команда профессионалов бережно следит за процессом сушки,
            гарантируя сохранность и высокое качество Вашего зерна. Мы
            предлагаем гибкие условия сотрудничества, учитывая индивидуальные
            потребности каждого клиента. Все наши процессы соответствуют высоким
            стандартам безопасности и гигиеничности, обеспечивая безопасность
            продукции для конечного потребителя. Мы не только предоставляем
            сушку, но и организуем транспортировку Вашего сухого зерна до
            необходимого пункта назначения.
          </p>
          <figure className="separator bg-blue mt16"></figure>
          <span className="about-text">Об услуге</span>
          <h3 className="heading-t mt32">Цены</h3>
          <div className="column">
            <p className="paragraph big-text w90 mt16">
              <strong className="orange">От 60 тонн:</strong> {""}
              {""} <strong> {""} 10.000₸ / тонна</strong>
            </p>
            <p className="paragraph big-text w90 mt16">
              <strong className="orange">До 60 тонн:</strong> {""}
              {""} <strong> {""} 12.000₸ / тонна</strong>
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

export default DrainPage;
