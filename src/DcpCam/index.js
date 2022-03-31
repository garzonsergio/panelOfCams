import React from "react";
import "./DcpCam.css";

function DcpCam(props) {
  return (
    <React.Fragment>
      <img src={props.route} />
    </React.Fragment>
  );
}

export { DcpCam };
