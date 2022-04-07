import React, { useState, useEffect } from "react";
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
  const [index, setIndex] = useState(0);
  const [typeCam, setTypeCam] = useState(index);

  useEffect(() => {
    setInterval(() => {
      setIndex((counter) => (counter < 3 ? counter + 1 : 0));
    }, 9000);
  }, []);
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
          <DcpCameraGrid typeCam={cameraGroup[index].name}></DcpCameraGrid>
        </div>
      </main>
    </React.Fragment>
  );
}

export { DcpPanel };
