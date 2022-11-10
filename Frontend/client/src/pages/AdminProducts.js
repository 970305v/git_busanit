import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/AdminProducts.css";

function AdminProducts() {
  return (
    <>
      <div className="admin-container">
        <h1>상품 관리</h1>
        <div className="admin-table-wrap">
          <div className="admin-table-btn">
            <button>전체목록</button>
            <button>선택삭제</button>
            <div>
              <span>
                <strong>총 상품수 : </strong> 개
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
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>1</td>
                  <td>
                    <img></img>
                  </td>
                  <td>티셔츠</td>
                  <td>
                    <select>
                      <option>남자</option>
                      <option>여자</option>
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
                    <input type="text" style={{ width: "90%" }} />
                  </td>
                  <td style={{ width: "5%" }}>
                    <input type="text" style={{ width: "90%" }} />
                  </td>
                  <td>2022-01-01</td>
                  <td>수정 / 삭제</td>
                </tr>
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
