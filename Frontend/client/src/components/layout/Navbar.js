import React, { useState } from "react";
import "../../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCartShopping,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
<<<<<<< HEAD
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
=======
    <>
      <header>
        <div className="nav-container">
          <div className="logo-wrap">
            <Link to="/">LIFE FOR US</Link>
          </div>
          <div className="menu-wrap">
            <Link to="!#">ABOUT</Link>
            <Link to="/all">ALL</Link>
            <Link to="/men">MEN</Link>
            <Link to="/women">WOMEN</Link>
            <Link to="/review">REVIEW</Link>
            <Link to="/notice">NOTICE</Link>
            <Link to="/qna">Q&A</Link>
            <div className="icon-wrap">
              <form>
                <FontAwesomeIcon
                  icon={faSearch}
                  className="search-btn"
                  id="search-btn"
                  onClick={() => {
                    setSearchOpen(!searchOpen);
                  }}
                />
                {searchOpen ? (
                  <>
                    <input className="search-input" id="search-input" />
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <FontAwesomeIcon icon={faUser} id="icon-btn" />
                    </Link>
                    <Link to="!#">
                      <FontAwesomeIcon icon={faCartShopping} id="icon-btn" />
                    </Link>
                    <Link to="/admin">
                      <FontAwesomeIcon icon={faGear} id="icon-btn" />
                    </Link>
                  </>
                )}
              </form>
            </div>
>>>>>>> a93ce9b25f0fcc1ac886e8ae3bbea2e067dbf5e5
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
