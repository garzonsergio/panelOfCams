import React from "react";
import "./DcpCameraGrid.css";
import { DcpCam } from "../DcpCam";
import { camsSiata } from "./CameraList";

console.log(camsSiata);
function DcpCameraGrid() {
  return (
    <React.Fragment>
      <section className="cameras-grid-container">
        {camsSiata.map((cam) => (
          <DcpCam route={cam.route} />
        ))}
      </section>
    </React.Fragment>
  );
}

export { DcpCameraGrid };
