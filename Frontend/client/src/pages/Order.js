import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Order.css";
import DaumPostcode from "react-daum-postcode";

function Order() {
  const idx = localStorage.getItem("idx");
  const [orderInfo, setOrderInfo] = useState([]);
  const [ordererInfo, setOrdererInfo] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  let totalPrice = 0;

  async function getProducts() {
    await axios
      .all([axios.get("/order/" + idx), axios.get("/buy/" + idx)])
      .then((response) => {
        if (response.data.status === 201) {
          setOrderInfo(response.data.result);
          setOrdererInfo(response.data.result[0]);
          console.log(orderInfo);
          console.log(ordererInfo);
        } else {
          window.alert("Failed.");
        }
      });
  }

  useEffect(() => {
    getProducts();
  }, []);
  // 제품 한개 구매하는거 하기 orders orderdetails에 담아둠 *****************

  const selectAll = (checked) => {
    //전체 선택
    setIsAllChecked(!isAllChecked);
    if (checked) {
      setCheckedItems([...checkedItems, "provision", "privacy"]);
    } else if (
      (!checked && checkedItems.includes("provision")) ||
      (!checked && checkedItems.includes("privacy"))
    ) {
      setCheckedItems([]);
    }
  };

  const agreeHandler = (checked, value) => {
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else if (!checked && checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((el) => el !== value));
    }
  };

  useEffect(() => {
    if (checkedItems.length >= 2) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [checkedItems]);

  const [oName, setOName] = useState("");
  const [oPostnum, setOPostnum] = useState("");
  const [oAddr1, setOAddr1] = useState("");
  const [oAddr2, setOAddr2] = useState("");
  const [openPost, setOpenPost] = useState(false);
  const [oPhone, setOPhone] = useState("");
  const [oPoint, setOPoint] = useState(0);
  const [oPrice, setOPrice] = useState(totalPrice);
  const [oPayment, setOPayment] = useState("무통장입금");
  const [count, setCount] = useState([]);

  const phoneHandler = (e) => {
    // 전화번호 정규식
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setOPhone(e.target.value);
    }
  };
  const handle = {
    // 카카오 주소 api
    selectAddress: (data) => {
      setOPostnum(data.zonecode);
      setOAddr1(data.address);
      setOpenPost(false);
    },
    addressHandler: () => {
      setOpenPost((current) => !current);
    },
  };
  useEffect(() => {
    if (oPhone.length === 10) {
      setOPhone(oPhone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (oPhone.length === 13) {
      setOPhone(
        oPhone.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [oPhone]);

  for (let i = 0; i < orderInfo.length; i++) {
    count.push(i);
  }
  const [oQuantity, setOQuantity] = useState([]);
  for (let i = 0; i < orderInfo.length; i++) {
    oQuantity.push(orderInfo[i].cQuantity);
  }
  const [pid, setPid] = useState([]);
  for (let i = 0; i < orderInfo.length; i++) {
    pid.push(orderInfo[i].pid);
  }
  const [pname, setPname] = useState([]);
  for (let i = 0; i < orderInfo.length; i++) {
    pname.push(orderInfo[i].pname);
  }

  const orderHandler = async (e) => {
    e.preventDefault();
    const data = {
      oName,
      oPostnum,
      oAddr1,
      oAddr2,
      oPhone,
      oPoint,
      oPrice,
      oPayment,
      count,
      oQuantity,
      pid,
      pname,
      idx,
    };
    await axios.post("/order/pay", data).then((response) => {
      if (response.data.status === 201) {
        window.alert("주문완료");
      } else {
        window.alert("상품 등록에 실패했습니다.");
      }
    });
  };

  return (
    <div className="orderWrap">
      <h1>결제하기</h1>
      <form type="post" onSubmit={orderHandler}>
        <div className="orderLeft">
          <div className="Info-box">
            <div className="infoTitle">
              <span>주문 상품 정보</span>
            </div>
            <div className="orderProd">
              {orderInfo.length > 0
                ? orderInfo.map((product, key) => {
                    totalPrice += product.pPrice * product.cQuantity;
                    return (
                      <div className="orderProdInfo">
                        <img src={`../${product.pImage1}`} />
                        <div className="orderProdContents">
                          <p>{product.pname}</p>
                          <p className="prodCount">{product.cQuantity}개</p>
                          <p className="prodPrice">
                            {product.pPrice * product.cQuantity}원
                          </p>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="Info-box">
            <div className="infoTitle">
              <span>주문자 정보</span>
            </div>
            <div className="orderer-top">
              <input type="text" placeholder="이름" value={ordererInfo.mName} />
              <input
                type="text"
                placeholder="연락처"
                value={ordererInfo.mPhone}
              />
            </div>
            <div className="orderer-bottom">
              <input
                type="text"
                placeholder="이메일"
                value={ordererInfo.mEmail}
              ></input>
            </div>
          </div>
          <div className="Info-box">
            <div className="infoTitle">
              <span>배송지</span>
            </div>
            <div className="addressInput">
              <input
                type="text"
                placeholder="이름(미입력시 주문자명)"
                value={oName}
                onChange={(e) => setOName(e.target.value)}
              />
              <input
                type="text"
                placeholder="우편번호"
                value={oPostnum}
                readOnly
                onChange={(e) => setOPostnum(e.target.value)}
              />
              <input
                type="button"
                className="findPostcode"
                value="우편번호 찾기"
                onClick={handle.addressHandler}
              />
              {openPost && (
                <DaumPostcode
                  onComplete={handle.selectAddress}
                  autoClose={false}
                />
              )}
              <input
                type="text"
                placeholder="주소1"
                value={oAddr1}
                readOnly
                onChange={(e) => setOAddr1(e.target.value)}
              />
              <input
                type="text"
                placeholder="주소2"
                value={oAddr2}
                onChange={(e) => setOAddr2(e.target.value)}
              />
              <input
                type="text"
                placeholder="연락처(미입력시 주문자 연락처)"
                value={oPhone}
                onChange={phoneHandler}
              />
            </div>
          </div>
        </div>
        <div className="orderRight">
          <div className="Info-box">
            <div className="infoTitle">
              <span>포인트</span>
            </div>
            <div className="payInput">
              <span>보유</span>
              <span style={{ color: "#a7a7a7" }}>1000원</span>
            </div>
            <div className="payInput">
              <input type="text" onChange={(e) => setOPoint(e.target.value)} />
            </div>
          </div>
          <div className="Info-box">
            <div className="infoTitle">
              <span>주문 요약</span>
            </div>
            <div className="order">
              <div className="order-top">
                <div className="orderTop-left">
                  <p>상품가격</p>
                  <p>배송비</p>
                  {oPoint != 0 ? <p>포인트</p> : null}
                </div>
                <div className="orderTop-right">
                  <p>{totalPrice}원</p>
                  <p>{totalPrice > 50000 ? "0원" : "3,000원"}</p>
                  {oPoint != 0 ? <p>{oPoint}</p> : null}
                </div>
              </div>
              <div className="order-divLine"></div>
              <div className="order-bottom">
                <div className="orderBottom-left">
                  <p>총 주문금액</p>
                </div>
                <div className="orderBottom-right">
                  <p>
                    {oPoint != 0
                      ? totalPrice > 50000
                        ? { totalPrice } - { oPoint }
                        : `${totalPrice + 3000 - 1000}`
                      : totalPrice > 50000
                      ? { totalPrice }
                      : `${totalPrice + 3000}`}
                    원
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Info-box">
            <div className="infoTitle">
              <span>결제수단</span>
            </div>
            <div className="payCheckbox">
              <input
                type="radio"
                checked
                readOnly
                value={oPayment}
                onChange={(e) => setOPayment(e.target.value)}
              />
              <span>무통장입금</span>
            </div>
            <select className="payBank">
              <option>선택하세요</option>
              <option>부산은행</option>
            </select>
            <div className="payInput">
              <input type="text" placeholder="입금자명(미입력시 주문자명)" />
            </div>
          </div>
          <div className="Info-box">
            <div className="agreeTtem">
              <input
                type="checkbox"
                name="selcetAll"
                onChange={(e) => {
                  selectAll(e.currentTarget.checked);
                }}
                checked={isAllChecked}
              />
              <span>전체 동의</span>
            </div>
            <div className="agreeTtem">
              <span> └ </span>
              <input
                type="checkbox"
                onChange={(e) =>
                  agreeHandler(e.currentTarget.checked, e.target.value)
                }
                checked={checkedItems.includes("provision") ? true : false}
              />
              <span>개인정보 수집 및 이용 동의</span>
            </div>
            <div className="agreeTtem">
              <span> └ </span>
              <input
                type="checkbox"
                onChange={(e) =>
                  agreeHandler(e.currentTarget.checked, e.target.value)
                }
                checked={checkedItems.includes("privacy") ? true : false}
              />
              <span>구매조건 확인 및 결제진행에 동의</span>
            </div>
            <button type="submit">결제하기</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Order;
