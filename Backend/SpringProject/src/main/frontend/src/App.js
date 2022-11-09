import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Notice from "./pages/Notice";
import Review from "./pages/Review";
import QnA from "./pages/QnA";
import ReviewDetail from "./pages/ReviewDetail";
import NoticeDetail from "./pages/NoticeDetail";
import QnADetail from "./pages/QnADetail";
import AllProduct from "./pages/AllProduct";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <main>
                    <Routes>
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
                    </Routes>
                </main>
            </Router>
        </>
    );
}

export default App;
