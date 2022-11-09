import React from "react";
import "../../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faUser,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <div className="nav-container">
                <div className="logo-wrap">
                    <Link to="/">LIFE FOR US</Link>
                </div>
                <div className="menu-wrap">
                    <Link to="!#">ABOUT</Link>
                    <Link to="/all">ALL</Link>
                    <Link to="!#">MEN</Link>
                    <Link to="!#">WOMEN</Link>
                    <Link to="/review">REVIEW</Link>
                    <Link to="/notice">NOTICE</Link>
                    <Link to="/qna">Q&A</Link>
                    <div className="icon-wrap">
                        <Link to="!#">
                            <FontAwesomeIcon icon={faSearch} />
                        </Link>
                        <Link to="/login">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                        <Link to="!#">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
