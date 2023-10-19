import React from "react";
import Separator from "../../components/Separator/Separator";
import { useNavigate } from "react-router-dom";

interface LinkProps {
  linkName: string;
  number: string;
  url: string;
}

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
        <div className="links"></div>
      </section>
    </div>
  );
};

export default ServicesScreen;
