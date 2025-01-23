import React from "react";
import MainHeader from "../Components/MainHeader";
import { HiSearch } from "react-icons/hi";
import editIcon from "../Assets/editicon.png";
import addicon from "../Assets/addicon.png";
import clock from "../Assets/clock.png";
import news1 from "../Assets/news1.png";
import news2 from "../Assets/news2.png";
import news3 from "../Assets/news3.png";
import trashicon from "../Assets/trashicon.png";
import importicon from "../Assets/importicon.png";

const cardData = [
  {
    NewsImage: news1,
    title: "Register as a Farmer",
    description: "Why Register as a farmer",
    link: "/admin/news-page-1",
  },
  {
    NewsImage: news2,
    title: "Register as a Farmer",
    description: "Why Register as a farmer",
    link: "/admin/news-page-2",
  },
  {
    NewsImage: news3,
    title: "Register as a Farmer",
    description: "Why Register as a farmer",
    link: "/admin/news-page-2",
  },
];

const NewsMainPage = () => {
  return (
    <div>
      <MainHeader />
      <div className="px-4 md:px-6 mt-6 font-Inter">
        {/* Main Heading and Search Input */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
          <h1 className="font-semibold text-[24px] lg:text-[24px]">
            Top Banner
          </h1>
          <div className="relative w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full lg:w-[622px] h-[40px] lg:h-[57px] text-[#919291] text-sm lg:text-[15px] font-medium p-3 pr-10 border-[3px] border-[#D9D9D9] rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <HiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
              size={20}
            />
          </div>
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
                style={{ backgroundImage: `url(${card.NewsImage})` }}
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

export default NewsMainPage;
