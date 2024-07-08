import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { TimeInput } from "@nextui-org/date-input";
import { Time } from "@internationalized/date";
import { BsDash } from "react-icons/bs";
import SmallCalendar from "../sideBar/SmallCalendar";
import { MdArrowDropDown } from "react-icons/md";

const SetEventTiming = ({
  viewCal,
  setViewCal,
  emails,
  setStartPeriod,
  setEndPeriod,
}) => {
  const { daySelected } = useContext(GlobalContext);
  useEffect(() => {});
  const t1h = daySelected.add(30, "minutes").format("HH");
  const t1m = daySelected.add(30, "minutes").format("mm");
  const t2h = daySelected.add(1, "hour").add(30, "minutes").format("HH");
  const t2m = daySelected.add(1, "hour").add(30, "minutes").format("mm");
  const [startTime, setStartTime] = useState(new Time(t1h, t1m));
  const [endTime, setEndTime] = useState(new Time(t2h, t2m));
  // console.log(dayjs(new Date()).add(1, "day").add(1, "hour").toISOString());
  // const time1 = dayjs(daySelected).format("HH:mm:ss");
  // console.log(startTime.toString());
  // console.log(time1);
  // const t1 = new Date(`1970-01-01T${time1}Z`);
  // const t2 = new Date(`1970-01-01T${startTime.toString()}Z`);
  // const diffMs = Math.abs(t1 - t2);
  // const hours = Math.floor(diffMs / (1000 * 60 * 60));
  // const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  // const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
  // console.log(hours, ":", minutes, ":", seconds);
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
              <SmallCalendar padding={"4"} margin={"2"} />
            </div>
          )}
          <div className="text-sm hover:bg-slate-200 rounded-md p-2">
            <TimeInput
              label
              size="sm"
              radius="none"
              value={startTime}
              onChange={setStartTime}
            />
          </div>
          <BsDash className="mt-3" />
          <div className="text-sm hover:bg-slate-200 rounded-md p-2">
            <TimeInput
              label
              size="sm"
              radius="none"
              value={endTime}
              onChange={setEndTime}
            />
          </div>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="appearance-none w-[1.2rem] m-2 h-[1.2rem] border-2 border-gray-500 rounded-sm"
          />
          <p className="text-sm pr-2 py-2 ">All day</p>
          <p className="text-sm p-2 cursor-pointer hover:bg-slate-100 rounded-sm">
            Time zone
          </p>
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
