import React from "react";
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
                <div className="product-wrap"></div>
            </div>
        </div>
    );
}

export default AllProduct;
