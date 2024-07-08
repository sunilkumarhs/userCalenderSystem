import React, { useContext, useState } from "react";
import { IoMdMenu,IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineSearch,MdArrowDropDown,MdTaskAlt } from "react-icons/md";
import { RiQuestionLine,RiCalendar2Fill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import GlobalContext from "../contexts/GlobalContext";
import dayjs from "dayjs";

const Header = ({ logoutHandler }) => {
  const [toggle, setToggle] = useState(false);
  const { monthIndex, setMonthIndex, userInfo } = useContext(GlobalContext);
  return (
    <div className="flex justify-between pr-4 pl-3 py-3">
      <div className="flex">
        <IoMdMenu className="text-5xl cursor-pointer p-3 mr-1 -mt-1 rounded-full hover:bg-slate-200" />
        <div className="w-10 h-10">
          <img
            className="w-full h-full"
            src={`https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${dayjs().date()}_2x.png`}
            alt="calenderPic"
          />
        </div>
        <p className="text-2xl px-2 py-1">Calendar</p>
        <button
          className="rounded-md border-[1px] border-slate-300 p-3 py-2 text-sm font-semibold flex mb-1 mr-5 ml-12"
          onClick={() =>
            setMonthIndex(
              monthIndex === dayjs().month()
                ? monthIndex + Math.random()
                : dayjs().month()
            )
          }
        >
          Today
        </button>
        <div className="flex mt-1">
          <IoIosArrowBack
            className="text-3xl p-[0.35rem] rounded-full hover:bg-slate-200"
            onClick={() => setMonthIndex(monthIndex - 1)}
          />
          <IoIosArrowForward
            className="text-3xl p-[0.35rem] rounded-full hover:bg-slate-200"
            onClick={() => setMonthIndex(monthIndex + 1)}
          />
        </div>
        <p className="text-2xl px-6">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </p>
      </div>
      <div className="flex">
        <MdOutlineSearch className="text-[2.5rem] p-2 mx-2 rounded-full hover:bg-slate-200 cursor-pointer" />
        <RiQuestionLine className="text-[2.5rem] p-2 rounded-full hover:bg-slate-200 cursor-pointer" />
        <IoSettingsOutline className="text-[2.5rem] p-2 mx-2 rounded-full hover:bg-slate-200 cursor-pointer" />
        <button className="rounded-md border-[1px] border-slate-300 pl-3 pr-2 py-2 text-sm font-semibold flex mb-1 mr-3">
          <p>Month</p>
          <MdArrowDropDown className="ml-2 mt-[0.17rem] text-lg" />
        </button>
        <div className="rounded-l-md border-y-[1px] border-l-[1px] border-slate-300 px-4 py-2 bg-blue-100 text-blue-500 mb-1">
          <RiCalendar2Fill className="text-xl rounded-lg" />
        </div>
        <div className="rounded-r-md border-y-[1px] border-r-[1px] border-slate-300 px-4 py-2 mb-1">
          <MdTaskAlt className="text-xl" />
        </div>
        <CgMenuGridO className="text-[2.5rem] p-2 mx-2 rounded-full hover:bg-slate-200 cursor-pointer" />
        <div
          className="w-10 p-1 h-10 rounded-full hover:bg-slate-200 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <img
            className="w-full h-full rounded-full"
            src={userInfo.picture}
            alt="profile"
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-4 bg-slate-200 absolute top-12 right-5 my-4 min-w-[140px] rounded-2xl sidebar shadow-lg`}
          >
            <div>
              <div className="flex justify-center">
                <div className="w-16 h-16">
                  <img
                    className="w-full h-full rounded-full"
                    src={userInfo.picture}
                    alt="profile"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <p className="text-lg font-semibold">Hi, {userInfo.name}!</p>
              </div>
              <div className="p-4"></div>
              <div className="bg-slate-100 hover:bg-slate-400 rounded-2xl">
                <div className="flex px-4 py-2">
                  <FiLogOut className="text-xl" />
                  <p
                    className="text-sm font-semibold px-4 cursor-pointer"
                    onClick={logoutHandler}
                  >
                    Sign Out of Account
                  </p>
                </div>
              </div>
              <div className="p-2"></div>
              <div className="flex justify-between">
                <p className="text-sm hover:bg-slate-300 p-1 rounded-md">
                  Privacy policy
                </p>
                <p className="text-sm hover:bg-slate-300 p-1 rounded-md">
                  Terms of service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
