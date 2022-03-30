import React from "react";
import "./DcpHeader.css";
import LogoSiata from "../assets/img/LogoSiata.svg";

function DcpHeader() {
  return (
    <React.Fragment>
      <header>
        <h1>Dagrd Panel Camaras</h1>
        <img className="companyLogo" src={LogoSiata} alt="logo Siata" />
      </header>
    </React.Fragment>
  );
}
export { DcpHeader };
