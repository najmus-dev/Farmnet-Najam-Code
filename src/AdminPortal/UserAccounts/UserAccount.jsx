import React from "react";
import UserAccountHeader from "./UserAccountHeader";
import { HiSearch } from "react-icons/hi";
import addicon from "../Assets/addicon.png";
import stopplayicon from "../Assets/stopplayicon.png";
import trash from "../Assets/Trash.png";
import view from "../Assets/View.png";
import editicon from "../Assets/editicon.png";

const rows = [
  {
    name: "Juma Jembe",
    email: "juma.jembe@farmnet.africa",
    password: "AlphaNumeric9?!",
  },
  {
    name: "Juma Jembe",
    email: "juma.jembe@farmnet.africa",
    password: "AlphaNumeric9?!",
  },
  {
    name: "Juma Jembe",
    email: "juma.jembe@farmnet.africa",
    password: "AlphaNumeric9?!",
  },
  {
    name: "Juma Jembe",
    email: "juma.jembe@farmnet.africa",
    password: "AlphaNumeric9?!",
  },
  {
    name: "Juma Jembe",
    email: "juma.jembe@farmnet.africa",
    password: "AlphaNumeric9?!",
  },
  {
    name: "Juma Jembe",
    email: "juma.jembe@farmnet.africa",
    password: "AlphaNumeric9?!",
  },
];

const UserAccount = () => {
  return (
    <div>
      <UserAccountHeader />
      <div className="px-4 md:px-6 mt-6 font-Inter">
        {/* main heading and search input */}
        <div className="flex justify-between items-center space-x-0 md:space-x-12 flex-col lg:flex-row lg:justify-between">
          <div className="flex justify-between w-full">
            <h1 className="font-semibold text-[24px]">USER ACCESS RIGHTS</h1>
          </div>

          {/* Search Input */}
          <div className="flex flex-col w-full lg:w-auto gap-4 lg:gap-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full md:w-[622px] md:h-[57px] text-[#919291] md:text-[15px] font-medium p-3 pr-10 border-[3px] border-[#D9D9D9] rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <HiSearch
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
                size={20}
              />
            </div>
          </div>
        </div>
        {/* sub nav */}

        <div className="flex flex-wrap md:flex-row space-x-2  py-4 w-full">
          <h1 className="text-[15px] font-medium bg-[#155528] text-white h-[75px] rounded-md p-4 mb-2 md:mb-0 flex-grow ">
            <span className="block text-[20px] font-bold">Level 5</span>
            <span className="block text-[16px] font-normal">Access Rights</span>
          </h1>

          <h1 className="text-[15px] font-medium bg-[#EDF0EF] hover:bg-[#155528] hover:text-white  h-[75px] rounded-md p-4 mb-2 md:mb-0 flex-grow ">
            <span className="block text-[20px] font-bold">Level 4</span>
            <span className="block text-[16px] font-normal">Access Rights</span>
          </h1>
          <h1 className="text-[15px] font-medium bg-[#EDF0EF] hover:bg-[#155528] hover:text-white  h-[75px] rounded-md p-4 mb-2 md:mb-0 flex-grow ">
            <span className="block text-[20px] font-bold">Level 3</span>
            <span className="block text-[16px] font-normal">Access Rights</span>
          </h1>
          <h1 className="text-[15px] font-medium bg-[#EDF0EF] hover:bg-[#155528] hover:text-white  h-[75px] rounded-md p-4 mb-2 md:mb-0 flex-grow ">
            <span className="block text-[20px] font-bold">Level 2</span>
            <span className="block text-[16px] font-normal">Access Rights</span>
          </h1>
          <h1 className="text-[15px] font-medium bg-[#EDF0EF] hover:bg-[#155528] hover:text-white  h-[75px] rounded-md p-4 mb-2 md:mb-0 flex-grow ">
            <span className="block text-[20px] font-bold">Level 1</span>
            <span className="block text-[16px] font-normal">Access Rights</span>
          </h1>
        </div>
        {/* text section */}
        <div className="flex justify-between items-center mt-4 mb-2">
          <h1 className="text-[16px] font-medium">User Access rights</h1>
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="text-[16px] font-medium text-[#919291]">
              Add user
            </span>
            <img src={addicon} alt="Edit Icon" className="w-5 h-5" />
          </div>
        </div>
        {/* new section */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 w-full">
          {/* Sidebar */}
          <div className="w-full md:w-[20%] mb-4 md:mb-0">
            <h1 className="text-[15px] font-medium bg-[#EDF0EF] w-full h-[75px] rounded-md p-2 mb-2 md:mb-0">
              <span className="block text-[20px] font-bold">Level 5</span>
              <span className="block text-[16px] font-normal">
                Access Rights
              </span>
            </h1>
            <div className="bg-[#FFF9F0] h-auto md:h-[380px] flex flex-col p-4 space-y-6">
              {[
                { icon: view, label: "View" },
                { icon: editicon, label: "Edit" },
                { icon: addicon, label: "Add" },
                { icon: stopplayicon, label: "Suspend" },
                { icon: trash, label: "Delete" },
              ].map((item, idx) => (
                <div className="flex items-center space-x-2" key={idx}>
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-[24px] h-[24px]"
                  />
                  <h1 className="text-[20px] font-bold">{item.label}</h1>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-[80%]">
            {/* User Information */}
            <div className="flex flex-col md:flex-row md:flex-wrap md:space-x-2 space-y-2 md:space-y-0">
              {[
                { title: "Name", value: "Juma Jembe" },
                { title: "Email", value: "juma.jembe@farmnet.africa" },
                { title: "Password", value: "AlphaNumeric9?!" },
              ].map((item, idx) => (
                <h1
                  className="text-[15px] font-medium bg-[#FAFBFB] border border-[#919291] w-full md:w-[266px] h-[75px] rounded-md p-2"
                  key={idx}
                >
                  <span className="block text-[16px] font-bold">
                    {item.title}
                  </span>
                  <span className="block text-[16px] font-normal">
                    {item.value}
                  </span>
                </h1>
              ))}
            </div>

            {/* Dynamic Rows */}
            <div className="mt-4">
              {rows.map((row, index) => (
                <div
                  className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 py-1"
                  key={index}
                >
                  <h1 className="text-[16px] font-normal bg-[#EDF0EF] w-full md:w-[266px] h-[53px] rounded-md p-2">
                    {row.name}
                  </h1>
                  <h1 className="text-[16px] font-normal bg-[#EDF0EF] w-full md:w-[266px] h-[53px] rounded-md p-2">
                    {row.email}
                  </h1>
                  <h1 className="text-[16px] font-normal bg-[#EDF0EF] w-full md:w-[266px] h-[53px] rounded-md p-2">
                    {row.password}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
