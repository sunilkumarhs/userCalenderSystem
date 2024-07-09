import React from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineContentCopy, MdOutlineSettings } from "react-icons/md";

const SettingMeeting = ({
  dropDown,
  setDropDown,
  meeting,
  setMeeting,
  emails,
}) => {
  return (
    <div className="py-1 relative pr-5">
      {meeting || emails !== 1 ? (
        <div>
          <div className="flex justify-between">
            <div>
              <button className="text-sm font-semibold text-white bg-blue-600 rounded-md py-2 px-4 cursor-pointer">
                Jion with Google Meet
              </button>
            </div>
            <div className="flex pt-1">
              <div
                className="rounded-full hover:bg-slate-200 hover:cursor-pointer"
                onMouseOver={() => setDropDown("d3")}
                onMouseOut={() => setDropDown("")}
              >
                <MdOutlineSettings className="text-3xl p-1 text-gray-500" />
                {dropDown === "d3" && (
                  <div className="absolute bg-gray-700 rounded-sm px-1 py-1 mt-2 -ml-7">
                    <p className="text-xs text-white">Video call option</p>
                  </div>
                )}
              </div>
              <div className="pr-1"></div>
              <div
                className="rounded-full hover:bg-slate-200 hover:cursor-pointer"
                onMouseOver={() => setDropDown("d4")}
                onMouseOut={() => setDropDown("")}
              >
                <MdOutlineContentCopy className="text-3xl p-1 text-gray-500" />
                {dropDown === "d4" && (
                  <div className="absolute bg-gray-700 rounded-sm px-1 py-1 mt-2 -ml-7">
                    <p className="text-xs text-white">Copy conference info</p>
                  </div>
                )}
              </div>
              <div className="pr-1"></div>
              <div
                className="rounded-full hover:bg-slate-200 hover:cursor-pointer"
                onMouseOver={() => setDropDown("d5")}
                onMouseOut={() => setDropDown("")}
                onClick={() => setMeeting(false)}
              >
                <IoClose className="text-3xl p-1 text-gray-500" />
                {dropDown === "d5" && (
                  <div className="absolute bg-gray-700 rounded-sm px-1 py-1 mt-2 -ml-7">
                    <p className="text-xs text-white">Remove conference</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 pt-2">
            meet.google.com/chg-tfgk-sfv
          </p>
          <p className="text-xs text-gray-500 pb-2">
            Up to 100 guest connections
          </p>
        </div>
      ) : (
        <button
          className="text-sm font-semibold text-white bg-blue-500 rounded-md py-2 px-4 cursor-pointer"
          onClick={() => setMeeting(true)}
        >
          Add Google Meet video conferencing
        </button>
      )}
    </div>
  );
};

export default SettingMeeting;
