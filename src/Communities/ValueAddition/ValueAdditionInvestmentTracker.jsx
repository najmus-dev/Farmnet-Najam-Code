import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import valuadditionImg from "../../Assets/valuadditionImg.png";
import ReportsGraph from "../../ReportsPages/ReportsGraph";
import PlantStages from "../PlantStages";
import ReviewCard from "../ReviewCard";
import colorwheel from "../../Assets/colorwheel.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import demoicon from "../../Assets/demoicon.png";
import cropicon from "../../Assets/cropicon.png";
import ordericon from "../../Assets/ordericon.png";

const ValueAdditionInvestmentTracker = () => {
  const [isCropOpen, setIsCropOpen] = useState(false);
  const [isCrop2Open, setIsCrop2Open] = useState(false);

  const toggleCropDropdown = () => {
    setIsCropOpen((prevState) => !prevState);
  };

  const toggleCrop2Dropdown = () => {
    setIsCrop2Open((prevState) => !prevState);
  };

  return (
    <div className="p-4 md:p-8 font-Inter overflow-x-hidden">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          SEED
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
              className="w-full md:h-[77px] text-[#919291] md:text-[24px] font-bold p-3 pr-10 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <HiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
              size={40}
            />
          </div>
        </div>
      </div>
      {/* main image and title*/}

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          NAMIBIA FARMERS
        </h1>
        <span className="  text-sm md:text-[32px]">FNKEFA123456</span>
      </div>
      <img
        src={valuadditionImg}
        alt="valuadditionImg"
        className="w-full h-auto"
      />
      {/* nav */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 mb-10 md:space-x-10 space-y-2 md:space-y-0">
        {/* Dropdown Sections */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-8 w-full">
          {/* CROP Section */}
          <div className="relative w-full">
            <div
              className="flex items-center justify-between space-x-64 md:space-x-40 font-bold text-xl md:text-[40px] cursor-pointer"
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
              <div className="absolute mt-2 bg-[#EBEBEB] shadow-md rounded-md w-full z-10">
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
                    "Water Melon",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center hover:bg-[#AFAFAF] p-2 cursor-pointer"
                    >
                      <img
                        src={ordericon}
                        alt="Order Icon"
                        className="w-5 h-5 mr-2"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Crop2 Section */}
          <div className="relative w-full md:w-auto">
            <div
              className="flex items-center justify-between font-medium text-xl md:text-[24px] cursor-pointer text-white bg-[#155528] rounded-md md:w-[254px] h-[50px] px-4 py-0"
              onClick={toggleCrop2Dropdown}
            >
              <h1 className="text-sm md:text-[28px] flex-grow text-center">
                Maize
              </h1>
              <div className="ml-2">
                {isCrop2Open ? (
                  <IoMdArrowDropup className="text-lg md:text-[40px] text-white" />
                ) : (
                  <IoMdArrowDropdown className="text-lg md:text-[40px] text-white" />
                )}
              </div>
            </div>
            {isCrop2Open && (
              <div className="absolute mt-2 shadow-md rounded-md w-full md:w-[239px] z-10 bg-[#EBEBEB]">
                <ul className="p-4 space-y-2 text-black">
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
                    "Water Melon",
                  ].map((item) => (
                    <li
                      key={item}
                      className="hover:bg-[#AFAFAF] p-2 cursor-pointer flex items-center"
                    >
                      <img
                        src={cropicon}
                        alt="Crop Icon"
                        className="w-5 h-5 mr-2"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row items-center text-base md:text-[24px] font-medium space-y-2 md:space-y-0 md:space-x-4 w-full">
          <a href="/buy-page" className="w-full md:w-auto">
            <button className="w-full md:w-[254px] bg-[#EDF0EF] hover:bg-[#155528] hover:text-white h-[50px] px-2 py-1 md:py-2 rounded-md">
              Buy
            </button>
          </a>
          <a
            href="/valueaddition-investment-tracker"
            className="w-full md:w-auto"
          >
            <button className="w-full md:w-[254px] bg-[#EDF0EF] hover:bg-[#155528] hover:text-white h-[50px] px-2 py-1 md:py-2 rounded-md">
              Invest
            </button>
          </a>
          <a href="/valueaddition-donation-page" className="w-full md:w-auto">
            <button className="w-full md:w-[254px] bg-[#EDF0EF] hover:bg-[#155528] hover:text-white h-[50px] px-2 py-1 md:py-2 rounded-md">
              Donate
            </button>
          </a>
        </div>
      </div>

      <h1 className="font-bold text-2xl md:text-[32px] mb-4">
        Maize Production
      </h1>
      <p className=" md:text-[34px] md:leading-10">
        Dallan Farm specialize in producing high value products - Strawberries,
        Potatoes, Indigenous
        <br className="md:block hidden" /> vegetables, onions, beans, and Free
        range chicken . We also support farmers with advisory
        <br className="md:block hidden" /> services & best practice .
      </p>
      <div className="flex items-center justify-end">
        <img
          src={demoicon}
          alt="Demo Icon"
          className="w-[100px] h-[60px] md:w-[236px] md:h-[98px]"
        />
      </div>
      <ReportsGraph />
      <h1 className="font-bold text-2xl md:text-[32px] mb-4">Opportunity</h1>
      <p className=" md:text-[34px] md:leading-10 mb-10">
        By addressing food and nutrition security, empowering farmers, and
        aligning with continental
        <br className="md:block hidden" /> agendas, seeds hold the key to
        unlocking Africa's agricultural potential and driving inclusive
        <br className="md:block hidden" /> growth and prosperity for generations
        to come.
      </p>
      <div className="bg-[#FAFBFB] border-b border-gray-500 h-[120px] md:h-[179px] w-full flex md:flex-row flex-col items-center  md:justify-between py-2 space md:px-4">
        <div className="flex flex-col justify-center items-start md:space-y-1">
          <div className="flex items-center">
            <h1 className=" md:text-[32px] font-bold">Investment</h1>
            <h1 className=" md:text-[32px] font-bold md:ml-24">: USD 1,200</h1>
          </div>
          <div className="flex items-center">
            <h1 className="md:text-[32px] font-bold">Expected Returns</h1>
            <h1 className="md:text-[32px] font-bold md:ml-2">: USD 200</h1>
          </div>
          <div className="flex items-center">
            <h1 className="md:text-[32px] font-bold">Period</h1>
            <h1 className="md:text-[32px] font-bold md:ml-44">: 9 Months</h1>
          </div>
        </div>
        <h1 className="text-[#155528] font-bold text-2xl md:text-[32px]">
          ↑ 28.1%
        </h1>
      </div>
      <h1 className="text-[32px] font-bold mt-6 mb-6">Investment cycle</h1>
      <PlantStages />
      <h1 className="font-bold text-2xl md:text-[32px] md:mt-6 mb-4 md:mb-10">
        Comments
      </h1>
      <p className="text-base md:text-[34px] leading-5 md:leading-10 ">
        In 2024, maize production in Namibia is projected to experience an
        increase of 2% compared to 2022 production levels, with an annual
        production estimated at 3,834,618 metric tons.
      </p>
      <p className="text-base md:text-[34px] leading-5 md:leading-10 mb-8">
        This growth is significant, and it’s worth noting that the Western and
        Southern districts are expected to produce the most substantial volumes
        of maize. Specifically, districts like Masinga (Machakos), Kilgoris
        (Narok), Mwala (Machakos), Cherangany (Trans Nzoia), Yatta (Machakos),
        and Kibwezi West (Makueni) are anticipated to contribute significantly
        to maize production in Kenya.
      </p>
      <ReviewCard />
      {/* buttons */}
      <div className="flex w-full space-x-4 mt-8">
        <button className="bg-[#8EC543] py-2 md:h-[65px] text-white w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-medium text-lg md:text-[32px] rounded-md">
          Contact Admin
        </button>
        <button className="bg-[#FAFBFB] py-2 md:h-[65px] w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-medium text-lg md:text-[32px] rounded-md">
          Invest
        </button>
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

export default ValueAdditionInvestmentTracker;
