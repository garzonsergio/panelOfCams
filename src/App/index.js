import "./App.css";
import React from "react";
import { DcpHeader } from "../DcpHeader";
import { DcpPanel } from "../DcpPanel";
import { DcpFooter } from "../DcpFooter";

function App() {
  return (
    <React.Fragment>
      <DcpHeader />
      <DcpPanel />
      <DcpFooter />
    </React.Fragment>
  );
}

export default App;
