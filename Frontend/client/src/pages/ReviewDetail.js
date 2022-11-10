import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/ReviewDetail.css";

function ReviewDetail() {
  return (
    <div className="board-container">
      <div className="title-wrap">
        <h2>리뷰 제목</h2>
        <div>
          <FontAwesomeIcon icon={faPen} style={{ marginRight: "5px" }} />{" "}
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      <div className="content-wrap">
        <div>별점</div>
        <div>
          <span>아이디</span>/<span>날짜</span>
        </div>
        <div className="review-content">
          내용
          <div>사진</div>
        </div>
      </div>
      <Link to="/review">
        <FontAwesomeIcon icon={faAngleLeft} /> 목록으로 가기
      </Link>
    </div>
  );
}

export default ReviewDetail;
