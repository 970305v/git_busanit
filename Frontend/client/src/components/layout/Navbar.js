import React from "react";
import "../../styles/Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="nav-container">
        <div className="logo-wrap">
          <a href="!#">LIFE FOR US</a>
        </div>
        <div className="menu-wrap">
          <div>
            <a href="!#">ABOUT</a>
            <a href="!#">ALL</a>
            <a href="!#">MEN</a>
            <a href="!#">WOMEN</a>
            <a href="!#">REVIEW</a>
            <a href="!#">NOTICE</a>
            <a href="!#">Q&A</a>
          </div>
          <div>
            <a href="!#">
              {" "}
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <a href="!#">LOGIN</a>
            <a href="!#">CART</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
