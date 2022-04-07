import React, { useEffect, useState } from "react";
import "./DcpCam.css";

function DcpCam(props) {
  const [reload, setReload] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setReload(() => Date.now());
    }, 1000);
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
