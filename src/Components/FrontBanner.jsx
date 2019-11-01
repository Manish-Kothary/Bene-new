import React, { Component } from "react";
import Navbar from "./Navbar";
import BannerText from "./BannerText";
import banner from "../banner.png";
import "./FrontBanner.css";
export default class FrontBanner extends Component {
  render() {
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
        id="frontBannerContainer"
      >
        <Navbar></Navbar>
        <BannerText />
      </div>
    );
  }
}
