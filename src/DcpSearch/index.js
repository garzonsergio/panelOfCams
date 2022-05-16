import React from "react";
import { DcpContext } from "../DcpContext";
import SearchGlass from "../assets/img/search-glass.svg";
import "./DcpSearch.css";

function DcpSearch() {
  const { searchCam, setSearchCam } = React.useContext(DcpContext);
  const onSearchValueChange = (event) => {
    setSearchCam(event.target.value);
  };
  return (
    <React.Fragment>
      <div className="search-header--container">
        <img className="searchGlass" src={SearchGlass} alt="lupa" />
        <input
          placeholder="Buscar Cámara"
          value={searchCam}
          onChange={onSearchValueChange}
        />
      </div>
    </React.Fragment>
  );
}

export { DcpSearch };
