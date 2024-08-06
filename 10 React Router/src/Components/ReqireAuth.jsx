import React from "react";
import { useAuth } from "./Auth";
import { Navigate, useNavigate } from "react-router-dom";

function ReqireAuth({ children }) {
  const auth = useAuth();
  //   const navigate = useNavigate();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ReqireAuth;
