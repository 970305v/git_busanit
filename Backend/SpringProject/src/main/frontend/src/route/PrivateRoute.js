import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isLogin }) {
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
