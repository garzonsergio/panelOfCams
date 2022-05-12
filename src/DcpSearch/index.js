import React from "react";
import { DcpContext } from "../DcpContext";
import "./DcpSearch.css";

function DcpSearch() {
  const { searchCam, setSearchCam } = React.useContext(DcpContext);
  const onSearchValueChange = (event) => {
    setSearchCam(event.target.value);
  };
  return (
    <React.Fragment>
      <input
        placeholder="Buscar Cámara"
        value={searchCam}
        onChange={onSearchValueChange}
      />
    </React.Fragment>
  );
}

export { DcpSearch };
