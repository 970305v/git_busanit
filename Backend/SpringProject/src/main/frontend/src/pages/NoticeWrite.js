import "../styles/NoticeWrite.css";

function NoticeWrite() {
  return (
    <div className="write-container">
      <form action="" method="post">
        <div className="notice-write-title-wrap">
          <span>제목</span>
          <input type="text"></input>
        </div>
        <div className="write-content-box">
          <textarea className="write-contents"></textarea>
        </div>
        <div className="write-bottom">
          <div className="btn-wrap">
            <button type="button" className="list-btn">
              <a href="/notice">목록으로 가기</a>
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

export default NoticeWrite;
