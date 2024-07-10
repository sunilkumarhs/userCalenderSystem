import React from "react";

const GlobalContext = React.createContext({
  accessToken: null,
  setAccessToken: () => {},
  monthIndex: 0,
  setMonthIndex: (index) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  daySelected: null,
  setDaySelected: (day) => {},
  userInfo: null,
  setUserInfo: () => {},
  disEvent: true,
  setDisEvent: () => {},
  disBirthdays: true,
  setDisBirthdays: () => {},
  disTasks: true,
  setDisTasks: () => {},
});

export default GlobalContext;
