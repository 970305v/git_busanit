import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminProductsUpload.css";
import { Link, useParams } from "react-router-dom";

function AdminProductsUpload() {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [pGender, setPGender] = useState("");
  const [pCaregory, setPCaregory] = useState("");
  const [pName, setPName] = useState("");
  const [pStock, setPStock] = useState(0);
  const [pPrice, setPPrice] = useState(0);
  const [imageLength, setImageLength] = useState("");
  const [pImage, setPImage] = useState("");
  const [pImage1, setPImage1] = useState("");
  const [pImage2, setPImage2] = useState("");
  const [pImage3, setPImage3] = useState("");
  const [pContent, setPContent] = useState("");
  const [showImages, setShowImages] = useState([]);

  async function getProductInfo() {
    await axios.get("/product/edit/" + id).then((response) => {
      if (response.data.status === 201) {
        setProduct(response.data.result[0]);
      } else {
        window.alert("상품 불러오기를 실패했습니다.");
      }
    });
  }

  useEffect(() => {
    getProductInfo();
  }, []);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < 3; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    setShowImages(imageUrlLists);
  };

  console.log(pImage);
  const productHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("pGender", pGender);
    formData.append("pCaregory", pCaregory);
    formData.append("pName", pName);
    formData.append("pStock", pStock);
    formData.append("pPrice", pPrice);
    formData.append("pImage", pImage[0]);
    formData.append("pImage", pImage[1]);
    formData.append("pImage", pImage[2]);
    // formData.append("pImage", pImage1);
    // formData.append("pImage", pImage2);
    // formData.append("pImage", pImage3);
    formData.append("pContent", pContent);
    if (imageLength != 3) {
      alert("상품이미지는 3개 선택해주세요");
      return false;
    }
    await axios
      .post(`/product/edit/${id}`, { id, formData })
      .then((response) => {
        if (response.data.status === 201) {
          window.alert(response.data.msg);
        } else {
          window.alert("상품 수정에 실패했습니다.");
        }
      });
  };

  return (
    <div className="admin-container">
      <h1>상품 수정</h1>
      <form
        method="post"
        encType="multipart/form-data"
        onSubmit={productHandler}
      >
        <div className="admin-table-wrap">
          <div className="admin-items-wrap">
            <div className="admin-items">
              <span>상품 분류</span>
              <div className="admin-item">
                <table className="apu-tb-top">
                  <tbody>
                    <tr>
                      <td>성별 분류</td>
                      <td>
                        <select
                          defaultValue={product.pGender}
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
                          defaultValue={product.pCaregory}
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
                <table className="apu-tb-center">
                  <tbody>
                    <tr>
                      <td>상품명</td>
                      <td>
                        <input
                          type="text"
                          defaultValue={product.pName}
                          onChange={(e) => setPName(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>상품 설명</td>
                      <td>
                        <textarea
                          defaultValue={product.pContent}
                          onChange={(e) => setPContent(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>상품 가격</td>
                      <td>
                        <input
                          type="text"
                          defaultValue={product.pPrice}
                          onChange={(e) => setPPrice(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>상품 재고</td>
                      <td>
                        <input
                          type="text"
                          defaultValue={product.pStock}
                          onChange={(e) => setPStock(e.target.value)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="admin-items">
              <span>상품 이미지</span>
              <div className="admin-item">
                <table className="apu-tb-bottom">
                  <tbody>
                    <tr>
                      <td>상품 이미지</td>
                      <td>
                        <input
                          name="pImage"
                          onChange={(e) => {
                            setImageLength(e.target.files.length);
                            setPImage(e.target.files);
                            handleAddImages(e);
                          }}
                          type="file"
                          accept="image/jpg,image/png,image/jpeg,image/gif"
                          multiple
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="prevImg">
                  <p>
                    수정 전<br />
                    이미지 파일
                  </p>
                  <img src={`../../../${product.pImage1}`}></img>
                  <img src={`../../../${product.pImage2}`}></img>
                  <img src={`../../../${product.pImage3}`}></img>
                </div>
                <div className="prevImg">
                  <p>
                    수정 후<br />
                    이미지 파일
                  </p>
                  {showImages.map((image, id) => (
                    <div key={id}>
                      <img src={image} alt={`${image}-${id}`} />
                    </div>
                  ))}
                </div>
                <div className="prevImg">
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    새로운 이미지를 선택 안할 시 기존 이미지로 유지됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="admin-prodUp-btn">
          <button type="button">
            <Link to="/admin/products">취소</Link>
          </button>
          <button type="submit">수정</button>
        </div>
      </form>
    </div>
  );
}

export default AdminProductsUpload;
