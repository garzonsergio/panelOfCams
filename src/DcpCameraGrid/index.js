import React from "react";
import "./DcpCameraGrid.css";
import { DcpCam } from "../DcpCam";
import { camsSiata } from "./ListOfCams";
import { DcpContext } from "../DcpContext";

function DcpCameraGrid(props) {
  return (
    <DcpContext.Consumer>
      {({ scrollId, searchedCams }) => (
        <React.Fragment>
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
          <span>
            Searchedddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </span>
          <section className="cameras-grid-container" ref={scrollId}>
            {searchedCams.map((cam) => (
              <DcpCam
                route={cam.route}
                key={cam.route}
                nameOfCam={cam.nameOfCam}
              />
            ))}
          </section>
        </React.Fragment>
      )}
    </DcpContext.Consumer>
  );
}

export { DcpCameraGrid };
