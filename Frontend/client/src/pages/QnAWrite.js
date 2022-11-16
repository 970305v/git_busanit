import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/QnAWrite.css";

function QnAWrite() {
  const [qCategory, setQCategory] = useState("");
  const [qTitle, setQTitle] = useState("");
  const [pName, setPName] = useState("");
  const [qContent, setQContent] = useState("");
  const [secret, setSecret] = useState(false);

  const secretChk = () => {
    document.getElementById("secret-chk").checked
      ? setSecret(true)
      : setSecret(false);
  };

  const qnaWriteHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("/qnawrite", {
        qCategory,
        qTitle,
        pName,
        qContent,
        secret,
        mId: localStorage.getItem("idx"),
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="write-container">
      <form
        method="post"
        encType="multipart/form-data"
        onSubmit={qnaWriteHandler}
      >
        <div className="write-top">
          <div className="write-caregory">
            <span>분류</span>
            <select
              value={qCategory}
              onChange={(e) => setQCategory(e.target.value)}
            >
              <option>선택하세요.</option>
              <option>상품</option>
              <option>주문 / 결제</option>
              <option>배송</option>
              <option>반품 / 교환</option>
              <option>기타</option>
            </select>
          </div>
          <div className="write-title">
            <span>제목</span>
            <input
              type="text"
              value={qTitle}
              onChange={(e) => setQTitle(e.target.value)}
            ></input>
          </div>
        </div>
        {/* select option을 상품을 선택한 경우에만 보임 */}
        <div className="select-product">
          <span>상품 이름</span>
          <input type="text"></input>
        </div>
        <div className="write-content-box">
          <textarea
            className="write-contents"
            value={qContent}
            onChange={(e) => setQContent(e.target.value)}
          />
        </div>
        <div className="write-bottom">
          <div className="secret-wrap">
            <input type="checkbox" id="secret-chk" onClick={secretChk} />
            <label htmlFor="secret-chk">비밀글로 지정하기</label>
          </div>
          <div className="btn-wrap">
            <button type="button" className="list-btn">
              <Link to="/qna">목록으로 가기</Link>
            </button>
            <button type="submit" className="save-btn">
              저장하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default QnAWrite;
