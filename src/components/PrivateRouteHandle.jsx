import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";

function PrivateRouteHandle({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  console.log("hello");
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login", { state: path });
    }
  }, [navigate, path]);

  return <>{children}</>;
}

export default PrivateRouteHandle;
