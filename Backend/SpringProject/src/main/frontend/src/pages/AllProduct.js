import React from "react";
import { Link } from "react-router-dom";
import "../styles/AllProduct.css";

function AllProduct() {
  return (
    <div className="container">
      <div className="title-container">
        <h1>All</h1>
        <p>라이프포어스의 모든제품을 만나보세요.</p>
      </div>
      <div className="product-container">
        <div className="product-list">
          <a href="!#">All</a>
          <a href="!#">상의</a>
          <a href="!#">하의</a>
          <a href="!#">기타</a>
        </div>
        <div className="product-wrap">
          <div className="product-box">
            <Link to="/product/:id">
              <img></img>
              <p>
                <strong>상품명</strong>
              </p>
              <p style={{ color: "#8c8c8c", fontSize: "14px" }}>가격</p>
            </Link>
          </div>
          <div className="product-box">
            <img></img>
            <p>
              <strong>상품명</strong>
            </p>
            <p style={{ color: "#8c8c8c", fontSize: "14px" }}>가격</p>
          </div>
          <div className="product-box">
            <img></img>
            <p>
              <strong>상품명</strong>
            </p>
            <p style={{ color: "#8c8c8c", fontSize: "14px" }}>가격</p>
          </div>
          <div className="product-box">
            <img></img>
            <p>
              <strong>상품명</strong>
            </p>
            <p style={{ color: "#8c8c8c", fontSize: "14px" }}>가격</p>
          </div>
          <div className="product-box">
            <img></img>
            <p>
              <strong>상품명</strong>
            </p>
            <p style={{ color: "#8c8c8c", fontSize: "14px" }}>가격</p>
          </div>
          <div className="product-box">
            <img></img>
            <p>
              <strong>상품명</strong>
            </p>
            <p style={{ color: "#8c8c8c", fontSize: "14px" }}>가격</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
