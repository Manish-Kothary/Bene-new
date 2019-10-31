import React, { Fragment } from "react";

import "./App.css";

import FrontBanner from "./Components/FrontBanner";
import Info from "./Components/Info";
import AboutProduct from "./Components/AboutProduct";
function App() {
  return (
    <div className="container-fluid" style={{ overflowX: "hidden" }}>
      <FrontBanner />
      <Info />
      <AboutProduct />
    </div>
  );
}

export default App;
