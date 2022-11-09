import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
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
        <div>아이디 / 작성날짜</div>
        <div className="review-content">
          내용
          <div>사진</div>
        </div>
      </div>
      목록으로 가기
    </div>
  );
}

export default NoticeDetail;
