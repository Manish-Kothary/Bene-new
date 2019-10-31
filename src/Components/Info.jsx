import React, { Component } from "react";
import bottle from "./bottle.png";
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
              <div
                className="col s12 m4"
                style={{ paddingRight: "2%", textAlign: "right" }}
              >
                <h1 style={{ fontSize: "1250%", fontFamily: "montserrat" }}>
                  bene
                </h1>
              </div>
              <div
                className="col s12 m7"
                style={{ paddingLeft: "0", paddingTop: "2.3%" }}
              >
                <h3
                  style={{
                    color: "#d2af78",
                    fontSize: "500%",
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
                    fontSize: "500%",
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
              <div className="col s12 m6">
                <div
                  className="row"
                  style={{ paddingLeft: "14.6%", paddingTop: "15%" }}
                >
                  <div className="col s12">
                    <p style={{ fontFamily: "montserrat", fontSize: "139%" }}>
                      In our own quest to enhance total balance and reduce
                      stress, we
                    </p>
                    <p style={{ fontFamily: "montserrat", fontSize: "139%" }}>
                      set out to understand, what is CBD. We met manufacturers
                      from
                    </p>
                    <p style={{ fontFamily: "montserrat", fontSize: "139%" }}>
                      across the world. We spoke with doctors
                    </p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    marginTop: "10%",
                    paddingLeft: "78.5%",
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
                <img src={bottle} alt="" srcset="" style={{ width: "85%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
