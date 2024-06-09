import React, { useContext, useState } from "react";
import plusImg from "../assets/plus.svg";
import { MdArrowDropDown } from "react-icons/md";
import GlobalContext from "../contexts/GlobalContext";

const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        className="border px-3 py-[0.4rem] rounded-full flex items-center shadow-md hover:shadow-2xl"
        onClick={() => setShowEventModal(true)}
        onMouseOver={() => setToggle(true)}
        onMouseOut={() => setToggle(false)}
      >
        <img src={plusImg} alt="create_event" className="" />
        <p className="text-sm font-semibold px-3">Create</p>
        <MdArrowDropDown className="text-xl text-gray-500" />
      </button>
      {toggle && (
        <div className="fixed bg-gray-500 rounded-sm px-2 py-1 mt-1 mx-14">
          <p className="text-xs text-white">Create</p>
        </div>
      )}
    </div>
  );
};

export default CreateEventButton;
