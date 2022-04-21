import React from "react";
import "./DcpCam.css";
import { DcpContext } from "../DcpContext/DcpContext";

function DcpCam(props) {
  return (
    <DcpContext.Consumer>
      {({ reload }) => (
        <figure>
          <a href={props.route} target="_blank">
            <img src={`${props.route}?${reload}`} alt={props.route} />
          </a>
          <h4 className="title-cam">{props.nameOfCam}</h4>
        </figure>
      )}
    </DcpContext.Consumer>
  );
}

export { DcpCam };
