import React from "react";
import { Link } from "react-router-dom";
import "../styles/Notice.css";

function Notice() {
  return (
    <div className="container">
      <div className="title-container">
        <h1>Notice</h1>
        <p>공지사항과 다양한 이벤트 소식을 확인하세요.</p>
      </div>
      <div className="notice-table-wrap">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>조회수</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>공지</td>
              <td>
                <Link to="/notice/:id">공지 제목(공지 상세보기)</Link>
              </td>
              <td>관리자</td>
              <td>조회수</td>
              <td>2000.01.01</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bottom-wrap">
        <div>
          <form method="post">
            <input type="text" placeholder="검색어를 입력하세요." />
            <button>검색</button>
          </form>
        </div>
        <div className="admin-btn">
          <button>
            <a href="/ReviewWrite">글쓰기(관리자권한 없으면 안뜨게)</a>
          </button>
        </div>
      </div>
      <div className="pagination">
        <span>페이징처리</span>
      </div>
    </div>
  );
}

export default Notice;
