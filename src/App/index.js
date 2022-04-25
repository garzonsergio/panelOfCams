import "./App.css";
import React from "react";
import { DcpHeader } from "../DcpHeader";
import { DcpPanel } from "../DcpPanel";
import { DcpFooter } from "../DcpFooter";
import { DcpProvider } from "../DcpContext";

function App() {
  return (
    <DcpProvider>
      <DcpHeader />
      <DcpPanel />
      <DcpFooter />
    </DcpProvider>
  );
}

export default App;
