import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/AdminReview.css";

function AdminQnA() {
  return (
    <>
      <div className="admin-container">
        <h1>Q&A 관리</h1>
        <div className="admin-table-wrap">
          <div className="admin-table-btn">
            <button>전체목록</button>
            <button>선택삭제</button>
            <div>
              <span>
                <strong>질문 수 : </strong> 개
              </span>
            </div>
            <div>
              <select>
                <option>제목</option>
                <option>작성자</option>
                <option>상품코드</option>
              </select>
              <input type="text" />
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div>
            <table className="notice-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>번호</th>
                  <th>상품명</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>답변</th>
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
                    <Link to=":id">상품명.</Link>
                  </td>
                  <td>
                    <Link to=":id">사이즈문의</Link>
                  </td>
                  <td>아이디</td>
                  <td>yes or no</td>
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

export default AdminQnA;
