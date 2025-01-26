import React, { useState } from "react";
import ServicesCardspage from "./ServicesCardspage";

const ServicesPage = () => {
  const [selectedSection, setSelectedSection] = useState("crops");

  return (
    <div className="font-Inter px-6 md:px-8 overflow-x-auto">
      <div className="flex flex-col gap-4 lg:flex-row mb-12 items-center md:mb-6"></div>

      {/* Progress Bar Section */}
      <div className="flex flex-row  space-x-4 md:mb-8">
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
      <div className="flex items-center w-full gap-2 mb-8 flex-row md:gap-4 mt-4">
        {/* Mobile App Div */}
        <div className="flex-col bg-[#155528] border-[#979797] border-b-[3px] rounded-md p-2 md:p-4 box-border w-full h-[62px] flex items-center justify-center">
          <h1 className="text-white text-center font-bold text-[12px] md:text-[24px]">
            MOBILE APP
          </h1>
          <h1 className="text-xs md:text-[20px] font-normal text-white">
            Demos
          </h1>
        </div>

        {/* Farming Div */}
        <div className="flex-col bg-[#CFD7D7] border-[#979797] border-b-[3px] rounded-md p-2 md:p-4 box-border w-full h-[62px] flex items-center justify-center">
          <h1 className=" text-center text-[12px] md:text-[24px] font-bold">
            FARMING
          </h1>
          <h1 className="text-xs md:text-[20px] font-normal ">Demos</h1>
        </div>

        {/* Placeholder Div */}
        <div className="bg-[#CFD7D7] border-[#979797] border-b-[3px] rounded-md p-4 box-border w-full h-[62px] flex items-center justify-center">
          <b className="text-[#000] text-center text-[12px] md:text-base lg:text-4xl">
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
