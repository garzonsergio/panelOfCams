import React, { useEffect, useState } from "react";
import "./DcpCam.css";

function DcpCam(props) {
  const [reload, setReload] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setReload(() => Date.now());
    }, 120000);
    // 2 min
  }, []);

  return (
    <React.Fragment>
      <a href={props.route} target="_blank">
        <img src={`${props.route}?${reload}`} alt={props.route} />
      </a>
    </React.Fragment>
  );
}

export { DcpCam };
