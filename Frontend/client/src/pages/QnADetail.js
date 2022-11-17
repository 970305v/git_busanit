import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/QnADetail.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function QnADetail({ isAdmin }) {
  const [datas, setDatas] = useState([]);
  const [qcContent, setQcContent] = useState("");
  const idx = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`/qna/${idx.id}`, idx.id).then((response) => {
        setDatas(response.data.result);
      });
    };
    fetchData();
  }, []);

  const commentHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(`/qna/${idx.id}`, {
        idx: idx.id,
        qcWriter: localStorage.getItem("email"),
        qcContent,
      })
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.msg);
          window.location.assign("/qna");
        } else {
          window.alert("문의 등록에 실패했습니다.");
        }
      });
  };

  return (
    <div className="board-container">
      {datas.map((data, key) => {
        return (
          <div key={key}>
            <div className="title-wrap">
              <h2>
                [{data.qCategory}] {data.qTitle}
              </h2>
              <div>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "5px" }} />{" "}
                /
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
            <div className="content-wrap">
              <div>
                <span>{data.mId}</span>/
                <span>
                  <small>{data.qRegdate}</small>
                </span>
              </div>
              <div className="qna-content">
                {data.qContent}
                <div className="qna-img-box">
                  <div className="img-box">
                    <img src={`../${data.qFile}`} alt={data.qFile} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="answer-container">
        {datas.map((data, key) => {
          return (
            <div className="answer-box" key={key}>
              <div>
                <strong>{data.qcWriter}</strong>
                <span>
                  <small>{data.qcRegdate}</small>
                </span>
                {/* <span>
                  <FontAwesomeIcon
                    icon={faPen}
                    style={{ marginRight: "5px" }}
                  />{" "}
                  / <FontAwesomeIcon icon={faTrash} />
                </span> */}
              </div>
              <div>{data.qcContent}</div>
            </div>
          );
        })}
        {!isAdmin ? (
          ""
        ) : (
          <div className="write-box">
            <form method="post" onSubmit={commentHandler}>
              <label>답변 작성하기</label>
              <textarea
                value={qcContent}
                onChange={(e) => setQcContent(e.target.value)}
              />
              <button>댓글쓰기</button>
            </form>
          </div>
        )}
      </div>
      <Link to="/qna">
        <FontAwesomeIcon icon={faAngleLeft} /> 목록으로 가기
      </Link>
    </div>
  );
}

export default QnADetail;
