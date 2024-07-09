import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import decryptData from "../../utils/decryptData";
import { getMonth } from "../../utils/day";
import Header from "../Header";
import Sidebar from "../sideBar/Sidebar";
import Month from "./Month";
import GlobalContext from "../../contexts/GlobalContext";
import EventModel from "../eventModel/EventModel";
import TaskModel from "../taskModel/TaskModel";

const CalenderView = ({ jwtToken, token, logoutHandler }) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);
  const [event, setEvent] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal, userInfo, setUserInfo } =
    useContext(GlobalContext);
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
      console.log(jsonData);
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
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return userInfo ? (
    <React.Fragment>
      {showEventModal && event && (
        <EventModel event={event} setEvent={setEvent} />
      )}
      {showEventModal && !event && (
        <TaskModel event={event} setEvent={setEvent} />
      )}
      <div className="h-screen flex flex-col">
        <Header logoutHandler={logoutHandler} />
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
