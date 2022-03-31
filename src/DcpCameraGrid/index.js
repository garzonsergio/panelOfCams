import React from "react";
import "./DcpCameraGrid.css";
import { DcpCam } from "../DcpCam";
import { camsSiata } from "./CameraList";

console.log(camsSiata);
function DcpCameraGrid() {
  return (
    <React.Fragment>
      <section>
        <DcpCam></DcpCam>
        <DcpCam></DcpCam>
        <DcpCam></DcpCam>
      </section>
    </React.Fragment>
  );
}

export { DcpCameraGrid };
