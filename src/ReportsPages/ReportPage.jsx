import React from "react";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import ReportGraph from "../ReportsPages/ReportsGraph";
import ReportsData from "./ReportsData";
import calender from "../Assets/calender.png";
import clock from "../Assets/clock.png";
import reportslocationicon from "../Assets/reportslocationicon.png";
import livestockicon from "../Assets/livestockicon.png";
import ordericon from "../Assets/ordericon.png";
import cropicon from "../Assets/cropicon.png";
import demoicon from "../Assets/demoicon.png";

const ReportPage = () => {
  // Default state for selected types
  const [selectedType, setSelectedType] = useState("Crop");
  const handleTypeChange = (event) => setSelectedType(event.target.value);

  // Country Dropdown States and Handlers
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Namibia");
  const countryList = [
    "Angola",
    "Botswana",
    "Cameroon",
    "DRC",
    "Cote d'Ivoire",
    "Eswatini",
    "Ethiopia",
    "Ghana",
    "Kenya",
    "Lesotho",
    "Malawi",
    "Mozambique",
    "Namibia",
    "Nigeria",
    "Rwanda",
    "Senegal",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Tanzania",
    "Uganda",
    "Zambia",
    "Zimbabwe",
  ];
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountryOpen(false);
  };

  // Report Type Dropdown States and Handlers
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [selectedReportType, setSelectedReportType] = useState("Production");
  const reportTypes = ["Production", "Revenue", "Inventory"];
  const handleReportSelect = (reportType) => {
    setSelectedReportType(reportType);
    setIsReportOpen(false);
  };

  // product dropdown
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ["Production", "Revenue", "Inventory"];

  // Crop Dropdown States and Handlers
  const [isCropOpen, setIsCropOpen] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState("Maize");
  const cropList = [
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
  const handleCropSelect = (crop) => {
    setSelectedCrop(crop);
    setIsCropOpen(false);
  };

  // Livestock Dropdown States and Handlers
  const [isLivestockOpen, setIsLivestockOpen] = useState(false);
  const [selectedLivestock, setSelectedLivestock] = useState("Chicken");
  const livestockList = [
    "Cattle",
    "Sheep",
    "Goats",
    "Chicken",
    "Tilapia",
    "Bees",
    "Rabbits",
    "Ducks",
  ];
  const handleLivestockSelect = (livestock) => {
    setSelectedLivestock(livestock);
    setIsLivestockOpen(false);
  };

  return (
    <div className="p-4 md:p-8 mt-4 font-Inter overflow-x-auto">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-3xl sm:text-2xl md:text-[36px]">
          REPORTS
        </h1>
      </div>
      {/* Search and Filters */}
      <div className="flex flex-col gap-4 lg:flex-row items-center  md:mb-6">
        {/* Search Input */}
        <div className="w-full mb-2 lg:mb-0">
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
      {/* green yellow section */}
      <div className="mb-6 font-semibold">
        {/* Country name  */}
        <div className="flex flex-row">
          <h1 className="text-white bg-[#155528] p-2 md:p-6 rounded-tl-lg font-bold md:text-[32px] w-1/2 lg:w-[60%]">
            Country
          </h1>

          {/* Country Dropdown */}
          <div className="relative w-1/2 lg:w-[40%]">
            <div
              className="focus:outline-none p-2 md:p-6 font-bold md:text-[32px] w-full rounded-tr-lg focus:ring-2 focus:ring-green-600 bg-[#5C9247] text-white flex items-center justify-between cursor-pointer"
              onClick={() => setIsCountryOpen(!isCountryOpen)}
            >
              <span>{selectedCountry}</span>
              {isCountryOpen ? (
                <IoMdArrowDropup className="text-[20px] md:text-[50px]" />
              ) : (
                <IoMdArrowDropdown className="text-[20px] md:text-[50px]" />
              )}
            </div>

            {isCountryOpen && (
              <div className="absolute w-full bg-[#EBEBEB] shadow-lg rounded-b-lg mt-1 z-10">
                {countryList.map((country) => (
                  <div
                    key={country}
                    className="flex items-center p-3 hover:bg-[#afafaf] cursor-pointer"
                    onClick={() => handleCountrySelect(country)}
                  >
                    <img
                      src={reportslocationicon}
                      alt="icon"
                      className="w-6 h-6 mr-3"
                    />
                    <span className="text-black">{country}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Type of Report Filter Section */}
        <div className="flex flex-row ">
          {/* livestock and crop option */}
          <div className="relative w-1/2 lg:w-[60%]">
            <select
              id="reportType"
              onChange={handleTypeChange}
              className="p-2 md:p-6 z-10 bg-[#83C543] rounded-bl-lg font-bold md:text-[32px] w-full text-black appearance-none cursor-pointer"
            >
              <option
                className="bg-[#EBEBEB] hover:bg-[#afafaf] text-black ci"
                value="Crop"
              >
                Crop
              </option>
              <option
                className="bg-[#EBEBEB] hover:bg-[#afafaf] text-black"
                value="Livestock"
              >
                Livestock
              </option>
            </select>

            <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-[20px] md:text-[50px] pointer-events-none" />
          </div>

          {/* Production, revenue, inventory Type Dropdown */}
          <div className="relative w-1/2 lg:w-[40%] ">
            <div
              className="focus:outline-none p-2 md:p-6 font-bold md:text-[32px] w-full rounded-br-lg focus:ring-2 focus:ring-yellow-500 bg-[#F3F368] text-black flex items-center justify-between cursor-pointer"
              onClick={() => setIsReportOpen(!isReportOpen)}
            >
              <span>{selectedReportType}</span>
              {isReportOpen ? (
                <IoMdArrowDropup className="text-black text-[20px] md:text-[50px]" />
              ) : (
                <IoMdArrowDropdown className="text-black text-[20px] md:text-[50px]" />
              )}
            </div>

            {isReportOpen && (
              <div className="absolute w-full bg-[#EBEBEB] shadow-lg rounded-b-lg mt-1 z-10">
                {reportTypes.map((reportType) => (
                  <div
                    key={reportType}
                    className="flex items-center p-3 hover:bg-[#afafaf] cursor-pointer"
                    onClick={() => handleReportSelect(reportType)}
                  >
                    <img src={ordericon} alt="icon" className="w-6 h-6 mr-3" />
                    <span className="text-black">{reportType}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Report Details */}
        <div className="space-y-4 mt-6 md:mt-10">
          <div className="flex md:flex-row flex-col md:justify-between md:items-center">
            {/* Crop Dropdown */}
            {selectedType === "Crop" && (
              <div className="relative">
                <div
                  className="focus:outline-none uppercase  font-bold text-3xl sm:text-2xl md:text-[36px] w-full  rounded-tr-lg focus:ring-2 focus:ring-green-600 bg-white text-[#155528] appearance-none flex items-center justify-between cursor-pointer md:mr-24"
                  onClick={() => setIsCropOpen(!isCropOpen)}
                >
                  <span>{selectedCrop}</span>
                  {isCropOpen ? (
                    <IoMdArrowDropup className="text-black text-[20px] md:text-[50px]" />
                  ) : (
                    <IoMdArrowDropdown className="text-black text-[20px] md:text-[50px]" />
                  )}
                </div>

                {isCropOpen && (
                  <div className="absolute w-full bg-[#EBEBEB] shadow-lg rounded-b-lg ">
                    {cropList.map((crop) => (
                      <div
                        key={crop}
                        className="flex items-center p-3 hover:bg-[#afafaf] cursor-pointer"
                        onClick={() => handleCropSelect(crop)}
                      >
                        <img
                          src={cropicon}
                          alt="icon"
                          className="w-6 h-6 mr-3"
                        />
                        <span className="">{crop}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Livestock Dropdown */}
            {selectedType === "Livestock" && (
              <div className="relative">
                <div
                  className="focus:outline-none uppercase font-bold text-3xl sm:text-2xl md:text-[36px] w-full  rounded-br-lg focus:ring-2 focus:ring-yellow-500 bg-white text-[#155528] appearance-none flex items-center justify-between cursor-pointer md:mr-24"
                  onClick={() => setIsLivestockOpen(!isLivestockOpen)}
                >
                  <span>{selectedLivestock}</span>{" "}
                  {/* Display selected livestock */}
                  {isLivestockOpen ? (
                    <IoMdArrowDropup className="text-black text-[20px] md:text-[50px]" />
                  ) : (
                    <IoMdArrowDropdown className="text-black text-[20px] md:text-[50px]" />
                  )}
                </div>

                {isLivestockOpen && (
                  <div className="absolute w-full bg-[#EBEBEB] shadow-lg rounded-b-lg  ">
                    {livestockList.map((livestock) => (
                      <div
                        key={livestock}
                        className="flex items-center p-3 hover:bg-[#afafaf]  cursor-pointer"
                        onClick={() => handleLivestockSelect(livestock)}
                      >
                        <img
                          src={livestockicon}
                          alt="icon"
                          className="w-6 h-6 mr-3"
                        />
                        <span className="">{livestock}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="flex space-x-8 text-[#19253C]">
              <div className="flex space-x-4 items-center">
                <h1 className="italic md:text-[24px]">Opening Date</h1>
                <img
                  src={calender}
                  alt="calendar"
                  className="w-[25px] h-[26px]"
                />
              </div>
              <div className="flex space-x-4 items-center">
                <h1 className="italic md:text-[24px]">Closing Date</h1>
                <img
                  src={calender}
                  alt="calendar"
                  className="w-[25px] h-[26px]"
                />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:justify-between md:items-center">
            <div className="flex flex-col space-y-4">
              <div
                className="flex space-x-4 md:space-x-8 items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <h1 className="text-2xl md:text-[40px] font-bold">
                  Production
                </h1>
                {isOpen ? (
                  <IoMdArrowDropup className="text-2xl md:text-[50px] " />
                ) : (
                  <IoMdArrowDropdown className="text-2xl md:text-[50px] " />
                )}
              </div>
              {isOpen && (
                <ul className="space-y-2 text-lg p-3 md:text-xl font-semibold bg-[#EBEBEB] hover:bg-slate-200">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 cursor-pointer hover:bg-[#afafaf]"
                    >
                      <img
                        src={ordericon}
                        alt="Order Icon"
                        className="w-5 h-5 object-contain" // Adjust size as needed
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a href="/cart-page">
              <button className="bg-[#155528] text-[24px] font-medium text-white px-2 w-full mt-2 md:mt-0 md:w-[440px] h-[50px] rounded-md py-2">
                Subscribe for reports
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* time and writer section */}
      <div className="flex items-center justify-start space-x-12 mt-6  ">
        {/* Writer Info */}
        <h1 className="text-sm md:text-[20px]">Story by Farmnet</h1>
        {/* Read Time */}
        <div className="flex items-center space-x-1 text-green-700 ">
          <span className="w-4 h-4 bg-black  rounded-full inline-block"></span>
          <div className=" flex items-center space-x-1">
            <img src={clock} alt="clock" className="ml-2 w-[24px] h-[24px]" />
            <h1 className="text-sm md:text-[20px]">19/11/2024</h1>
          </div>
        </div>
      </div>
      {/* paragraph */}
      {/* <p className=" md:text-[35px] mt-2 md:mt-4 mb-2 md:mb-4 leading-10 "> */}
      <p className="md:font-medium md:text-[26px] md:leading-8 mt-2 md:mt-6 ">
        Farmer Statistics by Country - Namibia. The population of smallholder
        Farmers in Namibia is 0.2 Million. Data from Current registered users of
        the Farmers Networks App - type of crop or livestock Farming and land
        size used for Farming.
      </p>
      {/* Featured Report */}
      <div className="md:mt-16">
        <div className="flex items-center justify-between">
          <h3 className="text-black font-bold text-xl md:text-[40px]">
            Featured Report
          </h3>
          <img
            src={demoicon}
            alt="Demo Icon"
            className="w-[100px] h-[40px] md:w-[236px] md:h-[98px]"
          />
        </div>

        {/* Reports Graph */}
        <ReportGraph />
        <ReportsData />

        <h1 className="font-bold text-2xl md:text-[40px] mt-4 md:mt-8 mb-6">
          Comments
        </h1>
        {/* <p className="text-base md:text-[34px] leading-5 md:leading-10"> */}
        <p className="md:font-medium md:text-[26px] md:leading-8 mt-2 md:mt-6 ">
          In 2024, maize production in Namibia is projected to experience an
          increase of 2% compared to 2022 production levels, with an annual
          production estimated at 3,834,618 metric tons.
        </p>
        {/* <p className="text-base md:text-[34px] leading-5 md:leading-10"> */}
        <p className="md:font-medium md:text-[26px] md:leading-8  ">
          This growth is significant, and it’s worth noting that the Western and
          Southern districts are expected to produce the most substantial
          volumes of maize. Specifically, districts like Masinga (Machakos),
          Kilgoris (Narok), Mwala (Machakos), Cherangany (Trans Nzoia), Yatta
          (Machakos), and Kibwezi West (Makueni) are anticipated to contribute
          significantly to maize production in Kenya.
        </p>
      </div>
      {/* veiw button */}
      <div className="flex justify-end items-end mt-10 mb-16">
        <a href="/reports-view-more-page">
          <p className="text-[#919291] hover:text-[#b1b0b0] font-bold underline text-lg md:text-[32px] mt-2 md:mt-6">
            View more
          </p>
        </a>
      </div>
    </div>
  );
};

export default ReportPage;
