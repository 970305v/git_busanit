import "../styles/Mypage.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Mypage() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const idx = localStorage.getItem("idx");

  const logout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios.get(`/mypage/${idx}`, { idx: idx }).then((response) => {
        setUsers(response.data.user);
      });
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(users);

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
        {users.map((user, key) => {
          return (
            <div className="userInfo-right" key={key}>
              <div className="info-title">
                <span>회원 정보</span>
              </div>
              <div className="logout">
                <a href="/" onClick={logout}>
                  로그아웃
                </a>
              </div>
              <div className="input-box">
                <div className="input-item">
                  <p>이메일</p>
                  <input
                    type="text"
                    name="email"
                    value={user.mEmail}
                    readOnly
                  />
                </div>
                <div className="input-item">
                  <p>이름</p>
                  <input type="text" name="name" value={user.mName} readOnly />
                </div>
                <div className="input-item">
                  <p>휴대폰 번호</p>
                  <div className="tel-box">
                    <input
                      type="text"
                      name="tel"
                      value={user.mPhone}
                      readOnly
                    />
                  </div>
                </div>
                <div className="input-item">
                  <p>우편번호</p>
                  <input
                    type="text"
                    name="post"
                    value={user.mPostnum}
                    readOnly
                  />
                </div>
                <div className="input-item">
                  <p>주소</p>
                  <input
                    type="text"
                    name="addr1"
                    value={user.mAddr1}
                    readOnly
                  />
                  <input
                    type="text"
                    name="addr2"
                    value={user.mAddr2}
                    readOnly
                  />
                </div>
                <div className="link-wrap">
                  <a href="!#">비밀번호 변경하기</a>
                  <a href="!#">탈퇴하기</a>
                </div>
              </div>
              <div className="mypageBtn-box">
                <button className="updateSave-btn" type="submit">
                  변경 사항 저장하기
                </button>
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default Mypage;
