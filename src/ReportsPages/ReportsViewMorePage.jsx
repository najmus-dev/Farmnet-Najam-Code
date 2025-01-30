import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import calender from "../Assets/calender.png";

const ReportsViewMorePage = () => {
  return (
    <div className="p-4 md:p-8 mt-4 font-Inter overflow-x-auto">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-3xl sm:text-2xl md:text-[36px]">
          REPORTS
        </h1>
      </div>
      {/* Report Details */}
      <div className="md:space-y-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex items-center justify-center space-x-12">
            <div className="flex space-x-12 md:space-x-0 mb-2 md:mb-0">
              <div className="flex items-center justify-center md:space-x-32">
                <h1 className="font-semibold text-3xl sm:text-2xl md:text-[36px] text-[#919291]">
                  INPUTS
                </h1>
                <IoMdArrowDropdown className="text-[20px] md:text-[50px]" />
              </div>
              <div className="flex items-center justify-center md:space-x-12">
                <h1 className="font-bold text-3xl sm:text-2xl md:text-[36px]">
                  | SEEDS
                </h1>
                <IoMdArrowDropdown className="text-[20px] md:text-[50px]" />
              </div>
            </div>
          </div>

          <div className="flex space-x-8 text-[#19253C]">
            <div className="flex space-x-4 items-center">
              <h1 className="italic md:text-[24px]">Opening Date</h1>
              <img
                src={calender}
                alt="calender"
                className="w-[25px] h-[26px]"
              />
            </div>
            <div className="flex space-x-4 items-center">
              <h1 className="italic md:text-[24px]">Closing Date</h1>
              <img
                src={calender}
                alt="calender"
                className="w-[25px] h-[26px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="font-Poppins">
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <h1 className="font-semibold text-3xl sm:text-2xl md:text-[36px]">
            MAIZE
          </h1>
          <div className="flex space-x-3">
            <h1 className="bg-[#F3F5F5] w-1/2 h-[50px] md:w-[440px] md:h-[79px] text-2xl md:text-[36px] flex items-center justify-center rounded-md font-semibold">
              Farmers
            </h1>
            <h1 className="bg-[#F3F5F5] w-1/2 h-[50px] md:w-[440px] md:h-[79px] text-2xl md:text-[36px] flex items-center justify-center rounded-md font-semibold">
              2500
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4 mt-12 font-Inter text-[#919291]">
          <h1 className=" w-1/2 md:w-[440px] h-[39px] md:h-[49px] text-2xl md:text-[36px] font-semisemibold">
            Variety
          </h1>
          <h1 className=" w-1/2 md:w-[440px] h-[39px] md:h-[49px] text-2xl md:text-[36px] font-semisemibold">
            Quantity
          </h1>
        </div>
        <div className="flex justify-end space-x-3 ">
          <h1 className="bg-[#F3F5F5] w-1/2 h-[50px] md:w-[440px] md:h-[79px] text-2xl md:text-[36px] flex items-center justify-center rounded-md font-semibold">
            Zea Mais
          </h1>
          <h1 className="bg-[#F3F5F5] w-1/2 h-[50px] md:w-[440px] md:h-[79px] text-2xl md:text-[36px] flex items-center justify-center rounded-md font-semibold">
            2500
          </h1>
        </div>
        <div className="flex justify-end space-x-3 mt-2">
          <h1 className="bg-[#F3F5F5] w-1/2 h-[50px] md:w-[440px] md:h-[79px] text-2xl md:text-[36px] flex items-center justify-center rounded-md font-semibold">
            Zea Mais
          </h1>
          <h1 className="bg-[#F3F5F5] w-1/2 h-[50px] md:w-[440px] md:h-[79px] text-2xl md:text-[36px] flex items-center justify-center rounded-md font-semibold">
            2500
          </h1>
        </div>
        <div className="flex justify-end space-x-3 mt-2">
          <h1 className="bg-[#F3F5F5] w-1/2 h-[50px] md:w-[440px] md:h-[79px] text-2xl md:text-[36px] flex items-center justify-center rounded-md font-semibold">
            Zea Mais
          </h1>
          <h1 className="bg-[#F3F5F5] w-1/2 h-[50px] md:w-[440px] md:h-[79px] text-2xl md:text-[36px] flex items-center justify-center rounded-md font-semibold">
            2500
          </h1>
        </div>
        <div className="flex justify-end space-x-3 mt-2">
          <h1 className="bg-[#F3F5F5] w-1/2 h-[50px] md:w-[440px] md:h-[79px] text-2xl md:text-[36px] flex items-center justify-center rounded-md font-semibold">
            Zea Mais
          </h1>
          <h1 className="bg-[#F3F5F5] w-1/2 h-[50px] md:w-[440px] md:h-[79px] text-2xl md:text-[36px] flex items-center justify-center rounded-md font-semibold">
            2500
          </h1>
        </div>
      </div>
      {/* DownLoad report button */}
      <div className="flex justify-center md:justify-end mt-10 md:mt-96 mb-20">
        <a href="/pay-page">
          <button className="text-[24px] rounded-md font-medium bg-[#155528] text-white w-[300px] md:w-[440px] h-[50px] py-1">
            Down Load report
          </button>
        </a>
      </div>
    </div>
  );
};

export default ReportsViewMorePage;
