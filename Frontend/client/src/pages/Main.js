import "../styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <div>
      <div className="banner">
        <input type="radio" name="slide" id="slide01" checked></input>
        <input type="radio" name="slide" id="slide02"></input>
        <input type="radio" name="slide" id="slide03"></input>
        <div className="slidewrap">
          <ul className="slidelist">
            <li>
              <label for="slide03" className="left">
                <FontAwesomeIcon icon={faAngleLeft} />
              </label>
              <img
                src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/default/image_1598287922652_2500.jpg"
                alt="k"
              />
              <label for="slide02" className="right">
                <FontAwesomeIcon icon={faAngleRight} />
              </label>
            </li>
            <li>
              <label for="slide01" className="left">
                <FontAwesomeIcon icon={faAngleLeft} />
              </label>
              <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/default/image_1598284421159_2500.jpg" />
              <label for="slide03" className="right">
                <FontAwesomeIcon icon={faAngleRight} />
              </label>
            </li>
            <li>
              <label for="slide02" className="left">
                <FontAwesomeIcon icon={faAngleLeft} />
              </label>
              <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/25991/default/image_1520486178371_2500.jpg" />
              <label for="slide01" className="right">
                <FontAwesomeIcon icon={faAngleRight} />
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="about">
        <h1>LIFE FOR US, LIFE FOR EARTH.</h1>
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
              <div className="ProdItem">
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
                </a>
                <p>상품명</p>
                <span>가격</span>
              </div>
              <div className="ProdItem">
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
                </a>
                <p>상품명</p>
                <span>가격</span>
              </div>
              <div className="ProdItem">
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
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
          <h1>MEN</h1>
          <div className="prodBanner">
            <div>
              <FontAwesomeIcon icon={faAngleLeft} className="prodLeft" />
            </div>
            <div className="ProdItems">
              <div className="ProdItem">
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
                </a>
                <p>상품명</p>
                <span>가격</span>
              </div>
              <div className="ProdItem">
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
                </a>
                <p>상품명</p>
                <span>가격</span>
              </div>
              <div className="ProdItem">
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
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
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
                </a>
                <p>상품명</p>
                <span>가격</span>
              </div>
              <div className="ProdItem">
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
                </a>
                <p>상품명</p>
                <span>가격</span>
              </div>
              <div className="ProdItem">
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
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
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
                </a>
                <p>리뷰글</p>
              </div>
              <div className="reviewItem">
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
                </a>
                <p>리뷰글</p>
              </div>
              <div className="reviewItem">
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
                </a>
                <p>리뷰글</p>
              </div>
              <div className="reviewItem">
                <a href="#">
                  <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/137352/product/image_1598251564779_1000.jpg" />
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
