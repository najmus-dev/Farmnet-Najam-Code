import React from "react";
import MainHeader from "../Components/MainHeader";
import addicon2 from "../Assets/addicon2.png";
import farmer5 from "../Assets/farmer5.png";
import farmer6 from "../Assets/farmer6.png";
import editIcon from "../Assets/editicon.png";
import thumb_down from "../Assets/thumb_down.png";
import thumb_up from "../Assets/thumb_up.png";
import importicon from "../Assets/importicon.png";

const VoiceOfFarmers3 = () => {
  return (
    <div>
      <MainHeader />
      <div className="px-4 md:px-6 mt-6 font-Inter">
        {/* Flex container for left and right content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-32">
          {/* Left Column */}
          <div className="flex-1 w-full">
            {/* Publish button */}
            <div className="flex mb-6">
              <button className="text-[14px] font-bold bg-[#114918] text-white rounded-md w-[114px] h-[26px]">
                Publish
              </button>
            </div>
            {/* Card with image and text section */}
            <div className="relative w-full">
              {/* Card Image with specific dimensions */}
              <img
                src={farmer5}
                alt="farmer5"
                className="w-full h-[289px] object-cover"
              />
              {/* Add Icon */}
              <div className="absolute top-4 right-4 z-10">
                <img src={addicon2} alt="Add Icon" className="h-6 w-6" />
              </div>
            </div>
            {/* Text section */}
            <div className="space-y-2 mt-4 w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-[#155528] text-sm md:text-[24px] font-bold">
                  ABOUT US
                </h1>
                {/* Edit button */}
                <div className="flex items-center gap-2 mr-6">
                  <img src={editIcon} alt="Edit Icon" className="h-5 w-5" />
                  <span className="text-sm md:text-[20px] font-bold ">
                    Edit
                  </span>
                </div>
              </div>
              <h2 className="text-sm md:text-[16px] font-bold">
                Securing Agriculture in Namibia
              </h2>
              <div className="font-medium text-[14px] md:leading-tight">
                <p>
                  To secure agriculture in Namibia, the country is exploring
                  <br className="md:block hidden" />
                  strategies such as diversifying agriculture, modernizing
                  <br className="md:block hidden" />
                  productivity, and addressing food insecurity. The
                  <br className="md:block hidden" /> Comprehensive Conservation
                  Agriculture Programme II aims to
                  <br className="md:block hidden" /> combat resource degradation
                  and food insecurity caused by
                  <br className="md:block hidden" /> climate change and human
                  activities. Namibia's heavy reliance
                  <br className="md:block hidden" /> on food imports highlights
                  the urgency of improving domestic
                  <br className="md:block hidden" /> agricultural capabilities.
                  The Namibia Agriculture Policy,
                  <br className="md:block hidden" /> developed through a
                  consultative process, aims to address
                  <br className="md:block hidden" /> poverty, hunger, and
                  inequity in the country.
                </p>
                <p>
                  Securing agriculture in Namibia involves a combination of
                  <br className="md:block hidden" />
                  strategies to address various challenges such as livestock
                  theft,
                  <br className="md:block hidden" /> crop loss, and climate
                  change. Here are some key measures:
                </p>
                <p>
                  1. Surveillance and Monitoring:
                  <br className="md:block hidden" /> Camera Surveillance:
                  Installing surveillance cameras around
                  <br className="md:block hidden" /> farms can help monitor
                  livestock and deter theft. Cameras can
                  <br className="md:block hidden" /> provide real-time insights
                  and alert farmers to any suspicious
                  <br className="md:block hidden" /> activity1.
                </p>
                <p>
                  GPS Tracking: Using GPS collars on livestock can help track
                  their
                  <br className="md:block hidden" /> movements and ensure they
                  stay within designated areas.
                  <br className="md:block hidden" /> 2. Climate Resilience:
                </p>
              </div>

              <div className="flex items-center justify-between">
                {/* Like button */}
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-[20px] font-medium">More like</span>
                  <img src={thumb_up} alt="thumb_up" />
                </div>
                {/* Few like button */}
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-[20px] font-medium">Few like like</span>
                  <img src={thumb_down} alt="thumb_down" />
                </div>
                {/* Save button */}
                <div className="flex items-center justify-center gap-2 mr-6">
                  <img src={importicon} alt="saveicon" className="h-5 w-5" />
                  <span className="text-sm md:text-[20px] font-bold ">
                    Save
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full">
            {/* Publish button */}
            <div className="flex mb-6">
              <button className="text-[14px] font-bold bg-[#114918] text-white rounded-md w-[114px] h-[26px]">
                Publish
              </button>
            </div>
            {/* Duplicate the same content as the left side */}
            {/* Card with image and text section */}
            <div className="relative w-full">
              {/* Card Image with specific dimensions */}
              <img
                src={farmer6}
                alt="farmer6"
                className="w-full h-[289px] object-cover"
              />
              {/* Add Icon */}
              <div className="absolute top-4 right-4 z-10">
                <img src={addicon2} alt="Add Icon" className="h-6 w-6" />
              </div>
            </div>
            {/* Text section */}
            <div className="space-y-2 mt-4 w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-[#155528] text-sm md:text-[24px] font-bold">
                  ABOUT US
                </h1>
                {/* Edit button */}
                <div className="flex items-center gap-2 mr-6">
                  <img src={editIcon} alt="Edit Icon" className="h-5 w-5" />
                  <span className="text-sm md:text-[20px] font-bold ">
                    Edit
                  </span>
                </div>
              </div>
              <h2 className="text-sm md:text-[16px] font-bold">
                Securing Agriculture in Namibia
              </h2>
              <div className="font-medium text-[14px] leading-tight">
                <p>
                  To secure agriculture in Namibia, the country is exploring
                  <br className="md:block hidden" />
                  strategies such as diversifying agriculture, modernizing
                  <br className="md:block hidden" />
                  productivity, and addressing food insecurity. The
                  <br className="md:block hidden" /> Comprehensive Conservation
                  Agriculture Programme II aims to
                  <br className="md:block hidden" /> combat resource degradation
                  and food insecurity caused by
                  <br className="md:block hidden" /> climate change and human
                  activities. Namibia's heavy reliance
                  <br className="md:block hidden" /> on food imports highlights
                  the urgency of improving domestic
                  <br className="md:block hidden" /> agricultural capabilities.
                  The Namibia Agriculture Policy,
                  <br className="md:block hidden" /> developed through a
                  consultative process, aims to address
                  <br className="md:block hidden" /> poverty, hunger, and
                  inequity in the country.
                </p>
                <p>
                  Securing agriculture in Namibia involves a combination of
                  <br className="md:block hidden" />
                  strategies to address various challenges such as livestock
                  theft,
                  <br className="md:block hidden" /> crop loss, and climate
                  change. Here are some key measures:
                </p>
                <p>
                  1. Surveillance and Monitoring:
                  <br className="md:block hidden" /> Camera Surveillance:
                  Installing surveillance cameras around
                  <br className="md:block hidden" /> farms can help monitor
                  livestock and deter theft. Cameras can
                  <br className="md:block hidden" /> provide real-time insights
                  and alert farmers to any suspicious
                  <br className="md:block hidden" /> activity1.
                </p>
                <p>
                  GPS Tracking: Using GPS collars on livestock can help track
                  their
                  <br className="md:block hidden" /> movements and ensure they
                  stay within designated areas.
                  <br className="md:block hidden" /> 2. Climate Resilience:
                </p>
              </div>
              <div className="flex items-center justify-between">
                {/* Like button */}
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-[20px] font-medium">More like</span>
                  <img src={thumb_up} alt="thumb_up" />
                </div>
                {/* Few like button */}
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-[20px] font-medium">Few like like</span>
                  <img src={thumb_down} alt="thumb_down" />
                </div>
                {/* Save button */}
                <div className="flex items-center justify-center gap-2 mr-6">
                  <img src={importicon} alt="saveicon" className="h-5 w-5" />
                  <span className="text-sm md:text-[20px] font-bold ">
                    Save
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceOfFarmers3;
