import React from "react";
import "./DcpCameraGrid.css";
import { DcpCam } from "../DcpCam";
import { camsSiata } from "./ListOfCams";
import { DcpContext } from "../DcpContext";

function DcpCameraGrid(props) {
  return (
    <DcpContext.Consumer>
      {({ scrollId, searchedCams, searchCam }) => (
        <React.Fragment>
          {!searchCam ? (
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
          ) : (
            <section
              className="cameras-grid-container searched-container"
              ref={scrollId}
            >
              {searchedCams.map((cam) => (
                <DcpCam
                  route={cam.route}
                  key={cam.route}
                  nameOfCam={cam.nameOfCam}
                />
              ))}
            </section>
          )}{" "}
        </React.Fragment>
      )}
    </DcpContext.Consumer>
  );
}

export { DcpCameraGrid };
