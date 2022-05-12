import React from "react";
import "./DcpHeader.css";
import LogoSiata from "../assets/img/LogoSiata.svg";
import { DcpSearch } from "../DcpSearch";

function DcpHeader() {
  return (
    <React.Fragment>
      <header>
        <div className="left-header-container">
          <h1>Visualizador de Cámaras AMVA</h1>
          <DcpSearch />
        </div>
        <img className="companyLogo" src={LogoSiata} alt="logo Siata" />
      </header>
    </React.Fragment>
  );
}
export { DcpHeader };
