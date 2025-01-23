import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import chickenimg from "../../Assets/chickenimg.png";
import ReportsGraph from "../../ReportsPages/ReportsGraph";
import colorwheel from "../../Assets/colorwheel.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import demoicon from "../../Assets/demoicon.png";
import CattlesGallery from "../Production/CattlesGallery";
import ordericon from "../../Assets/ordericon.png";
import livestockicon from "../../Assets/livestockicon.png";

const CattlesOverview = () => {
  const [isLivestockOpen, setIsLivestockOpen] = useState(false);
  const [isCattleOpen, setIsCattleOpen] = useState(false);

  const toggleLivestockDropdown = () => {
    setIsLivestockOpen((prevState) => !prevState);
  };

  const toggleCattleDropdown = () => {
    setIsCattleOpen((prevState) => !prevState);
  };

  return (
    <div className="p-4 md:p-8 font-Inter overflow-x-hidden">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          VALUE ADDITION
        </h1>
      </div>
      {/* Search and Filters */}
      <div className="flex flex-col gap-4 lg:flex-row items-center mb-8">
        {/* Search Input */}
        <div className="w-full mb-4 lg:mb-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search report"
              className="w-full md:h-[77px] text-[#919291] md:text-[24px] font-bold p-3 pr-10 border border-[#919291] rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <HiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
              size={40}
            />
          </div>
        </div>
      </div>
      {/* main image and title*/}
      <h1 className="text-[#155528] font-bold text-2xl md:text-[36px] mb-6">
        NAMIBIA FARMERS
      </h1>
      <img
        src={chickenimg}
        alt="chickenimg"
        className="w-full h-auto rounded-md"
      />
      {/* nav */}

      <div className="flex flex-col md:flex-row items-center md:justify-between mt-10 mb-10 md:space-x-20 space-y-4 md:space-y-0">
        {/* Livestock and Cattle Section */}
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto">
          {/* Livestock Section */}
          <div className="relative w-full md:w-auto">
            <div
              className="flex items-center justify-between space-x-4 font-bold text-xl md:text-[40px] cursor-pointer"
              onClick={toggleLivestockDropdown}
            >
              <h1>LIVESTOCK</h1>
              {isLivestockOpen ? (
                <IoMdArrowDropup className="text-lg md:text-[40px]" />
              ) : (
                <IoMdArrowDropdown className="text-lg md:text-[40px]" />
              )}
            </div>
            {isLivestockOpen && (
              <div className="absolute mt-2 bg-[#EBEBEB] shadow-md rounded-md w-full z-10">
                <ul className="space-y-2">
                  {[
                    "Cows",
                    "Sheep",
                    "Goats",
                    "Pigs",
                    "Chicken",
                    "Tilapia",
                    "Rabbit",
                    "Bees",
                    "Ducks",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center space-x-2 hover:bg-[#afafaf] p-2 cursor-pointer"
                    >
                      <img src={ordericon} alt="icon" className="w-5 h-5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Cattle Section */}
          <div className="relative w-full md:w-auto">
            <div
              className="flex items-center justify-between font-medium text-xl md:text-[24px] cursor-pointer text-white bg-[#155528] rounded-md w-full md:w-[254px] h-[50px] px-4 py-0"
              onClick={toggleCattleDropdown}
            >
              <h1 className="text-sm md:text-[28px] flex-grow text-center">
                Cattle
              </h1>
              <div className="ml-2">
                {isCattleOpen ? (
                  <IoMdArrowDropup className="text-lg md:text-[40px] text-white" />
                ) : (
                  <IoMdArrowDropdown className="text-lg md:text-[40px] text-white" />
                )}
              </div>
            </div>
            {isCattleOpen && (
              <div className="absolute mt-2 shadow-md rounded-md w-full md:w-[239px] z-10 bg-[#EBEBEB]">
                <ul className="space-y-2 text-black">
                  <li className="flex items-center hover:bg-[#AFAFAF] p-2 cursor-pointer text-[16px]">
                    <img
                      src={livestockicon}
                      alt="livestock icon"
                      className="w-5 h-5 mr-2"
                    />
                    Sheep
                  </li>
                  <li className="flex items-center hover:bg-[#AFAFAF] p-2 cursor-pointer text-[16px]">
                    <img
                      src={livestockicon}
                      alt="livestock icon"
                      className="w-5 h-5 mr-2"
                    />
                    Goats
                  </li>
                  <li className="flex items-center hover:bg-[#AFAFAF] p-2 cursor-pointer text-[16px]">
                    <img
                      src={livestockicon}
                      alt="livestock icon"
                      className="w-5 h-5 mr-2"
                    />
                    Chicken
                  </li>
                  <li className="flex items-center hover:bg-[#AFAFAF] p-2 cursor-pointer text-[16px]">
                    <img
                      src={livestockicon}
                      alt="livestock icon"
                      className="w-5 h-5 mr-2"
                    />
                    Tilapia
                  </li>
                  <li className="flex items-center hover:bg-[#AFAFAF] p-2 cursor-pointer text-[16px]">
                    <img
                      src={livestockicon}
                      alt="livestock icon"
                      className="w-5 h-5 mr-2"
                    />
                    Rabbit
                  </li>
                  <li className="flex items-center hover:bg-[#AFAFAF] p-2 cursor-pointer text-[16px]">
                    <img
                      src={livestockicon}
                      alt="livestock icon"
                      className="w-5 h-5 mr-2"
                    />
                    Bees
                  </li>
                  <li className="flex items-center hover:bg-[#AFAFAF] p-2 cursor-pointer text-[16px]">
                    <img
                      src={livestockicon}
                      alt="livestock icon"
                      className="w-5 h-5 mr-2"
                    />
                    Ducks
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row items-center text-base md:text-[24px] font-medium space-y-4 md:space-y-0 md:space-x-4 w-full">
          <a href="/buy-page" className="w-full md:w-auto">
            <button className="bg-[#EDF0EF] w-full md:w-[254px] h-[50px] px-2 py-1 md:py-2 rounded-md">
              Buy
            </button>
          </a>
          <a href="/cattles-investment-tracker" className="w-full md:w-auto">
            <button className="bg-[#EDF0EF] w-full md:w-[254px] h-[50px] px-2 py-1 md:py-2 rounded-md">
              Invest
            </button>
          </a>
          <a href="/cattles-donation-page" className="w-full md:w-auto">
            <button className="bg-[#EDF0EF] w-full md:w-[254px] h-[50px] px-2 py-1 md:py-2 rounded-md">
              Donate
            </button>
          </a>
        </div>
      </div>

      <h1 className="font-bold text-2xl md:text-[32px] mb-4">
        Cattle Production
      </h1>
      <p className="md:text-[34px] leading-5">
        The importance of ESG (Environmental, Social, and Governance) in
        business includes Improving
        <span className="hidden md:block">
          <br />
        </span>
        a company’s image and reputation, which attracts more investors.
        Affecting the triple bottom
        <span className="hidden md:block">
          <br />
        </span>
        line through new regulations from governments worldwide. Forcing
        companies to innovate,
        <span className="hidden md:block">
          <br />
        </span>
        leading to new opportunities. Benefiting the environment, which is good
        for future generations.
      </p>

      {/* <h1 className="font-bold text-2xl md:text-[40px] mt-4 md:mt-8">IMPACT</h1> */}
      <div className="flex justify-between items-center mt-4">
        {/* Left aligned IMPACT text */}
        <h1 className="font-bold text-2xl md:text-[40px]">IMPACT</h1>

        {/* Centered demo icon with downward shift */}
        <div className="flex justify-center items-center flex-1">
          <img
            src={demoicon}
            alt="Demo Icon"
            className="w-[100px] h-[60px] md:w-[236px] md:h-[98px] transform translate-y-6"
          />
        </div>

        {/* Right aligned View more button */}
        <div className="flex justify-end items-center">
          <a href="/cattles-dashboard">
            <p className="text-[#919291] hover:text-[#b1b0b0] font-bold underline text-lg md:text-[32px] mt-2 md:mt-6">
              View more
            </p>
          </a>
        </div>
      </div>

      <ReportsGraph />
      <h1 className="font-bold text-2xl md:text-[32px] mb-4">
        Success factors
      </h1>
      <p className="md:text-[34px] leading-5">
        The importance of ESG (Environmental, Social, and Governance) in
        business includes Improving
        <span className="hidden md:block">
          <br />
        </span>
        a company’s image and reputation, which attracts more investors.
        Affecting the triple bottom
        <span className="hidden md:block">
          <br />
        </span>
        line through new regulations from governments worldwide. Forcing
        companies to innovate,
        <span className="hidden md:block">
          <br />
        </span>
        leading to new opportunities. Benefiting the environment, which is good
        for future generations.
      </p>
      <CattlesGallery />
      <h1 className="font-bold text-2xl md:text-[32px] mt-16 mb-10">
        Comments
      </h1>
      <p className="text-base md:text-[34px] leading-5 md:leading-10">
        In 2024, maize production in Namibia is projected to experience an
        increase of 2% compared to 2022 production levels, with an annual
        production estimated at 3,834,618 metric tons.
      </p>
      <p className="text-base md:text-[34px] leading-5 md:leading-10">
        This growth is significant, and it’s worth noting that the Western and
        Southern districts are expected to produce the most substantial volumes
        of maize. Specifically, districts like Masinga (Machakos), Kilgoris
        (Narok), Mwala (Machakos), Cherangany (Trans Nzoia), Yatta (Machakos),
        and Kibwezi West (Makueni) are anticipated to contribute significantly
        to maize production in Kenya.
      </p>
      {/* shop page button */}
      <div className="flex justify-end items-end">
        <a href="/cattles-shop">
          <p className="text-[#919291] hover:text-[#b1b0b0] font-bold underline text-lg md:text-[32px] mt-2 md:mt-6">
            Shop
          </p>
        </a>
      </div>
      {/* color wheel section */}
      <a href="/environmental-social-governance-main-page">
        <div className="bg-[#FAFBFB] flex items-center justify-between mt-8 p-6 border-b-2 border-gray-300 rounded-md">
          <div>
            <h1 className="font-bold text-2xl md:text-[32px] mb-4">
              SDG No 13
            </h1>
            <p className="text-base md:text-[32px] mt-6 mb-4">
              Take urgent action to combat climate change and its impacts
            </p>
          </div>
          <img src={colorwheel} alt="colorwheel" />
        </div>
      </a>
    </div>
  );
};

export default CattlesOverview;
