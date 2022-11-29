import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Order.css";

function Order() {
  const idx = localStorage.getItem("idx");
  const [orderInfo, setOrderInfo] = useState([]);
  const [ordererInfo, setOrdererInfo] = useState([]);
  const [oInfo, setOInfo] = useState("");
  const [checkItems, setCheckItems] = useState([]);
  const data = [{ id: 1 }, { id: 2 }];

  let totalPrice = 0;
  for (let i = 1; i < orderInfo.length; i++) {
    totalPrice = orderInfo[i].cQuantity * orderInfo[i].pPrice;
  }
  async function getProducts() {
    await axios.get("/order/" + idx).then((response) => {
      if (response.data.status === 201) {
        setOrderInfo(response.data.result);
        setOrdererInfo(response.data.result[0]);
        setOInfo(response.data.result[0]);
        console.log(response);
      } else {
        window.alert("Failed.");
      }
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const [oPoint, setOPoint] = useState("0");
  const [oPrice, setOPrice] = useState("0");
  const [oPayment, setOPayment] = useState("무통장입금");
  const count = orderInfo.length;
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

  const onEditChang = (e) => {
    setOInfo({ ...oInfo, [e.target.name]: e.target.value });
  };

  const orderHandler = async (e) => {
    e.preventDefault();
    const data = {
      oInfo,
      oPoint,
      oPayment,
      oPrice,
      count,
      oQuantity,
      pid,
      pname,
      idx,
    };
    if (checkItems.length < 2) {
      alert("동의 항목 체크해주세요.");
      return false;
    }
    if (oInfo.mName == "") {
      alert("배송지 받는 사람의 이름을 입력해주세요.");
      return false;
    }
    if (oInfo.mPostnum == "") {
      alert("배송지 주소의 우편번호를 입력해주세요.");
      return false;
    }
    if (oInfo.mAddr1 == "") {
      alert("배송지 주소의 기본 주소를 입력해주세요.");
      return false;
    }
    if (oInfo.mAddr2 == "") {
      alert("배송지 주소의 상세주소를 입력해주세요.");
      return false;
    }
    if (oInfo.oPayment_bank == null || oInfo.oPayment_bank == "") {
      alert("무통장입금할 은행을 선택해주세요.");
      return false;
    }
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
                    return (
                      <div className="orderProdInfo">
                        <img src={`../${product.pImage1}`} />
                        <div className="orderProdContents">
                          <p>{product.pname}</p>
                          <p className="prodCount">{product.cQuantity}개</p>
                          <p className="prodPrice">{totalPrice}원</p>
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
              <input
                type="text"
                placeholder="이름"
                value={ordererInfo.mName}
                readOnly
              />
              <input
                type="text"
                placeholder="연락처"
                value={ordererInfo.mPhone}
                readOnly
              />
            </div>
            <div className="orderer-bottom">
              <input
                type="text"
                placeholder="이메일"
                value={ordererInfo.mEmail}
                readOnly
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
                placeholder="이름"
                value={oInfo.mName || ""}
                name="mName"
                onChange={onEditChang}
              />
              <input
                type="text"
                placeholder="우편번호"
                value={oInfo.mPostnum}
                name="mPostnum"
                onChange={onEditChang}
              />
              <input
                type="text"
                placeholder="주소1"
                value={oInfo.mAddr1}
                name="mAddr1"
                onChange={onEditChang}
              />
              <input
                type="text"
                placeholder="주소2"
                value={oInfo.mAddr2}
                name="mAddr2"
                onChange={onEditChang}
              />
              <input
                type="text"
                placeholder="연락처"
                value={oInfo.mPhone}
                name="mPhone"
                onChange={onEditChang}
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
              <span>{ordererInfo.mPoint}Point</span>
            </div>
            <div className="payInput">
              <input
                type="text"
                placeholder="0"
                onChange={(e) => setOPoint(e.target.value)}
              />
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
                  {oPoint != "0" ? <p>포인트</p> : null}
                </div>
                <div className="orderTop-right">
                  <p>{totalPrice}원</p>
                  <p>{totalPrice > 50000 ? "0원" : "3,000원"}</p>
                  {oPoint != 0 ? <p>{oPoint}원</p> : null}
                </div>
              </div>
              <div className="order-divLine"></div>
              <div className="order-bottom">
                <div className="orderBottom-left">
                  <p>총 주문금액</p>
                </div>
                <div className="orderBottom-right">
                  <span>
                    {oPoint != "0"
                      ? totalPrice > 50000
                        ? { totalPrice } - { oPoint }
                        : `${totalPrice + 3000 - oPoint}`
                      : totalPrice > 50000
                      ? { totalPrice }
                      : `${totalPrice + 3000}`}
                    원
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="Info-box">
            <div className="infoTitle">
              <span>결제수단</span>
            </div>
            <div className="payCheckbox">
              <input type="radio" checked readOnly />
              <span>무통장입금</span>
            </div>
            <select
              className="payBank"
              name="oPayment_bank"
              onChange={onEditChang}
            >
              <option value="">선택하세요</option>
              <option value="부산은행">부산은행</option>
              <option value="신한은행">신한은행</option>
              <option value="우리은행">우리은행</option>
              <option value="농협은행">농협은행</option>
            </select>
            <div className="payInput">
              <input
                type="text"
                placeholder="입금자명"
                value={oInfo.mName}
                name="oPayment_name"
                onChange={onEditChang}
              />
            </div>
          </div>
          <div className="Info-box">
            <div className="agreeTtem">
              <input
                type="checkbox"
                name="selcetAll"
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={checkItems.length === data.length ? true : false}
              />
              <span>전체 동의</span>
            </div>
            <div className="agreeTtem">
              <span> └ </span>
              <input
                type="checkbox"
                onChange={(e) => handleSingleCheck(e.target.checked, 1)}
                checked={checkItems.includes(data[0].id) ? true : false}
              />
              <span>개인정보 수집 및 이용 동의</span>
            </div>
            <div className="agreeTtem">
              <span> └ </span>
              <input
                type="checkbox"
                onChange={(e) => handleSingleCheck(e.target.checked, 2)}
                checked={checkItems.includes(data[1].id) ? true : false}
              />
              <span>구매조건 확인 및 결제진행에 동의</span>
            </div>
            <button
              type="submit"
              value={
                oPoint != "0원"
                  ? totalPrice > 50000
                    ? { totalPrice } - { oPoint }
                    : `${totalPrice + 3000 - oPoint}`
                  : totalPrice > 50000
                  ? { totalPrice }
                  : `${totalPrice + 3000}`
              }
              onClick={(e) => {
                setOPrice(e.target.value);
              }}
            >
              결제하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Order;
