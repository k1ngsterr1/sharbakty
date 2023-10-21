import React from "react";

import { Button } from "../../components/Button/Button";
import Separator from "../../components/Separator/Separator";

const aboutImage = require("../../assets/mob_about.webp");

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
      <img src={aboutImage} className="img mt48" alt="image" />
    </section>
  );
};

export default AboutScreen;
