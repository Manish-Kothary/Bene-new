import React, { Component } from "react";
import logo1 from "../logo1.png";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav style={{ background: "none", boxShadow: "none" }} id="main-nav">
          <div
            class="nav-wrapper navbar-fixed"
            style={{
              paddingTop: "1.5%",
              paddingLeft: "1.5%",
              paddingRight: "1.5%"
            }}
          >
            <ul class="left hide-on-med-and-down">
              <li>
                <a href="sass.html" style={{ fontSize: "150%" }}>
                  Shop
                </a>
              </li>
              <li>
                <i class="material-icons" style={{ fontSize: "230%" }}>
                  chevron_right
                </i>
              </li>
              <li>
                <a href="sass.html">Oils</a>
              </li>
              <li>
                <a href="badges.html">Cupsules</a>
              </li>
              <li>
                <a href="collapsible.html">Topicals</a>
              </li>
              <li>
                <a href="mobile.html">Edibles</a>
              </li>
              <li>
                <a href="sass.html">Pets</a>
              </li>
              <li>
                <a href="sass.html">Bundles</a>
              </li>
            </ul>
            <a href="#!" class="brand-logo center">
              <img src={logo1} alt="" srcset="" style={{ width: "68%" }} />
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Learn</a>
              </li>
              <li>
                <a href="badges.html">Consult</a>
              </li>
              <li>
                <a href="collapsible.html">
                  <i class="material-icons">person</i>
                </a>
              </li>
              <li>
                <a href="mobile.html">
                  <i className="material-icons">shopping_basket</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </>
    );
  }
}
