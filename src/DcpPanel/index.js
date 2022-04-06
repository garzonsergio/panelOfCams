import React, { useState } from "react";
import "./DcpPanel.css";
import { DcpCameraGrid } from "../DcpCameraGrid";

const cameraGroup = [
  {
    name: "nivel",
    actived: true,
  },
  {
    name: "cielo",
    actived: false,
  },
  {
    name: "movimientos de masa",
    actived: false,
  },
  {
    name: "incendio",
    actived: false,
  },
];

function DcpPanel() {
  const [typeCam, setTypeCam] = useState("nivel");

  return (
    <React.Fragment>
      <main>
        <div className="panel-container">
          <ul>
            {cameraGroup.map((group) => (
              <button
                key={group.name}
                className={group.name}
                onClick={() => {
                  return setTypeCam(group.name);
                }}
              >
                {group.name}
              </button>
            ))}
          </ul>
          <DcpCameraGrid typeCam={typeCam}></DcpCameraGrid>
        </div>
      </main>
    </React.Fragment>
  );
}

export { DcpPanel };
