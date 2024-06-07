import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const MyCalendars = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mt-5" onClick={() => setToggle(!toggle)}>
      <header className="flex justify-between pl-8 pr-9 hover:bg-slate-200 py-1">
        <p className="text-sm font-semibold">My Calendars</p>
        {toggle ? (
          <MdKeyboardArrowUp className="text-2xl" />
        ) : (
          <MdKeyboardArrowDown className="text-2xl" />
        )}
      </header>
    </div>
  );
};

export default MyCalendars;
