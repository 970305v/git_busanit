import { useState } from "react";
import { Link } from "react-router-dom";
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
              <th>
                <input type="checkbox" />
              </th>
              <th colSpan="2">상품정보</th>
              <th>수량</th>
              <th>가격</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <img src="https://via.placeholder.com/70" />
              </td>
              <td>
                <p>상품 이름</p>
                <a href="!#">삭제하기</a>
              </td>
              <td>
                <div className="add-stock">
                  <Link onClick={Minus}>-</Link>
                  <span>{quantity}</span>
                  <Link onClick={Plus}>+</Link>
                </div>
              </td>
              <td>가격</td>
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
        <button type="button">선택상품 주문</button>
        <button type="button">전체상품 주문</button>
      </div>
    </div>
  );
}

export default Cart;
