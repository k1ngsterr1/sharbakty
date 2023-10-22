import React, { useState } from "react";
import ColorfulHeader from "../../components/ColorfulHeader/ColorfulHeader";
import Menu from "../../components/Menu/Menu";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "../../components/Button/Button";

import "./styles/contain-styles.css";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

const service = require("../../assets/service_01_m.webp");

const ContainPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <section className="screen">
      <ColorfulHeader
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      ></ColorfulHeader>
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      <main className="content mt64">
        <span className="main-subtext orange">Sharbakty Bidai Terminal</span>
        <h1 className="main-heading blue mt8 mb16">Храние зерна</h1>
        <p className="paragraph blue fw300 center m-auto ">
          Спокойствие для Вашего Зерна с Шербакты Бидай: Обеспечиваем стабильные
          и безопасные условия хранения урожая с контролем влажности и
          температуры, гарантируя сохранность и качество зерна на каждом этапе
          хранения.
        </p>
        <div className="btn-c mt64">
          <Button text="Заказать" scroll="contacts" marginTop="mt48" />
        </div>
      </main>
      <img src={service} className="mt64" alt="service" />
      <div className="content mt32">
        <figure className="separator bg-blue"></figure>
        <span className="about-text">Об услуге</span>
        <h3 className="heading-t mt32">Приемка зерна</h3>
        <p className="paragraph">
          Оптимальное Хранение Зерна с Шербакты Бидай: Наши современные
          зернохранилища, оснащенные передовыми системами контроля климата,
          обеспечивают идеальные условия для вашего урожая, сохраняя его
          свежесть, качество и питательные свойства. Мы тщательно контролируем
          параметры влажности и температуры, минимизируя риски и обеспечивая
          долгосрочное безопасное хранение. Благодаря обширному опыту и высокой
          квалификации нашей команды, вы можете быть уверены в сохранности и
          целостности вашего зерна от момента поступления на хранение и до
          момента его отгрузки. Выбирая нас, вы выбираете надежность и
          профессионализм в каждом зерне.
        </p>
        <figure className="separator bg-blue mt16"></figure>
        <span className="about-text">Об услуге</span>
        <h3 className="heading-t mt32">Цены</h3>
        <p className="paragraph">
          Оптимальное Хранение Зерна с Шербакты Бидай: Наши современные
          зернохранилища, оснащенные передовыми системами контроля климата,
          обеспечивают идеальные условия для вашего урожая, сохраняя его
          свежесть, качество и питательные свойства. Мы тщательно контролируем
          параметры влажности и температуры, минимизируя риски и обеспечивая
          долгосрочное безопасное хранение. Благодаря обширному опыту и высокой
          квалификации нашей команды, вы можете быть уверены в сохранности и
          целостности вашего зерна от момента поступления на хранение и до
          момента его отгрузки. Выбирая нас, вы выбираете надежность и
          профессионализм в каждом зерне.
        </p>
        <figure className="separator bg-blue mt16"></figure>
        <h3 className="heading-s center mt32">Контакты</h3>
        <Form />
      </div>
      <Footer />
    </section>
  );
};

export default ContainPage;
