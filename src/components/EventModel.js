import React, { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { IoClose } from "react-icons/io5";
import { MdArrowDropUp, MdOutlineDragHandle } from "react-icons/md";
import { MdSchedule } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdList } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { BsDash } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { TimeInput } from "@nextui-org/date-input";
import { Time } from "@internationalized/date";
import { FaUser } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";

const EventModel = ({ event, setEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toggle, setToggle] = useState(false);
  const [visble, setVisible] = useState("");
  const [dropDown, setDropDown] = useState("");
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const [optional, setOptional] = useState([]);
  const [meeting, setMeeting] = useState(false);
  const { setShowEventModal, daySelected } = useContext(GlobalContext);
  const t1h = daySelected.add(30, "minutes").format("HH");
  const t1m = daySelected.add(30, "minutes").format("MM");
  const t2h = daySelected.add(1, "hour").add(30, "minutes").format("HH");
  const t2m = daySelected.add(1, "hour").add(30, "minutes").format("MM");
  const [startTime, setStartTime] = useState(new Time(t1h, t1m));
  const [endTime, setEndTime] = useState(new Time(t2h, t2m));
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && email && !emails.includes(email)) {
      setEmails([...emails, { email: email, isOptional: false }]);
      setEmail("");
    }
  };

  const removeEmail = (i) => {
    const filteredEmails = emails.filter((e, index) => i !== index);
    setEmails(filteredEmails);
  };

  const addOptional = (e) => {
    const altEmails = emails.map((o) => {
      if (o.email === e) {
        o.isOptional = true;
      }
      return o;
    });
    setEmails(altEmails);
  };

  const removeOptional = (e) => {
    const altEmails = emails.map((o) => {
      if (o.email === e) {
        o.isOptional = false;
      }
      return o;
    });
    setEmails(altEmails);
  };

  return (
    <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center">
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
              <button className="text-sm p-2 hover:bg-slate-100 rounded-md flex">
                Appointment schedule <p className="px-1"></p>
                <p className="bg-blue-600 rounded-xl text-xs text-white px-1 mt-[0.2rem]">
                  New
                </p>
              </button>
            </div>
            <div className="py-2"></div>
            <div className="py-2"></div>
            <div className="flex justify-center pt-2">
              <MdSchedule className="text-xl text-gray-600" />
            </div>
            <div
              className={`hover:bg-slate-100 p-2 mr-5 rounded-md cursor-pointer ${
                toggle ? "hidden" : "block"
              }`}
              onClick={() => setToggle(true)}
            >
              <div className="flex">
                <p className="text-sm hover:underline">
                  {daySelected.format("dddd, D MMMM")}
                </p>
                <div className="text-sm hover:underline">
                  <TimeInput
                    label
                    size="sm"
                    radius="none"
                    value={startTime}
                    onChange={setStartTime}
                  />
                </div>
                <BsDash className="mt-1" />
                <div className="text-sm hover:underline">
                  <TimeInput
                    label
                    size="sm"
                    radius="none"
                    value={endTime}
                    onChange={setEndTime}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-600">
                Time Zone . Doesn't repeat
              </p>
            </div>
            <div className={`${toggle ? "block" : "hidden"} pr-5`}>
              <div className="flex">
                <p className="text-sm hover:bg-slate-200 rounded-md p-2">
                  {daySelected.format("dddd, D MMMM")}
                </p>
                <div className="text-sm hover:bg-slate-200 rounded-md p-2">
                  <TimeInput
                    label
                    size="sm"
                    radius="none"
                    value={startTime}
                    onChange={setStartTime}
                  />
                </div>
                <BsDash className="mt-3" />
                <div className="text-sm hover:bg-slate-200 rounded-md p-2">
                  <TimeInput
                    label
                    size="sm"
                    radius="none"
                    value={endTime}
                    onChange={setEndTime}
                  />
                </div>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  className="appearance-none w-[1.2rem] m-2 h-[1.2rem] border-2 border-gray-500 rounded-sm"
                />
                <p className="text-sm pr-2 py-2 ">All day</p>
                <p className="text-sm p-2 cursor-pointer hover:bg-slate-100 rounded-sm">
                  Time zone
                </p>
              </div>
              <div>
                <div className="flex">
                  <p className="cursor-pointer text-sm p-2 flex hover:bg-slate-200 rounded-sm">
                    Doesn't repeat <MdArrowDropDown className="text-lg ml-2" />
                  </p>
                </div>
              </div>
            </div>
            <div></div>
            <div className="py-1 pr-5">
              {emails.length === 0 ? (
                <button className="text-sm hover:bg-blue-100 text-blue-600 rounded-md py-2 px-3 cursor-pointer">
                  Find a time
                </button>
              ) : (
                <button className="text-sm text-white bg-blue-600 rounded-md py-2 px-3 cursor-pointer">
                  Find a time
                </button>
              )}
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
            <div className="relative py-1 pr-5">
              <input
                type="email"
                value={email}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className="focus:outline-none focus:ring-0 w-full focus:border-b-2 focus:border-blue-700 bg-slate-100 text-sm p-2 rounded-md"
                placeholder="Add guests"
              />
              <ul className="py-1 hover:cursor-pointer">
                {emails?.map((e, index) => (
                  <li key={index}>
                    <div
                      className="flex relative justify-between hover:outline-none hover:ring-0 w-full hover:bg-slate-100 text-sm px-2 py-1 rounded-md my-1"
                      onMouseOver={() => setVisible(index)}
                      onMouseOut={() => setVisible("")}
                    >
                      <div className="flex">
                        <FaUser className="text-2xl pt-1 bg-blue-300 rounded-full text-blue-600" />{" "}
                        <div>
                          <p className="px-5">{e.email}</p>
                          {e.isOptional && (
                            <p className="text-xs px-5 text-gray-500">
                              Optional
                            </p>
                          )}
                        </div>
                        <div
                          className=""
                          onMouseOver={() => setDropDown("d0")}
                          onMouseOut={() => setDropDown("")}
                        >
                          <MdOutlineVisibilityOff className="text-2xl p-[0.1rem] text-gray-400" />
                          {dropDown === "d0" && visble === index && (
                            <div className="absolute z-20 bg-gray-700 rounded-sm px-1 py-1 mt-1">
                              <p className="text-xs text-white">Show</p>
                            </div>
                          )}
                        </div>
                      </div>
                      {visble === index && (
                        <div className="flex">
                          {e.isOptional ? (
                            <div
                              className="rounded-full hover:bg-slate-200"
                              onMouseOver={() => setDropDown("d1")}
                              onMouseOut={() => setDropDown("")}
                              onClick={() => removeOptional(e.email)}
                            >
                              <FaRegUser className="text-2xl p-[0.35rem]" />
                              {dropDown === "d1" && (
                                <div className="absolute bg-gray-700 rounded-sm px-1 py-1 mt-1 -ml-7">
                                  <p className="text-xs text-white">
                                    Mark required
                                  </p>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div
                              className="rounded-full hover:bg-slate-200"
                              onMouseOver={() => setDropDown("d1")}
                              onMouseOut={() => setDropDown("")}
                              onClick={() => addOptional(e.email)}
                            >
                              <FaUserAlt className="text-2xl p-[0.35rem]" />
                              {dropDown === "d1" && (
                                <div className="absolute bg-gray-700 rounded-sm px-1 py-1 mt-1 -ml-7">
                                  <p className="text-xs text-white">
                                    Mark optional
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                          <div className="px-1"></div>
                          <div
                            className="rounded-full hover:bg-slate-200"
                            onMouseOver={() => setDropDown("d2")}
                            onMouseOut={() => setDropDown("")}
                          >
                            <IoClose
                              className="text-2xl p-[0.1rem] text-gray-500"
                              onClick={() => removeEmail(index)}
                            />
                            {dropDown === "d2" && (
                              <div className="absolute bg-gray-700 rounded-sm px-1 py-1 mt-1 -ml-3">
                                <p className="text-xs text-white">Remove</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
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
            <div className="py-1 relative pr-5">
              {meeting ? (
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
                            <p className="text-xs text-white">
                              Video call option
                            </p>
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
                            <p className="text-xs text-white">
                              Copy conference info
                            </p>
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
                            <p className="text-xs text-white">
                              Remove conference
                            </p>
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
            <div className="py-1">
              <hr />
            </div>
            <div className="py-1">
              <hr />
            </div>
            <div className="flex pt-3 justify-center">
              <HiMenuAlt2 className="text-xl text-gray-600" />
            </div>
            <div className="cursor-pointer py-1">
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
            <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 py-2 text-sm px-6 rounded-md text-white">
              Save
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EventModel;
