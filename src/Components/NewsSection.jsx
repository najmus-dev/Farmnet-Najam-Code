import React from "react";
import Slider from "react-slick";
import news1 from "../Assets/news1.png";
import news2 from "../Assets/news2.png";
import news3 from "../Assets/news3.png";

const News = () => {
  // Slick slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: (i) => (
      <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-500"></div>
    ),
  };

  const NewsCard = ({ image, title, description, link }) => {
    return (
      <a href={link}>
        <div className="relative w-full">
          <img src={image} alt={title} className="w-full h-auto object-cover" />
          <div className="absolute bottom-2 md:bottom-8 left-4 md:left-10 text-left">
            <h1 className="text-white text-2xl md:text-[48px] font-bold">
              {title}
            </h1>
            <h1 className="text-white md:text-[36px] font-medium md:mt-6">
              {description}
            </h1>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className="mb-10 mt-14 px-6 font-Inter">
      {/* Text Section */}
      <div className="mb-8">
        <h2 className="text-[#155528] font-bold text-2xl md:text-[40px] ">
          WHAT IS GOING ON
        </h2>
        <div className="flex justify-between mt-3 md:mt-10">
          <h1 className="text-2xl md:text-[48px] font-bold ">NEWS</h1>
          <a href="/contact-us">
            <h1 className="text-lg md:text-[36px] text-[#919291] font-medium">
              View More
            </h1>
          </a>
        </div>
      </div>
      {/* Slider Section */}
      <div className="relative">
        {/* Main Slider */}
        <Slider {...settings}>
          {/* Reusable Card Components */}
          <NewsCard
            image={news1}
            title="FARMER REGISTRATION"
            description="Register as a farmer and get support"
            link="/newspage1"
          />
          <NewsCard
            image={news2}
            title="FARMER REGISTRATION"
            description="Register as a farmer and get support"
            link="/newspage2"
          />
          <NewsCard
            image={news3}
            title="FARMER REGISTRATION"
            description="Register as a farmer and get support"
            link="/newspage3"
          />
        </Slider>
      </div>
    </div>
  );
};

export default News;
