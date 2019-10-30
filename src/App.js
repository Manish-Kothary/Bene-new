import React, { Fragment } from "react";

import "./App.css";

import FrontBanner from "./Components/FrontBanner";
import Info from "./Components/Info";
function App() {
  return (
    <div className="container-fluid" style={{ overflowX: "hidden" }}>
      <FrontBanner />
      <Info />
    </div>
  );
}

export default App;
