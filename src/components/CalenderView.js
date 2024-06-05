import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import decryptData from "../utils/decryptData";
import { getMonth } from "../utils/day";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Month from "./Month";

const CalenderView = ({ jwtToken, token, logoutHandler }) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    if (jwtToken) {
      navigate("/");
    }
    const realToken = decryptData(token);
    setAccessToken(realToken);
    // const decodedData = jwtDecode(realToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getUserInfo = async (token) => {
    try {
      const res = await fetch("http://localhost:8080/google/userInfo", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (res.status !== 200) {
        const error = new Error("Failed to fetch userInfo!!");
        error.statusCode = res.status;
        throw error;
      }
      const jsonData = await res.json();
      setUserInfo(jsonData.userInfo);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      navigate("/error/" + err);
    }
  };
  useEffect(() => {
    if (accessToken !== null) {
      getUserInfo(accessToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return userInfo ? (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <Header userInfo={userInfo} logoutHandler={logoutHandler} />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  ) : (
    ""
  );
};

export default CalenderView;
