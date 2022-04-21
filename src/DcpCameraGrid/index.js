import React from "react";
import "./DcpCameraGrid.css";
import { DcpCam } from "../DcpCam";
import { camsSiata } from "./ListOfCams";

function DcpCameraGrid(props) {
  return (
    <React.Fragment>
      <section className="cameras-grid-container">
        {camsSiata
          .filter((cam) => cam.typeOfCam === props.typeCam)
          .map((cam) => (
            <DcpCam
              route={cam.route}
              key={cam.route}
              nameOfCam={cam.nameOfCam}
            />
          ))}
      </section>
      {/* <p>{camsSiata}</p> */}
    </React.Fragment>
  );
}

export { DcpCameraGrid };
