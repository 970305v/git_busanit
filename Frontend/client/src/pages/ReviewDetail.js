import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import "../styles/ReviewDetail.css";
import axios from "axios";

function ReviewDetail() {
  const [datas, setDatas] = useState([]);
  const idx = useParams().id;
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`/review/${idx}`, idx).then((response) => {
        setDatas(response.data.result);
      });
    };
    fetchData();
  }, []);
  console.log(datas);
  return (
    <div className="board-container">
      {datas.map((data, key) => {
        return (
          <div key={key}>
            <div className="title-wrap">
              <h2>{data.rTitle}</h2>
              <div>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "5px" }} />{" "}
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
            <div className="content-wrap">
              <div>{data.rStar}</div>
              <div>
                <span>{data.mEmail}</span>/<span>{data.rRegdate}</span>
              </div>
              <div className="review-content">
                {data.rContent}
                <div className="review-img-box">
                  <div className="img-box">
                    {data.rImage1 === null ? null : (
                      <img src={`../${data.rImage1}`} alt={data.rImage1} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Link to="/review">
        <FontAwesomeIcon icon={faAngleLeft} /> 목록으로 가기
      </Link>
    </div>
  );
}

export default ReviewDetail;
