import React from "react";

import { Button } from "../../components/Button/Button";
import Separator from "../../components/Separator/Separator";
import { Fade } from "react-awesome-reveal";

const aboutImage = require("../../assets/mob_about.webp");

const aboutPcImage = require("../../assets/service-1-pc.webp");

const AboutScreen = () => {
  return (
    <section className="screen mt32" id="about">
      <div className="content">
        <Separator number="01" />
        <h2 className="heading-s left mt32">О Компания</h2>
        <p className="paragraph mt16">
          <span className="focused"> "Sharbakty Bidai Terminal" </span> - это
          современный терминал и элеватор, специализирующийся на хранении и
          переработке сельскохозяйственных продуктов. Расположенный в
          стратегически важном регионе, этот терминал служит центральным узлом
          для множества аграрных операций, обеспечивая сельскохозяйственным
          предприятиям и фермерам эффективное хранение и транспортировку их
          урожаев.
        </p>
        <Button marginTop="mt48" text="Связаться с нами" scroll="contact" />
      </div>
      <div className="content-pc">
        <Separator number="01" marginTop="mt64"></Separator>
        <div className="screen-content mt64">
          <div className="text-content">
            <Fade direction="left" triggerOnce={true}>
              <h2 className="heading-s">О компании</h2>
            </Fade>
            <Fade direction="left" triggerOnce={true} delay={200}>
              <p className="paragraph w60 mt32">
                <span className="focused"> "Sharbakty Bidai Terminal" </span> -
                это современный терминал и элеватор, специализирующийся на
                хранении и переработке сельскохозяйственных продуктов.
                Расположенный в стратегически важном регионе, этот терминал
                служит центральным узлом для множества аграрных операций,
                обеспечивая сельскохозяйственным предприятиям и фермерам
                эффективное хранение и транспортировку их урожаев.
              </p>
            </Fade>
            <Fade direction="left" triggerOnce={true} delay={300}>
              <Button
                text="Связаться с нами"
                scroll="contacts"
                marginTop="mt64"
              ></Button>
            </Fade>
          </div>
          <Fade direction="right" triggerOnce={true} delay={300}>
            <img src={aboutPcImage} className="img-pc-n" alt="image" />
          </Fade>
        </div>
      </div>
      <img src={aboutImage} className="img-mob mt48" alt="image" />
    </section>
  );
};

export default AboutScreen;
