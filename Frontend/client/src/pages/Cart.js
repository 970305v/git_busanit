import { useState } from "react";
import "../styles/Cart.css";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  function Plus() {
    setQuantity(quantity + 1);
  }
  function Minus() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className="cartWrap">
      <h1>장바구니()</h1>
      <div className="table-center">
        <table>
          <thead>
            <tr>
              <td colSpan="2">상품정보</td>
              <td>수량</td>
              <td>가격</td>
              <td>배송비</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="https://via.placeholder.com/70" />
              </td>
              <td>
                <p>상품 이름</p>
                <a href="!#">삭제하기</a>
              </td>
              <td>
                <button className="countBtn" onClick={() => Minus()}>
                  -
                </button>
                <button className="countCenterBtn">{quantity}</button>
                <button className="countBtn" onClick={() => Plus()}>
                  +
                </button>
              </td>
              <td>가격</td>
              <td>배송비</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-right">
        <table>
          <thead>
            <tr>
              <td>상품합계</td>
              <td>원</td>
            </tr>
            <tr>
              <td>배송비</td>
              <td>원</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>합계</td>
              <td>원</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cartBtn">
        <button type="button">
          <a href="/order">주문하기</a>
        </button>
      </div>
    </div>
  );
}

export default Cart;
