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
      className="text-[0.65rem] font-semibold py-1 text-center cursor-pointer"
      onMouseOver={() => setToggle(i)}
      onMouseOut={() => setToggle(null)}
    >
      <div>{day.format("dd").charAt(0)}</div>
      {toggle !== null ? (
        <div className="absolute text-[0.65rem] font-semibold text-white bg-gray-500 rounded-sm px-2 py-1 mt-5 -ml-3 ">
          {week[toggle]}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Week;
