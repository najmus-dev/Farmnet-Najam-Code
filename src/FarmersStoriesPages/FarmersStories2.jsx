import React, { useRef, useState } from "react";
import { TbThumbUp, TbThumbDown } from "react-icons/tb";
import { MdOutlineChat } from "react-icons/md";
import latest1 from "../Assets/latest1.png";
import latest2 from "../Assets/latest2.png";
import latest3 from "../Assets/latest3.png";
import logosmall from "../Assets/logosmall.png";
import { FaPlay } from "react-icons/fa";
import farmer2 from "../Assets/farmer2.mp4"
import clock from "../Assets/clock.png";

const FarmersStories2 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButton = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
        setIsVideoPlaying(true);  // Hide the play button when video starts
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);  // Show the play button when video pauses
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
   
    <div className="font-Inter mb-20">
      
      <div className="relative  mb-6 ">
       
          <video
            ref={videoRef}
            className="md:w-[1440px] md:h-[778px] object-cover sm:w-[640px] sm:h-[320px]"
            controls={false} 
            muted
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
          >
            <source src={farmer2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isVideoPlaying && (  // Only show play button if video is not playing
            <button
              className="absolute inset-0 flex items-center justify-center"
              onClick={handlePlayButton}
            >
              <div className="border-8 border-gray-200 p-4 rounded-full hover:bg-opacity-90">
                <FaPlay className="text-gray-200 h-8 w-8" />
              </div>
            </button>
          )}
      </div>

   
          <div class="p-5 sm:p-4 md:p-10 font-Inter">
  <h2 class="text-[#155528] font-bold text-3xl sm:text-2xl md:text-[36px]">
    NEWS
  </h2>
  <h2 class="text-2xl md:text-[40px] mt-4 font-bold mb-6 ">
    Securing Agriculture in Namibia
  </h2>
  <div className="flex items-center justify-start space-x-12 mt-2  ">
         
          <h1 className="text-sm md:text-[20px] font-medium">
            Story by Farmnet
          </h1>
          <div className="flex items-center space-x-4">
           
            <div className="flex items-center space-x-1">
              <span className="w-4 h-4 bg-black rounded-full inline-block"></span>
              <span className="text-sm md:text-[20px]">3h</span>
            </div>
            <div className="flex items-center space-x-1 text-green-700 font-medium">
              <span className="w-4 h-4 bg-black  rounded-full inline-block"></span>
              <div className=" flex items-center space-x-1">
                <img src={clock} alt="clock" className="ml-2" />
                <h1 className="text-sm md:text-[20px]">2 min read</h1>
              </div>
            </div>
          </div>
        </div>

  <div className="md:font-medium md:text-[24px]  mt-2 md:mt-6 mb-2 md:mb-4"> 
    <p>

            To secure agriculture in Namibia, the country is exploring
            strategies such as diversifying agriculture, modernizing
            productivity, and addressing food insecurity. The Comprehensive
            Conservation Agriculture Programme II aims to combat resource
            degradation and food insecurity caused by climate change and human
            activities. Namibia's heavy reliance on food imports highlights the
            urgency of improving domestic agricultural capabilities. The Namibia
            Agriculture Policy, developed through a consultative process, aims
            to address poverty, hunger, and inequity in the country. <br />
            Securing agriculture in Namibia involves a combination of strategies
            to address various challenges such as livestock theft, crop loss,
            and climate change. Here are some key measures:
          </p>

          <ul className="list-inside list-decimal">
            <li>
              Surveillance and Monitoring:
              <br /> Camera Surveillance: Installing surveillance cameras around
              farms can help monitor livestock and deter theft. Cameras can
              provide real-time insights and alert farmers to any suspicious
              activity1. GPS Tracking: Using GPS collars on livestock can help
              track their movements and ensure they stay within designated
              areas.
            </li>
            <li>
              Climate Resilience:
              <br /> Diversification: Encouraging the cultivation of a diverse
              range of crops suited to different agro-ecological zones can help
              mitigate the impact of climate change. Drought-Resistant Crops:
              Promoting the use of drought-resistant and climate-resilient crop
              varieties can enhance food security. <br />
              Water Management: Investing in water harvesting techniques,
              efficient irrigation systems, and sustainable water management
              practices can help address water scarcity.
            </li>
            <li>
              Infrastructure and Technology:
              <br /> Modern Farming Techniques: Implementing modern farming
              techniques such as precision farming, which utilizes data and
              technology to optimize crop yields, can improve productivity and
              sustainability. Access to Resources: Providing farmers with access
              to modern agricultural technologies, financial resources, and
              infrastructure can enhance their resilience and productivity.
            </li>
            <li>
              Policy and Support:
              <br /> Government Policies: Implementing policies that support
              sustainable agricultural practices and provide financial
              assistance to farmers can help secure the agricultural sector.
            </li>
          </ul>
          <p>
            Education and Training: Offering training programs and workshops to
            educate farmers on best practices, climate adaptation, and resource
            management can empower them to improve their operations.
          </p>
          <p>
            By combining these measures, Namibia can enhance the security and
            sustainability of its agricultural sector, ensuring food security
            and economic stability for its people.
          </p>
        </div>
      </div>
    
