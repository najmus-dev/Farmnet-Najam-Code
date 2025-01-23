import React, { useState } from "react";
import UserAccountHeader from "../UserAccounts/UserAccountHeader";
import { HiSearch } from "react-icons/hi";
import Graph from "../UserAccounts/Graph";
import shareicon from "../Assets/shareicon.png";
import listicon from "../Assets/listicon.png";
import tomato from "../Assets/tomato.png";
import cabbage from "../Assets/cabbage.png";
import rice from "../Assets/rice.png";
import potato from "../Assets/potato.png";
import millet from "../Assets/millet.png";
import beans from "../Assets/beans.png";
import cow from "../Assets/cow.png";
import chicken from "../Assets/chicken.png";
import sheep from "../Assets/sheep.png";
import goat from "../Assets/goat.png";
import duck from "../Assets/duck.png";
import bee from "../Assets/bee.png";
import tilapia from "../Assets/tilapia.png";
import guineafowl from "../Assets/guineafowl .png";
import editicon from "../Assets/editicon.png";
import importicon from "../Assets/importicon.png";
import DashboardData from "./DashboardData";

const Dashboards = () => {
  const [activeBar, setActiveBar] = useState("CROP");

  const progressBars = ["CROP", "LIVESTOCK"];

  const cropData = [
    { name: "Beans", value: "567,890t", change: "+2.7%", icon: beans },
    { name: "Millet", value: "435,420t", change: "+1.7%", icon: millet },
    { name: "Potatoes", value: "367,750t", change: "+3.1%", icon: potato },
    { name: "Rice", value: "231,801t", change: "+0.9%", icon: rice },
    { name: "Cabbages", value: "167,001t", change: "+2.3%", icon: cabbage },
    { name: "Tomatoes", value: "97,800t", change: "+2.7%", icon: tomato },
    { name: "Cabbages", value: "167,001t", change: "+2.3%", icon: cabbage },
    { name: "Tomatoes", value: "97,800t", change: "+2.7%", icon: tomato },
  ];

  const livestockData = [
    { name: "Cattle", value: "567,890", change: "+2.7%", icon: cow },
    { name: "Sheep", value: "435,420", change: "+1.7%", icon: sheep },
    { name: "Goats", value: "367,750", change: "+3.1%", icon: goat },
    { name: "Chickens", value: "231,801", change: "+0.9%", icon: chicken },
    { name: "Ducks", value: "167,001", change: "+2.3%", icon: duck },
    { name: "Tilapia", value: "97,800", change: "+2.7%", icon: tilapia },
    { name: "Bees", value: "167,001", change: "+2.3%", icon: bee },
    {
      name: "Guinea fowl ",
      value: "97,800",
      change: "+2.7%",
      icon: guineafowl,
    },
  ];

  const renderData = activeBar === "CROP" ? cropData : livestockData;

  return (
    <div className="overflow-x-auto">
      <UserAccountHeader />
      <div className="px-2 md:px-6 py-2 font-Inter">
        {/* main heading and search input */}
        <div className="flex justify-between items-center space-x-0 md:space-x-12 flex-col lg:flex-row lg:justify-between">
          <div className="flex justify-between w-full">
            <h1 className="font-semibold text-[24px]">DASHBOARDS</h1>
          </div>

          {/* Search Input */}
          <div className="flex flex-col w-full lg:w-auto gap-4 lg:gap-0 ">
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

        {/* Graph and Progress Bars */}
        <div className="flex flex-col lg:flex-row ">
          {/* Graph */}
          <div className="">
            {/* Progress Bars Section */}
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p-2 mb-2 ">
              {progressBars.map((bar) => (
                <div
                  key={bar}
                  className="w-full md:w-[194px] cursor-pointer"
                  onClick={() => setActiveBar(bar)}
                >
                  <div className="flex justify-between mb-1">
                    <p
                      className={`md:text-[20px] font-bold ${
                        activeBar === bar ? "text-green-900" : ""
                      }`}
                    >
                      {bar}
                    </p>
                  </div>
                  <div className="h-[5px] rounded-full overflow-hidden bg-[#D9D9D9]">
                    <div
                      className={`h-full rounded-full ${
                        activeBar === bar ? "bg-[#114918]" : ""
                      } w-[100%]`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <h1 className="text-[24px] font-semibold">Beans</h1>
            <Graph />
            {/* <DashboardData /> */}
            {/* Full-width DashboardData */}
            <div className="w-full mt-2">
              <DashboardData />
            </div>
          </div>

          {/* New Section */}
          <div className="w-full lg:w-[35%] mt-6">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <img src={listicon} alt="list icon" className="w-6 h-6" />
                <h1 className="text-[#979797] text-[16px] font-semibold">
                  Watch List
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                <h1 className="text-[#979797] text-[16px] font-semibold">
                  Share record
                </h1>
                <img src={shareicon} alt="share icon" className="w-6 h-6" />
              </div>
            </div>

            {/* Dynamic Data Section */}
            <ul className="space-y-3">
              {renderData.map((item, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center h-[74px] p-3 rounded-lg shadow-md shadow-gray-400 ${
                    index === 0 ? "bg-[#155528] text-white" : "bg-[#F3F5F5]"
                  } hover:bg-[#155528] hover:text-white`}
                >
                  <div className="flex items-center space-x-3">
                    <img src={item.icon} alt={item.name} className="w-8 h-8" />
                    <span
                      className={`font-bold text-lg md:text-[20] ${
                        index === 0 ? "text-white" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-xl font-bold md:text-[20] ${
                        index === 0 ? "text-white" : ""
                      }`}
                    >
                      {item.value}
                    </p>
                    <p
                      className={`text-sm font-semibold md:text-[16px] ${
                        index === 0 ? "text-white" : ""
                      }`}
                    >
                      {item.change}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* edit save options */}
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center space-x-2">
                <img src={editicon} alt="edit icon" className="w-6 h-6" />
                <h1 className=" text-[20px] font-bold">Edit</h1>
              </div>
              <div className="flex items-center space-x-2">
                <h1 className=" text-[20px] font-bold">Save</h1>
                <img src={importicon} alt="importicon" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
