import React from "react";
import gallery8 from "../Assets/gallery8.png";
import clock from "../Assets/clock.png";
import thumb_up from "../Assets/thumb_up.png";
import thumb_down from "../Assets/thumb_down.png";
import comment2 from "../Assets/comment2.png";
import playbtn from "../Assets/playbtn.png";

const GalleryPage8 = () => {
  return (
    <>
      <div className=" mb-6">
        <div className="relative mb-6">
          <img
            src={gallery8}
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
            THE FARMERS STORY
          </h2>
          <h2 className="text-2xl md:text-[40px] mt-4 font-bold mb-6">
            The eureka Moment (August 2020)
          </h2>
          <div className="flex items-center justify-start space-x-6 md:space-x-24 mt-2">
            <h1 className="text-sm md:text-[20px] ">Story by Farmnet</h1>
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

          <div className="md:font-medium md:text-[26px] md:leading-8 mt-2 md:mt-6 ">
            <p className="mb-3 md:mb-6">
              This is our story A real-life experience as told by one of our
              farmers that inspired the Farmers Network App.
            </p>
            <p>
              Aristotle once said, "Courage is the first of human qualities
              because it is the quality which guarantees the others." Every
              entrepreneur needs courage, as it takes courage to pivot. Courage
              is the story of Farmers Network App. An app created to provide
              Agricultural entrepreneurship solutions to small holder farmers
              based on his real-time experience for ‘other would-be farmers’ who
              would face similar circumstances….
            </p>
            <p className="mb-3 md:mb-6">
              When COVID reared its ugly head in the early months of 2020, the
              founder had been visiting his rural home in the Western part of
              Kenya. It was during this period that all local, regional, and
              international borders were closed down for travel as part of WHO
              protocols to contain the pandemic, rendering him stranded. His
              movement was crippled for 8 months; however, he resolved that the
              situation would not dampen his spirits. It was during this period
              of lock down that he conceived and implemented farming ideas that
              he had toyed with in the past, following in his fathers’
              footsteps. It began as an exciting and adventurous journey.
              However, he begun to face the same challenges his late father and
              all small holder farmers across Africa encounter during their
              day-to-day activities working to increase incomes and food
              security.
            </p>
            <p>He soon discovered that the map is not the territory.</p>
            <p>
              At one point while speaking with marketing students from a local
              university on the subject of talent pipeline development program,
              the lecturer overseeing the program cautiously confessed to the
              founder, saying in Swahili language “Kwa ground vitu ni different”
              which is translated as “Things are different on the ground”
            </p>
            <p>
              The drawbacks he faced motivated him to seek sustainable solutions
              that would address disconnects in the entire supply and value
              chains. Armed with his experience in the food and beverage, as
              well as electronics industries, he set out to bring the conceived
              solutions to life through a digital platform that supports
              producers on their journey from farm to table.
            </p>
            <p>
              He realised that Success or failure was determined by his ability
              to be more street wise, than being experienced in Global Best
              management practices that he had.
            </p>
            <p className="mb-3 md:mb-6">
              He went through every conceivable value chain opportunity hurdle
              with various levels of success and explored how he could apply his
              skills from working with Food & Beverage and Technology, to
              develop a solution to manage farmers pain points?
            </p>
            <p className="mb-3 md:mb-6">
              8 months in the life of a farmer is a long time. Long enough to
              experience farmers hurdles in their daily journey to produce food.
              While living the life of a farmer he saw the dire need of support
              for farmers from service providers, advisory services, need for
              better procurement system, infrastructure like Irrigation, product
              storage especially cold chain management & Logistics, value
              addition, marketing and weather.
            </p>
            <p>
              His moment of enlightenment came when he was realized that the
              solution lies in leveraging digital technology to change the
              farmers lives. This was the missing piece required to create the
              perfect day in the life of a farmer.
            </p>
            <p>
              And so started the journey of creating a platform for farmers that
              would transform the small holder farmer to a sustainable
              Agripreneurship by providing simplicity, convenience, and support
              to help them focus on what they do best Farming.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-2  mb-2  md:justify-end space-x-3 md:space-x-8 md:mr-8 flex-wrap md:flex-nowrap">
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

export default GalleryPage8;
