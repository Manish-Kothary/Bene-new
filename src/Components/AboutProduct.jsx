import React, { Component } from "react";
import woman from "../woman.png";
import extract from "../extract.png";
export default class AboutProduct extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          marginTop: "8%",
          marginBottom: "8%",
          backgroundColor: "#242219",
          backgroundImage: `url(${woman})`,
          height: "120vh",
          backgroundSize: "38% 100%",
          backgroundRepeat: "no-repeat repeat"
        }}
      >
        <div className="row">
          <div className="col s12">
            <div className="row" style={{ marginTop: "5%" }}>
              <div className="col s0 m3"></div>
              <div
                className="col s12 m9"
                style={{
                  backgroundImage: "linear-gradient(to right,#242219,#62605c)",
                  paddingLeft: "5.6%",
                  paddingBottom: "0.8%"
                }}
              >
                <h2 style={{ color: "#bf985c", wordSpacing: "1em" }}>
                  BENE MEANS{" "}
                  <span style={{ fontWeight: "bold", fontSize: "120%" }}>
                    WELLNESS{" "}
                  </span>
                  IN ITALIAN
                </h2>
                <h2 style={{ color: "#bf985c", wordSpacing: "0.9em" }}>
                  AND THAT'S WHAT WE'RE ALL ABOUT
                </h2>
              </div>
            </div>
            <div
              className="row"
              style={{ marginTop: "3.5%", paddingLeft: "5%" }}
            >
              <div className="col s0 m7"></div>
              <div
                className="col s12 m5 right-align"
                style={{
                  paddingRight: "6.5%",
                  textAlign: "justify",
                  textJustify: "inter-word"
                }}
              >
                <p
                  style={{
                    color: "#bf985c",
                    fontSize: "140%",
                    fontFamily: "montserrat"
                  }}
                >
                  Today we're confident that we're providing you with the
                </p>
                <p
                  style={{
                    color: "#bf985c",
                    fontSize: "140%",
                    fontFamily: "montserrat"
                  }}
                >
                  highest quality CBS you can find. Our product line is a{" "}
                </p>
                <p
                  style={{
                    color: "#bf985c",
                    fontSize: "140%",
                    fontFamily: "montserrat"
                  }}
                >
                  collection, to suit a wide range of tastes and needs. We're
                </p>
                <p
                  style={{
                    color: "#bf985c",
                    fontSize: "140%",
                    fontFamily: "montserrat"
                  }}
                >
                  dedicated to helping you get the products that suit you
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="col s12 right-align"
                style={{
                  textDecoration: "underline",
                  color: "#bf985c",
                  fontSize: "140%",
                  paddingRight: "7%",
                  fontFamily: "montserrat"
                }}
              >
                {" "}
                READ MORE
              </div>
            </div>
            <div
              className="row"
              style={{ paddingRight: "6.9%", marginTop: "4%" }}
            >
              <div className="col s0 m5"></div>
              <div
                className="col s12 m7"
                style={{
                  backgroundImage: `url(${extract})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",
                  height: "44vh"
                }}
              >
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
