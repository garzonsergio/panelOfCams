import React from "react";
import "./DcpCam.css";
import { DcpContext } from "../DcpContext";

function DcpCam(props) {
  const { reload, setOpenModal } = React.useContext(DcpContext);

  return (
    <div className="cam-container" onClick={() => setOpenModal(true)}>
      <picture>
        <img src={`${props.route}?${reload}`} alt={props.route} />
      </picture>
      <h4 className="title-cam">{props.nameOfCam}</h4>
    </div>
  );
}

export { DcpCam };
