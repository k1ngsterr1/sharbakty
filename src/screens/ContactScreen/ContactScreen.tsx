import React from "react";
import Separator from "../../components/Separator/Separator";
import Form from "../../components/Form/Form";

const ContactScreen = () => {
  return (
    <div className="screen bg-white" id="contact">
      <div className="content center">
        <Separator number="04" marginTop="mt64" colorBg="bg-blue" />
        <div className="heading-container center mt32">
          <h2 className="heading-s ">Контакты</h2>
          {/* <span className="wheat-subtext  mt8">Sharbakty Bidai Terminal</span> */}
        </div>
        <p className="paragraph mt32 center">
          Если Вы заинтересованы в сотрудничестве с нашей компанией, пожалуйста,
          свяжитесь по указанным контактным данным или заполните форму обратной
          связи, и мы свяжемся с Вами в ближайшее время. Ваши данные не будут
          переданы третьим лицам.
        </p>
        <Form></Form>
      </div>
      <div className="content-pc">
        <Separator number="04" marginTop="mt64" colorBg="bg-blue" />
        <div className="screen-content">
          <div className="text-content">
            <div className="heading-container left mt32">
              <h2 className="heading-s left">Контакты</h2>
            </div>
            <p className="paragraph mt16 left w60">
              Если Вы заинтересованы в сотрудничестве с нашей компанией,
              пожалуйста, свяжитесь по указанным контактным данным или заполните
              форму обратной связи, и мы свяжемся с Вами в ближайшее время. Ваши
              данные не будут переданы третьим лицам.
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
