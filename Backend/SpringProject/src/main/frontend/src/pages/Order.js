import "../styles/Order.css";

function Order() {
  return (
    <div className="orderWrap">
      <h1>결제하기</h1>
      <form type="post">
        <div className="orderLeft">
          <div className="Info-box">
            <div className="infoTitle">
              <span>주문 상품 정보</span>
            </div>
            <div className="orderProd">
              {/* 구매 상품정보 반복 */}
              <div className="orderProdInfo">
                <img src="https://via.placeholder.com/70" />
                <div className="orderProdContents">
                  <p>상품명</p>
                  <p className="prodCount">개수</p>
                  <p className="prodPrice">가격</p>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          <div className="Info-box">
            <div className="infoTitle">
              <span>주문자 정보</span>
            </div>
            <div className="orderer-top">
              <input type="text" placeholder="이름" />
              <input type="text" placeholder="연락처" />
            </div>
            <div className="orderer-bottom">
              <input type="text" placeholder="이메일"></input>
            </div>
          </div>
          <div className="Info-box">
            <div className="infoTitle">
              <span>배송지</span>
            </div>
            <div className="addressInput">
              <input type="text" placeholder="이름(미입력시 주문자명)" />
              <input type="text" placeholder="우편번호" />
              <input type="text" placeholder="주소1" />
              <input type="text" placeholder="주소2" />
              <input type="text" placeholder="연락처(미입력시 주문자 연락처)" />
            </div>
          </div>
        </div>
        <div className="orderRight">
          <div className="Info-box">
            <div className="infoTitle">
              <span>주문 요약</span>
            </div>
            <div className="order">
              <div className="order-top">
                <div className="orderTop-left">
                  <p>상품가격</p>
                  <p>배송비</p>
                </div>
                <div className="orderTop-right">
                  <p>100000원</p>
                  <p>3000원</p>
                </div>
              </div>
              <div className="order-divLine"></div>
              <div className="order-bottom">
                <div className="orderBottom-left">
                  <p>총 주문금액</p>
                </div>
                <div className="orderBottom-right">
                  <p>103000원</p>
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
              <input type="checkbox" name="selcetAll" />
              <span>전체 동의</span>
            </div>
            <div className="agreeTtem">
              <span> └ </span>
              <input type="checkbox" />
              <span>개인정보 수집 및 이용 동의</span>
            </div>
            <div className="agreeTtem">
              <span> └ </span>
              <input type="checkbox" />
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
