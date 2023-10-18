import React from "react";
import Separator from "../../components/Separator/Separator";

const charImg = require("../../assets/mob_char.webp");

const CharacteristicScreen = () => {
  return (
    <div className="screen">
      <section className="content">
        <Separator number="02" marginTop="mt32"></Separator>
        <div className="heading-container mt32">
          <span className="wheat-subtext">Sharbakty Bidai Terminal</span>
          <h2 className="heading-s right mt8">Основные характеристики</h2>
        </div>
        <p className="paragraph mt64 w95">
          <span className="focused">Современное оборудование:</span> Элеватор
          оборудован современными механизмами и системами контроля, что
          обеспечивает высокую эффективность и надежность процессов хранения и
          обработки сельскохозяйственной продукции.
        </p>
        <p className="paragraph mt32 w95">
          <span className="focused">Хранение и сортировка:</span> Элеватор
          Компания предоставляет услуги по хранению различных видов
          сельскохозяйственных культур и осуществляет их сортировку в
          соответствии с требованиями клиентов.
        </p>
        <p className="paragraph mt32 w95">
          <span className="focused">Логистика:</span> "Sharbakty Bidai Terminal"
          имеет разветвленную логистическую инфраструктуру, обеспечивающую
          эффективную транспортировку сельскохозяйственной продукции к различным
          рынкам и потребителям.
        </p>
        <p className="paragraph mt32 w95">
          <span className="focused">Качество и безопасность:</span> Компания
          строго соблюдает стандарты качества и безопасности при обработке и
          хранении сельскохозяйственной продукции, что гарантирует сохранность и
          стабильность качества товаров.
        </p>
      </section>
      <img src={charImg} className="img mt48" alt="image" />
    </div>
  );
};

export default CharacteristicScreen;
