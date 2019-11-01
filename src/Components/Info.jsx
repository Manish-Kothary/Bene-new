import React, { Component } from "react";
import bottle from "./bottle.png";
import "./Info.css";
export default class Info extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginTop: "8%", marginBottom: "8%" }}
      >
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="col s0 m"></div>
              <div className="col s4 m4" id="infoHeadingCol">
                <h1 id="infoHeading">bene</h1>
              </div>
              <div className="col s7 m7" id="infoSideMainHeading">
                <h3
                  style={{
                    color: "#d2af78",
                    fontSize: "500%",
                    fontFamily: "Times new roman",
                    marginBottom: "0",
                    fontWeight: "549"
                  }}
                >
                  Organically grown
                </h3>
                <h3
                  style={{
                    color: "#d2af78",
                    fontSize: "500%",
                    fontFamily: "Times new roman",
                    marginTop: "0",
                    fontWeight: "549",
                    paddingTop: "0"
                  }}
                >
                  hemp extract
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <div className="row" id="infoPara">
                  <div className="col s12">
                    <p id="firstPara">
                      In our own quest to enhance total balance and reduce
                      stress, we set out to understand, what is CBD. We met
                      manufacturers from across the world. We spoke with doctors
                    </p>
                  </div>
                </div>
                <div className="row" id="infoReadMore">
                  <div
                    className="col s12"
                    style={{ textDecoration: "underline" }}
                  >
                    {" "}
                    READ MORE
                  </div>
                </div>
              </div>
              <div className="col s12 m6" id="infoImgContainer">
                <img src={bottle} alt="" srcset="" style={{ width: "85%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
