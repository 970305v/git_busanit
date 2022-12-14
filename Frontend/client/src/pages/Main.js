import "../styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const [allProducts, setAllProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const caregory = "all";

  async function getAllProducts() {
    await axios.get("/products/all?caregory=" + caregory).then((response) => {
      if (response.data.status === 201) {
        setAllProducts(response.data.result);
      } else {
        window.alert("Failed.");
      }
    });
  }

  async function getMenProducts() {
    await axios.get("/products/men?caregory=" + caregory).then((response) => {
      if (response.data.status === 201) {
        setMenProducts(response.data.result);
      } else {
        window.alert("Failed.");
      }
    });
  }

  async function getWomenProducts() {
    await axios.get("/products/women?caregory=" + caregory).then((response) => {
      if (response.data.status === 201) {
        setWomenProducts(response.data.result);
      } else {
        window.alert("Failed.");
      }
    });
  }

  useEffect(() => {
    getAllProducts();
    getMenProducts();
    getWomenProducts();
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
          ????????????????????? ?????? ?????? ???????????? ??????????????? ????????? ????????? ??????
          ?????????, ??? ?????? ????????? ????????? ???????????????.
          <br /> ????????? ????????? ??????, ???????????? ????????? ????????? ????????? ????????? ??????
          ??? ????????????.
          <br /> ?????? ????????? ????????????, ???????????? ???????????? ?????? ???????????? ?????? ??????
          ????????? ???????????????.
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
                      <Link to={`/product/${allProduct.pId}`}>
                        <img src={`../${allProduct.pImage1}`} alt="" />
                        <p>
                          <strong>{allProduct.pName}</strong>
                        </p>
                        <p style={{ color: "#8c8c8c", fontSize: "14px" }}>
                          {allProduct.pPrice}???
                        </p>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="product-box">
                  <img src="https://via.placeholder.com/300.png"></img>
                  <p>
                    <strong>????????? ????????? ????????????.</strong>
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
              {menProducts.length > 0 ? (
                menProducts.map((menProduct, key) => {
                  return (
                    <div className="product-box" key={key}>
                      <Link to={`/product/${menProduct.pId}`}>
                        <img src={`../${menProduct.pImage1}`} alt="" />
                        <p>
                          <strong>{menProduct.pName}</strong>
                        </p>
                        <p style={{ color: "#8c8c8c", fontSize: "14px" }}>
                          {menProduct.pPrice}???
                        </p>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="product-box">
                  <img src="https://via.placeholder.com/300.png"></img>
                  <p>
                    <strong>????????? ????????? ????????????.</strong>
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
          <h1>WOMEN</h1>
          <div className="prodBanner">
            <div>
              <FontAwesomeIcon icon={faAngleLeft} className="prodLeft" />
            </div>
            <div className="ProdItems">
              {womenProducts.length > 0 ? (
                womenProducts.map((womenProduct, key) => {
                  return (
                    <div className="product-box" key={key}>
                      <Link to={`/product/${womenProduct.pId}`}>
                        <img src={`../${womenProduct.pImage1}`} alt="" />
                        <p>
                          <strong>{womenProduct.pName}</strong>
                        </p>
                        <p style={{ color: "#8c8c8c", fontSize: "14px" }}>
                          {womenProduct.pPrice}???
                        </p>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="product-box">
                  <img src="https://via.placeholder.com/300.png"></img>
                  <p>
                    <strong>????????? ????????? ????????????.</strong>
                  </p>
                </div>
              )}
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
