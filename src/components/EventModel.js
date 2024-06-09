import React, { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { IoClose } from "react-icons/io5";
import { MdOutlineDragHandle } from "react-icons/md";
import { MdSchedule } from "react-icons/md";

const EventModel = () => {
  const [title, setTitle] = useState("");
  const { setShowEventModal, daySelected } = useContext(GlobalContext);
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-[36%]">
        <header className="bg-gray-100 px-4 mt-1 flex justify-between items-center rounded-t-lg">
          <MdOutlineDragHandle className="text-2xl text-gray-500" />
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
          <div className="grid grid-cols-1/5 items-end gap-y-z">
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
            <div className="flex py-3 justify-center">
              <MdSchedule className="text-xl text-gray-600" />
            </div>
            <div className="hover:bg-slate-100 p-2 rounded-md cursor-pointer">
              <div>
                <p className="text-sm hover:underline">
                  {daySelected.format("dddd, D MMMM")}
                </p>
                <p>{}</p>
              </div>
              <p className="text-xs text-gray-600">
                Time Zone . Doesn't repeat
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventModel;
