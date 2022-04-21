import React, { useEffect, useState } from "react";

const DcpContext = React.createContext();

function DcpProvider(props) {
  // State to Control Reloading of Cams' picture
  const [reload, setReload] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setReload(() => Date.now());
    }, 6000);
    // 2 min
  }, []);

  //   State to switch the Group of Cams to Show
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      document.activeElement.blur();
      setIndex((index) => (index < 3 ? index + 1 : 0));
    }, 100000);
  }, []);

  return (
    <DcpContext.Provider value={{ reload, setReload, index, setIndex }}>
      {props.children}
    </DcpContext.Provider>
  );
}

export { DcpContext, DcpProvider };
