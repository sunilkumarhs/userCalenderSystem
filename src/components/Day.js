import dayjs from "dayjs";
import React from "react";

const Day = ({ day, rowIndex }) => {
  const getCurrentDay = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };
  return (
    <div className="border border-gray-300 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDay()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
};

export default Day;
