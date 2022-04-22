import React, { useEffect, useState, useRef } from "react";

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

  //   States to switch the Group of Cams to Show

  // Play button state
  const [play, setPlay] = useState(true);

  // Timer of Switching cameras
  const [index, setIndex] = useState(0);
  let intervalId = useRef();
  let changeIndexCams = () => setIndex((index) => (index < 3 ? index + 1 : 0));

  const playFunction = () => {
    !play
      ? (intervalId.current = setInterval(changeIndexCams, 9000))
      : clearInterval(intervalId.current);
    setPlay((play) => !play);
  };

  useEffect(() => {
    intervalId.current = setInterval(changeIndexCams, 9000);
    return () => clearInterval(intervalId.current);
  }, []);

  return (
    <DcpContext.Provider
      value={{
        reload,
        setReload,
        index,
        setIndex,
        play,
        setPlay,
        playFunction,
      }}
    >
      {props.children}
    </DcpContext.Provider>
  );
}

export { DcpContext, DcpProvider };
