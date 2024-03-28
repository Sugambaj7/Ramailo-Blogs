import React from "react";
import { Navigate } from "react-router-dom";

export default function Protected({ children }) {
  var role = localStorage.getItem("role");

  return <>{role === "admin" ? children : <Navigate to="/" />}</>;
}
