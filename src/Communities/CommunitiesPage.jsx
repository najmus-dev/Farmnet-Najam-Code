import React from "react";
import { HiSearch } from "react-icons/hi";
import CommunityGallery from "./CommunityGallery";
import colorwheel from "../Assets/colorwheel.png";

const CommunitiesPage = () => {
  return (
    <div className="p-4 md:p-7 font-Inter overflow-x-auto">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          COMMUNITIES
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

      {/* gallery */}
      <CommunityGallery />

      {/* color wheel section */}
      <a href="/environmental-social-governance-main-page">
        <div className="bg-[#FAFBFB] flex items-center md:mt-28 justify-between mt-8 p-6 border-b-2 border-gray-300 rounded-md">
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

export default CommunitiesPage;
