import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import "../styles/QnADetail.css";

function QnADetail() {
    return (
        <div className="board-container">
            <div className="title-wrap">
                <h2>QnA 제목</h2>
                <div>
                    <FontAwesomeIcon
                        icon={faPen}
                        style={{ marginRight: "5px" }}
                    />{" "}
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
            <div className="answer-container">
                <p>답변</p>
                <div className="answer-box">
                    <div>
                        <strong>작성자</strong>
                        <span>날짜</span>
                        <span>삭제하기</span>
                    </div>
                    <div>내용</div>
                </div>
                <div className="write-box">
                    <form>
                        <label>글쓴이</label>
                        <input type="text" />
                        <label>내용</label>
                        <textarea></textarea>
                        <button>댓글쓰기</button>
                    </form>
                </div>
            </div>
            목록으로 가기
        </div>
    );
}

export default QnADetail;
