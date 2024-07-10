import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../../utils/day";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import GlobalContext from "../../contexts/GlobalContext";
import Week from "../mainCalender/Week";

const SmallCalendar = ({ sidebar }) => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { setDaySelected, daySelected } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);
  const getCurrentDay = (day) => {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-blue-600 text-white rounded-full";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "hover:bg-slate-200 rounded-full";
    }
  };
  return (
    <div className={`${sidebar ? "mt-5 px-9" : "mt-2 px-2"}`}>
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
      <div className="-ml-2 mr-1 grid gap-x-2 grid-cols-7 grid-rows-1">
        {currentMonth[0].map((day, i) => (
          <Week day={day} i={i} key={i} />
        ))}
      </div>
      <div
        className={`-ml-2 mr-1 grid  gap-x-1 ${
          sidebar ? "-mt-1" : ""
        }  grid-cols-7 grid-rows-7`}
      >
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, index) => (
              <button
                key={index}
                onClick={() => {
                  setDaySelected(day);
                }}
                className={`w-full ${getCurrentDay(day)} ${
                  sidebar
                    ? "pr-[0.15rem] pb-[0.15rem]"
                    : "pb-[0.4rem] pt-[0.1rem]"
                }`}
              >
                <span className={`text-[0.65rem] font-semibold `}>
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
