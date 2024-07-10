import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { TimeInput } from "@nextui-org/date-input";
import { BsDash } from "react-icons/bs";
import SmallCalendar from "../sideBar/SmallCalendar";
import { MdArrowDropDown } from "react-icons/md";

const SetEventTiming = ({
  viewCal,
  setViewCal,
  emails,
  checked,
  setChecked,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}) => {
  const { daySelected } = useContext(GlobalContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div
        className={`hover:bg-slate-100 p-2 mr-5 rounded-md cursor-pointer ${
          toggle ? "hidden" : "block"
        }`}
        onClick={() => setToggle(true)}
      >
        <div className="flex">
          <p
            className="text-sm hover:underline"
            onClick={() => setViewCal(true)}
          >
            {daySelected.format("dddd, D MMMM")}
          </p>
          <div className="text-sm hover:underline">
            <TimeInput
              label
              size="sm"
              radius="none"
              value={startTime}
              onChange={setStartTime}
            />
          </div>
          <BsDash className="mt-1" />
          <div className="text-sm hover:underline">
            <TimeInput
              label
              size="sm"
              radius="none"
              value={endTime}
              onChange={setEndTime}
            />
          </div>
        </div>
        <p className="text-xs text-gray-600">Time Zone . Doesn't repeat</p>
      </div>
      <div className={`${toggle ? "block" : "hidden"} pr-5`}>
        <div className=" relative flex">
          <p
            className={`text-sm hover:bg-slate-200 rounded-md p-2 ${
              viewCal && "border-b-2 border-blue-600"
            }`}
            onClick={() => setViewCal(true)}
          >
            {daySelected.format("dddd, D MMMM")}
          </p>
          {viewCal && (
            <div
              className="bg-white w-[17rem] shadow-2xl absolute z-20 mt-10"
              onClick={() => setViewCal(false)}
            >
              <SmallCalendar sidebar={false} />
            </div>
          )}
          {!checked && (
            <div className="text-sm hover:bg-slate-200 rounded-md pt-2">
              <TimeInput
                label
                size="sm"
                radius="none"
                value={startTime}
                onChange={setStartTime}
              />
            </div>
          )}
          <BsDash className="mt-3" />
          {!checked && (
            <div className="text-sm hover:bg-slate-200 rounded-md pt-2">
              <TimeInput
                label
                size="sm"
                radius="none"
                value={endTime}
                onChange={setEndTime}
              />
            </div>
          )}
          {checked && (
            <p
              className={`text-sm hover:bg-slate-200 rounded-md p-2 ${
                viewCal && "border-b-2 border-blue-600"
              }`}
              onClick={() => setViewCal(true)}
            >
              {daySelected.format("dddd, D MMMM")}
            </p>
          )}
        </div>
        <div className="flex">
          <input
            type="checkbox"
            id="check-box"
            aria-describedby="check-box"
            checked={checked}
            className="w-[1.2rem] m-2 h-[1.2rem] border-2 border-gray-500 rounded-sm cursor-pointer focus:ring-3 focus:ring-blue-300"
            onChange={() => setChecked(!checked)}
          />
          <p className="text-sm pr-2 py-2 ">All day</p>
          {!checked && (
            <p className="text-sm p-2 cursor-pointer hover:bg-slate-100 rounded-sm">
              Time zone
            </p>
          )}
        </div>
        <div>
          <div className="flex">
            <p className="cursor-pointer text-sm p-2 flex hover:bg-slate-200 rounded-sm">
              Doesn't repeat <MdArrowDropDown className="text-lg ml-2" />
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="py-1 pr-5">
        {emails.length === 0 ? (
          <button className="text-sm hover:bg-blue-100 text-blue-600 rounded-md py-2 px-3 cursor-pointer">
            Find a time
          </button>
        ) : (
          <button className="text-sm text-white bg-blue-600 rounded-md py-2 px-3 cursor-pointer">
            Find a time
          </button>
        )}
      </div>
    </div>
  );
};

export default SetEventTiming;
