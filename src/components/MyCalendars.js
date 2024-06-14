import React, { useContext, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import GlobalContext from "../contexts/GlobalContext";
import { FaCheck } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const MyCalendars = () => {
  const [toggle, setToggle] = useState(true);
  const {
    userInfo,
    disEvent,
    disBirthdays,
    disTasks,
    setDisBirthdays,
    setDisEvent,
    setDisTasks,
  } = useContext(GlobalContext);
  const [hoverNum, setHoverNum] = useState(null);
  return (
    <div className="cursor-pointer">
      <header
        className="flex justify-between pl-8 pr-9 hover:bg-slate-200 py-1"
        onClick={() => setToggle(!toggle)}
      >
        <p className="text-sm font-semibold">My Calendars</p>
        {toggle ? (
          <MdKeyboardArrowUp className="text-2xl" />
        ) : (
          <MdKeyboardArrowDown className="text-2xl" />
        )}
      </header>
      {toggle ? (
        <div>
          <div
            className="flex justify-between pl-8 pr-10 hover:bg-slate-200 pt-2 pb-1"
            onMouseOver={() => setHoverNum(1)}
            onMouseOut={() => setHoverNum(null)}
          >
            <div className="flex">
              <FaCheck
                className={`text-lg border-2 border-sky-500 rounded-sm text-white ${
                  disEvent ? "bg-sky-500" : "bg-white"
                }`}
                onClick={() => setDisEvent(!disEvent)}
              />
              <p className="text-sm pl-3">{userInfo.name}</p>
            </div>
            {hoverNum === 1 && (
              <div className="">
                <HiDotsVertical className="text-lg text-gray-500" />
              </div>
            )}
          </div>
          <div
            className="flex justify-between pl-8 pr-10 hover:bg-slate-200 py-1"
            onMouseOver={() => setHoverNum(2)}
            onMouseOut={() => setHoverNum(null)}
          >
            <div className="flex">
              <FaCheck
                className={`text-lg border-2 border-green-500 rounded-sm text-white ${
                  disBirthdays ? "bg-green-500" : "bg-white"
                }`}
                onClick={() => setDisBirthdays(!disBirthdays)}
              />
              <p className="text-sm pl-3">Birthdays</p>
            </div>
            {hoverNum === 2 && (
              <div className="flex">
                <RxCross2 className="text-lg" />
                <div className="px-2"></div>
                <HiDotsVertical className="text-lg text-gray-500" />
              </div>
            )}
          </div>
          <div
            className="flex justify-between pl-8 pr-10 hover:bg-slate-200 pb-2 pt-1"
            onMouseOver={() => setHoverNum(3)}
            onMouseOut={() => setHoverNum(null)}
          >
            <div className="flex">
              <FaCheck
                className={`text-lg border-2 border-blue-500 rounded-sm text-white ${
                  disTasks ? "bg-blue-500" : "bg-white"
                }`}
                onClick={() => setDisTasks(!disTasks)}
              />
              <p className="text-sm pl-3">Tasks</p>
            </div>
            {hoverNum === 3 && (
              <div className="">
                <HiDotsVertical className="text-lg text-gray-500" />
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyCalendars;
