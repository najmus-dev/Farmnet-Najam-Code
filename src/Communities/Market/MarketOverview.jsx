import React from "react";
import { HiSearch } from "react-icons/hi";
import community1 from "../../Assets/community1.png";
import ReportsGraph from "../../ReportsPages/ReportsGraph";
import colorwheel from "../../Assets/colorwheel.png";

const MarketOverview = () => {
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
        src={community1}
        alt="community1"
        className="w-full h-auto rounded-md"
      />
      {/* nav */}
      <div className="flex items-center justify-between mt-10 mb-6">
        <h1 className="font-bold text-2xl md:text-[40px]">LIVESTOCK</h1>
        <div className="flex space-x-1 md:space-x-4 text-white font-medium text-base md:text-[24px]  lg:w-auto">
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

      <h1 className="font-bold text-2xl md:text-[40px] mt-4 md:mt-8">IMPACT</h1>
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
      <h1 className="font-bold text-2xl md:text-[32px] mt-6 mb-8">Gallery</h1>
      {/* gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2 md:px-0">
        <img
          src={community1}
          alt="community1"
          className="w-full h-auto md:h-[397px] object-cover"
        />
        <img
          src={community1}
          alt="community1"
          className="w-full h-auto md:h-[397px] object-cover"
        />
        <img
          src={community1}
          alt="community1"
          className="w-full h-auto md:h-[397px] object-cover"
        />
        <img
          src={community1}
          alt="community1"
          className="w-full h-auto md:h-[397px] object-cover"
        />
      </div>
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
      {/* veiw button */}
      <div className="flex justify-end items-end">
        <a href="/seed-dashboard">
          <p className="text-[#919291] hover:text-[#b1b0b0] font-bold underline text-lg md:text-[32px] mt-2 md:mt-6">
            View more
          </p>
        </a>
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

export default MarketOverview;
