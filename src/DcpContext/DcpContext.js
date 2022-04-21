import React from "react";

const DcpContext = React.createContext();

function DcpProvider(props) {
  return <DcpContext.Provider value={{}}>{props.children}</DcpContext.Provider>;
}

export { DcpContext, DcpProvider };
