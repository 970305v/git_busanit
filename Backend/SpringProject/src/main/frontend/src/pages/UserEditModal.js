import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Mypage.css";
import axios from "axios";

function UserEditModal({ setModalOpen, user }) {
  const [pw, setPw] = useState("");
  const closeModal = () => {
    setModalOpen(false);
  };

  const chkPwHandler = async (e) => {
    e.preventDefault();
    await axios.post("/pwchk", { pw, hashpw: user.mPwd }).then((response) => {
      if (response.data.status === 201) {
        window.alert(response.data.msg);
      } else if (response.data.status === 404) {
        window.alert(response.data.msg);
      } else {
        window.alert("관리자에게 문의해주세요.");
      }
    });
  };

  return (
    <div className="modal-container">
      <Link className="modal-close" onClick={closeModal}>
        X
      </Link>
      <h2>비밀번호를 입력해주세요.</h2>
      <input
        type="password"
        value={pw}
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <button onClick={chkPwHandler}>입력</button>
    </div>
  );
}

export default UserEditModal;
