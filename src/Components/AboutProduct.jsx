import React, { Component } from "react";
import woman from "../woman.png";
import extract from "../extract.png";
import "./AboutProduct.css";
export default class AboutProduct extends Component {
  render() {
    return (
      <div id="aboutProductContainer" className="container-fluid">
        <div className="row">
          <div className="col s12">
            <div className="row" style={{ marginTop: "5%" }}>
              <div className="col s0 m0"></div>
              <div className="col s12 m12" id="aboutProductHeading">
                <h2 id="beneMeans">
                  BENE MEANS{" "}
                  <span style={{ fontWeight: "bold", fontSize: "111%" }}>
                    WELLNESS{" "}
                  </span>
                  IN ITALIAN
                </h2>
                <h2 id="beneMeans2">AND THAT'S WHAT WE'RE ALL ABOUT</h2>
              </div>
            </div>
            <div
              className="row"
              style={{ marginTop: "3.5%", paddingLeft: "5%" }}
            >
              <div className="col s0 m7"></div>
              <div className="col s12 m5 right-align" id="paraContainer">
                <p
                  style={{
                    color: "#bf985c",
                    fontSize: "140%",
                    fontFamily: "montserrat",
                    marginBottom: "0"
                  }}
                >
                  Today we're confident that we're providing you with the
                  highest quality CBS you can find. Our product line is a{" "}
                  collection, to suit a wide range of tastes and needs. We're
                  dedicated to helping you get the products that suit you
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col s12 right-align" id="readMoreAbout">
                {" "}
                READ MORE
              </div>
            </div>
            <div
              className="row"
              style={{
                paddingRight: "6.9%",
                marginTop: "4%"
              }}
            >
              <div className="col s0 m5"></div>
              <div className="col s12 m7" id="hempExtractCol">
                <p
                  style={{
                    color: "#bf985c",
                    fontSize: "260%",
                    fontFamily: "times new roman",
                    letterSpacing: "0.1em",
                    paddingTop: "31%",
                    paddingLeft: "1%"
                  }}
                >
                  organically grown hemp extract
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
