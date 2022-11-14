import { useState } from "react";
import "./App.css";
import UserRoutes from "./Routes/UserRoutes";

function App() {
  const [user, setUser] = useState(localStorage.getItem("token"));
  return (
    <>
      <UserRoutes user={user} />
    </>
  );
}

export default App;
