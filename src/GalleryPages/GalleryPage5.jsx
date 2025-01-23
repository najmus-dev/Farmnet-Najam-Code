import React from "react";
import gallery5 from "../Assets/gallery5.png";
import clock from "../Assets/clock.png";
import thumb_up from "../Assets/thumb_up.png";
import thumb_down from "../Assets/thumb_down.png";
import comment2 from "../Assets/comment2.png";
import playbtn from "../Assets/playbtn.png";

const GalleryPage5 = () => {
  return (
    <>
      <div className="mb-4 md:mb-20">
        <div className="relative mb-6">
          <img
            src={gallery5}
            alt="Gallery"
            className="w-full md:h-[778px] object-cover sm:h-[320px]"
          />
          <img
            src={playbtn}
            alt="Play Button"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-[133px] md:h-[133px]"
          />
        </div>

        <div className="px-4 md:px-8 ">
          <h2 className="text-[#155528] font-bold text-3xl sm:text-2xl md:text-[36px]">
            AGRICULTURAL SERVICES
          </h2>
          <h2 className="text-2xl md:text-[40px] mt-4 font-bold mb-6">
            Agricultural extension servcies
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

          <div className="md:font-medium md:leading-8 md:text-[26px] mt-2 md:mt-6 mb-2 md:mb-4">
            <p>
              To secure agriculture in Namibia, the country is exploring
              strategies such as diversifying agriculture, modernizing
              productivity, and addressing food insecurity. The Comprehensive
              Conservation Agriculture Programme II aims to
              <br className="hidden md:block" /> combat resource degradation and
              food insecurity caused by climate change and human activities.
              Namibia's heavy reliance on food imports highlights the urgency of
              improving domestic agricultural capabilities. The Namibia
              Agriculture Policy, developed through a consultative process, aims
              to address poverty, hunger, and inequity in the country.
            </p>
            <p>
              Securing agriculture in Namibia involves a combination of
              strategies to address various challenges such as livestock
              <br className="hidden md:block" /> theft, crop loss, and climate
              change. Here are some key measures:
            </p>
            <ul className="list-inside list-decimal">
              <li>
                Camera Surveillance: Installing surveillance cameras around
                farms can help monitor livestock and deter theft. Cameras can
                provide real-time insights and alert farmers to any suspicious
                activity1.
                <br className="hidden md:block" />
                GPS Tracking: Using GPS collars on livestock can help track
                their movements and ensure they stay within designated areas.
              </li>
              <li>
                Climate Resilience:
                <br /> Diversification: Encouraging the cultivation of a diverse
                range of crops suited to different agro-ecological zones can
                <br className="hidden md:block" />
                help mitigate the impact of climate change.
                <br className="hidden md:block" /> Drought-Resistant Crops:
                Promoting the use of drought-resistant and climate-resilient
                crop varieties can enhance food security. <br />
                Water Management: Investing in water harvesting techniques,
                efficient irrigation systems, and sustainable water management
                practices can help address water scarcity.
              </li>
              <li>
                Infrastructure and Technology:
                <br /> Modern Farming Techniques: Implementing modern farming
                techniques such as precision farming, which utilizes data and
                technology to optimize crop yields, can improve productivity and
                sustainability.
                <br className="hidden md:block" /> Access to Resources:
                Providing farmers with access to modern agricultural
                technologies, financial resources, and infrastructure can
                enhance their resilience and productivity.
              </li>
              <li>
                Policy and Support:
                <br /> Government Policies: Implementing policies that support
                sustainable agricultural practices and provide financial
                assistance to farmers can help secure the agricultural sector.
              </li>
            </ul>
            <p>
              Education and Training: Offering training programs and workshops
              to educate farmers on best practices, climate adaptation, and
              resource management can empower them to improve their operations.
            </p>
            <p>
              By combining these measures, Namibia can enhance the security and
              sustainability of its agricultural sector, ensuring food security
              and economic stability for its people.
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

export default GalleryPage5;
