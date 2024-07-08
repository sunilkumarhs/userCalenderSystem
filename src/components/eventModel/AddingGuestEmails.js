import React, { useState } from "react";
import { FaRegUser, FaUser, FaUserAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineVisibilityOff } from "react-icons/md";

const AddingGuestEmails = ({ emails, setEmails, setDropDown, dropDown }) => {
  const [email, setEmail] = useState("");
  const [visble, setVisible] = useState("");
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
                    <p className="text-xs px-5 text-gray-500">Optional</p>
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
                          <p className="text-xs text-white">Mark required</p>
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
                          <p className="text-xs text-white">Mark optional</p>
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
  );
};

export default AddingGuestEmails;
