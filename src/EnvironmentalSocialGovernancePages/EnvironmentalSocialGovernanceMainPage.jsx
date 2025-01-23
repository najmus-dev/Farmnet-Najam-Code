import React from "react";
import { HiSearch } from "react-icons/hi";
import colorwheel from "../Assets/colorwheel.png";
import GOVERNANCE1 from "../Assets/GOVERNANCE1.png";
import GOVERNANCE2 from "../Assets/GOVERNANCE2.png";
import SOCIAL1 from "../Assets/SOCIAL1.png";
import SOCIAL2 from "../Assets/SOCIAL2.png";
import ENVIRONMENTAL1a from "../Assets/ENVIRONMENTAL1a.png";
import ENVIRONMENTAL2b from "../Assets/ENVIRONMENTAL2a.png";
import graph from "../Assets/graph.png";

const EnvironmentalSocialGovernanceMainPage = () => {
  // Data for cards
  const data = {
    ENVIRONMENTAL: [
      {
        image: ENVIRONMENTAL1a,
        title: "HAMLAR  FARMERS ",
        heading: "Forest Conservation",
        description:
          "Sustainable farming based on local solutions driven by community.Project - Grow 1 Million trees",
        linkPath: "/environmental-1a",
      },
      {
        image: ENVIRONMENTAL2b,
        title: "TET FARMERS ",
        heading: "Forest Conservation",
        description:
          "Sustainable farming based on local solutions driven by community.Project - Grow 1 Million trees",
        linkPath: "/environmental-2a",
      },
    ],
    SOCIAL: [
      {
        image: SOCIAL1,
        title: "HAMLAR  FARMERS ",
        heading: "Forest Conservation",
        description:
          "Sustainable farming based on local solutions driven by community.Project - Grow 1 Million trees",
        linkPath: "/social-1a",
      },
      {
        image: SOCIAL2,
        title: "TET FARMERS ",
        heading: "Forest Conservation",
        description:
          "Sustainable farming based on local solutions driven by community.Project - Grow 1 Million trees",
        linkPath: "/social-2a",
      },
    ],
    GOVERNANCE: [
      {
        image: GOVERNANCE1,
        title: "HAMLAR  FARMERS ",
        heading: "Forest Conservation",
        description:
          "Sustainable farming based on local solutions driven by community.Project - Grow 1 Million trees",
        linkPath: "/governance-1a",
      },
      {
        image: GOVERNANCE2,
        title: "TET FARMERS ",
        heading: "Forest Conservation",
        description:
          "Sustainable farming based on local solutions driven by community.Project - Grow 1 Million trees",
        linkPath: "/governance-2a",
      },
    ],
  };

  // Render cards
  const renderCards = (section) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data[section].map((card, index) => (
          <div
            key={index}
            className="bg-[#F3F5F5] rounded-lg overflow-hidden w-full"
          >
            {/* Image with link */}
            <div className="relative">
              <a href={card.linkPath} className="block">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[197px] sm:h-[250px] md:h-[300px] lg:h-[397px] object-cover"
                />
              </a>
              <div className="absolute bottom-4 md:bottom-8 left-4">
                <h2 className="text-white text-xl sm:text-[20px] md:text-[24px] font-bold">
                  {card.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-2">
              <h3 className="font-bold md:mt-1 text-base sm:text-sm md:text-[16px]">
                {card.heading}
              </h3>

              {/* Flex container */}
              <div className="flex items-start justify-between">
                <p
                  className="text-xs sm:text-sm md:text-[18px] mt-2"
                  dangerouslySetInnerHTML={{
                    __html: card.description.replace(/\./g, ".<br />"),
                  }}
                ></p>
                {/* Graph */}
                <img src={graph} alt="Graph" className="w-6 h-6 mt-2 sm:mt-0" />
              </div>

              {/* Button */}
              <div className="flex justify-end">
                <button className="inline-flex items-center text-xs sm:text-sm md:text-[10px] md:w-[104px] w-[100px] h-[22px] py-1 px-4 sm:px-6 text-center text-white bg-green-900 rounded-tr-lg rounded-bl-lg font-semibold hover:bg-green-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 md:p-10 font-Inter overflow-x-hidden">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          ENVIRONMENTAL SOCIAL & GOVERNANCE (ESG)
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

      {/* ENVIRONMENTAL Section */}
      <h1 className="text-[#155528] font-bold text-2xl md:text-[36px] my-8">
        ENVIRONMENTAL
      </h1>
      {renderCards("ENVIRONMENTAL")}

      {/* SOCIAL Section */}
      <h1 className="text-[#155528] font-bold text-2xl md:text-[36px] my-8">
        SOCIAL
      </h1>
      {renderCards("SOCIAL")}

      {/* GOVERNANCE Section */}
      <h1 className="text-[#155528] font-bold text-2xl md:text-[36px] my-8">
        GOVERNANCE
      </h1>
      {renderCards("GOVERNANCE")}

      {/* View button */}
      <div className="flex justify-end items-end mt-12 md:mt-56">
        <a href="#">
          <p className="text-[#919291] hover:text-[#b1b0b0] font-bold underline text-lg md:text-[32px] mt-2 md:mt-6">
            View more
          </p>
        </a>
      </div>

      {/* Color wheel section */}
      <a href="/environmental-main-page">
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

export default EnvironmentalSocialGovernanceMainPage;
