import React from "react";
import { DcpContext } from "../DcpContext";
import "./DcpSearch.css";

function DcpSearch() {
  const { searchCam, setSearchCam } = React.useContext(DcpContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchCam(event.target.value);
  };
  return (
    <React.Fragment>
      <input
        placeholder="Buscar Cámara"
        value={searchCam}
        onChange={onSearchValueChange}
      />
      <p>{searchCam}</p>
    </React.Fragment>
  );
}

export { DcpSearch };
