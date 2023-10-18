import React from "react";
import Separator from "../../components/Separator/Separator";

const ServicesScreen = () => {
  return (
    <div className="screen bg-blue">
      <section className="content">
        <Separator number="03" color="white"></Separator>
        <div className="heading-container right">
          <h2 className="heading-s white">Наши услуги</h2>
          <span className="wheat-subtext white">Sharbakty Bidai Terminal</span>
        </div>
      </section>
    </div>
  );
};

export default ServicesScreen;