<div className="flex justify-center mt-2 md:mt-6 mb-2 md:mb-6 md:justify-end space-x-3 md:space-x-8 md:mr-8 flex-wrap md:flex-nowrap">
<div className="flex items-center space-x-1 md:space-x-2">
<div className="text-gray-700 text-xl">More like</div>
<div className="text-3xl text-gray-700 md:text-4xl">
              <TbThumbUp />
            </div>
           
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
            <div className="text-gray-700 text-xl">Few like</div>
            <div className="text-3xl text-gray-700 md:text-4xl">
              
              <TbThumbDown />
            </div>
           
          </div>
          <div className="flex items-center space-x-1 md:space-x-2">
          <div className="text-gray-700 text-xl">Start a conversation</div>
            <div className="text-3xl text-gray-700 md:text-4xl">
              <MdOutlineChat />
            </div>
          
          </div>
        </div>
      
     
      <div className="w-full px-4 md:px-10 space-y-4 mb-4 mt-10">
        <h2 className="text- font-bold text-2xl lg:text-2xl text-[#155528]">
          RELATED NEWS
        </h2>
        <h1 className="text-xl lg:text-2xl font-bold">
          Follow related news on about agriculture & economy.
        </h1>
      </div>
    
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-6">
       
        <div className="border rounded-lg bg-[#f3f5f5]  shadow-md overflow-hidden">
          <img
            src={latest1}
            alt="Digital Goat Farming"
            className="w-full relative rounded-t-10xs rounded-b-none max-w-full overflow-hidden h-[239px] object-cover"
          />
          <div className="p-4">
            <div className="flex items-center space-x-2 text-blacktext-sm">
              <span className="flex items-center space-x-4">
                <div className="flex">
                  <img src={logosmall} alt="logosmall" />
                  <span className=" text-lg font-medium">Farmnet</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
                  <span>3h</span>
                </div>
              </span>
            </div>

            <div className="flex items-center justify-between mt-3">
              <h2 className=" flex-grow left-[48px]  leading-[120%] font-medium flex items-center w-[415px] h-[38px]">
                Digital Goat Farming
              </h2>

              <div className="flex items-center space-x-4 ">
                <div className="flex items-center space-x-3">
                  <TbThumbUp />
                  <span>5</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TbThumbDown />
                </div>
                <div className="flex items-center space-x-1">
                  <MdOutlineChat />
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="border rounded-lg bg-[#f3f5f5] shadow-md overflow-hidden">
          <img
            src={latest2}
            alt="Digital Goat Farming"
            className="w-full relative rounded-t-10xs rounded-b-none max-w-full overflow-hidden h-[239px] object-cover"
          />
          <div className="p-4">
            <div className="flex items-center space-x-2 text-blacktext-sm">
              <span className="flex items-center space-x-4">
                <div className="flex">
                  <img src={logosmall} alt="logosmall" />
                  <span className=" text-lg font-medium">Farmnet</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
                  <span>3h</span>
                </div>
              </span>
            </div>

            <div className="flex items-center justify-between mt-3">
              <h2 className=" flex-grow left-[48px]  leading-[120%] font-medium flex items-center w-[415px] h-[38px]">
                Digital Goat Farming
              </h2>
              <div className="flex items-center space-x-4 ">
                <div className="flex items-center space-x-3">
                  <TbThumbUp />
                  <span>5</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TbThumbDown />
                </div>
                <div className="flex items-center space-x-1">
                  <MdOutlineChat />
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="border rounded-lg bg-[#f3f5f5] shadow-md overflow-hidden">
          <img
            src={latest3}
            alt="Digital Goat Farming"
            className="w-full relative rounded-t-10xs rounded-b-none max-w-full overflow-hidden h-[239px] object-cover"
          />
          <div className="p-4">
            <div className="flex items-center space-x-2 text-blacktext-sm">
              <span className="flex items-center space-x-4">
                <div className="flex">
                  <img src={logosmall} alt="logosmall" />
                  <span className=" text-lg font-medium">Farmnet</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
                  <span>3h</span>
                </div>
              </span>
            </div>

            <div className="flex items-center justify-between mt-3">
              <h2 className="f flex-grow left-[48px]  leading-[120%] font-medium flex items-center w-[415px] h-[38px]">
                Digital Goat Farming
              </h2>
              <div className="flex items-center space-x-4 ">
                <div className="flex items-center space-x-1">
                  <TbThumbUp />
                  <span>5</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TbThumbDown />
                </div>
                <div className="flex items-center space-x-1">
                  <MdOutlineChat />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default FarmersStories2;


   
