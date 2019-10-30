import React, { Component } from "react";

export default class BannerTex extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ paddingTop: "8.5%" }}>
        <div className="row">
          <div className="s12 m4">
            <div className="row" style={{ marginBottom: "1%" }}>
              <div className="col s0 m1"></div>
              <div className="col s12 m8" style={{ fontFamily: "Montserrat" }}>
                <h1 style={{ marginBottom: "0", color: "rgb(241, 196, 130)" }}>
                  <span style={{ fontSize: "190%" }}>bene</span>{" "}
                  <span style={{ fontSize: "150%" }}>fits</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col s0 m1"></div>
              <div
                className="col s12 m8"
                style={{ fontFamily: "Montserrat", paddingLeft: "6%" }}
              >
                <h1 style={{ marginTop: "0", color: "rgb(241, 196, 130)" }}>
                  <span style={{ fontSize: "150%" }}>your</span>{" "}
                  <span style={{ fontSize: "150%" }}>life</span>
                </h1>
              </div>
            </div>
            <div className="row" style={{ paddingLeft: "0.7%" }}>
              <div className="col s0 m1"></div>
              <div className="col s12 m8" style={{ fontFamily: "Montserrat" }}>
                <p
                  style={{
                    color: "rgb(241, 196, 130)",
                    fontSize: "130%",
                    fontFamily: "Montserrat"
                  }}
                >
                  In our own quest to enhance total balance and
                </p>
                <p
                  style={{
                    color: "rgb(241, 196, 130)",
                    fontSize: "130%",
                    fontFamily: "Montserrat",
                    wordSpacing: "0.2em"
                  }}
                >
                  reduce stress, we set out to understand CBS
                </p>
              </div>
            </div>
            <div className="row" style={{ paddingTop: "1%" }}>
              <div className="col s0 m2"></div>
              <div className="col s12 m4" style={{ paddingLeft: "2.8%" }}>
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
