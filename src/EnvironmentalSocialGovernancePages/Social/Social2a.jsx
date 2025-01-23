import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import SOCIAL2 from "../../Assets/SOCIAL2.png";
import ReportsGraph from "../../ReportsPages/ReportsGraph";
import colorwheel from "../../Assets/colorwheel.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import demoicon from "../../Assets/demoicon.png";
import ProductGallery from "../../Communities/Production/ProductGallery";

const Social2a = () => {
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
          PRODUCTION
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
      <img src={SOCIAL2} alt="SOCIAL2" className="w-full h-auto rounded-md" />
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
              <div className="absolute mt-2 bg-white shadow-md rounded-md w-full z-10">
                <ul className="p-4 space-y-2">
                  <li className="hover:bg-gray-100 p-2 cursor-pointer">Cows</li>
                  <li className="hover:bg-gray-100 p-2 cursor-pointer">
                    Sheep
                  </li>
                  <li className="hover:bg-gray-100 p-2 cursor-pointer">
                    Goats
                  </li>
                  <li className="hover:bg-gray-100 p-2 cursor-pointer">Pigs</li>
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
              <div className="absolute mt-2 shadow-md rounded-md w-full md:w-[239px] z-10 bg-[#155528]">
                <ul className="p-4 space-y-2 text-white">
                  <li className="hover:bg-[#1b6346] p-2 cursor-pointer">
                    Dairy
                  </li>
                  <li className="hover:bg-[#1b6346] p-2 cursor-pointer">
                    Beef
                  </li>
                  <li className="hover:bg-[#1b6346] p-2 cursor-pointer">
                    Oxen
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
          <a href="/seed-investment-tracker" className="w-full md:w-auto">
            <button className="bg-[#EDF0EF] w-full md:w-[254px] h-[50px] px-2 py-1 md:py-2 rounded-md">
              Invest
            </button>
          </a>
          <a href="/seed-donation-page" className="w-full md:w-auto">
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
          <a href="/social-2b">
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
      {/* <ProductGallery /> */}
      <h1 className="font-bold text-2xl md:text-[32px] mt-6 md:mt-16 md:mb-16 mb-8">
        Gallery
      </h1>
      {/* gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2 md:px-0">
        <img
          src={SOCIAL2}
          alt="SOCIAL2"
          className="w-full h-auto md:h-[397px] object-cover rounded-t-md cursor-pointer"
        />
        <img
          src={SOCIAL2}
          alt="SOCIAL2"
          className="w-full h-auto md:h-[397px] object-cover rounded-t-md cursor-pointer"
        />
        <img
          src={SOCIAL2}
          alt="SOCIAL2"
          className="w-full h-auto md:h-[397px] object-cover rounded-t-md cursor-pointer"
        />
        <img
          src={SOCIAL2}
          alt="SOCIAL2"
          className="w-full h-auto md:h-[397px] object-cover rounded-t-md cursor-pointer"
        />
      </div>
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
        <a href="/shop">
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

export default Social2a;
