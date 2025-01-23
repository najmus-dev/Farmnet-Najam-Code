import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import crop1 from "../Assets/crop1.png";
import crop2 from "../Assets/crop2.png";
import crop3 from "../Assets/crop3.png";
import capsicum from "../Assets/capsicum.png";
import livestock1 from "../Assets/livestock1.png";
import colorwheel from "../Assets/colorwheel.png";

const ResourcesMainPage = () => {
  const [selectedSection, setSelectedSection] = useState("crops"); // State to track the selected section

  // Function to render the guide row with optional additional content
  const renderGuideRow = (
    title,
    description,
    mainImage,
    cards,
    additionalContent,
    selectedSection
  ) => (
    // Inside renderGuideRow function
    <div className="ml-4 flex flex-col md:flex-row">
      {/* Main Column */}
      <div className="w-full md:w-[35%] h-auto md:h-[610px] bg-[#F8FAF9] p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[20px] md:text-[24px] font-bold text-[#155528]">
            {title}
          </h1>
          <img src={mainImage} alt={title} />
        </div>
        <p className="text-[16px] md:text-[25px] text-[#1E1E1E] leading-6 md:leading-8">
          {description}
        </p>
        {/* Display additional content only if provided */}
        {additionalContent && (
          <h1 className="text-[16px] md:text-[20px] lg:text-[24px] mt-6 md:mt-56 font-bold text-[#155528]">
            {additionalContent}
          </h1>
        )}
      </div>

      {/* Cards */}
      <div className="w-full pt-10 h-auto md:h-[520px] space-y-6 md:space-y-0 md:space-x-12 bg-[#FBFEFD] rounded-r-md flex flex-col md:flex-row items-center justify-center ">
        {cards.map((card, index) => (
          <div key={index} className="w-full md:w-[304px]">
            <img
              src={card.image}
              alt={card.title}
              className="w-full md:w-[275px] h-[230px] object-cover rounded-md"
            />
            <h1 className="text-[#155528] text-[20px] sm:text-[24px] font-bold mt-6">
              {card.title}
            </h1>
            <h1 className="md:text-[20px] text-[16px] leading-tight text-ellipsis break-words">
              {card.subtitle}
            </h1>
            <div className="flex items-center justify-end">
              <a
                href={
                  selectedSection === "crops"
                    ? "/crops-page1"
                    : "/livestock-page1"
                }
                className="bg-[#155528] mt-6 md:mt-28 text-white font-semibold text-[12px] md:text-[14px] rounded-tr-lg rounded-bl-lg w-full md:w-[151px] h-[34px] flex items-center justify-center"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const cropCards = [
    { image: crop1, title: "CAP variety 1", subtitle: "Cultivation guide" },
    { image: crop2, title: "CAP variety 2", subtitle: "Cultivation guide" },
    { image: crop3, title: "CAP variety 3", subtitle: "Cultivation guide" },
  ];

  const livestockCards = [
    { image: livestock1, title: "CAP variety 1", subtitle: "Care guide" },
    { image: livestock1, title: "CAP variety 2", subtitle: "Care guide" },
    { image: livestock1, title: "CAP variety 3", subtitle: "Care guide" },
  ];

  return (
    <div className="font-Inter overflow-x-auto p-2 md:p-0">
      {/* Title */}
      <div className="mb-6 mt-8 px-4 md:px-7">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          RESOURCES
        </h1>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 lg:flex-row items-center px-4 md:px-7 md:mb-6">
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

      {/* Progress Bars */}
      <div className="flex flex-col px-4 md:px-7 md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-8">
        <div
          className="w-full md:w-[50%] cursor-pointer"
          onClick={() => setSelectedSection("crops")}
        >
          <div className="flex justify-between mb-1">
            <p className="md:text-[48px] font-bold">Crop</p>
          </div>
          <div className="h-[10px] md:h-[19px] rounded-sm overflow-hidden bg-[#D9D9D9]">
            <div
              className={`h-[10px] md:h-[19px] rounded-sm bg-[#114918] ${
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
            <p className="md:text-[48px] font-bold">Livestock</p>
          </div>
          <div className="h-[10px] md:h-[19px] rounded-sm overflow-hidden bg-[#D9D9D9]">
            <div
              className={`h-[10px] md:h-[19px] rounded-sm bg-[#114918] ${
                selectedSection === "livestock" ? "w-[100%]" : "w-[0%]"
              }`}
            ></div>
          </div>
        </div>
      </div>

      <h1 className="px-4 md:px-7 mb-8 mt-8 text-[24px] text-[#155528] font-bold">
        Farming guides
      </h1>

      {/* Guide Rows for Crops */}
      {selectedSection === "crops" && (
        <>
          {renderGuideRow(
            "Capsicum",
            "The population of smallholder Farmers in Kenya is 8 Million. Current registered users of the Farmers Networks App and type of crop or livestock Farming and land size used for Farming.",
            capsicum,
            cropCards,
            "Disease Management",
            selectedSection
          )}

          {renderGuideRow(
            "Capsicum",
            "The population of smallholder Farmers in Kenya is 8 Million. Current registered users of the Farmers Networks App and type of crop or livestock Farming and land size used for Farming.",
            capsicum,
            cropCards,
            "",
            selectedSection
          )}

          {renderGuideRow(
            "Programs",
            "The population of smallholder Farmers in Kenya is 8 Million. Current registered users of the Farmers Networks App and type of crop or livestock Farming and land size used for Farming.",
            capsicum,
            cropCards,
            "SMART Farming",
            selectedSection
          )}
          {renderGuideRow(
            "Capsicum",
            "The population of smallholder Farmers in Kenya is 8 Million. Current registered users of the Farmers Networks App and type of crop or livestock Farming and land size used for Farming.",
            capsicum,
            cropCards,
            "",
            selectedSection
          )}
          {renderGuideRow(
            "Capsicum",
            "The population of smallholder Farmers in Kenya is 8 Million. Current registered users of the Farmers Networks App and type of crop or livestock Farming and land size used for Farming.",
            capsicum,
            cropCards,
            "Disease Management",
            selectedSection
          )}

          {renderGuideRow(
            "Capsicum",
            "The population of smallholder Farmers in Kenya is 8 Million. Current registered users of the Farmers Networks App and type of crop or livestock Farming and land size used for Farming.",
            capsicum,
            cropCards,
            "",
            selectedSection
          )}
        </>
      )}

      {/* Guide Rows for Livestock */}
      {selectedSection === "livestock" && (
        <>
          {renderGuideRow(
            "Capsicum",
            "The population of smallholder Farmers in Kenya is 8 Million. Current registered users of the Farmers Networks App and type of crop or livestock Farming and land size used for Farming.",
            capsicum,
            livestockCards,
            "Disease Management",
            selectedSection
          )}

          {renderGuideRow(
            "Capsicum",
            "The population of smallholder Farmers in Kenya is 8 Million. Current registered users of the Farmers Networks App and type of crop or livestock Farming and land size used for Farming.",
            capsicum,
            livestockCards,
            "",
            selectedSection
          )}

          {renderGuideRow(
            "Programs",
            "The population of smallholder Farmers in Kenya is 8 Million. Current registered users of the Farmers Networks App and type of crop or livestock Farming and land size used for Farming.",
            capsicum,
            livestockCards,
            "SMART Farming",
            selectedSection
          )}
          {renderGuideRow(
            "Capsicum",
            "The population of smallholder Farmers in Kenya is 8 Million. Current registered users of the Farmers Networks App and type of crop or livestock Farming and land size used for Farming.",
            capsicum,
            livestockCards,
            "",
            selectedSection
          )}
          {renderGuideRow(
            "Capsicum",
            "The population of smallholder Farmers in Kenya is 8 Million. Current registered users of the Farmers Networks App and type of crop or livestock Farming and land size used for Farming.",
            capsicum,
            livestockCards,
            "Disease Management",
            selectedSection
          )}

          {renderGuideRow(
            "Capsicum",
            "The population of smallholder Farmers in Kenya is 8 Million. Current registered users of the Farmers Networks App and type of crop or livestock Farming and land size used for Farming.",
            capsicum,
            livestockCards,
            "",
            selectedSection
          )}
        </>
      )}
      {/* color wheel section */}
      <a href="/environmental-social-governance-main-page">
        <div className="bg-[#FAFBFB] mx-8 mb-8 flex items-center justify-between mt-8 p-6 border-b-2 border-gray-300 rounded-md">
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

export default ResourcesMainPage;
