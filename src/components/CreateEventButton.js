import React from "react";
import plusImg from "../assets/plus.svg";
import { MdArrowDropDown } from "react-icons/md";

const CreateEventButton = () => {
  return (
    <button className="border px-3 py-[0.4rem] rounded-full flex items-center shadow-md hover:shadow-2xl">
      <img src={plusImg} alt="create_event" className="" />
      <p className="text-sm font-semibold px-3">Create</p>
      <MdArrowDropDown className="text-xl text-gray-500" />
    </button>
  );
};

export default CreateEventButton;
