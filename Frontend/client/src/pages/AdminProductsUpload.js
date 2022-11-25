import React, { useState } from "react";
import axios from "axios";
import "../styles/AdminProductsUpload.css";

function AdminProductsUpload() {
  const [pGender, setPGender] = useState("");
  const [pCaregory, setPCaregory] = useState("");
  const [pName, setPName] = useState("");
  const [pStock, setPStock] = useState("");
  const [pPrice, setPPrice] = useState("");
  const [pImage1, setPImage1] = useState("");
  const [pImage2, setPImage2] = useState("");
  const [pImage3, setPImage3] = useState("");

  const [pContent, setPContent] = useState("");

  const productHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("pGender", pGender);
    formData.append("pCaregory", pCaregory);
    formData.append("pName", pName);
    formData.append("pStock", pStock);
    formData.append("pPrice", pPrice);
    formData.append("pImage1", pImage1);
    formData.append("pContent", pContent);
    await axios.post("/products/upload", formData).then((response) => {
      if (response.data.status === 201) {
        window.alert(response.data.msg);
        window.location.assign("/admin");
      } else {
        window.alert("상품 등록에 실패했습니다.");
      }
    });
  };

  return (
    <div className="admin-container">
      <form
        method="post"
        encType="multipart/form-data"
        onSubmit={productHandler}
      >
        <div className="admin-items-wrap">
          <div className="admin-items">
            <span>상품 분류</span>
            <div className="admin-item">
              <table>
                <tbody>
                  <tr>
                    <td>성별 분류</td>
                    <td>
                      <select
                        value={pGender}
                        onChange={(e) => setPGender(e.target.value)}
                      >
                        <option>선택하세요</option>
                        <option>MEN</option>
                        <option>WOMEN</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>카테고리 분류</td>
                    <td>
                      <select
                        value={pCaregory}
                        onChange={(e) => setPCaregory(e.target.value)}
                      >
                        <option>선택하세요</option>
                        <option>상의</option>
                        <option>하의</option>
                        <option>기타</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="admin-items">
            <span>상품 입력</span>
            <div className="admin-item">
              <table>
                <tbody>
                  <tr>
                    <td>상품명</td>
                    <td>
                      <input
                        type="text"
                        value={pName}
                        onChange={(e) => setPName(e.target.value)}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>상품 설명</td>
                    <td>
                      <input
                        type="text"
                        value={pContent}
                        onChange={(e) => setPContent(e.target.value)}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>상품 가격</td>
                    <td>
                      <input
                        type="text"
                        value={pPrice}
                        onChange={(e) => setPPrice(e.target.value)}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>상품 재고</td>
                    <td>
                      <input
                        type="text"
                        value={pStock}
                        onChange={(e) => setPStock(e.target.value)}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="admin-items">
            <span>상품 이미지</span>
            <div className="admin-item">
              <table>
                <tbody>
                  <tr>
                    <td>상품 대표 이미지</td>
                    <td>
                      <input
                        name="pImage1"
                        onChange={(e) => setPImage1(e.target.files[0])}
                        type="file"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>이미지1</td>
                    <td>
                      <input
                        type="file"
                        // onChange={(e) => setPImage2(e.target.files[0])}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>이미지2</td>
                    <td>
                      <input
                        type="file"
                        // onChange={(e) => setPImage3(e.target.files[0])}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="admin-prodUp-btn">
          <button type="button">
            <a href="/admin/products">취소</a>
          </button>
          <button type="submit">등록</button>
        </div>
      </form>
    </div>
  );
}

export default AdminProductsUpload;
