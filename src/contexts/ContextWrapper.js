import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal, setShowEventModal] = useState(false);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [userInfo, setUserInfo] = useState(null);
  const [disEvent, setDisEvent] = useState(true);
  const [disBirthdays, setDisBirthdays] = useState(true);
  const [disTasks, setDisTasks] = useState(true);
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showEventModal,
        setShowEventModal,
        daySelected,
        setDaySelected,
        userInfo,
        setUserInfo,
        disEvent,
        setDisEvent,
        disBirthdays,
        setDisBirthdays,
        disTasks,
        setDisTasks,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
