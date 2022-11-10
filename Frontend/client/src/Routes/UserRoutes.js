import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
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

function UserRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Review />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/review/:id" element={<ReviewDetail />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
          <Route path="/qna/:id" element={<QnADetail />} />
          <Route path="/all" element={<AllProduct />} />
          <Route path="/men" element={<MenProduct />} />
          <Route path="/women" element={<WomenProduct />} />
          <Route path="/productdetail" element={<ProductDetail />} />
        </Route>
        <Route path="/admin" element={<AdminNav />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="notice" element={<AdminNotice />} />
          <Route path="review" element={<AdminReview />} />
          <Route path="qna" element={<AdminQnA />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default UserRoutes;
