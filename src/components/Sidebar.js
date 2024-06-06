import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";

const Sidebar = () => {
  return (
    <aside className="border p-4 w-[17rem]">
      <CreateEventButton />
      <SmallCalendar />
    </aside>
  );
};

export default Sidebar;
