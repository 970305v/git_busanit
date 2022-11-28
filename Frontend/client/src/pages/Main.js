import "../styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

function Main() {
  const [allProducts, setAllProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [rows, setRows] = useState(0); //전체 게시물 수
  const [page, setPage] = useState(0); //현재 페이지
  const [pages, setPages] = useState(0); //전체 페이지
  const [offset, setOffset] = useState(3); //한 페이지에 표시할 데이터 수
  const caregory = "all";

  async function getAllProducts() {
    await axios
      .get(
        "/products/all?caregory=" +
          caregory +
          "&page=" +
          page +
          "&offset=" +
          offset
      )
      .then((response) => {
        if (response.data.status === 201) {
          setAllProducts(response.data.result);
          setPage(response.data.page);
          setPages(response.data.totalPageNumber);
          setRows(response.data.totalRows);
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
  }, [page]);

  const changePage = ({ selected }) => {
    setPage(selected);
  };
  const prevPage = () => {
    setPage(-1);
  };
  const nextPage = () => {
    setPage(+1);
  };

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
              <img alt="img" src="./assets/img/main_banner2.jpg" />
              <label htmlFor="slide02" className="right">
                <FontAwesomeIcon icon={faAngleRight} />
              </label>
            </li>
            <li>
              <label htmlFor="slide01" className="left">
                <FontAwesomeIcon icon={faAngleLeft} />
              </label>
              <img alt="img" src="./assets/img/main_banner1.jpg" />
              <label htmlFor="slide03" className="right">
                <FontAwesomeIcon icon={faAngleRight} />
              </label>
            </li>
            <li>
              <label htmlFor="slide02" className="left">
                <FontAwesomeIcon icon={faAngleLeft} />
              </label>
              <img alt="img" src="./assets/img/main_banner3.jpg" />
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
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="prodLeft"
                onClick={prevPage}
              />
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
                          {allProduct.pPrice}원
                        </p>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="product-box">
                  <img src="./assets/img/img_null.png" />
                  <p>
                    <strong>등록된 상품이 없습니다.</strong>
                  </p>
                </div>
              )}
            </div>
            <div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="prodRight"
                onClick={nextPage}
              />
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
                          {menProduct.pPrice}원
                        </p>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="product-box">
                  <img src="./assets/img/img_null.png"></img>
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
                          {womenProduct.pPrice}원
                        </p>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="product-box">
                  <img src="./assets/img/img_null.png"></img>
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
      </div>
    </div>
  );
}

export default Main;
