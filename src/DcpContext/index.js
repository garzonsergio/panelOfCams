import React, { useEffect, useState, useRef } from "react";

const DcpContext = React.createContext();

function DcpProvider(props) {
  // State to Control Reloading of Cams' picture
  const [reload, setReload] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setReload(() => Date.now());
    }, 120000);
    // 2 min
  }, []);

  // Play button state
  const [play, setPlay] = useState(true);

  // Timer of Switching cameras and Play control
  const [index, setIndex] = useState(0);
  let intervalId = useRef();
  let changeIndexCams = () => setIndex((index) => (index < 3 ? index + 1 : 0));

  const playFunction = () => {
    !play
      ? (intervalId.current = setInterval(changeIndexCams, 40000))
      : clearInterval(intervalId.current);
    setPlay((play) => !play);
  };

  useEffect(() => {
    intervalId.current = setInterval(changeIndexCams, 40000);

    return () => clearInterval(intervalId.current);
  }, []);

  // Switch inside a group of cameras
  let scrollId = useRef();

  const moveRight = () =>
    (scrollId.current.scrollLeft = scrollId.current.scrollWidth);
  const moveLeft = () => (scrollId.current.scrollLeft = 0);

  useEffect(() => {
    setInterval(() => {
      scrollId.current.scrollLeft === 0 ? moveRight() : moveLeft();
    }, 10000);

    // 5 min
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
        scrollId,
        moveRight,
        moveLeft,
      }}
    >
      {props.children}
    </DcpContext.Provider>
  );
}

export { DcpContext, DcpProvider };
