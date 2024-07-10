import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { IoClose } from "react-icons/io5";
import { MdOutlineDragHandle, MdSchedule } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaUserGroup } from "react-icons/fa6";
import SetEventTiming from "./SetEventTiming";
import AddingGuestEmails from "./AddingGuestEmails";
import SettingMeeting from "./SettingMeeting";
import { Time } from "@internationalized/date";
import findTimeDiff from "../../utils/timeDiff";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import { postEvent } from "../eventsRestOperations/eventRestMethods";

dayjs.extend(timezone);

const EventModel = ({ event, setEvent }) => {
  const { accessToken, setShowEventModal, daySelected, userInfo } =
    useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dropDown, setDropDown] = useState("");
  const [emails, setEmails] = useState([
    {
      email: userInfo.email,
      displayName: userInfo.name,
      organizer: true,
      optional: false,
    },
  ]);
  const [meeting, setMeeting] = useState(false);
  const [viewCal, setViewCal] = useState(false);
  const [checked, setChecked] = useState(false);
  const t1h = daySelected.add(30, "minutes").format("HH");
  const t1m = daySelected.add(30, "minutes").format("mm");
  const t2h = daySelected.add(1, "hour").add(30, "minutes").format("HH");
  const t2m = daySelected.add(1, "hour").add(30, "minutes").format("mm");
  const [startTime, setStartTime] = useState(new Time(t1h, t1m));
  const [endTime, setEndTime] = useState(new Time(t2h, t2m));
  const uploadEventHandler = () => {
    let start;
    let end;
    if (checked) {
      start = {
        date: daySelected.format("YYYY-MM-DD"),
        timeZone: dayjs.tz.guess(),
      };
      end = {
        date: daySelected.format("YYYY-MM-DD"),
        timeZone: dayjs.tz.guess(),
      };
    } else {
      start = {
        dateTime: findTimeDiff(startTime.toString(), daySelected),
        timeZone: dayjs.tz.guess(),
      };
      end = {
        dateTime: findTimeDiff(endTime.toString(), daySelected),
        timeZone: dayjs.tz.guess(),
      };
    }
    const event = {
      title: title,
      start: start,
      end: end,
      emails: emails,
      meeting: meeting,
      description: description,
    };
    postEvent(event, accessToken);
  };

  return (
    <div
      className="w-full h-screen fixed left-0 top-0 flex justify-center items-center"
      onClick={() => {
        viewCal && setViewCal(false);
      }}
    >
      <div className="bg-white rounded-lg shadow-2xl w-[36%] h-[85%]">
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
        <div className="py-3 h-[82%] overflow-y-scroll">
          <div className="grid grid-cols-1/5 items-start gap-y-z">
            <div></div>
            <div className="pr-5">
              <input
                type="text"
                name="title"
                placeholder="Add title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="pt-3 border-b-[1px] border-gray-500 text-2xl text-gray-600 font-semibold focus:outline-none focus:ring-0 w-full focus:border-b-2 focus:border-blue-700"
              />
            </div>
            <div className="py-2"></div>
            <div className="py-2"></div>
            <div></div>
            <div className="flex pr-5">
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
                } hover:bg-slate-100 rounded-md`}
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
            <div className="flex justify-center pt-2">
              <MdSchedule className="text-xl text-gray-600" />
            </div>
            <div>
              <SetEventTiming
                viewCal={viewCal}
                setViewCal={setViewCal}
                emails={emails}
                checked={checked}
                setChecked={setChecked}
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
                setEndTime={setEndTime}
              />
            </div>
            <div className="py-1">
              <hr />
            </div>
            <div className="py-1">
              <hr />
            </div>
            <div className="flex pt-3 justify-center">
              <FaUserGroup className="text-xl text-gray-600" />
            </div>
            <div>
              <AddingGuestEmails
                emails={emails}
                setEmails={setEmails}
                setDropDown={setDropDown}
                dropDown={dropDown}
                userInfo={userInfo}
              />
            </div>
            <div className="py-1">
              <hr />
            </div>
            <div className="py-1">
              <hr />
            </div>
            <div className="flex pt-3 justify-center">
              <img
                src="https://ssl.gstatic.com/calendar/images/conferenceproviders/logo_meet_2020q4_192px.svg"
                alt="meet"
                className="w-5 h-5"
              />
            </div>
            <SettingMeeting
              dropDown={dropDown}
              setDropDown={setDropDown}
              meeting={meeting}
              setMeeting={setMeeting}
              emails={emails.length}
            />
            <div className="py-1">
              <hr />
            </div>
            <div className="py-1">
              <hr />
            </div>
            <div className="flex pt-3 justify-center">
              <HiMenuAlt2 className="text-xl text-gray-600" />
            </div>
            <div className="cursor-pointer py-1 mr-5">
              <textarea
                placeholder="Add description"
                className="w-full rounded-md bg-slate-100 focus:outline-none focus:ring-0 p-2 text-sm resize-none hover:bg-slate-200"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="py-4"></div>
          </div>
        </div>
        <footer className="px-4 shadow-inner py-2">
          <div className="flex justify-end">
            <button
              className="bg-blue-500 cursor-pointer hover:bg-blue-600 py-2 text-sm px-6 rounded-md text-white"
              onClick={uploadEventHandler}
            >
              Save
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EventModel;
