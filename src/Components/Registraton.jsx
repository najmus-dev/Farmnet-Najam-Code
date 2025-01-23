import React from "react";
import aboutus from "../Assets/aboutus.png";

const Registration = () => {
  return (
    <div className=" mt-24 md:mt-32 px-6 md:px-8   mb-10 font-Inter">
      <h2 className="text-[#155528] mb-3 md:mb-4 font-bold text-2xl md:text-[36px] ">
        ABOUT US
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 ">
          <h1 className="text-[22px] md:text-[40px] font-bold mb-3 md:mb-3">
            Securing Agriculture in Namibia
          </h1>
          <p className=" text-[18px] md:text-[23px] ">
            To secure agriculture in Namibia, the country is exploring
            strategies such as diversifying agriculture, modernizing
            productivity, and addressing food insecurity. The Comprehensive
            Conservation Agriculture Programme II aims to combat resource
            degradation and food insecurity caused by climate change and human
            activities. Namibia's heavy reliance on food imports highlights the
            urgency of improving domestic agricultural capabilities...
          </p>
          <button className="bg-[#155528] mt-4 text-white text-[24px] font-semibold w-full  rounded-tr-2xl rounded-bl-2xl  px-6 h-[79px] hover:bg-green-700">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 md:pl-14">
          <img
            src={aboutus}
            alt="Agriculture in Namibia"
            className="rounded-sm w-[624px] md:h-[380px] lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
