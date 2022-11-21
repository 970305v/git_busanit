import "../styles/Mypage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PasswordModal from "./PasswordModal";
import Loading from "./Loading";

function Mypage() {
  const email = localStorage.getItem("email");
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  const logout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`/api/mypage?mEmail=${email}`, { mEmail: email })
        .then((response) => {
          setUsers(response.data.userInfo);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="container mypage-gird">
      <div className="userInfo-left">
        <div className="orderHistory-box">
          <div className="info-title">
            <span>주문 내역</span>
          </div>
          <table>
            <thead>
              <tr>
                <td>주문번호</td>
                <td>이미지</td>
                <td>상품정보</td>
                <td>주문처리상태</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>주문번호</td>
                <td>
                  <img src="https://via.placeholder.com/50" />
                </td>
                <td>상품정보</td>
                <td>주문처리상태</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="myPost-box">
          <div className="info-title">
            <span>내가 쓴 글</span>
          </div>
          <table>
            <thead>
              <tr>
                <td>일자</td>
                <td>제목</td>
                <td>유형</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>22.11.08</td>
                <td>제목</td>
                <td>질문, 리뷰</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <form method="post">
        <div className="userInfo-right">
          <div className="info-title">
            <span>
              <strong>{users.mName}</strong> 님 환영합니다.
            </span>
          </div>
          <div className="logout">
            <a href="/" onClick={logout}>
              로그아웃
            </a>
          </div>
          <div className="input-box">
            <div className="input-item">
              <label>이메일</label>
              <input
                type="text"
                name="email"
                value={users.mEmail || ""}
                readOnly
              />
            </div>
            <div className="input-item">
              <label>이름</label>
              <input
                type="text"
                name="name"
                value={users.mName || ""}
                readOnly
              />
            </div>
            <div className="input-item">
              <label>전화번호</label>
              <input
                type="text"
                name="tel"
                value={users.mPhone || ""}
                readOnly
              />
            </div>
            <div className="input-item">
              <label>우편번호</label>
              <input
                type="text"
                name="post"
                value={users.mPostnum || ""}
                readOnly
              />
            </div>
            <div className="input-item">
              <label>주소</label>
              <input
                type="text"
                name="addr1"
                value={users.mAddr1 || ""}
                readOnly
              />
            </div>
            <div className="input-item">
              <label>상세주소</label>
              <input
                type="text"
                name="addr2"
                value={users.mAddr2 || ""}
                readOnly
              />
            </div>
            <div className="input-item">
              <label>적립금</label>
              <input
                type="text"
                name="post"
                value={`${users.mPoint || ""}원`}
                readOnly
              />
            </div>
            <div className="input-item">
              <label>가입일</label>
              <input
                type="text"
                name="post"
                value={users.mRegdate || ""}
                readOnly
              />
            </div>
            <div className="link-wrap">
              <Link onClick={showModal}>회원정보 변경하기</Link>
              {modalOpen && (
                <PasswordModal setModalOpen={setModalOpen} user={users} />
              )}
              <a href="!#">탈퇴하기</a>
            </div>
          </div>
          {/* <div className="mypageBtn-box">
                <button className="updateSave-btn" type="submit">
                  변경 사항 저장하기
                </button>
              </div> */}
        </div>
      </form>
    </div>
  );
}

export default Mypage;
