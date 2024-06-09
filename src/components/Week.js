import React, { useState } from "react";

const Week = ({ day, i }) => {
  const [toggle, setToggle] = useState(null);
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div
      className="text-xs py-2 text-center cursor-pointer"
      onMouseOver={() => setToggle(i)}
      onMouseOut={() => setToggle(null)}
    >
      <div>{day.format("dd").charAt(0)}</div>
      {toggle !== null ? (
        <div className="fixed text-xs text-white bg-gray-500 rounded-sm px-2 py-1 mt-5 -ml-5 ">
          {week[toggle]}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Week;
