import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Order.css";

function Order() {
  const navigate = useNavigate();
  const idx = localStorage.getItem("idx");
  const [orderInfo, setOrderInfo] = useState([]);
  const [ordererInfo, setOrdererInfo] = useState([]);
  const [oInfo, setOInfo] = useState("");
  const [checkItems, setCheckItems] = useState([]);
  const data = [{ id: 1 }, { id: 2 }];

  let totalPrice = 0;
  let countPrice = [];
  for (let i = 0; i < orderInfo.length; i++) {
    countPrice.push(orderInfo[i].cQuantity * orderInfo[i].pPrice);
  }
  countPrice.forEach((price) => {
    totalPrice += price;
  });

  const location = useLocation();

  async function getProducts() {
    if (location.state != null) {
      const cid = location.state.cid;
      await axios.get("/order/" + idx + "?cid=" + cid).then((response) => {
        if (response.data.status === 201) {
          setOrderInfo(response.data.result);
          setOrdererInfo(response.data.result[0]);
          setOInfo(response.data.result[0]);
        } else {
          window.alert("Failed.");
        }
      });
    } else {
      await axios.get("/orderAll/" + idx).then((response) => {
        if (response.data.status === 201) {
          setOrderInfo(response.data.result);
          setOrdererInfo(response.data.result[0]);
          setOInfo(response.data.result[0]);
        } else {
          window.alert("Failed.");
        }
      });
    }
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

  const [oPoint, setOPoint] = useState(0);
  const [oPrice, setOPrice] = useState(0);
  const [oPayment, setOPayment] = useState("???????????????");
  const count = orderInfo.length;
  const [oQuantity, setOQuantity] = useState([]);
  for (let i = 0; i < orderInfo.length; i++) {
    oQuantity.push(orderInfo[i].cQuantity);
  }
  const [pid, setPid] = useState([]);
  for (let i = 0; i < orderInfo.length; i++) {
    pid.push(orderInfo[i].pId);
  }
  const [pname, setPname] = useState([]);
  for (let i = 0; i < orderInfo.length; i++) {
    pname.push(orderInfo[i].pName);
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
      alert("?????? ?????? ??????????????????.");
      return false;
    }
    if (oInfo.mName == "") {
      alert("????????? ?????? ????????? ????????? ??????????????????.");
      return false;
    }
    if (oInfo.mPostnum == "") {
      alert("????????? ????????? ??????????????? ??????????????????.");
      return false;
    }
    if (oInfo.mAddr1 == "") {
      alert("????????? ????????? ?????? ????????? ??????????????????.");
      return false;
    }
    if (oInfo.mAddr2 == "") {
      alert("????????? ????????? ??????????????? ??????????????????.");
      return false;
    }
    if (oInfo.oPayment_bank == null || oInfo.oPayment_bank == "") {
      alert("?????????????????? ????????? ??????????????????.");
      return false;
    }
    await axios.post("/order/pay", data).then((response) => {
      if (response.data.status === 201) {
        window.alert("????????????");
        window.location.assign("/");
      } else {
        window.alert("?????? ????????? ??????????????????.");
      }
    });
  };

  return (
    <div className="orderWrap">
      <h1>????????????</h1>
      <form type="post" onSubmit={orderHandler}>
        <div className="orderLeft">
          <div className="Info-box">
            <div className="infoTitle">
              <span>?????? ?????? ??????</span>
            </div>
            <div className="orderProd">
              {orderInfo.length > 0
                ? orderInfo.map((product, key) => {
                    return (
                      <div className="orderProdInfo" key={key}>
                        <img src={`../${product.pImage1}`} />
                        <div className="orderProdContents">
                          <p>{product.pname}</p>
                          <p className="prodCount">{product.cQuantity}???</p>
                          <p className="prodPrice">
                            {product.pPrice * product.cQuantity}???
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
              <span>????????? ??????</span>
            </div>
            <div className="orderer-top">
              <input
                type="text"
                placeholder="??????"
                defaultValue={ordererInfo.mName}
                readOnly
              />
              <input
                type="text"
                placeholder="?????????"
                defaultValue={ordererInfo.mPhone}
                readOnly
              />
            </div>
            <div className="orderer-bottom">
              <input
                type="text"
                placeholder="?????????"
                defaultValue={ordererInfo.mEmail}
                readOnly
              ></input>
            </div>
          </div>
          <div className="Info-box">
            <div className="infoTitle">
              <span>?????????</span>
            </div>
            <div className="addressInput">
              <input
                type="text"
                placeholder="??????"
                defaultValue={oInfo.mName || ""}
                name="mName"
                onChange={onEditChang}
              />
              <input
                type="text"
                placeholder="????????????"
                defaultValue={oInfo.mPostnum}
                name="mPostnum"
                onChange={onEditChang}
              />
              <input
                type="text"
                placeholder="??????1"
                defaultValue={oInfo.mAddr1}
                name="mAddr1"
                onChange={onEditChang}
              />
              <input
                type="text"
                placeholder="??????2"
                defaultValue={oInfo.mAddr2}
                name="mAddr2"
                onChange={onEditChang}
              />
              <input
                type="text"
                placeholder="?????????"
                defaultValue={oInfo.mPhone}
                name="mPhone"
                onChange={onEditChang}
              />
            </div>
          </div>
        </div>
        <div className="orderRight">
          <div className="Info-box">
            <div className="infoTitle">
              <span>?????????</span>
            </div>
            <div className="payInput">
              <span>??????</span>
              <span>{ordererInfo.mPoint}Point</span>
            </div>
            <div className="payInput">
              <input
                type="int"
                placeholder="0"
                onChange={(e) => setOPoint(e.target.value)}
              />
            </div>
          </div>
          <div className="Info-box">
            <div className="infoTitle">
              <span>?????? ??????</span>
            </div>
            <div className="order">
              <div className="order-top">
                <div className="orderTop-left">
                  <p>????????????</p>
                  <p>?????????</p>
                  {oPoint != 0 ? <p>?????????</p> : null}
                </div>
                <div className="orderTop-right">
                  <p>{totalPrice}???</p>
                  <p>{totalPrice > 50000 ? "0???" : "3,000???"}</p>
                  {oPoint != 0 ? <p>{oPoint}???</p> : null}
                </div>
              </div>
              <div className="order-divLine"></div>
              <div className="order-bottom">
                <div className="orderBottom-left">
                  <p>??? ????????????</p>
                </div>
                <div className="orderBottom-right">
                  {oPoint != 0 ? (
                    totalPrice > 50000 ? (
                      <span>{totalPrice - oPoint} ???</span>
                    ) : (
                      <span>{totalPrice - oPoint + 3000} ???</span>
                    )
                  ) : totalPrice > 50000 ? (
                    <span>{totalPrice} ???</span>
                  ) : (
                    <span>{totalPrice + 3000} ???</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="Info-box">
            <div className="infoTitle">
              <span>????????????</span>
            </div>
            <div className="payCheckbox">
              <input type="radio" checked readOnly />
              <span>???????????????</span>
            </div>
            <select
              className="payBank"
              name="oPayment_bank"
              onChange={onEditChang}
            >
              <option value="">???????????????</option>
              <option value="????????????">????????????</option>
              <option value="????????????">????????????</option>
              <option value="????????????">????????????</option>
              <option value="????????????">????????????</option>
            </select>
            <div className="payInput">
              <input
                type="text"
                placeholder="????????????"
                defaultValue={oInfo.mName}
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
              <span>?????? ??????</span>
            </div>
            <div className="agreeTtem">
              <span> ??? </span>
              <input
                type="checkbox"
                onChange={(e) => handleSingleCheck(e.target.checked, 1)}
                checked={checkItems.includes(data[0].id) ? true : false}
              />
              <span>???????????? ?????? ??? ?????? ??????</span>
            </div>
            <div className="agreeTtem">
              <span> ??? </span>
              <input
                type="checkbox"
                onChange={(e) => handleSingleCheck(e.target.checked, 2)}
                checked={checkItems.includes(data[1].id) ? true : false}
              />
              <span>???????????? ?????? ??? ??????????????? ??????</span>
            </div>
            <button type="submit" onClick={() => setOPrice(totalPrice)}>
              ????????????
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Order;
