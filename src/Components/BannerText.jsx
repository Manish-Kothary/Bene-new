import React, { Component } from "react";
import "./BannerText.css";
export default class BannerTex extends Component {
  render() {
    return (
      <div className="container-fluid" id="bannerHeading">
        <div className="row">
          <div className="s12 m4">
            <div className="row" style={{ marginBottom: "1%" }}>
              <div className="col s0 m1"></div>
              <div className="col s12 m8" style={{ fontFamily: "Montserrat" }}>
                <h1 style={{ marginBottom: "0", color: "rgb(241, 196, 130)" }}>
                  <span id="beneSpan">bene</span>{" "}
                  <span id="fitsSpan">fits</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col s0 m1"></div>
              <div className="col s12 m8" id="subHeading2Container">
                <h1 style={{ marginTop: "0", color: "rgb(241, 196, 130)" }}>
                  <span id="yourSpan">your</span>{" "}
                  <span id="lifeSpan">life</span>
                </h1>
              </div>
            </div>
            <div className="row" style={{ paddingLeft: "0.7%" }}>
              <div className="col s0 m1"></div>
              <div className="col s12 m8" style={{ fontFamily: "Montserrat" }}>
                <p id="bannerSubHeading">
                  In our own quest to enhance total balance and
                </p>
                <p id="bannerSubHeading2">
                  reduce stress, we set out to understand CBS
                </p>
              </div>
            </div>
            <div className="row" id="seeProductsBtn">
              <div className="col s0 m2"></div>
              <div className="col s12 m10" style={{ paddingLeft: "2.8%" }}>
                <a
                  class="waves-effect waves-light btn"
                  style={{
                    backgroundColor: "rgb(241, 196, 130)",
                    color: "black",
                    fontSize: "120%",
                    paddingLeft: "8%",
                    paddingRight: "8%",
                    paddingTop: "1.5%",
                    paddingBottom: "8.5%"
                  }}
                >
                  Shop all products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
