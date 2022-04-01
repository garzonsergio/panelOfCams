import React from "react";
import "./DcpCameraGrid.css";
import { DcpCam } from "../DcpCam";
import { camsSiata } from "./FilteredCams";

function DcpCameraGrid(props) {
  return (
    <React.Fragment>
      <section className="cameras-grid-container">
        {/* {camsSiata.map((cam) => (
          <DcpCam route={cam.route} />
        ))} */}
        {camsSiata
          .filter((cam) => cam.typeOfCam === props.typeCam)
          .map((cam) => (
            <DcpCam route={cam.route} />
          ))}
      </section>
    </React.Fragment>
  );
}

export { DcpCameraGrid };
