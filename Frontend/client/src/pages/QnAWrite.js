import "../styles/QnAWrite.css";

function QnAWrite() {
  return (
    <div className="write-container">
      <form action="" method="post">
        <div className="write-top">
          <div className="write-caregory">
            <span>분류</span>
            <select>
              <option>선택하세요.</option>
              <option>상품</option>
              <option>주문 / 결제</option>
              <option>배송</option>
              <option>반품 / 교한</option>
              <option>기타</option>
            </select>
          </div>
          <div className="write-title">
            <span>제목</span>
            <input type="text"></input>
          </div>
        </div>
        {/* select option을 상품을 선택한 경우에만 보임 */}
        <div className="select-product">
          <span>상품 이름</span>
          <input type="text"></input>
        </div>
        <div className="write-content-box">
          <textarea className="write-contents"></textarea>
        </div>
        <div className="write-bottom">
          <div className="secret-wrap">
            <input type="checkbox" />
            <span>비밀글로 지정하기</span>
          </div>
          <div className="btn-wrap">
            <button type="button" className="list-btn">
              <a href="!#">목록으로 가기</a>
            </button>
            <button type="submit" className="save-btn">
              <a href="!#">저장하기</a>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default QnAWrite;
