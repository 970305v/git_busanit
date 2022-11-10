import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/AdminUsers.css";

function AdminUsers() {
  return (
    <>
      <div className="admin-container">
        <h1>회원 관리</h1>
        <div className="admin-table-wrap">
          <div className="admin-table-btn">
            <button>전체목록</button>
            <button>선택삭제</button>
            <div>
              <span>
                <strong>총 회원수 : </strong> 명
              </span>
            </div>
            <div>
              <select>
                <option>회원아이디</option>
                <option>이름</option>
                <option>전화번호</option>
              </select>
              <input type="text" />
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>-</th>
                  <th>이메일</th>
                  <th>이름</th>
                  <th>전화번호</th>
                  <th>권한</th>
                  <th>가입일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>1</td>
                  <td>
                    <Link to=":id">aa@naver.com</Link>
                  </td>
                  <td>
                    <Link to=":id">홍길동</Link>
                  </td>
                  <td>010-1234-1234</td>
                  <td>일반</td>
                  <td>2022-01-01</td>
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

export default AdminUsers;
