import React, { useState } from "react";
import ServicesCardspage from "./ServicesCardspage";

const ServicesPage = () => {
  const [selectedSection, setSelectedSection] = useState("crops");

  return (
    <div className="font-Inter px-6 md:px-8">
      <div className="flex flex-col gap-4 lg:flex-row mb-12 items-center md:mb-6"></div>

      {/* Progress Bar Section */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-8">
        <div
          className="w-full md:w-[50%] cursor-pointer"
          onClick={() => setSelectedSection("crops")}
        >
          <div className="flex justify-between mb-1">
            <p className="md:text-[24px] font-bold ml-2 mb-2">CROP</p>
          </div>
          <div className="h-[9px] rounded-md overflow-hidden bg-[#D9D9D9]">
            <div
              className={`h-[9px] rounded-md bg-[#114918] ${
                selectedSection === "crops" ? "w-[100%]" : "w-[0%]"
              }`}
            ></div>
          </div>
        </div>

        <div
          className="w-full md:w-[50%] cursor-pointer"
          onClick={() => setSelectedSection("livestock")}
        >
          <div className="flex justify-between mb-1">
            <p className="md:text-[24px] font-bold ml-2 mb-2">LIVESTOCK</p>
          </div>
          <div className="h-[9px] rounded-md overflow-hidden bg-[#D9D9D9]">
            <div
              className={`h-[9px] rounded-md bg-[#114918] ${
                selectedSection === "livestock" ? "w-[100%]" : "w-[0%]"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex flex-col items-center w-full gap-2 mb-8 md:flex-row md:gap-4  mt-1">
        {/* Mobile App Div */}
        <div className="bg-[#155528] border-[#979797] border-b-[3px] rounded-md p-2 md:p-4 box-border w-full flex items-center justify-center">
          <b className="text-white text-center text-sm md:text-[24px]">
            MOBILE APP
            <br />
            <span className="text-xs md:text-[20px] font-normal text-white">
              Demos
            </span>
          </b>
        </div>

        {/* Farming Div */}
        <div className="bg-[#CFD7D7] border-[#979797] border-b-[3px] rounded-md p-2 md:p-4 box-border w-full flex items-center justify-center">
          <b className="text-[#000] text-center text-sm md:text-[24px]">
            FARMING
            <br />
            <span className="text-xs md:text-[20px] font-normal text-[#000]">
              Demos
            </span>
          </b>
        </div>

        {/* Placeholder Div */}
        <div className="bg-[#CFD7D7] border-[#979797] border-b-[3px] rounded-md p-4 box-border w-full flex items-center justify-center">
          <b className="text-[#000] text-center text-sm md:text-base lg:text-4xl">
            -
            <br />
            <span className="text-xs sm:text-sm font-semibold text-[#000]"></span>
          </b>
        </div>
      </div>

      {/* Card Section */}
      <ServicesCardspage />
    </div>
  );
};

export default ServicesPage;
