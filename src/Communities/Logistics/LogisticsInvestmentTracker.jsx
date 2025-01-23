import React from "react";
import { HiSearch } from "react-icons/hi";
import community1 from "../../Assets/community1.png";
import ReportsGraph from "../../ReportsPages/ReportsGraph";
import PlantStages from "../PlantStages";
import ReviewCard from "../ReviewCard";
import colorwheel from "../../Assets/colorwheel.png";

const LogisticsInvestmentTracker = () => {
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
      <h1 className="text-[#155528] font-bold text-2xl md:text-[36px] mb-4">
        NAMIBIA FARMERS
      </h1>
      <img src={community1} alt="community1" className="w-full h-auto" />
      {/* nav */}
      <div className="flex items-center justify-between mt-8 mb-10">
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
      <p className=" md:text-[34px] md:leading-10">
        Dallan Farm specialize in producing high value products - Strawberries,
        Potatoes, Indigenous
        <br className="md:block hidden" /> vegetables, onions, beans, and Free
        range chicken . We also support farmers with advisory
        <br className="md:block hidden" /> services & best practice .
      </p>
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

export default LogisticsInvestmentTracker;
