import React from "react";
import "../../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <header>
      <div className="nav-container">
        <div className="logo-wrap">
          <a href="!#">LIFE FOR US</a>
        </div>
        <div className="menu-wrap">
          <a href="!#">ABOUT</a>
          <a href="!#">ALL</a>
          <a href="!#">MEN</a>
          <a href="!#">WOMEN</a>
          <a href="!#">REVIEW</a>
          <a href="!#">NOTICE</a>
          <a href="!#">Q&A</a>
          <div className="icon-wrap">
            <a href="!#">
              <FontAwesomeIcon icon={faSearch} />
            </a>
            <a href="!#">
              <FontAwesomeIcon icon={faUser} />
            </a>
            <a href="!#">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
