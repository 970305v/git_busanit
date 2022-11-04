import "./App.css";
import Navbar from "./components/layout/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Notice from "./pages/Notice";
import Review from "./pages/Review";
import QnA from "./pages/QnA";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home />
       <Register />
      <Login /> */}
      {/* <Notice /> */}
      {/* <Review /> */}
      <QnA />
    </>
  );
}

export default App;
