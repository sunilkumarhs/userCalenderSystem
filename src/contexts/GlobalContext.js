import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  showEventModel: false,
  setShowEventModel: () => {},
});

export default GlobalContext;
