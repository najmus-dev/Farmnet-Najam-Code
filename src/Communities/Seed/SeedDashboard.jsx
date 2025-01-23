import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import community11 from "../../Assets/community11.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import ReportsGraph from "../../ReportsPages/ReportsGraph";
import ReportsData from "../../ReportsPages/ReportsData";
import calender from "../../Assets/calender.png";
import ordericon from "../../Assets/ordericon.png";
import cropicon from "../../Assets/cropicon.png";
import livestockicon from "../../Assets/livestockicon.png";
import demoicon from "../../Assets/demoicon.png";

const SeedDashboard = () => {
  const [isLivestockOpen, setIsLivestockOpen] = useState(false);
  const [isCattleOpen, setIsCattleOpen] = useState(false);

  const toggleLivestockDropdown = () => {
    setIsLivestockOpen((prevState) => !prevState);
  };

  const toggleCattleDropdown = () => {
    setIsCattleOpen((prevState) => !prevState);
  };

  // Report Type Dropdown States and Handlers
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [selectedReportType, setSelectedReportType] = useState("Production");
  const reportTypes = ["Production", "Revenue", "Inventory"];
  const handleReportSelect = (reportType) => {
    setSelectedReportType(reportType);
    setIsReportOpen(false);
  };

  // State for Crop Dropdown
  const [isCropDropdownOpen, setCropDropdownOpen] = useState(false);

  // State for Second Livestock Dropdown
  const [isSecondLivestockDropdownOpen, setSecondLivestockDropdownOpen] =
    useState(false);

  // List of crop options
  const cropOptions = [
    "Apples",
    "Avocado",
    "Bananas",
    "Beans",
    "Cabbages",
    "Maize",
    "Mangoes",
    "Onions",
    "Passion Fruits",
    "Papaya",
    "Potatoes",
    "Strawberries",
    "Tomatoes",
    "Water Melon",
  ];

  // List of livestock options
  const livestockOptions = [
    "Cattle",
    "Sheep",
    "Goats",
    "Chicken",
    "Tilapia",
    "Bees",
    "Rabbits",
    "Ducks",
  ];

  // Toggle for Crop Dropdown
  const toggleCropDropdown = () => {
    setCropDropdownOpen(!isCropDropdownOpen);
  };

  // Toggle for Second Livestock Dropdown
  const toggleSecondLivestockDropdown = () => {
    setSecondLivestockDropdownOpen(!isSecondLivestockDropdownOpen);
  };

  return (
    <div className="p-4 md:p-8 font-Inter overflow-x-hidden mb-96">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          SEED
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
      <h1 className="text-[#155528] font-bold text-2xl md:text-[36px] mb-6">
        NAMIBIA FARMERS
      </h1>
      <img src={community11} alt="community11" className="w-full h-auto" />
      {/* nav */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 w-full">
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
                  {[
                    "Sheep",
                    "Goats",
                    "Chicken",
                    "Tilapia",
                    "Rabbit",
                    "Bees",
                    "Ducks",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center hover:bg-[#AFAFAF] p-2 cursor-pointer text-[16px]"
                    >
                      <img
                        src={livestockicon}
                        alt="livestock icon"
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

        {/* nav buttons */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 mt-2 md:mt-0 md:space-x-4 font-medium text-base md:text-[24px] w-full md:w-auto">
          <a href="/buy-page">
            <button className="bg-[#EDF0EF] w-full md:w-[254px] h-[50px] px-2 py-1 md:py-2 rounded-md">
              Buy
            </button>
          </a>
          <a href="/cattles-investment-tracker">
            <button className="bg-[#EDF0EF] w-full md:w-[254px] h-[50px] px-2 py-1 md:py-2 rounded-md">
              Invest
            </button>
          </a>
          <a href="/cattles-donation-page">
            <button className="bg-[#EDF0EF] w-full md:w-[254px] h-[50px] px-2 py-1 md:py-2 rounded-md">
              Donate
            </button>
          </a>
        </div>
      </div>

      <h1 className="font-bold text-2xl md:text-[32px] mb-8">
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

        {/* Production and Year Buttons */}
        <div className="flex w-full md:w-auto flex-row space-x-1 md:space-x-2 font-medium text-base md:text-xl">
          <div className="relative w-1/2 md:w-[216px]">
            <div
              className="focus:outline-none p-2 md:p-6 font-medium md:text-[24px] w-full md:w-[216px] md:h-[50px] rounded-md focus:ring-2  bg-[#155528] text-white appearance-none flex items-center justify-between cursor-pointer"
              onClick={() => setIsReportOpen(!isReportOpen)}
            >
              <span>{selectedReportType}</span>{" "}
              {/* Display selected report type */}
              {isReportOpen ? (
                <IoMdArrowDropup className="text-white text-[20px] md:text-[30px]" />
              ) : (
                <IoMdArrowDropdown className="text-white text-[20px] md:text-[30px]" />
              )}
            </div>

            {isReportOpen && (
              <div className="absolute w-full bg-[#EBEBEB]  mt-1 z-10">
                {reportTypes.map((reportType) => (
                  <div
                    key={reportType}
                    className="flex items-center p-3 hover:bg-[#afafaf] cursor-pointer"
                    onClick={() => handleReportSelect(reportType)}
                  >
                    <img src={ordericon} alt="icon" className="w-6 h-6 mr-3" />
                    <span className="">{reportType}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="bg-[#F3F5F5] w-1/4 md:w-[216px] md:h-[50px] text-sm md:text-[24px] font-medium px-2 py-1 md:py-2 rounded-md">
            2025
          </button>
          <button className="bg-[#F3F5F5] w-1/4 md:w-[216px] md:h-[50px] text-sm md:text-[24px] font-medium px-2 py-1 md:py-2 rounded-md">
            2026
          </button>
          <button className="bg-[#F3F5F5] w-1/4 md:w-[216px] md:h-[50px] text-sm md:text-[24px] font-medium px-2 py-1 md:py-2 rounded-md">
            2027
          </button>
        </div>
      </div>

      <div className="flex w-full flex-row space-x-4">
        {/* Crop Dropdown */}
        <div className="relative w-full md:w-1/2">
          <button
            className="bg-[#155528] py-2 md:h-[55px] text-white w-full text-left p-8 font-medium text-xl md:text-[24px] rounded-md"
            onClick={toggleCropDropdown}
          >
            Crop
            {/* Toggle between dropdown and dropup icon */}
            {isCropDropdownOpen ? (
              <IoMdArrowDropup className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-[30px]" />
            ) : (
              <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-[30px]" />
            )}
          </button>

          {isCropDropdownOpen && (
            <div className="absolute mt-2 w-full bg-[#EBEBEB] shadow-lg rounded-md z-10">
              <ul>
                {cropOptions.map((crop, index) => (
                  <li
                    key={index}
                    className="flex items-center px-4 py-2 text-lg hover:bg-[#afafaf] cursor-pointer"
                  >
                    <img
                      src={cropicon}
                      alt="Crop Icon"
                      className="w-6 h-6 mr-4"
                    />
                    {crop}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Second Livestock Dropdown */}
        <div className="relative w-full md:w-1/2">
          <button
            className="bg-[#F3F5F5] py-2 md:h-[55px] w-full text-left p-8 font-medium text-xl md:text-[24px] rounded-md"
            onClick={toggleSecondLivestockDropdown}
          >
            Livestock
            {/* Toggle between dropdown and dropup icon */}
            {isSecondLivestockDropdownOpen ? (
              <IoMdArrowDropup className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[30px]" />
            ) : (
              <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[30px]" />
            )}
          </button>

          {isSecondLivestockDropdownOpen && (
            <div className="absolute mt-2 w-full bg-[#EBEBEB] shadow-lg rounded-md z-10">
              <ul>
                {livestockOptions.map((livestock, index) => (
                  <li
                    key={index}
                    className="flex items-center px-4 py-2 text-lg hover:bg-[#afafaf] cursor-pointer"
                  >
                    <img
                      src={livestockicon}
                      alt="Livestock Icon"
                      className="w-6 h-6 mr-4"
                    />
                    {livestock}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <h1 className="font-bold text-2xl md:text-[40px] ">IMPACT</h1>
        <img
          src={demoicon}
          alt="Demo Icon"
          className="w-6 h-6 md:w-[236px] md:h-[98px]"
        />
      </div>
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
      <p className="text-base md:text-[34px] leading-5 md:leading-10 md:mb-96">
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

export default SeedDashboard;
