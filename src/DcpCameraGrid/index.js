import React from "react";
import "./DcpCameraGrid.css";
import { DcpCam } from "../DcpCam";
import { camsSiata } from "./ListOfCams";
import { DcpContext } from "../DcpContext";

function DcpCameraGrid(props) {
  return (
    <DcpContext.Consumer>
      {({ scrollId }) => (
        <section className="cameras-grid-container" ref={scrollId}>
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
      )}
    </DcpContext.Consumer>
  );
}

export { DcpCameraGrid };
