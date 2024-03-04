import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = () => {
  const isadmin = localStorage.getItem("isadmin");
  return isadmin == "true" ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
