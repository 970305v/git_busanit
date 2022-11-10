import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/AdminNav.css";

function AdminNav() {
  return (
    <>
      <header>
        <div className="header-wrap">
          <h2>ADMINISTRATOR</h2>
        </div>
      </header>
      <div className="container">
        <div className="nav-wrap">
          <ul>
            <Link to="users">
              <li>회원 관리</li>
            </Link>
            <Link to="products">
              <li>상품 관리</li>
            </Link>
            <Link to="notice">
              <li>공지 관리</li>
            </Link>
            <Link to="review">
              <li>리뷰 관리</li>
            </Link>
            <Link to="qna">
              <li>Q&A 관리</li>
            </Link>
            <Link to="/">
              <li>홈화면으로</li>
            </Link>
            <Link to="/">
              <li>로그아웃</li>
            </Link>
          </ul>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AdminNav;
