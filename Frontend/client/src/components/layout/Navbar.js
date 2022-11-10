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
          <a href="/about">ABOUT</a>
          <a href="!#">ALL</a>
          <a href="!#">MEN</a>
          <a href="!#">WOMEN</a>
          <a href="/reviewWrite">REVIEW</a>
          <a href="/noticeWrite">NOTICE</a>
          <a href="/qnaWrite">Q&A</a>
          <div className="icon-wrap">
            <a href="!#">
              <FontAwesomeIcon icon={faSearch} />
            </a>
            <a href="/mypage">
              <FontAwesomeIcon icon={faUser} />
            </a>
            <a href="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
