import React, { Component } from "react";
import bottle from "./bottle.png";
export default class Info extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginTop: "8%", paddingLeft: "1%", marginBottom: "8%" }}
      >
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="col s0 m0"></div>
              <div
                className="col s12 m3"
                style={{ paddingRight: "2%", textAlign: "right" }}
              >
                <h1 style={{ fontSize: "950%", fontFamily: "montserrat" }}>
                  bene
                </h1>
              </div>
              <div
                className="col s12 m7"
                style={{ paddingLeft: "0", paddingTop: "1.5%" }}
              >
                <h3
                  style={{
                    color: "#d2af78",
                    fontSize: "400%",
                    fontFamily: "Times new roman",
                    marginBottom: "0",
                    fontWeight: "549"
                  }}
                >
                  organically grown
                </h3>
                <h3
                  style={{
                    color: "#d2af78",
                    fontSize: "400%",
                    fontFamily: "Times new roman",
                    marginTop: "0",
                    fontWeight: "549"
                  }}
                >
                  hemp extract
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m4">
                <div
                  className="row"
                  style={{ paddingLeft: "13.5%", paddingTop: "15%" }}
                >
                  <div className="col s12">
                    <p style={{ fontFamily: "montserrat", fontSize: "100%" }}>
                      In our own quest to enhance total balance and reduce
                      stress, we
                    </p>
                    <p style={{ fontFamily: "montserrat", fontSize: "100%" }}>
                      set out to understand, what is CBD. We met manufacturers
                      from
                    </p>
                    <p style={{ fontFamily: "montserrat", fontSize: "100%" }}>
                      across the world. We spoke with doctors
                    </p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    marginTop: "30%",
                    paddingLeft: "80%",
                    fontFamily: "montserrat",
                    fontSize: "110%"
                  }}
                >
                  <div
                    className="col s12"
                    style={{ textDecoration: "underline" }}
                  >
                    {" "}
                    READ MORE
                  </div>
                </div>
              </div>
              <div className="col s12 m6">
                <img src={bottle} alt="" srcset="" style={{ width: "80%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
