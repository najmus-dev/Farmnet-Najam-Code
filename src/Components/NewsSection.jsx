import React from "react";
import Slider from "react-slick";
import story1 from "../Assets/story1.png";
import story22 from "../Assets/story22.png";
import story44 from "../Assets/story44.png";
import story4 from "../Assets/story4.png";
import { CiLocationOn } from "react-icons/ci";
import playbtn from "../Assets/playbtn.png";
import story55 from "../Assets/story55.png";
import story66 from "../Assets/story66.png";
import story6 from "../Assets/story6.png";
import story5 from "../Assets/story5.png";
import story88 from "../Assets/story88.png";
import { ChevronRight } from "lucide-react";

const Stories = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
    ],
  };

  const cardData = [
    {
      imgSrc: story1,
      farmer: "March 03, 2025",
      location: "Disease monitoring through SMART management",
      description: "Scanning livestock diseases, Diagnosis, treatment and management",
      link: "/farmerstories1",
      title: "Technology & Innovation",
    },
    {
      imgSrc: story22,
      farmer: "February 07, 2025",
      location: "Disease monitoring through SMART management",
      description: "Scanning crop diseases, Diagnosis, treatment and management",
      link: "/farmerstories2",
      title: "Technology & Innovation",
    },
    {
      imgSrc: story44,
      farmer: "",
      location: "Automated environmental control systems",
      description: "Sensor-based monitoring to optimize the living conditions of chickens and improve overall farm efficiency.",
      link: "/farmerstories3",
      title: "Technology & Innovation",
    },
    {
      imgSrc: story44,
      farmer: "Johnnes Shikongo",
      location: "Walvisbay, Namibia",
      description: "How to make farming “cool”",
      link: "/farmerstories1",
      title:"Technology & Innovation"
    },
    {
      imgSrc: story55,
      farmer: "Maria Haidula",
      location: "Walvisbay, Namibia",
      description: "Communities the future of farming",
      link: "/farmerstories1",
      title:"Technology & Innovation"
    },
    {
      imgSrc: story66,
      farmer: "David Nghidinwa",
      location: "Walvisbay, Namibia",
      description: "Smart farming",
      link: "/farmerstories1",
      title:"Technology & Innovation"
    },
    {
      imgSrc: story6,
      farmer: "Johnnes Shikongo",
      location: "Walvisbay, Namibia",
      description: "Digitalizing chicken farming",
      link: "/farmerstories1",
      title:"Technology & Innovation"
    },
    {
      imgSrc: story5,
      farmer: "Maria Haidula",
      location: "Walvisbay, Namibia",
      description: "Digitalizing farming",
      link: "/farmerstories1",
      title:"Technology & Innovation"
    },
    {
      imgSrc: story88,
      farmer: "David Nghidinwa",
      location: "Walvisbay, Namibia",
      description: "Smart farming",
      link: "/farmerstories1",
      title:"Technology & Innovation"
    },
  ];

  return (
    <div className="mb-10 mt-14 font-Inter w-[80%] mx-auto">
      {/* Header Section */}
    <div className="flex flex-col gap-24 sm:flex-row justify-between items-start sm:items-center">
           <div>
             <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
               Stay informed with insights and innovations in Agriculture
             </h1>
             <h1
               className="text-2xl md:text-[48px] font-bold mt-3 md:mt-6"
               style={{
                 fontFamily: "Inter",
                 fontWeight: 400,
                 fontSize: "16px",
                 lineHeight: "120%",
                 letterSpacing: "0%",
                 verticalAlign: "middle",
               }}
             >
               Smart farming refers to the use of advanced technology and
               data-driven solutions to optimize agricultural practices. It aims to
               improve the efficiency, productivity, and sustainability of farming
               by integrating modern technologies like sensors, data analytics,
               automation, and the Internet of Things (IoT).
             </h1>
           </div>
           <div className="flex flex-col mt-4 sm:mt-0">
             <a href="/solutios-page">
               <button className="flex items-center space-x-3 text-white bg-[#152C24] px-6 py-2 rounded-lg hover:bg-[#2E453D] transition-all whitespace-nowrap">
                 <span>See More</span>
                 <ChevronRight className="ml-2" size={24} />
               </button>
             </a>


           </div>
         </div>
      {/* slider section */}

      <Slider {...settings} className="pl-4 md:pl-6 overflow-x-hidden mr-16 mt-20">
        {cardData.map((card, index) => (
          <div key={index} className="p-1">
            <section className="rounded-sm w-[375px] h-[542px] relative">
              <a href={card.link}>
                {/* Image Container */}
                <div className="relative h-[400px]">
                  <img
                    src={card.imgSrc}
                    alt={`story${index}`}
                    className="w-full h-full object-cover rounded-t-lg"
                  />

                  {/* Title at Top Left */}
                  <div className="absolute top-3 left-3 bg-green-600 bg-opacity-50 text-white px-3 py-1 rounded-md">
                    <h3 className="text-sm md:text-lg font-semibold">
                      {card.title}
                    </h3>
                  </div>

                  {/* Play Button Centered */}
                  
                </div>

                {/* Content Below Image */}
                <div className=" text-black py-3 md:py-3">
                  <h3 className="font-bold text-lg md:text-[24px] leading-5 md:leading-6 mb-2">
                  {card.farmer}
                  </h3>
                  <p className="text-[16px] leading-[120%] font-normal md:text-[22px] md:font-semibold mb-2">
                    {card.description}
                  </p>
                  <div className="flex items-center space-x-1 md:space-x-2 mb-1 md:mb-2">
                  
                    <p className="text-sm md:text-[16px] font-normal leading-[120%]">
                      {card.location}
                    </p>
                  </div>
                </div>
              </a>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Stories;
