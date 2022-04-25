import React from "react";
import "./DcpHeader.css";
import LogoSiata from "../assets/img/LogoSiata.svg";
import { DcpPlay } from "../DcpPlay";

function DcpHeader() {
  return (
    <React.Fragment>
      <header>
        <h1>Visualizador de Cámaras Medellín</h1>
        <DcpPlay />
        <img className="companyLogo" src={LogoSiata} alt="logo Siata" />
      </header>
    </React.Fragment>
  );
}
export { DcpHeader };
