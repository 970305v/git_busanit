import "../styles/ReviewWrite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function ReviewWrite() {
  return (
    <div className="write-container">
      <form action="" method="post">
        <div className="select-product">
          <span>상품 이름</span>
          <select>
            <option>구매내역</option>
          </select>
        </div>
        <div className="review-write-title-wrap">
          <span>제목</span>
          <input type="text"></input>
        </div>
        <div className="write-content-box">
          <textarea className="write-contents"></textarea>
        </div>
        <div className="review-write-bottom">
          <div className="file-wrap">
            <div className="file-btn">
              <input type="file" id="upload-file" />
              <label for="upload-file">
                <FontAwesomeIcon icon={faCamera} className="select-file" />
              </label>
            </div>
          </div>
          <div className="review-btn-wrap">
            <div className="left-wrap">
              <button type="button" className="list-btn">
                <a href="!#">목록으로 가기</a>
              </button>
            </div>
            <div className="right-wrap">
              <select>
                <option>평점 주기</option>
                <option>★★★★★</option>
                <option>★★★★☆</option>
                <option>★★★☆☆</option>
                <option>★★☆☆☆</option>
                <option>★☆☆☆☆</option>
              </select>
              <button type="submit" className="save-btn">
                <a href="!#">저장하기</a>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewWrite;
