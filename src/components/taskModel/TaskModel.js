import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { IoClose } from "react-icons/io5";
import {
  MdArrowDropUp,
  MdSchedule,
  MdArrowDropDown,
  MdList,
} from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import SetTaskTiming from "./SetTaskTiming";

const TaskModel = ({ event, setEvent }) => {
  const { setShowEventModal } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [description, setDescription] = useState("");
  const [viewCal, setViewCal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [taskPeriod, setTaskPeriod] = useState();
  return (
    <div
      className="h-screen w-full fixed left-0 top-0 flex justify-center items-center"
      onClick={() => {
        viewCal && setViewCal(false);
      }}
    >
      <div className="bg-white rounded-lg shadow-2xl w-[36%]">
        <header className="bg-gray-100 px-4 mt-1 flex justify-end items-center rounded-t-lg">
          <div>
            {/* {selectedEvent && (
          <span
            onClick={() => {
              dispatchCalEvent({
                type: "delete",
                payload: selectedEvent,
              });
              setShowEventModal(false);
            }}
            className="material-icons-outlined text-gray-400 cursor-pointer"
          >
            delete
          </span>
        )} */}
            <button onClick={() => setShowEventModal(false)}>
              <IoClose className="text-2xl text-gray-500 mt-1" />
            </button>
          </div>
        </header>
        <div className="py-3 pr-3">
          <div className="grid grid-cols-1/5 items-start gap-y-z">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="pt-3 border-b-[1px] border-gray-500 text-2xl text-gray-600 font-semibold focus:outline-none focus:ring-0 w-full focus:border-b-2 focus:border-blue-700"
            />
            <div className="py-2"></div>
            <div className="py-2"></div>
            <div></div>
            <div className="flex">
              <button
                className={`text-sm p-2 ${
                  event ? "bg-blue-100 text-blue-600" : ""
                } hover:bg-slate-100 rounded-md`}
                onClick={() => setEvent(true)}
              >
                Event
              </button>
              <div className="px-1"></div>
              <button
                className={`text-sm p-2 ${
                  event ? "" : "bg-blue-100 text-blue-600"
                } hover:bg-blue-200 rounded-md`}
                onClick={() => setEvent(false)}
              >
                Task
              </button>
              <div className="px-1"></div>
              {!checked && (
                <button className="text-sm p-2 hover:bg-slate-100 rounded-md flex">
                  Appointment schedule <p className="px-1"></p>
                  <p className="bg-blue-600 rounded-xl text-xs text-white px-1 mt-[0.2rem]">
                    New
                  </p>
                </button>
              )}
            </div>
            <div className="py-2"></div>
            <div className="py-2"></div>
            <div className="flex py-4 justify-center">
              <MdSchedule className="text-xl text-gray-600" />
            </div>
            <div>
              <SetTaskTiming
                viewCal={viewCal}
                setViewCal={setViewCal}
                checked={checked}
                setChecked={setChecked}
                setTaskPeriod={setTaskPeriod}
              />
            </div>
            <div className="py-1"></div>
            <div className="py-1"></div>
            <div className="flex pt-3 justify-center">
              <HiMenuAlt2 className="text-xl text-gray-600" />
            </div>
            <div className="cursor-pointer">
              <textarea
                placeholder="Add description"
                className="w-full rounded-md bg-slate-100 focus:outline-none focus:ring-0 p-2 text-sm resize-none hover:bg-slate-200"
                rows="4"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex pt-2 justify-center">
              <MdList className="text-xl text-gray-600" />
            </div>
            <div className="cursor-pointer w-[28%] hover:bg-slate-100 flex py-2 rounded-md">
              <div className="flex" onClick={() => setDropDown(!dropDown)}>
                <p className="text-sm px-2">My Tasks</p>
                <div className="px-1"></div>
                {dropDown ? (
                  <MdArrowDropUp className="text-lg" />
                ) : (
                  <MdArrowDropDown className="text-lg" />
                )}
              </div>
              {dropDown && (
                <div className="fixed text-sm w-1/12 bg-white rounded-md shadow-2xl py-2 mt-7">
                  <p className="bg-blue-200 p-2">My Tasks</p>
                </div>
              )}
            </div>
            <div className="py-4"></div>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 py-2 text-sm px-6 rounded-md text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModel;
