import React, { useContext, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { TimeInput } from "@nextui-org/date-input";
import { Time } from "@internationalized/date";
import GlobalContext from "../../contexts/GlobalContext";
import SmallCalendar from "../sideBar/SmallCalendar";

const SetTaskTiming = ({
  viewCal,
  setViewCal,
  checked,
  setChecked,
  setTaskPeriod,
}) => {
  const { daySelected } = useContext(GlobalContext);
  const th = daySelected.add(30, "minutes").format("HH");
  const tm = daySelected.add(30, "minutes").format("mm");
  const [taskTime, setTaskTime] = useState(new Time(th, tm));
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
              value={taskTime}
              onChange={setTaskTime}
            />
          </div>
        </div>
        <p className="text-xs text-gray-600">Does not repeat</p>
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
          {!checked && (
            <div className="text-sm hover:bg-slate-200 rounded-md p-2">
              <TimeInput
                label
                size="sm"
                radius="none"
                value={taskTime}
                onChange={setTaskTime}
              />
            </div>
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
        </div>
        <div>
          <div className="flex">
            <p className="cursor-pointer text-sm p-2 flex hover:bg-slate-200 rounded-sm">
              Does not repeat <MdArrowDropDown className="text-lg ml-2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetTaskTiming;
