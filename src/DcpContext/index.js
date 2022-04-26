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
      ? (intervalId.current = setInterval(changeIndexCams, 12000))
      : clearInterval(intervalId.current);
    setPlay((play) => !play);
  };

  useEffect(() => {
    console.log(intervalId);
    intervalId.current = setInterval(changeIndexCams, 12000);

    return () => clearInterval(intervalId.current);
  }, []);

  // Switch inside a group of cameras
  let scrollId = useRef();

  const moveRight = () => {
    let scrollItem = scrollId.current;
    let scrollWidth = scrollId.current.scrollWidth;

    scrollItem.scrollLeft !== scrollWidth
      ? (scrollItem.scrollLeft += scrollWidth / scrollItem.childElementCount)
      : setIndex(3);
  };
  const moveLeft = () => {
    let scrollItem = scrollId.current;
    let scrollWidth = scrollId.current.scrollWidth;
    scrollItem.scrollLeft -= scrollWidth / scrollItem.childElementCount;
  };

  const autoScroll = () =>
    scrollId.current.scrollLeft < scrollId.current.scrollWidth
      ? moveRight()
      : moveLeft();

  useEffect(() => {
    setInterval(() => {
      autoScroll();
    }, 20000);
    // 2 min
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
