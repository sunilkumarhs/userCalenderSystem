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
  return (
    <div className="mt-5 px-5">
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
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-xs py-2">
            {day.format("dd").charAt(0)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
