import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar"></img>
          </Link>
          <img src={logoImg} alt="Proffy v"></img>
        </div>
      </header>
    </div>
  );
}

export default TeacherList;
