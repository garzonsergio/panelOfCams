import React from "react";
import "./DcpPanel.css";
import { DcpCameraGrid } from "../DcpCameraGrid";
import { DcpContext } from "../DcpContext";

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
      {({ index, setIndex }) => (
        <React.Fragment>
          <main>
            <div className="left-arrow-buttom"></div>
            <div className="panel-container">
              <ul>
                {cameraGroup.map((group) => (
                  <button
                    key={group.name}
                    className={group.name}
                    onClick={() => {
                      return setIndex(group.index);
                    }}
                  >
                    {group.name}
                  </button>
                ))}
              </ul>

              <DcpCameraGrid typeCam={cameraGroup[index].name}></DcpCameraGrid>
            </div>
            <div className="right-arrow-buttom"></div>
          </main>
        </React.Fragment>
      )}
    </DcpContext.Consumer>
  );
}

export { DcpPanel };
