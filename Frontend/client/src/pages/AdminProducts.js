import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AdminProducts.css";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    await axios.get("/products").then((response) => {
      console.log(response);
      if (response.data.status === 201) {
        setProducts(response.data.result);
        console.log(response.data.msg);
      } else {
        window.alert("Failed.");
      }
    });
  };

  const deleteItem = () => {};
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="admin-container">
        <h1>상품 관리</h1>
        <div className="admin-table-wrap">
          <div className="admin-table-btn">
            <div className="buttons">
              <div className="button-left">
                <button>전체목록</button>
                <button>선택삭제</button>
              </div>
              <div className="button-right">
                <button>
                  <Link to="upload">상품등록</Link>
                </button>
              </div>
            </div>
            <div>
              <span>
                <strong>총 상품수 : </strong> {products.length}개
              </span>
            </div>
            <div>
              <select>
                <option>상품명</option>
                <option>상품코드</option>
                <option>가격</option>
              </select>
              <input type="text" />
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="admin-table">
            <table className="product-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>-</th>
                  <th>상품이미지</th>
                  <th>상품명</th>
                  <th>성별</th>
                  <th>상품분류</th>
                  <th>상품코드</th>
                  <th>재고</th>
                  <th>가격</th>
                  <th>판매일</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((product, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{product.pId}</td>
                        <td>
                          <img src={`../${product.pImage1}`} alt="" />
                        </td>
                        <td>{product.pName}</td>
                        <td>
                          <select>
                            <option>MEN</option>
                            <option>WEMEN</option>
                          </select>
                        </td>
                        <td>
                          <select>
                            <option>상의</option>
                            <option>하의</option>
                            <option>기타</option>
                          </select>
                        </td>

                        <td>일반</td>
                        <td style={{ width: "5%" }}>
                          <input
                            type="text"
                            style={{ width: "90%" }}
                            value={product.pPrice}
                            readOnly
                          />
                        </td>
                        <td style={{ width: "5%" }}>
                          <input
                            type="text"
                            style={{ width: "90%" }}
                            value={product.pStock}
                            readOnly
                          />
                        </td>
                        <td>{product.pRegdate}</td>
                        <td>
                          <button type="button">수정</button>{" "}
                          <button
                            type="button"
                            onClick={() => deleteItem(product.pid)}
                          >
                            삭제
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="11">등록된 상품이 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="pagination">페이지</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminProducts;
