import React from "react";
import "../styles/Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faPen,
  faMessage,
  faCamera,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";

function Review() {
  return (
    <div className="container">
      <div className="title-container">
        <h1>Review</h1>
        <p>지금 바로, 고객님의 제품 경험을 공유해주세요!</p>
        <p>매주 수요일 베스트 리뷰를 추첨해 추가 적립금을 드립니다.</p>
        <div className="review-wrap">
          <div className="icon-content-wrap">
            <FontAwesomeIcon icon={faPen} size="4x" />
            <h3>한줄 리뷰</h3>
            <p>텍스트 15자 이상</p>
            <p>(500원)</p>
          </div>
          <div className="icon-content-wrap">
            <FontAwesomeIcon icon={faMessage} size="4x" />
            <h3>꼼꼼 리뷰</h3>
            <p>텍스트 50자 이상</p>
            <p>(1,000원)</p>
          </div>
          <div className="icon-content-wrap">
            <FontAwesomeIcon icon={faCamera} size="4x" />
            <h3>포토 리뷰</h3>
            <p>제품사진 + 50자 이상</p>
            <p>(2,000원)</p>
          </div>
          <div className="icon-content-wrap">
            <FontAwesomeIcon icon={faCrown} size="4x" />
            <h3>베스트 리뷰</h3>
            <p>제품사진 + 50자 이상</p>
            <p>(10,000원)</p>
          </div>
        </div>
      </div>
      <div className="review-table-wrap">
        <input type="checkbox" id="photo" />
        <label htmlFor="photo"> 사진 후기만 보기 (onclick이벤트)</label>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>상품명</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일</th>
              <th>평점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <a href="!#">사진/프레쉬치약(클릭시상품상세보기)</a>
              </td>
              <td>
                <Link to="/review/:id">리뷰 제목(클릭시리뷰상세보기)</Link>
              </td>
              <td>a***</td>
              <td>2000.01.01</td>
              <td>평점</td>
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
          <a href="/ReviewWrite">
            <button>글쓰기 </button>
          </a>
        </div>
      </div>
      <div className="pagination">
        <span>페이징처리</span>
      </div>
    </div>
  );
}

export default Review;
