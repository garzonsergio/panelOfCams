import React from "react";
import "./DcpHeader.css";
import LogoSiata from "../assets/img/LogoSiata.svg";

import { DcpSearch } from "../DcpSearch";

function DcpHeader() {
  return (
    <React.Fragment>
      <header>
        <h1>Visualizador de Cámaras AMVA</h1>
        <DcpSearch />
        <img className="companyLogo" src={LogoSiata} alt="logo Siata" />
      </header>
    </React.Fragment>
  );
}
export { DcpHeader };
