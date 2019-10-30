import React from "react";
import Navbar from "./Components/Navbar";
import banner from "./banner.png";
import "./App.css";
import BannerText from "./Components/BannerText";

function App() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${banner})`,
        color: "white",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover"
      }}
    >
      <Navbar></Navbar>
      <BannerText />
    </div>
  );
}

export default App;
