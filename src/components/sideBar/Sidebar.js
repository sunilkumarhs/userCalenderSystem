import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import MyCalendars from "../mainCalender/MyCalendars";

const Sidebar = () => {
  return (
    <aside className="border w-[17rem]">
      <div className="px-2 pt-4">
        <CreateEventButton />
      </div>
      <SmallCalendar padding={"9"} margin={"5"} />
      <MyCalendars />
    </aside>
  );
};

export default Sidebar;
