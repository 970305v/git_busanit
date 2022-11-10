import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";

import "../styles/Register.css";

function Register() {
  const [emailChk, setEmailChk] = useState(false);
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwd2, setPasswd2] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addr, setAddr] = useState("");
  const [openPost, setOpenPost] = useState(false);
  const registerHandler = async (e) => {
    e.preventDefault();
    if (passwd === passwd2 && emailChk) {
      console.log("회원가입 완료");
    } else {
      console.log("불가능");
    }
  };

  const check = {
    emailCheckHandler: async (e) => {
      e.preventDefault();
      if (isEmailCheck(email)) {
        // 일단 이메일 유효성 검사 먼저 한 후 sql 에서 검색후 사용가능한 뜨게
        window.alert("사용가능한 이메일 주소입니다.");
        setEmailChk(true);
      } else {
        window.alert("유효하지 않은 이메일 주소입니다.");
      }
    },
  };

  const handle = {
    selectAddress: (data) => {
      setAddr(data.address);
      setZipcode(data.zonecode);
      setOpenPost(false);
    },
    addressHandler: () => {
      setOpenPost((current) => !current);
    },
  };
  // 전화번호 정규식
  const phoneHandler = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };
  // 이메일 정규식
  const isEmailCheck = (email) => {
    let exp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    return exp.test(email);
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
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailChk(false);
            }}
          />
          <input
            type="button"
            onClick={check.emailCheckHandler}
            className="checkEmail"
            value="중복확인"
          />
        </div>
        <div>
          <p>비밀번호 *</p>
          <input
            type="password"
            name="passwd"
            required
            placeholder="8자 이상 입력해주세요."
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
        </div>
        <div>
          <p>비밀번호 확인 * </p>
          <input
            type="password"
            name="passwd2"
            value={passwd2}
            required
            onChange={(e) => setPasswd2(e.target.value)}
          />
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
            readOnly
            value={zipcode}
          />
          <input
            type="button"
            className="findPostcode"
            value="우편번호 찾기"
            onClick={handle.addressHandler}
          />
          {openPost && (
            <DaumPostcode onComplete={handle.selectAddress} autoClose={false} />
          )}
          <p>주소 *</p>
          <input
            type="text"
            id="address"
            placeholder="주소"
            value={addr}
            readOnly
          />
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
