import React from "react";
import { HiSearch } from "react-icons/hi";
import seed1 from "../../Assets/seed1.png";
import donation from "../../Assets/donation.png";
import colorwheel from "../../Assets/colorwheel.png";
import { GoDownload } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

const VegetablesDonationConfirmation = () => {
  return (
    <div className="p-4 md:p-8  overflow-x-hidden">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          DONATE
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
      <img src={seed1} alt="seed1" className="w-full h-auto" />
      {/* nav */}
      <div className="flex items-center justify-between mt-8 mb-10">
        <div className="flex space-x-8 md:space-x-36">
          <h1 className="font-bold text-2xl md:text-[40px]">ESG</h1>
          <IoMdArrowDropdown className="text-[30px]" />
        </div>

        <div className="flex space-x-1 md:space-x-4 text-white font-medium text-base md:text-[24px]  lg:w-auto">
          <a href="/buy-page">
            <button className="bg-[#155528] md:w-[254px] md:h-[50px]  px-2 py-1 md:py-2 rounded-md">
              Buy
            </button>
          </a>
          <a href="/valueaddition-investment-tracker">
            <button className="bg-[#155528] md:w-[254px] md:h-[50px] px-2 py-1 md:py-2 rounded-md">
              Invest
            </button>
          </a>
          <a href="/valueaddition-donation-page">
            <button className="bg-[#155528] md:w-[254px] md:h-[50px] px-2 py-1 md:py-2 rounded-md">
              Donate
            </button>
          </a>
        </div>
      </div>
      <h1 className="font-bold text-2xl md:text-[32px] mb-4">
        Maize Production
      </h1>
      <div className="text-xl md:text-[30px] md:leading-8">
        <p>Model of excellence in Agri business development.</p>
        <p>Sustainable communities to drive employment and enterprise.</p>
        <p>Valu addition uints</p>
        <p className="mt-10 mb-6">Benefits :,,,,,,,</p>
      </div>
      {/* image card */}
      <div className="flex items-center justify-center  bg-white">
        <div className="w-full md:w-[1410px] h-[480px] md:h-[991px] bg-[#FAFBFB] border border-[#919291]">
          <div className="pt-6">
            <h1 className="text-bold md:text-[32px] font-bold text-center mb-6">
              Support -A-Community of farmers
            </h1>
            <img
              src={donation}
              alt="Support A Community of Farmers"
              className="w-full md:w-[1410px] h-[300px] md:h-[686px] object-cover"
            />
          </div>
        </div>
      </div>
      <h1 className="font-bold text-2xl md:text-[34px] mt-4 md:mt-14 text-center mb-2 mr-8">
        Choose amount
      </h1>
      <h1 className="font-bold text-xl md:text-[34px] md:leading-relaxed mb-4">
        How much would you like to donate?
      </h1>
      <div className=" text-xl md:text-[36px] mb-4  md:leading-10">
        <p>
          As a contributor to supporting the developments of farmers
          communities, we make sure that you donation goes directly in
          supporting our course.
        </p>
        <p>Thank you for your support.</p>
      </div>
      {/* buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8 md:mt-20 text-[20px] md:text-[48px] font-bold">
        <button className="w-full md:w-[271px] rounded-md h-[80px] md:h-[105px] bg-[#D9D9D9]">
          USD5
        </button>
        <button className="w-full md:w-[271px] rounded-md h-[80px] md:h-[105px] bg-[#D9D9D9]">
          USD10
        </button>
        <button className="w-full md:w-[271px] rounded-md h-[80px] md:h-[105px] bg-[#D9D9D9]">
          USD20
        </button>
        <button className="w-full md:w-[271px] rounded-md h-[80px] md:h-[105px] bg-[#155528] text-white">
          USD50
        </button>
        <button className="w-full md:w-[271px] rounded-md h-[80px] md:h-[105px] text-[16px] md:text-[24px] bg-[#D9D9D9]">
          Customise your donation
        </button>
      </div>

      <h1 className="font-bold text-2xl md:text-[34px] md:leading-relaxed mb-4 mt-6">
        Bank deatils
      </h1>
      {/* section */}
      {/* row 1 */}
      <div className="flex w-full md:space-x-8 space-x-2 mt-32">
        <button className="bg-[#FAFBFB] py-2 md:h-[109px] border-b-2 w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-bold  text-base md:text-[32px] rounded-md">
          Farmers Networks App
        </button>
        <button className="bg-[#F3F5F5] py-2 md:h-[109px] border-b-2 w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-bold  text-base md:text-[32px] rounded-md">
          Bank deatils
        </button>
      </div>
      {/* row 2 */}
      <div className="flex w-full md:space-x-8 space-x-2 mt-4">
        <button className="bg-[#FAFBFB] py-2 md:h-[109px] border-b-2 w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-bold  text-base md:text-[32px] rounded-md">
          Account Number
        </button>
        <button className="bg-[#F3F5F5] py-2 md:h-[109px] border-b-2 w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-bold  text-base md:text-[32px] rounded-md">
          2046261758
        </button>
      </div>
      {/* row 3 */}
      <div className="flex w-full md:space-x-8 space-x-2 mt-4">
        <button className="bg-[#FAFBFB] py-2 md:h-[109px] border-b-2 w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-bold  text-base md:text-[32px] rounded-md">
          BRANCH CODE
        </button>
        <button className="bg-[#F3F5F5] py-2 md:h-[109px] border-b-2 w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-bold  text-base md:text-[32px] rounded-md">
          90
        </button>
      </div>
      {/* row 4 */}
      <div className="flex w-full md:space-x-8 space-x-2 mt-4">
        <button className="bg-[#FAFBFB] py-2 md:h-[109px] border-b-2 w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-bold  text-base md:text-[32px] rounded-md">
          SWIFT CODE
        </button>
        <button className="bg-[#F3F5F5] py-2 md:h-[109px] border-b-2 w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-bold  text-base md:text-[32px] rounded-md">
          BARCKENX
        </button>
      </div>
      <h1 className="font-semibold text-xl md:text-[34px]  mb-4 mt-8 md:mt-80">
        Please confirm the amount you are donating.
      </h1>
      {/* section */}
      <div className="space-y-4 ">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:w-full lg:h-[114px] border border-[#919291] rounded-lg bg-[#FAFBFB]  pt-4 md:pt-0">
          <h1 className="mb-2 md:mb-0 text-[24px] lg:text-[36px] lg:pl-12">
            Payment amount
          </h1>
          <h1 className="flex items-center justify-center w-full lg:w-[396px] h-[60px] lg:h-[114px] border-2 border-[#919291] rounded-lg bg-[#F3F5F5] text-[24px] lg:text-[36px] font-semibold md:font-bold text-gray-800">
            USD 100
          </h1>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:w-full lg:h-[114px] border-2 border-[#919291] rounded-lg bg-[#FAFBFB]  pt-4 md:pt-0">
          <h1 className="mb-2 md:mb-0 text-[24px] lg:text-[36px] lg:pl-12">
            Frequency
          </h1>
          <h1 className="flex items-center justify-center w-full lg:w-[396px] h-[60px] lg:h-[114px] border-2 border-[#919291] rounded-lg bg-[#F3F5F5] text-[24px] lg:text-[36px] font-semibold md:font-bold text-gray-800">
            One time
          </h1>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:w-full lg:h-[114px] border-2 border-[#919291] rounded-lg bg-[#FAFBFB]  pt-4 md:pt-0">
          <h1 className="mb-2 md:mb-0 text-[24px] lg:text-[36px] lg:pl-12 font-semibold md:font-bold">
            Donation Total
          </h1>
          <h1 className="flex items-center justify-center w-full lg:w-[396px] h-[60px] lg:h-[114px] border-2 border-[#919291] rounded-lg bg-[#F3F5F5] text-[24px] lg:text-[36px] font-semibold md:font-bold text-gray-800">
            USD 100
          </h1>
        </div>
      </div>
      <h1 className="font-semibold text-2xl md:text-[32px] mt-4 md:mt-32 text-center mb-2 md:mb-32 mr-8">
        Thank you for donating to support a farmer
      </h1>
      {/* buttons */}
      <div className="flex w-full space-x-4 mt-8 ">
        <button className="bg-[#FAFBFB] py-2 md:h-[65px] border-b-2 w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-medium text-lg md:text-[32px] rounded-md">
          Contact Admin
        </button>
        <button className="bg-[#155528] py-2 md:h-[65px] text-white border-b-2 w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-medium text-lg md:text-[32px] rounded-md">
          Donate now
        </button>
      </div>
      <div className="flex items-center mb-8 md:mb-36 mt-8 md:mt-16 space-x-2 justify-end">
        <h1 className="text-xl md:text-[32px] font-medium">
          Download your receipt
        </h1>
        <GoDownload className="md:w-[55px] w-[25px] h-[26px] md:h-[40px]" />
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

export default VegetablesDonationConfirmation;
