import "../styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const [allProducts, setAllProducts] = useState([]);
  async function getAllProducts() {
    await axios.get("/products/all").then((response) => {
      console.log(response);
      if (response.data.status === 201) {
        setAllProducts(response.data.result);
        console.log(response.data.msg);
      } else {
        window.alert("Failed.");
      }
    });
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <div className="banner">
        <input type="radio" name="slide" id="slide01" checked readOnly></input>
        <input type="radio" name="slide" id="slide02"></input>
        <input type="radio" name="slide" id="slide03"></input>
        <div className="slidewrap">
          <ul className="slidelist">
            <li>
              <label htmlFor="slide03" className="left">
                <FontAwesomeIcon icon={faAngleLeft} />
              </label>
              <img
                alt="img"
                src="https://cdn.imweb.me/thumbnail/20211014/ac9c7e74b7db2.png"
              />
              <label htmlFor="slide02" className="right">
                <FontAwesomeIcon icon={faAngleRight} />
              </label>
            </li>
            <li>
              <label htmlFor="slide01" className="left">
                <FontAwesomeIcon icon={faAngleLeft} />
              </label>
              <img
                alt="img"
                src="https://contents.sixshop.com/thumbnails/uploadedFiles/183003/default/image_1634643350876_2500.jpg"
              />
              <label htmlFor="slide03" className="right">
                <FontAwesomeIcon icon={faAngleRight} />
              </label>
            </li>
            <li>
              <label htmlFor="slide02" className="left">
                <FontAwesomeIcon icon={faAngleLeft} />
              </label>
              <img alt="img" src="https://kangolkorea.com/main/19.jpg" />
              <label htmlFor="slide01" className="right">
                <FontAwesomeIcon icon={faAngleRight} />
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="about">
        <span>LIFE FOR US, LIFE FOR EARTH.</span>
        <p>
          라이프포어스는 모든 제품 라인에는 자연스럽고 따듯한 감성이 담겨
          있으며, 매 시즌 새로운 감성을 전달합니다.
          <br /> 계절에 걸맞는 소재, 실용성에 충실한 디자인 모던한 무드를 느낄
          수 있습니다.
          <br /> 좋은 소재만 사용하여, 엣지있게 떨어지는 핏과 실용성을 모두 담은
          제품을 소개합니다.
        </p>
        <button type="button">
          <a href="/about">ABOUT</a>
        </button>
      </div>
      <div className="productBanners">
        <div className="productBanner">
          <h1>ALL</h1>
          <div className="prodBanner">
            <div>
              <FontAwesomeIcon icon={faAngleLeft} className="prodLeft" />
            </div>
            <div className="ProdItems">
              {allProducts.length > 0 ? (
                allProducts.map((allProduct, key) => {
                  return (
                    <div className="product-box" key={key}>
                      <Link to="/product/:id">
                        <img src={`../${allProduct.pImage1}`} alt="" />
                        <p>
                          <strong>{allProduct.pName}</strong>
                        </p>
                        <p style={{ color: "#8c8c8c", fontSize: "14px" }}>
                          {allProduct.pPrice}원
                        </p>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="product-box">
                  <img src="https://via.placeholder.com/300.png"></img>
                  <p>
                    <strong>등록된 상품이 없습니다.</strong>
                  </p>
                </div>
              )}
            </div>
            <div>
              <FontAwesomeIcon icon={faAngleRight} className="prodRight" />
            </div>
          </div>
        </div>
        <div className="productBanner">
          <h1>MEN</h1>
          <div className="prodBanner">
            <div>
              <FontAwesomeIcon icon={faAngleLeft} className="prodLeft" />
            </div>
            <div className="ProdItems">
              <div className="ProdItem">
                <a href="!#">
                  <img
                    alt="img"
                    src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg"
                  />
                </a>
                <p>상품명</p>
                <span>가격</span>
              </div>
              <div className="ProdItem">
                <a href="!#">
                  <img
                    alt="img"
                    src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg"
                  />
                </a>
                <p>상품명</p>
                <span>가격</span>
              </div>
              <div className="ProdItem">
                <a href="!#">
                  <img
                    alt="img"
                    src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg"
                  />
                </a>
                <p>상품명</p>
                <span>가격</span>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faAngleRight} className="prodRight" />
            </div>
          </div>
        </div>
        <div className="productBanner">
          <h1>WOMEN</h1>
          <div className="prodBanner">
            <div>
              <FontAwesomeIcon icon={faAngleLeft} className="prodLeft" />
            </div>
            <div className="ProdItems">
              <div className="ProdItem">
                <a href="!#">
                  <img
                    alt="img"
                    src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg"
                  />
                </a>
                <p>상품명</p>
                <span>가격</span>
              </div>
              <div className="ProdItem">
                <a href="!#">
                  <img
                    alt="img"
                    src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg"
                  />
                </a>
                <p>상품명</p>
                <span>가격</span>
              </div>
              <div className="ProdItem">
                <a href="!#">
                  <img
                    alt="img"
                    src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg"
                  />
                </a>
                <p>상품명</p>
                <span>가격</span>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faAngleRight} className="prodRight" />
            </div>
          </div>
        </div>
        <div className="reviewBannerWrap">
          <h1>BEST REVIEW</h1>
          <div className="reviewBanner">
            <div>
              <FontAwesomeIcon icon={faAngleLeft} className="prodLeft" />
            </div>
            <div className="reviewItems">
              <div className="reviewItem">
                <a href="!#">
                  <img
                    alt="img"
                    src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg"
                  />
                </a>
                <p>리뷰글</p>
              </div>
              <div className="reviewItem">
                <a href="!#">
                  <img
                    alt="img"
                    src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg"
                  />
                </a>
                <p>리뷰글</p>
              </div>
              <div className="reviewItem">
                <a href="!#">
                  <img
                    alt="img"
                    src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg"
                  />
                </a>
                <p>리뷰글</p>
              </div>
              <div className="reviewItem">
                <a href="!#">
                  <img
                    alt="img"
                    src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg"
                  />
                </a>
                <p>리뷰글</p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faAngleRight} className="prodRight" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
