import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/NoticeDetail.css";

function NoticeDetail() {
  return (
    <div className="board-container">
      <div className="title-wrap">
        <h2>공지 제목</h2>
        <div>
          <FontAwesomeIcon icon={faPen} style={{ marginRight: "5px" }} />{" "}
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      <div className="content-wrap">
        <div>
          <span>아이디</span>
          <span>작성날짜</span>
        </div>
        <div className="review-content">
          내용
          <div>사진</div>
        </div>
      </div>
      <Link to="/notice">
        <FontAwesomeIcon icon={faAngleLeft} /> 목록으로 가기
      </Link>
    </div>
  );
}

export default NoticeDetail;
