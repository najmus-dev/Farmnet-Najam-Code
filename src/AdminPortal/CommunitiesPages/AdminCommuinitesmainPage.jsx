import React, { useState } from "react";
import MainHeader from "../Components/MainHeader";
import editIcon from "../Assets/editicon.png";
import addicon from "../Assets/addicon.png";
import clock from "../Assets/clock.png";
import communities1 from "../Assets/communities1.png";
import communities2 from "../Assets/communities2.png";
import communities3 from "../Assets/communities3.png";
import trashicon from "../Assets/trashicon.png";
import importicon from "../Assets/importicon.png";

const cardData = [
  {
    communitiesImage: communities1,
    title: "Register as a Farmer",
    description: "Why Register as a farmer",
    link: "/admin/communities-page-1",
  },
  {
    communitiesImage: communities2,
    title: "Register as a Farmer",
    description: "Why Register as a farmer",
    link: "/admin/communities-page-2",
  },
  {
    communitiesImage: communities3,
    title: "Register as a Farmer",
    description: "Why Register as a farmer",
    link: "/admin/communities-page-2",
  },
];

const AdminCommuinitesmainPage = () => {
  const [activeBar, setActiveBar] = useState("Seed");

  const progressBars = ["Seed", "Value Addition", "Logistics", "Market", "ESG"];
  return (
    <div>
      <MainHeader />
      <div className="px-4 md:px-6 mt-6 font-Inter">
        {/* progress bars */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1 p-2 mb-8">
          {progressBars.map((bar) => (
            <div
              key={bar}
              className="w-full md:w-[20%]"
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
              <div className="h-3 rounded-sm overflow-hidden bg-[#D9D9D9]">
                <div
                  className={`h-full rounded-sm ${
                    activeBar === bar ? "bg-[#114918]" : ""
                  } w-[100%]`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Publish Button */}
        <div className="flex justify-end mt-4">
          <button className="text-[14px] font-bold bg-[#114918] text-white rounded-md w-[155px] h-[26px] lg:w-[155px] lg:h-[26px]">
            Publish
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mt-6 space-y-6 md:space-y-0 ">
          {/* Left Section (Card and Text) */}
          <div className="md:w-1/2">
            {/* Card */}
            <div className="relative bg-[#D9D9D9] md:w-[620px]  h-[200px] md:h-[350px] md:p-4">
              <div className="absolute bottom-4 md:bottom-8 left-3 md:left-6">
                <h2 className="text-white text-lg lg:text-[36px] font-bold">
                  Register as a Farmer
                </h2>
                <p className="text-white text-sm lg:text-[24px] font-semibold md:mt-4">
                  Why register as a farmer
                </p>
              </div>
              <div className="absolute bottom-8 md:bottom-16 right-3 md:right-6 flex items-center gap-2">
                <img src={editIcon} alt="Edit Icon" className="h-5 w-5" />
                <span className="text-sm lg:text-[20px] font-bold">Edit</span>
              </div>
              <div className="absolute top-4 right-4">
                <img src={addicon} alt="Add Icon" className="h-6 w-6" />
              </div>
            </div>

            {/* Text Below Card */}
            <div className="mt-2 md:w-[600px]">
              <h1 className="text-sm lg:text-[12px] font-bold">
                Doper Sheep Farming
              </h1>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <h1 className="text-sm lg:text-[10px] font-medium">
                    Story by Farmnet
                  </h1>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm lg:text-[10px]">3h</span>
                    <div className="flex items-center space-x-1 text-green-700 font-medium">
                      <img
                        src={clock}
                        alt="Clock"
                        className="w-[12px] h-[12px]"
                      />
                      <h1 className="text-sm lg:text-[10px]">2 min read</h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={editIcon} alt="Edit Icon" className="h-5 w-5" />
                  <span className="text-sm lg:text-[20px] font-bold">Edit</span>
                </div>
              </div>
              <div className="text-sm lg:text-[8px] leading-tight mt-2">
                <p>
                  Real-Time Record-Keeping: Easily log essential farming data on
                  the go, ensuring better tracking and management of farm
                  activities.
                </p>
                <p>
                  Data-Driven Insight: Automatically analyzed data presented in
                  easy-to-read dashboards to help farmers make informed, timely
                  decisions and optimize productivity.
                </p>
              </div>
              <div className="flex justify-end gap-2 mt-4 md:mt-60">
                <img src={importicon} alt="Save Icon" className="h-5 w-5" />
                <span className="text-sm lg:text-[20px] font-bold">Save</span>
              </div>
            </div>
          </div>

          {/* Right Section (Image Grid) */}
          <div className="grid grid-cols-1 gap-2">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="relative bg-cover bg-center h-[218px] w-full md:h-[218px] md:w-[363px]"
                style={{ backgroundImage: `url(${card.communitiesImage})` }}
              >
                <a href={card.link} className="absolute inset-0">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-lg md:text-[20px] font-bold">
                      {card.title}
                    </h2>
                    <p className="text-sm md:text-[14px] font-semibold">
                      {card.description}
                    </p>
                  </div>
                </a>
                <div className="absolute bottom-4 right-4 flex items-center cursor-pointer">
                  <img src={trashicon} alt="Delete Icon" className="h-5 w-5" />
                  <span className="text-sm md:text-[10px] font-medium text-white">
                    Delete
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCommuinitesmainPage;
