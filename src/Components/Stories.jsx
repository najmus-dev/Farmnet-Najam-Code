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
    <div className="mb-10 mt-14 font-Inter w-[80%] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Voice of Farmers
          </h2>
          <p className="text-gray-600 mt-2 max-w-5xl">
            Farmers highlight how Farmnet apps help them access timely weather
            updates, expert agricultural advice, and market information, which
            improves their decision-making and productivity. The app is also
            praised for enabling easy communication with buyers, securing better
            market prices, and ensuring timely payments.
          </p>
        </div>
        <button className="flex items-center space-x-2 text-white bg-[#152C24] px-6 py-2 rounded-lg hover:bg-[#2E453D] transition-all">
          <span>See More</span> <ChevronRight className="ml-2" />
        </button>

      
      </div>
      {/* slider section */}

      <Slider {...settings} className="pl-4 md:pl-6 overflow-x-hidden mr-16">
        {cardData.map((card, index) => (
          <div key={index} className="p-1">
            <section className="rounded-sm w-[375px] h-[542px] relative">
              <a href={card.link}>
                <div className="relative h-full">
                  <img
                    src={card.imgSrc}
                    alt={`story${index}`}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={playbtn}
                      alt="play button"
                      className="w-10 h-10 md:w-[123px] md:h-[123px]"
                    />
                  </div>

                  {/* Text Content Positioned at Bottom */}
                  <div className="absolute bottom-0 left-0 w-full text-white px-4 py-3 md:py-3">
                    <h3 className="font-bold text-lg md:text-[24px] leading-5 md:leading-6 mb-2">
                      Farmer: {card.farmer}
                    </h3>

                    <p className="text-[16px] leading-[120%] font-normal md:text-[22px] md:font-semibold mb-2">
                      {card.description}
                    </p>
                    <div className="flex items-center space-x-1 md:space-x-2 mb-1 md:mb-2">
                      <CiLocationOn className="text-base md:text-lg" />
                      <p className="text-sm md:text-[16px] font-normal leading-[120%] align-middle">
                        {card.location}
                      </p>
                    </div>
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
