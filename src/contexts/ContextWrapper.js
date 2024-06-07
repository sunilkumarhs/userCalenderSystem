import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModel, setShowEventModel] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ monthIndex, setMonthIndex, showEventModel, setShowEventModel }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
