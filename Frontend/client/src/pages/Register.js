import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/Register.css";

function Register() {
  const [idchk, setIdchk] = useState("false");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const registerHandler = async (e) => {
    e.preventDefault();
    if (idchk === true) {
      await axios
        .post("/api/register", { email, passwd, username })
        .then((response) => {
          if (response.status === 200) {
            window.alert("회원가입 완료.");
          } else {
            window.alert("관리자에게 문의하세요.");
          }
        });
    } else {
      window.alert("중복 검사 먼저 해주세요.");
    }
  };
  const emailCheckHandler = async (e) => {
    e.preventDefault();
    await axios.post("/api/emailcheck", { email }).then((response) => {
      if (response.headers.name === "success") {
        setIdchk(true);
        window.alert(response.data);
      } else if (response.headers.name === undefined) {
        window.alert(response.data);
      } else if (response.headers.name === "useid") {
        window.alert(response.data);
      } else {
        window.alert("관리자에게 문의하세요.");
      }
    });
  };
  // 전화번호 정규식
  const phoneHandler = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };
  useEffect(() => {
    if (phone.length === 10) {
      setPhone(phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (phone.length === 13) {
      setPhone(
        phone.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [phone]);

  return (
    <div className="reg-container">
      <form method="post" onSubmit={registerHandler}>
        <div className="reg-title-wrap">
          <p>회원 가입</p>
          <span>
            이미 계정이 있으신가요 ?{" "}
            <Link style={{ color: "#c67c00" }} to="/login">
              로그인
            </Link>
          </span>
        </div>
        <div className="form-control">
          <p>이메일 * </p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIdchk(false);
            }}
          />
          <input
            type="button"
            onClick={emailCheckHandler}
            className="checkEmail"
            value="중복확인"
          />
        </div>
        <div>
          <p>비밀번호 *</p>
          <input
            type="password"
            name="passwd"
            placeholder="8자 이상 입력해주세요."
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
        </div>
        <div>
          <p>비밀번호 확인 * </p>
          <input type="password" name="passwd2" />
        </div>
        <div>
          <p>이름 * </p>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <p>전화번호 * </p>
          <input
            type="text"
            name="phone"
            onChange={phoneHandler}
            value={phone}
          />
        </div>
        <div className="address-wrap">
          <p>우편번호 *</p>
          <input
            type="text"
            id="postcode"
            className="postcode"
            placeholder="우편번호"
          />
          <input type="button" className="findPostcode" value="우편번호 찾기" />
          <p>주소 *</p>
          <input type="text" id="address" placeholder="주소" />
          <input type="text" id="detailAddress" placeholder="상세주소" />
        </div>
        <div>
          <input type="checkbox" id="agreebox" required />
          <label htmlFor="agreebox">
            {" "}
            (필수) 이용약관과 개인정보 수집 및 이용에 동의합니다.
          </label>
        </div>
        <div className="btn-wrap">
          <button>가입하기</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
