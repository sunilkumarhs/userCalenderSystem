import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import decryptData from "../utils/decryptData";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";
import { MdTaskAlt } from "react-icons/md";

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
      <div className="flex justify-between pr-4 pl-3 py-4">
        <div className="flex">
          <IoMdMenu className="text-5xl cursor-pointer p-3 mr-1 -mt-[0.4rem] rounded-full hover:bg-slate-200" />
          <div className="w-10 h-10 -mt-1">
            <img
              className="w-full h-full"
              src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png"
              alt="calenderPic"
            />
          </div>
          <p className="text-2xl px-2">Calendar</p>
          <button className="rounded-md border-[1px] border-slate-300 p-3 py-2 text-sm font-semibold flex mb-1 mr-5 ml-12">
            Today
          </button>
          <div className="flex mt-1">
            <IoIosArrowBack className="text-3xl p-[0.35rem] rounded-full hover:bg-slate-200" />
            <IoIosArrowForward className="text-3xl p-[0.35rem] rounded-full hover:bg-slate-200" />
          </div>
          <p className="text-2xl px-6">April 2024</p>
        </div>
        <div className="flex">
          <MdOutlineSearch className="text-[2.5rem] p-2 mx-2 rounded-full hover:bg-slate-200 cursor-pointer" />
          <RiQuestionLine className="text-[2.5rem] p-2 rounded-full hover:bg-slate-200 cursor-pointer" />
          <IoSettingsOutline className="text-[2.5rem] p-2 mx-2 rounded-full hover:bg-slate-200 cursor-pointer" />
          <button className="rounded-md border-[1px] border-slate-300 pl-3 pr-2 py-2 text-sm font-semibold flex mb-1 mr-3">
            <p>Month</p>
            <MdArrowDropDown className="ml-2 mt-[0.17rem] text-lg" />
          </button>
          <div className="rounded-l-md border-y-[1px] border-l-[1px] border-slate-300 px-4 py-2 bg-blue-100 text-blue-500 mb-1">
            <RiCalendar2Fill className="text-xl rounded-lg" />
          </div>
          <div className="rounded-r-md border-y-[1px] border-r-[1px] border-slate-300 px-4 py-2 mb-1">
            <MdTaskAlt className="text-xl" />
          </div>
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
