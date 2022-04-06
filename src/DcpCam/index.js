import React from "react";
import "./DcpCam.css";

function DcpCam(props) {
  return (
    <React.Fragment>
      <a href={props.route} target="_blank">
        <img src={props.route} alt={props.route} />
      </a>
    </React.Fragment>
  );
}

export { DcpCam };
