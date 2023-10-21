import React from "react";
import Separator from "../../components/Separator/Separator";
import Form from "../../components/Form/Form";

const ContactScreen = () => {
  return (
    <div className="screen bg-white" id="contact">
      <main className="content center">
        <Separator number="04" marginTop="mt64" colorBg="bg-blue" />
        <div className="heading-container center mt32">
          <h2 className="heading-s ">Контакты</h2>
          <span className="wheat-subtext  mt8">Sharbakty Bidai Terminal</span>
        </div>
        <p className="paragraph mt32 center">
          Заполните форму ниже, и станьте частью успешной истории Шербакты
          Бидай. Наша команда с нетерпением ждет, чтобы обсудить, как мы можем
          помочь вашему урожаю процветать. Ваш успех — наша общая цель!
        </p>
        <Form></Form>
      </main>
    </div>
  );
};

export default ContactScreen;
