import React, { useContext } from "react";
import plusImg from "../assets/plus.svg";
import { MdArrowDropDown } from "react-icons/md";
import GlobalContext from "../contexts/GlobalContext";

const CreateEventButton = () => {
  const { setShowEventModel } = useContext(GlobalContext);
  return (
    <button
      className="border px-3 py-[0.4rem] rounded-full flex items-center shadow-md hover:shadow-2xl"
      onClick={() => setShowEventModel(true)}
    >
      <img src={plusImg} alt="create_event" className="" />
      <p className="text-sm font-semibold px-3">Create</p>
      <MdArrowDropDown className="text-xl text-gray-500" />
    </button>
  );
};

export default CreateEventButton;
