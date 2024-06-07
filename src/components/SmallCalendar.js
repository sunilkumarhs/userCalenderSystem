import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../utils/day";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import GlobalContext from "../contexts/GlobalContext";

const SmallCalendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);
    const getCurrentDay = (day) => {
      return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
        ? "bg-blue-600 text-white rounded-full p-1 px-2"
        : "";
    };
    return (
      <div className="mt-5 px-9">
        <header className="flex justify-between">
          <p className="text-sm font-semibold">
            {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
              "MMMM YYYY"
            )}
          </p>
          <div className="flex -mt-[0.2rem]">
            <IoIosArrowBack
              className="text-2xl p-[0.3rem] rounded-full hover:bg-slate-200"
              onClick={() => setCurrentMonthIndex(currentMonthIndex - 1)}
            />
            <div className="px-1"></div>
            <IoIosArrowForward
              className="text-2xl p-[0.3rem] rounded-full hover:bg-slate-200"
              onClick={() => setCurrentMonthIndex(currentMonthIndex + 1)}
            />
          </div>
        </header>
        <div className="py-1"></div>
        <div className="-ml-2 mr-1 grid gap-x-3 grid-cols-7 grid-rows-7">
          {currentMonth[0].map((day, i) => (
            <span key={i} className="text-xs py-2 text-center">
              {day.format("dd").charAt(0)}
            </span>
          ))}
          {currentMonth.map((row, i) => (
            <React.Fragment key={i}>
              {row.map((day, index) => (
                <button key={index} className={`-mt-3 py-1 w-full`}>
                  <span className={`text-xs ${getCurrentDay(day)}`}>
                    {day.format("D")}
                  </span>
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
};

export default SmallCalendar;
