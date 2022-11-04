import React from "react";
import "../styles/QnA.css";

function QnA() {
  return (
    <div className="container">
      <div className="title-container">
        <h1>Q&A</h1>
        <p>1:1 질문 게시판입니다. 무엇이든 물어보세요!</p>
        <p>자주 묻는 질문은 공지글에서 확인할 수 있습니다.</p>
      </div>
      <div className="qna-table-wrap">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>분류</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>상품</td>
              <td>
                <a href="!#">
                  <div className="qna-title">
                    <span>상품이미지</span>
                    <div>
                      <p>(자물쇠)제목</p>
                      <p style={{ color: "#8c8c8c" }}>부제목</p>
                    </div>
                  </div>
                </a>
              </td>
              <td>이***</td>
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
          <button>글쓰기</button>
        </div>
      </div>
      <div className="pagination">
        <span>페이징처리</span>
      </div>
    </div>
  );
}

export default QnA;
