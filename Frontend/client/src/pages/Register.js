import React from "react";
import "../styles/Register.css";

function Register() {
  return (
    <div className="reg-container">
      <form method="post">
        <div className="title-wrap">
          <p>회원 가입</p>
        </div>
        <div>
          <p>이메일 * </p>
          <input type="text" name="email" />
        </div>
        <div>
          <p>비밀번호 *</p>
          <input
            type="password"
            name="passwd"
            placeholder="8자 이상 입력해주세요."
          />
        </div>
        <div>
          <p>비밀번호 확인 * </p>
          <input type="password" name="passwd2" />
        </div>
        <div>
          <p>이름 * </p>
          <input type="text" name="username" />
        </div>
        <div>
          <p>
            <input type="checkbox" />
            <label>
              {" "}
              (필수) 이용약관과 개인정보 수집 및 이용에 동의합니다.
            </label>
          </p>
        </div>
        <div className="btn-wrap">
          <button>가입하기</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
