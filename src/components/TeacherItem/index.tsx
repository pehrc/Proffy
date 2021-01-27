import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars.githubusercontent.com/u/72166805?s=460&u=b6eec1e6d8d730dfcd2bb7bfef44935879ce7f16&v=4"
          alt="Pedro Correia"
        />
        <div>
          <strong>Pedro Correia</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
export default TeacherItem;
