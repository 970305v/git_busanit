import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import QnAWrite from "./pages/QnAWrite";
import ReviewWrite from "./pages/ReviewWrite";
import NoticeWrite from "./pages/NoticeWrite";
import Main from "./pages/Main";
import About from "./pages/About";
import Order from "./pages/Order";
import Mypage from "./pages/Mypage";
import Cart from "./pages/Cart";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/join" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/qnaWrite" element={<QnAWrite />} />
        <Route path="/ReviewWrite" element={<ReviewWrite />} />
        <Route path="/noticeWrite" element={<NoticeWrite />} />
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
