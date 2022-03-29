import "./App.css";
import React from "react";
import { DcpHeader } from "./DcpHeader";
import { DcpPanel } from "./DcpPanel";

function App() {
  return (
    <React.Fragment>
      <DcpHeader />
      <DcpPanel />
    </React.Fragment>
  );
}

export default App;
