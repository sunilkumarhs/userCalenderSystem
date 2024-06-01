import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import decryptData from "../utils/decryptData";

const CalenderView = ({ jwtToken, token, logoutHandler }) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    if (jwtToken) {
      console.log("entered");
      navigate("/");
    }
    console.log(token);
    // const realToken = decryptData(token);
    // console.log(realToken);
    // const decodedData = jwtDecode(realToken);
    // setAccessToken(decodedData.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(accessToken);

  return (
    <div>
      <h1>Welcome to Google Calender</h1>
      <button onClick={logoutHandler}>LogOut</button>
    </div>
  );
};

export default CalenderView;
