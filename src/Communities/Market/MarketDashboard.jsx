import React from "react";
import { HiSearch } from "react-icons/hi";
import community1 from "../../Assets/community1.png";
import { IoMdArrowDropdown } from "react-icons/io";
import ReportsGraph from "../../ReportsPages/ReportsGraph";
import ReportsData from "../../ReportsPages/ReportsData";
import calender from "../../Assets/calender.png";

const MarketDashboard = () => {
  return (
    <div className="p-4 md:p-8 font-Inter overflow-x-hidden mb-96">
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
      <h1 className="text-[#155528] font-bold text-2xl md:text-[36px] mb-4">
        NAMIBIA FARMERS
      </h1>
      <img src={community1} alt="community1" className="w-full h-auto" />
      {/* nav */}
      <div className="flex items-center justify-between mt-8 mb-8">
        <h1 className="font-bold text-2xl md:text-[40px]">LIVESTOCK</h1>
        <div className="flex space-x-1 md:space-x-4 text-white font-medium text-base md:text-[24px] lg:w-auto">
          <a href="/buy-page">
            <button className="bg-[#155528] md:w-[254px] md:h-[50px]  px-2 py-1 md:py-2 rounded-md">
              Buy
            </button>
          </a>
          <a href="/seed-investment-tracker">
            <button className="bg-[#155528] md:w-[254px] md:h-[50px] px-2 py-1 md:py-2 rounded-md">
              Invest
            </button>
          </a>
          <a href="/seed-donation-page">
            <button className="bg-[#155528] md:w-[254px] md:h-[50px] px-2 py-1 md:py-2 rounded-md">
              Donate
            </button>
          </a>
        </div>
      </div>

      <h1 className="font-bold text-2xl md:text-[32px] mb-40">
        Cattle Production
      </h1>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl md:text-[40px] md:mt-4">
          DASHBOARDS
        </h1>
        <button className="bg-[#155528] md:w-[254px] md:h-[50px] text-white font-medium text-base md:text-[24px] px-2 py-1 md:py-2 rounded-md">
          Subscribe
        </button>
      </div>
      <h1 className="text-2xl md:text-[32px] font-semibold mt-4 md:mt-12 md:mb-4">
        Select
      </h1>
      {/* Dates and Country */}
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between items-start md:items-center  mb-6 md:mb-10 text-xl">
        {/* Opening and Closing Dates */}
        <div className="flex space-x-4">
          <div className="flex items-center">
            <h1 className="italic md:text-[26px] text-[#19253C]">
              Opening Date
            </h1>
            <img src={calender} alt="calender" />
          </div>
          <div className="flex items-center">
            <h1 className="italic md:text-[26px] text-[#19253C]">
              Closing Date
            </h1>
            <img src={calender} alt="calender" />
          </div>
        </div>

        {/* Country and Year Buttons */}
        <div className="flex w-full md:w-auto flex-row space-x-1 md:space-x-2 font-medium text-base md:text-xl">
          <div className="relative bg-[#155528] text-white rounded-md text-sm md:text-xl flex items-center">
            <button className="flex-1 md:w-[216px] md:h-[50px] px-2 py-1 md:py-2 flex items-center justify-between md:justify-evenly">
              Country
              <IoMdArrowDropdown className="text-white" size={20} />
            </button>
          </div>
          <button className="bg-[#F3F5F5] w-1/4 md:w-[216px] md:h-[50px] px-2 py-1 md:py-2 rounded-md">
            2025
          </button>
          <button className="bg-[#F3F5F5] w-1/4 md:w-[216px] md:h-[50px] px-2 py-1 md:py-2 rounded-md">
            2026
          </button>
          <button className="bg-[#F3F5F5] w-1/4 md:w-[216px] md:h-[50px] px-2 py-1 md:py-2 rounded-md">
            2027
          </button>
        </div>
      </div>

      <div className="flex w-full flex-row space-x-4">
        <div className="relative w-full md:w-1/2">
          <button className="bg-[#155528] py-2 md:h-[55px] text-white w-full text-left p-8 font-medium text-xl md:text-[24px] rounded-md">
            Crop
            <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-[30px]" />
          </button>
        </div>
        <div className="relative w-full md:w-1/2">
          <button className="bg-[#F3F5F5] py-2 md:h-[55px]  w-full text-left p-8 font-medium text-xl md:text-[24px] rounded-md">
            Livestock
            <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-30px]" />
          </button>
        </div>
      </div>
      <h1 className="font-bold text-2xl md:text-[40px] mt-8 md:mt-16">
        IMPACT
      </h1>
      <ReportsGraph />
      <ReportsData />
      <h1 className="text-2xl md:text-[32px] font-bold mt-4 md:mt-10 mb-6">
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
        to maize production in
        <br className="md:block hidden" /> Kenya.
      </p>
    </div>
  );
};

export default MarketDashboard;
