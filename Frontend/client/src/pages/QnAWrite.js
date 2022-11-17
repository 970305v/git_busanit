import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/QnAWrite.css";

function QnAWrite() {
  const [qCategory, setQCategory] = useState("");
  const [pId, setPId] = useState(0);
  const [qTitle, setQTitle] = useState("");
  const [qFile, setQFile] = useState("");
  const [qContent, setQContent] = useState("");
  const [qSecret, setQSecret] = useState(false);
  const [qSearch, setQSearch] = useState("");

  const secretChk = () => {
    document.getElementById("secret-chk").checked
      ? setQSecret(true)
      : setQSecret(false);
  };

  const qnaWriteHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("qCategory", qCategory);
    formData.append("pId", pId);
    formData.append("mId", localStorage.getItem("idx"));
    formData.append("qTitle", qTitle);
    formData.append("qFile", qFile);
    formData.append("qContent", qContent);
    formData.append("qSecret", qSecret);
    await axios.post("/qnawrite", formData).then((response) => {
      if (response.data.status === 201) {
        window.alert(response.data.msg);
        window.location.assign("/qna");
      } else {
        window.alert("문의 등록에 실패했습니다.");
      }
    });
  };

  console.log(qSearch);
  const searchHandler = async () => {
    await axios.get("/qnawrite", qTitle);
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
            />
          </div>
        </div>
        {/* select option을 상품을 선택한 경우에만 보임 */}

        {qCategory === "상품" ? (
          <div className="select-product">
            <input
              type="text"
              value={qSearch}
              onChange={(e) => setQSearch(e.target.value)}
              placeholder="상품명을 입력해주세요..."
            />
            <input
              type="button"
              className="search-btn"
              value="검색"
              onClick={searchHandler}
            />
            <div className="search-container">
              <ul className="search-wrap">
                <li className="search-data">zzz</li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
        <input
          name="qFile"
          onChange={(e) => setQFile(e.target.files[0])}
          type="file"
        />
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
