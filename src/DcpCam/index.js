import React, { useEffect, useState } from "react";
import "./DcpCam.css";

function DcpCam(props) {
  const [reload, setReload] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setReload(() => Date.now());
    }, 600000);
    // 2 min
  }, []);

  return (
    <React.Fragment>
      <figure>
        <a href={props.route} target="_blank">
          <img src={`${props.route}?${reload}`} alt={props.route} />
        </a>
        <h4 className="title-cam">{props.nameOfCam}</h4>
      </figure>
    </React.Fragment>
  );
}

export { DcpCam };
