import React from "react";
import "../styles/MenProduct.css";

function MenProduct() {
  return (
    <div className="container">
      <div className="title-container">
        <h1>Men</h1>
        <p>남성 제품을 만나보세요.</p>
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

export default MenProduct;
