import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import decryptData from "../utils/decryptData";
// import useUserInfo from "../hooks/useUserInfo";

const CalenderView = ({ jwtToken, token, logoutHandler }) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    if (jwtToken) {
      console.log("entered");
      navigate("/");
    }
    const realToken = decryptData(token);
    setAccessToken(realToken);
    // const decodedData = jwtDecode(realToken);
    // setAccessToken(decodedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getUserInfo = async (token) => {
    const data = await fetch("http://localhost:8080/google/userInfo", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const jsonData = await data.json();
    console.log(jsonData);
  };
  useEffect(() => {
    if (accessToken !== null) {
      getUserInfo(accessToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <div>
      <h1>Welcome to Google Calender</h1>
      <button onClick={logoutHandler}>LogOut</button>
    </div>
  );
};

export default CalenderView;
