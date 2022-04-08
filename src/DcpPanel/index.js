import React, { useState, useEffect } from "react";
import "./DcpPanel.css";
import { DcpCameraGrid } from "../DcpCameraGrid";

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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      document.activeElement.blur();
      setIndex((index) => (index < 3 ? index + 1 : 0));
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
                  return setIndex(group.index);
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
