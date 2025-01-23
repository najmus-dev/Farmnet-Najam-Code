import React from "react";
import gallery11 from "../Assets/gallery11.png";
import clock from "../Assets/clock.png";
import thumb_up from "../Assets/thumb_up.png";
import thumb_down from "../Assets/thumb_down.png";
import comment2 from "../Assets/comment2.png";
import playbtn from "../Assets/playbtn.png";

const GalleryPage11 = () => {
  return (
    <>
      <div className=" mb-6">
        <div className="relative mb-6">
          <img
            src={gallery11}
            alt="Gallery"
            className="w-full md:h-[778px] object-cover sm:h-[320px]"
          />
          <img
            src={playbtn}
            alt="Play Button"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-[133px] md:h-[133px]"
          />
        </div>

        <div className=" px-4 md:px-10 ">
          <h2 className="text-[#155528] font-bold text-3xl sm:text-2xl md:text-[36px]">
            EARLY VESRIONS OF FARMNET APP
          </h2>
          <h2 className="text-2xl md:text-[40px] mt-4 font-bold mb-6">
            Farm Mangement system (February 2021)
          </h2>
          <div className="flex items-center justify-start space-x-6 md:space-x-24 mt-2 mb-16 md:mb-80">
            <h1 className="text-sm md:text-[20px] \">Story by Farmnet</h1>
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center space-x-4">
                <span className="w-[12px] h-[12px] bg-black rounded-full inline-block"></span>
                <span className="text-sm md:text-[20px]">3h</span>
              </div>
              <div className="flex items-center space-x-1 text-green-700 font-medium">
                <span className="w-[12px] h-[12px] bg-black rounded-full inline-block"></span>
                <div className="flex items-center space-x-1">
                  <img src={clock} alt="clock" className="ml-2" />
                  <h1 className="text-sm md:text-[20px]">2 min read</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="md:font-medium md:text-[26px] leading-8 mt-2 md:mt-6 mb-16 md:mb-96 ">
            <p>
              Farmnet application started of as a web app. its was originally
              designed to collect data analyse and present to farmers for
              planning and management, By keeping proper records a farmer would
              be able to grow their enterprise sustainably. however more
              solutions was added to build the capability of the app to provide
              more solutions to farmers end to end.
            </p>
            <p className="mt-6">
              The solution offered by the app started with
              <br className="md:block hidden" /> Better planning & Management
              through improved record keeping.
              <br className="md:block hidden" /> Better production through link
              to agricultural services providers
              <br className="md:block hidden" /> Access to markets & Contact
              management
            </p>

            <p>Investments</p>
            <p>Payments</p>
            <p>Community</p>
          </div>
        </div>

        <div className="flex justify-center mt-2  mb-4 md:mb-60  md:justify-end space-x-3 md:space-x-8 md:mr-8 flex-wrap md:flex-nowrap">
          <div className="flex items-center space-x-2 md:space-x-2">
            <p className=" text-[12px] md:text-[20px] font-medium">More like</p>
            <img src={thumb_up} alt="thumb_up" />
          </div>
          <div className="flex items-center space-x-2 md:space-x-2">
            <p className=" text-[12px] md:text-[20px] font-medium">Few like</p>
            <img src={thumb_down} alt="thumb_down" />
          </div>
          <div className="flex items-center space-x-2 md:space-x-2">
            <p className=" text-[12px] md:text-[20px] font-medium">
              Start a conversation
            </p>
            <img src={comment2} alt="comment2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage11;
