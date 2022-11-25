import React, { useEffect, useState } from "react";
import "../../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCartShopping,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

function Navbar({ isLogin, isAdmin }) {
  const [searchWord, setSearchWord] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setSearchOpen(false);
  }, []);

  const searchHandler = async (e) => {
    await axios.get(`/products/all?=${searchWord}`);
  };

  return (
    <>
      <header>
        <div className="nav-container">
          <div className="logo-wrap">
            <Link to="/">LIFE FOR US</Link>
          </div>
          <div className="menu-wrap">
            <Link to="/about">ABOUT</Link>
            <Link to="/all">ALL</Link>
            <Link to="/men">MEN</Link>
            <Link to="/women">WOMEN</Link>
            <Link to="/review">REVIEW</Link>
            <Link to="/notice">NOTICE</Link>
            <Link to="/qna">Q&A</Link>
            <div className="icon-wrap">
              <form method="get" onSubmit={searchHandler}>
                {searchWord === "" ? (
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="search-btn"
                    id="search-btn"
                    onClick={() => {
                      setSearchOpen(!searchOpen);
                    }}
                  />
                ) : (
                  <button>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="search-btn"
                      id="search-btn"
                    />
                  </button>
                )}
                {searchOpen ? (
                  <input
                    className="search-input"
                    id="search-input"
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                  />
                ) : (
                  <>
                    {!isLogin ? (
                      <Link to="/login">
                        <FontAwesomeIcon icon={faUser} id="icon-btn" />
                      </Link>
                    ) : (
                      <Link to={`/mypage/${localStorage.getItem("idx")}`}>
                        <FontAwesomeIcon icon={faUser} id="icon-btn" />
                      </Link>
                    )}
                    <Link to="/cart">
                      <FontAwesomeIcon icon={faCartShopping} id="icon-btn" />
                      {/* <span>수량, 나중에 useState 적용</span> */}
                    </Link>
                  </>
                )}
                {!isAdmin ? null : (
                  <Link to="/admin">
                    <FontAwesomeIcon icon={faGear} id="icon-btn" />
                  </Link>
                )}
              </form>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
