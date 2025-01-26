import React from "react";
import map from "../Assets/map.png";
import pinlocation from "../Assets/pinlocation.png";
import HomePageHeader from "./HomePageHeader";

const Homepage = () => {
  return (
    <div className="px-4 md:px-0">
      <HomePageHeader />
      <div className="relative ">
        {/* Text Section */}
        <div className="absolute top-2 md:left-8 text-left">
          <div className="mb-4">
            <p className="text-[18px] md:text-[40px] font-semibold">
              USD 12.35B
            </p>
            <p className="text-[14px] md:text-[24px] font-semibold">GDP</p>
          </div>
          <div className="mb-4">
            <p className="text-[16px] md:text-[36px] font-semibold">
              USD 0.62B
            </p>
            <p className="text-[14px] md:text-[24px] font-semibold">
              Agriculture Revenue (5% GDP)
            </p>
          </div>
          <div>
            <p className="text-[16px] md:text-[36px] font-semibold">100,000</p>
            <p className="text-[14px] md:text-[24px] font-semibold">Farmers</p>
          </div>
        </div>

        {/* Map Image */}
        <div className="relative">
          <img src={map} alt="map" className="w-full md:h-[596px]" />
          {/* Pin Location */}
          <img
            src={pinlocation}
            alt="pinlocation"
            className="absolute w-[24px] h-[24px] md:w-[61px] md:h-[60px] transform -translate-x-1/2 -translate-y-1/2 top-[75%] left-[55%]"
          />
        </div>

        {/* Login Section */}
        <div className="text-right flex flex-col items-end md:px-4">
          <div className="relative w-full md:w-[622px]">
            {/* Login Section Container */}
            <div className="relative md:top-[-40px]">
              <h2 className="text-2xl font-semibold mb-4 text-left">Log-In</h2>
              {/* Login Inputs */}
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Enter user email"
                  className="w-full h-[57px] text-[24px] placeholder-[#919291] font-normal mb-4 border-[3px] border-[#D9D9D9] rounded-md px-2"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full h-[57px] text-[24px] placeholder-[#919291] font-normal border-[3px] border-[#D9D9D9] rounded-md px-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
