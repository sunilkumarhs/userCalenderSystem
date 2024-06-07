import React, { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { IoClose } from "react-icons/io5";
import { MdOutlineDragHandle } from "react-icons/md";
import { MdSchedule } from "react-icons/md";

const EventModel = () => {
  const [title, setTitle] = useState("");
  const { setShowEventModel } = useContext(GlobalContext);
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
            <button onClick={() => setShowEventModel(false)}>
              <IoClose className="text-2xl text-gray-500 mt-1" />
            </button>
          </div>
        </header>
        <div className="p-3">
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
            <MdSchedule className="text-2xl" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventModel;
