import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Notice from "../pages/Notice";
import Review from "../pages/Review";
import QnA from "../pages/QnA";
import ReviewDetail from "../pages/ReviewDetail";
import NoticeDetail from "../pages/NoticeDetail";
import QnADetail from "../pages/QnADetail";
import AllProduct from "../pages/AllProduct";
import MenProduct from "../pages/MenProduct";
import WomenProduct from "../pages/WomenProduct";
import ProductDetail from "../pages/ProductDetail";
import AdminNav from "../components/layout/AdminNav";
import AdminUsers from "../pages/AdminUsers";
import AdminProducts from "../pages/AdminProducts";
import AdminNotice from "../pages/AdminNotice";
import AdminReview from "../pages/AdminReview";
import AdminQnA from "../pages/AdminQnA";
import QnAWrite from "../pages/QnAWrite";
import ReviewWrite from "../pages/ReviewWrite";
import NoticeWrite from "../pages/NoticeWrite";
import Main from "../pages/Main";
import About from "../pages/About";
import Order from "../pages/Order";
import Mypage from "../pages/Mypage";
import Cart from "../pages/Cart";

import Page404 from "../pages/Page404";
import Loading from "../pages/Loading";

function UserRoutes({ isLogin }) {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar isLogin={isLogin} />}>
          <Route path="/" element={<Main isLogin={isLogin} />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/write" element={<NoticeWrite />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/review/:id" element={<ReviewDetail />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
          <Route path="/qna/:id" element={<QnADetail />} />
          <Route path="/review/write" element={<ReviewWrite />} />
          <Route path="/qnaWrite" element={<QnAWrite />} />
          <Route path="/all" element={<AllProduct />} />
          <Route path="/men" element={<MenProduct />} />
          <Route path="/women" element={<WomenProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage isLogin={isLogin} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Route>
        <Route path="/admin" element={<AdminNav />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="notice" element={<AdminNotice />} />
          <Route path="noticeWrite" element={<NoticeWrite />} />
          <Route path="review" element={<AdminReview />} />
          <Route path="qna" element={<AdminQnA />} />
        </Route>
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default UserRoutes;
