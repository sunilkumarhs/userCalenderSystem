import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import decryptData from "../utils/decryptData";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const CalenderView = ({ jwtToken, token, logoutHandler }) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
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
    <div>
      {/* {userInfo ? <Header userInfo={userInfo} /> : ""} */}
      <div className="flex justify-between px-4 py-3">
        <div className="flex">
          <IoMdMenu className="text-5xl cursor-pointer p-3 mr-2 -mt-1 rounded-full hover:bg-slate-200" />
          <div className="w-10 h-10">
            <img
              className="w-full h-full"
              src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png"
              alt="calenderPic"
            />
          </div>
          <p className="text-2xl mt-1 px-3">Calendar</p>
          <button className="rounded-md border-[1px] border-slate-300 p-3">
            Today
          </button>
          <IoIosArrowBack className="text-3xl p-1 rounded-full hover:bg-slate-200" />
          <IoIosArrowForward />
          <p className="text-2xl mt-1 px-3">April 2024</p>
        </div>
        <div className="flex">
          {/* <div className="w-9 h-9 rounded-full hover:bg-slate-300">
            <CgMenuGridO className="text-2xl p-o mt-1 mx-5" />
          </div> */}
          <CgMenuGridO className="text-[2.5rem] p-2 mx-2 rounded-full hover:bg-slate-200 cursor-pointer" />
          <div className="w-10 p-1 h-10 rounded-full hover:bg-slate-200 cursor-pointer">
            <img
              className="w-full h-full rounded-full"
              src={userInfo.picture}
              alt="profile"
            />
          </div>
        </div>
      </div>
      <h1>Welcome to Google Calender</h1>
      <button onClick={logoutHandler}>LogOut</button>
    </div>
  ) : (
    ""
  );
};

export default CalenderView;
