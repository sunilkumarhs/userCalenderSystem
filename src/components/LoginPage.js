import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ token }) => {
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
  // useEffect(() => {
  //   window.location.href = "http://localhost:8080/google/googleAuth";
  // }, []);
  return (
    <div>
      <h2>Login</h2>
      <a href="http://localhost:8080/goggleInit/googleAuth">
        Login with Google
      </a>
    </div>
  );
};

export default LoginPage;
