// import React, { useState } from "react";
// import ServicesCardspage from "./ServicesCardspage";
// import MobileAPPCardsPage from "./MobileAPPCardsPage";
// import FarmingDemoCardsPage from "./FarmingDemoCardsPage";

// const ServicesPage = () => {
//   const [selectedSection, setSelectedSection] = useState("crops");

//   return (
//     <div className="font-Inter px-6 md:px-8 overflow-x-auto">
//       <div className="flex flex-col gap-4 lg:flex-row mb-12 items-center md:mb-6"></div>

//       {/* Progress Bar Section */}
//       <div className="flex flex-row  space-x-4 md:mb-8">
//         <div
//           className="w-full md:w-[50%] cursor-pointer"
//           onClick={() => setSelectedSection("crops")}
//         >
//           <div className="flex justify-between mb-1">
//             <p className="md:text-[24px] font-bold ml-2 mb-2">CROP</p>
//           </div>
//           <div className="h-[9px] rounded-md overflow-hidden bg-[#D9D9D9]">
//             <div
//               className={`h-[9px] rounded-md bg-[#114918] ${
//                 selectedSection === "crops" ? "w-[100%]" : "w-[0%]"
//               }`}
//             ></div>
//           </div>
//         </div>

//         <div
//           className="w-full md:w-[50%] cursor-pointer"
//           onClick={() => setSelectedSection("livestock")}
//         >
//           <div className="flex justify-between mb-1">
//             <p className="md:text-[24px] font-bold ml-2 mb-2">LIVESTOCK</p>
//           </div>
//           <div className="h-[9px] rounded-md overflow-hidden bg-[#D9D9D9]">
//             <div
//               className={`h-[9px] rounded-md bg-[#114918] ${
//                 selectedSection === "livestock" ? "w-[100%]" : "w-[0%]"
//               }`}
//             ></div>
//           </div>
//         </div>
//       </div>

//       {/* Button Section */}
//       <div className="flex items-center w-full gap-2 mb-8 flex-row md:gap-4 mt-4">
//         {/* Mobile App Div */}
//         <div className="flex-col bg-[#155528] border-[#979797] border-b-[3px] rounded-md p-2 md:p-4 box-border w-full h-[62px] flex items-center justify-center">
//           <h1 className="text-white text-center font-bold text-[12px] md:text-[24px]">
//             MOBILE APP
//           </h1>
//           <h1 className="text-xs md:text-[20px] font-normal text-white">
//             Demos
//           </h1>
//         </div>

//         {/* Farming Div */}
//         <div className="flex-col bg-[#CFD7D7] border-[#979797] border-b-[3px] rounded-md p-2 md:p-4 box-border w-full h-[62px] flex items-center justify-center">
//           <h1 className=" text-center text-[12px] md:text-[24px] font-bold">
//             FARMING
//           </h1>
//           <h1 className="text-xs md:text-[20px] font-normal ">Demos</h1>
//         </div>

//         {/* Placeholder Div */}
//         <div className="bg-[#CFD7D7] border-[#979797] border-b-[3px] rounded-md p-4 box-border w-full h-[62px] flex items-center justify-center">
//           <b className="text-[#000] text-center text-[12px] md:text-base lg:text-4xl">
//             -
//             <br />
//             <span className="text-xs sm:text-sm font-semibold text-[#000]"></span>
//           </b>
//         </div>
//       </div>

//       {/* Card Section */}
//       {/* <ServicesCardspage /> */}
//       <MobileAPPCardsPage />
//       <FarmingDemoCardsPage/>
//     </div>
//   );
// };

// export default ServicesPage;

import React, { useState } from "react";
import MobileAPPCardsPage from "./MobileAPPCardsPage";
import FarmingDemoCardsPage from "./FarmingDemoCardsPage";
import MainHeader from "../Components/MainHeader";

const ServicesPage = () => {
  const [selectedDemo, setSelectedDemo] = useState("mobileApp");

  return (
    <div>
      <MainHeader />
      <div className="font-Inter px-6 md:px-8 overflow-x-auto">
        <div className="flex flex-col gap-4 lg:flex-row mb-12 items-center md:mb-2"></div>

        {/* Progress Bar Section */}
        <div className="flex flex-row  space-x-4 md:mb-8">
          <div
            className="w-full md:w-[50%] cursor-pointer"
            onClick={() => setSelectedDemo("mobileApp")}
          >
            <div className="flex justify-between mb-1">
              <p className="md:text-[24px] font-bold ml-2 mb-2">CROP</p>
            </div>
            <div className="h-[9px] rounded-md overflow-hidden bg-[#D9D9D9]">
              <div
                className={`h-[9px] rounded-md bg-[#114918] ${
                  selectedDemo === "mobileApp" ? "w-[100%]" : "w-[0%]"
                }`}
              ></div>
            </div>
          </div>

          <div
            className="w-full md:w-[50%] cursor-pointer"
            onClick={() => setSelectedDemo("farming")}
          >
            <div className="flex justify-between mb-1">
              <p className="md:text-[24px] font-bold ml-2 mb-2">LIVESTOCK</p>
            </div>
            <div className="h-[9px] rounded-md overflow-hidden bg-[#D9D9D9]">
              <div
                className={`h-[9px] rounded-md bg-[#114918] ${
                  selectedDemo === "farming" ? "w-[100%]" : "w-[0%]"
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex items-center w-full gap-2 mb-8 flex-row md:gap-4 mt-4">
          {/* Mobile App Button */}
          <div
            className={`flex-col ${
              selectedDemo === "mobileApp"
                ? "bg-[#155528] text-white"
                : "bg-[#CFD7D7] text-black hover:bg-[#155528] hover:text-white"
            } border-[#979797] border-b-[3px] rounded-md p-2 md:p-4 box-border w-full h-[62px] flex items-center justify-center cursor-pointer`}
            onClick={() => setSelectedDemo("mobileApp")}
          >
            <h1 className="text-center font-bold text-[12px] md:text-[24px]">
              MOBILE APP
            </h1>
            <h1 className="text-xs md:text-[20px] font-normal">Demos</h1>
          </div>

          {/* Farming Demo Button */}
          <div
            className={`flex-col ${
              selectedDemo === "farming"
                ? "bg-[#155528] text-white"
                : "bg-[#CFD7D7] text-black hover:bg-[#155528] hover:text-white"
            } border-[#979797] border-b-[3px] rounded-md p-2 md:p-4 box-border w-full h-[62px] flex items-center justify-center cursor-pointer`}
            onClick={() => setSelectedDemo("farming")}
          >
            <h1 className="text-center font-bold text-[12px] md:text-[24px]">
              FARMING
            </h1>
            <h1 className="text-xs md:text-[20px] font-normal">Demos</h1>
          </div>

          {/* Placeholder Div */}
          <div className="bg-[#CFD7D7] border-[#979797] hover:bg-[#155528] hover:text-white border-b-[3px] rounded-md p-4 box-border w-full h-[62px] flex items-center justify-center">
            <b className="text-[#000] text-center text-[12px] md:text-base lg:text-4xl">
              -
              <br />
              <span className="text-xs sm:text-sm font-semibold  "></span>
            </b>
          </div>
        </div>

        {/* Card Section */}
        {selectedDemo === "mobileApp" && <MobileAPPCardsPage />}
        {selectedDemo === "farming" && <FarmingDemoCardsPage />}
      </div>
    </div>
  );
};

export default ServicesPage;
