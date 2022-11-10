import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Login.css";

function Login() {
  const loginHandler = async (e) => {
    e.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  return (
    <div className="login-container">
      <form method="post" onSubmit={loginHandler}>
        <div className="login-title-wrap">
          <p>로그인</p>
        </div>
        <div>
          <p>이메일</p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>비밀번호</p>
          <input
            type="password"
            name="passwd"
            placeholder="8자 이상 입력해주세요."
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
        </div>
        <a href="!#">비밀번호 찾기</a>
        <div className="btn-wrap">
          <button className="login-btn">로그인</button>
          <Link to="/register">
            <button type="button" className="reg-btn">
              회원가입
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
