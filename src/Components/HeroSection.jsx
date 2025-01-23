import React, { useState } from "react";
import Slider from "react-slick";
import slide1Video from "../Assets/photorealistic-woman-organic-sustainable-garden-harvesting-produce_23-2151462992.avif";
import slide2Video from "../Assets/chicken-farm-scene-with-poultry-people_23-2151462198.avif";
import slide3Video from "../Assets/photorealistic-woman-organic-sustainable-garden-harvesting-produce_23-2151462994.avif";
import slide4Video from "../Assets/farmer-taking-care-goat-farm_23-2151464993.avif";
import slide1 from "../Assets/slide1.png";
import slide2 from "../Assets/slide2.png";
import slide3 from "../Assets/slide3.png";
import slide4 from "../Assets/slide4.png";
import playbtn from "../Assets/playbtn.png";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
    centerMode: true,
    centerPadding: "0",
  };

  const slides = [
    {
      video: slide1Video,
      text: "REGISTER AS A FARMER",
      poster: slide1,
    },
    {
      video: slide2Video,
      text: "Agritech - Future Farming today",
      poster: slide2,
    },
    {
      video: slide3Video,
      text: "Urban Farming",
      poster: slide3,
    },
    {
      video: slide4Video,
      text: "Urban Farming",
      poster: slide4,
    },
  ];

  const handleThumbnailClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveSlide(index);
  };

  return (
    <div className="relative font-Inter">
      {/* Main Slider */}
      <Slider ref={sliderRef} {...settings} className="px-2">
        {slides.map((slide, index) => (
          <div className="relative" key={index}>
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              poster={slide.poster}
              className="w-full h-[250px] sm:h-[400px] md:h-[758px] object-cover rounded-md"
            />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={playbtn}
                alt="play button"
                className="w-10 h-10 md:w-[133px] md:h-[133px]"
              />
            </div>
            <div className="absolute bottom-16 md:bottom-11 left-4 text-left text-white">
              <h1 className="text-2xl md:text-[48px] font-bold">
                {slide.text}
              </h1>
              <h2 className="text-[18px] md:text-[36px] md:mt-4 font-semibold">
                Why register as a farmer
              </h2>
            </div>
          </div>
        ))}
      </Slider>

      {/* Thumbnails */}
      <div className="absolute bottom-0 md:right-8 transform translate-y-1/2 flex justify-center gap-2 px-4 md:px-0">
        {/* <div className="absolute bottom-0 md:right-8 transform translate-y-1/2 flex justify-center gap-2 px-4 md:px-0 lg:grid lg:grid-cols-4 xl:grid-cols-4"> */}
        {slides
          .filter((_, index) => index !== activeSlide)
          .slice(0, 3)
          .map((slide, index) => (
            <div
              className="relative group md:h-[212px] md:w-[259px] bg-[#F5F5F5] p-1 rounded-md cursor-pointer border-2 border-transparent hover:border-black transition-all duration-300"
              key={index}
              onClick={() =>
                handleThumbnailClick(slides.findIndex((s) => s === slide))
              }
            >
              <video
                src={slide.video}
                muted
                poster={slide.poster}
                className="w-32 h-20 md:w-[251px] md:h-[151px] rounded-md object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 -top-12 md:-top-0 flex items-center justify-center">
                <img
                  src={playbtn}
                  alt="play button"
                  className="w-6 h-6 md:w-[95px] md:h-[95px]"
                />
              </div>
              <p className="mt-2 md:p-2 font-extrabold text-[12px] md:text-[14px] text-black">
                {slide.text}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeroSection;
