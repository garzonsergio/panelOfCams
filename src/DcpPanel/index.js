import React from "react";
import "./DcpPanel.css";
import { DcpCameraGrid } from "../DcpCameraGrid";
import { DcpContext } from "../DcpContext";
import { DcpPlay } from "../DcpPlay";

const cameraGroup = [
  {
    name: "nivel",
    index: 0,
  },
  {
    name: "cielo",
    index: 1,
  },
  {
    name: "movimientos de masa",
    index: 2,
  },
  {
    name: "incendio",
    index: 3,
  },
];

function DcpPanel() {
  return (
    <DcpContext.Consumer>
      {({
        index,
        setIndex,
        moveRight,
        moveLeft,
        moveGroupRight,
        moveGroupLeft,
      }) => (
        <React.Fragment>
          <main>
            <div className="panel-container">
              <ul>
                {cameraGroup.map((group) => (
                  <a href={"#" + group.index}>
                    <button
                      key={group.name}
                      id={group.index}
                      onClick={() => {
                        return setIndex(group.index);
                      }}
                    >
                      {group.name}
                    </button>
                  </a>
                ))}
              </ul>

              <DcpCameraGrid typeCam={cameraGroup[index].name}></DcpCameraGrid>
              <div className="controls-container">
                <div
                  className="left-arrow-buttom global"
                  onClick={() => moveGroupLeft()}
                ></div>
                <div
                  className="left-arrow-buttom local"
                  onClick={() => moveLeft()}
                ></div>
                <DcpPlay />
                <div
                  className="right-arrow-buttom local"
                  onClick={() => moveRight()}
                ></div>
                <div
                  className="right-arrow-buttom global"
                  onClick={() => moveGroupRight()}
                ></div>
              </div>
            </div>
          </main>
        </React.Fragment>
      )}
    </DcpContext.Consumer>
  );
}

export { DcpPanel };
