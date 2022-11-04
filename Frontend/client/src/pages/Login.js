import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <form>
        <div className="title-wrap">
          <p>로그인</p>
        </div>
        <div>
          <p>이메일</p>
          <input type="text" name="email" />
        </div>
        <div>
          <p>비밀번호</p>
          <input
            type="password"
            name="passwd"
            placeholder="8자 이상 입력해주세요."
          />
        </div>
        <a href="!#">비밀번호 찾기</a>
        <div className="btn-wrap">
          <button className="login-btn">로그인</button>
          <button className="reg-btn">회원가입</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
