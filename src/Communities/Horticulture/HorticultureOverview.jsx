import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import ReportsGraph from "../../ReportsPages/ReportsGraph";
import colorwheel from "../../Assets/colorwheel.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import demoicon from "../../Assets/demoicon.png";
import ProductGallery from "../Production/ProductGallery";
import community4 from "../../Assets/community4.png";
import cropicon from "../../Assets/cropicon.png";
import livestockicon from "../../Assets/livestockicon.png";

const HorticultureOverview = () => {
  const [isCropOpen, setIsCropOpen] = useState(false);
  const [isCattleOpen, setIsCattleOpen] = useState(false);

  const toggleCropDropdown = () => {
    setIsCropOpen((prevState) => !prevState);
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
      <div className="flex flex-col gap-4 lg:flex-row items-center mb-6">
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
      <h1 className="text-[#155528] font-bold text-2xl md:text-[36px] mb-4">
        NAMIBIA FARMERS
      </h1>
      <img
        src={community4}
        alt="community4"
        className="w-full h-auto rounded-md"
      />
      {/* nav */}

      <div className="flex flex-col md:flex-row items-center md:justify-between mt-10 mb-10 md:space-x-20 space-y-4 md:space-y-0">
        {/* Livestock Section */}

        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0 md:space-x-36 w-full md:w-auto">
          {/* Crop Dropdown */}
          <div className="relative w-full md:w-auto">
            <div
              className="flex items-center justify-between space-x-4 font-bold text-xl md:text-[40px] cursor-pointer"
              onClick={toggleCropDropdown}
            >
              <h1>CROP</h1>
              {isCropOpen ? (
                <IoMdArrowDropup className="text-lg md:text-[40px]" />
              ) : (
                <IoMdArrowDropdown className="text-lg md:text-[40px]" />
              )}
            </div>
            {isCropOpen && (
              <div className="absolute mt-2 bg-[#EBEBEB] shadow-md rounded-md w-full md:w-[200px] z-10">
                <ul className="p-4 space-y-2">
                  {[
                    "Apples",
                    "Avocado",
                    "Bananas",
                    "Maize",
                    "Mangoes",
                    "Onions",
                    "Passion",
                    "Fruits",
                    "Papaya",
                    "Potatoes",
                    "Strawberries",
                    "Tomatoes",
                    "Watermelon",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 p-2 cursor-pointer bg-[#EBEBEB] hover:bg-[#AFAFAF]"
                    >
                      <img
                        src={cropicon}
                        alt="Crop Icon"
                        className="w-4 h-4 md:w-6 md:h-6"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Cattle Dropdown */}
          <div className="relative w-full md:w-auto">
            <div
              className="flex items-center justify-between font-medium text-xl md:text-[24px] cursor-pointer text-white bg-[#155528] w-full md:w-[254px] h-[50px] rounded-md px-4 py-0"
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
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-white font-medium text-base md:text-[24px] w-full md:w-auto">
          <a href="/buy-page" className="w-full md:w-auto">
            <button className="bg-[#155528] w-full md:w-[254px] h-[50px] px-4 py-2 rounded-md">
              Buy
            </button>
          </a>
          <a
            href="/horticulture-investment-tracker"
            className="w-full md:w-auto"
          >
            <button className="bg-[#155528] w-full md:w-[254px] h-[50px] px-4 py-2 rounded-md">
              Invest
            </button>
          </a>
          <a href="/horticulture-donation-page" className="w-full md:w-auto">
            <button className="bg-[#155528] w-full md:w-[254px] h-[50px] px-4 py-2 rounded-md">
              Donate
            </button>
          </a>
        </div>
      </div>

      <h1 className="font-bold text-2xl md:text-[32px] mb-4">
        Cattle Production
      </h1>
      <p className="md:text-[32px] leading-5">
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

      <div className="flex justify-between items-center mt-4 mb-16">
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
          <a href="/horticulture-dashboard">
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
      <p className="md:text-[32px] leading-5">
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
      <ProductGallery />
      <h1 className="font-bold text-2xl md:text-[32px] mt-16 mb-10">
        Comments
      </h1>
      <p className="text-base md:text-[34px] leading-5 md:leading-10">
        In 2024, maize production in Namibia is projected to experience an
        increase of 2% compared to 2022 production levels, with an annual
        production estimated at 3,834,618 metric tons.
      </p>
      <p className="text-base md:text-[33px] leading-5 md:leading-10">
        This growth is significant, and it’s worth noting that the Western and
        Southern districts are expected to produce the most substantial volumes
        of maize. Specifically, districts like Masinga (Machakos), Kilgoris
        (Narok), Mwala (Machakos), Cherangany (Trans Nzoia), Yatta (Machakos),
        and Kibwezi West (Makueni) are anticipated to contribute significantly
        to maize production in Kenya.
      </p>

      {/* color wheel section */}
      <a href="/environmental-social-governance-main-page">
        <div className="bg-[#FAFBFB] flex items-center justify-between mt-8 md:mt-16 p-6 border-b-2 border-gray-300 rounded-md">
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

export default HorticultureOverview;
