import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";
import "./styles.css";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar"></img>
        </Link>
        <img src={logoImg} alt="Proffy v"></img>
      </div>
      <div className="header-content">
        <strong>{props.title}</strong>
        <p>{props.description}</p>
        {props.children}
      </div>
    </header>
  );
};
export default PageHeader;

// { props.description ? <p>{props.description}</p> : null } => condição para se existir ou não a descrição.
// Também podendo ser feito desta forma { props.description && <p>{props.description}</p> } => a segunda parte só executa caso a primeira exista ou seja verdadeira.
