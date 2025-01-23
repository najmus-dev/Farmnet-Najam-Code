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

const Stories = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3.1,
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
      farmer: "Johnnes Shikongo",
      location: "Walvisbay, Namibia",
      description: "How to make farming “cool”",
      link: "/farmerstories1",
    },
    {
      imgSrc: story22,
      farmer: "Maria Haidula",
      location: "Walvisbay, Namibia",
      description: "Communities the future of farming",
      link: "/farmerstories1",
    },
    {
      imgSrc: story4,
      farmer: "David Nghidinwa",
      location: "Walvisbay, Namibia",
      description: "Smart farming",
      link: "/farmerstories1",
    },
    {
      imgSrc: story44,
      farmer: "Johnnes Shikongo",
      location: "Walvisbay, Namibia",
      description: "How to make farming “cool”",
      link: "/farmerstories1",
    },
    {
      imgSrc: story55,
      farmer: "Maria Haidula",
      location: "Walvisbay, Namibia",
      description: "Communities the future of farming",
      link: "/farmerstories1",
    },
    {
      imgSrc: story66,
      farmer: "David Nghidinwa",
      location: "Walvisbay, Namibia",
      description: "Smart farming",
      link: "/farmerstories1",
    },
    {
      imgSrc: story6,
      farmer: "Johnnes Shikongo",
      location: "Walvisbay, Namibia",
      description: "Digitalizing chicken farming",
      link: "/farmerstories1",
    },
    {
      imgSrc: story5,
      farmer: "Maria Haidula",
      location: "Walvisbay, Namibia",
      description: "Digitalizing farming",
      link: "/farmerstories1",
    },
    {
      imgSrc: story88,
      farmer: "David Nghidinwa",
      location: "Walvisbay, Namibia",
      description: "Smart farming",
      link: "/farmerstories1",
    },
  ];

  return (
    <div className="mb-10 mt-14 font-Inter">
      {/* Text Section */}
      <div className="  mb-8 px-6">
        <h2 className="text-[#155528] font-bold text-xl md:text-[40px] ">
          FARMERS STORIES
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between mt-3 md:mt-6">
          <h1 className="text-xl md:text-[48px] font-bold ">
            WHAT ARE FARMERS SAYING
          </h1>
          <a href="/contact-us">
            <h1 className="text-lg md:text-[36px] text-[#919291] font-medium mt-2 md:mt-0">
              View More
            </h1>
          </a>
        </div>
      </div>
      {/* slider section */}

      <Slider {...settings} className="pl-4 md:pl-6 overflow-x-hidden">
        {cardData.map((card, index) => (
          <div key={index} className="p-1">
            <section className="rounded-sm overflow-hidden max-w-[300px] md:max-w-[450px] ">
              <a href={card.link}>
                <div className="relative">
                  <img
                    src={card.imgSrc}
                    alt={`story${index}`}
                    className="w-full h-[150px] md:h-[221px] object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={playbtn}
                      alt="play button"
                      className="w-10 h-10 md:w-[123px] md:h-[123px]"
                    />
                  </div>
                </div>
              </a>
              <div className="bg-[#155528] text-white px-4 py-3 md:py-3">
                <h3 className="font-bold text-lg md:text-[24px] leading-5 md:leading-6 mb-2">
                  Farmer: {card.farmer}
                </h3>
                <div className="flex items-center space-x-1 md:space-x-2 mb-1 md:mb-2">
                  <CiLocationOn className="text-base md:text-lg" />
                  <p className="text-sm md:text-[16px] ">{card.location}</p>
                </div>
                <p className="text-[14px] md:text-[22px] font-bold md:font-semibold">
                  {card.description}
                </p>
              </div>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Stories;
