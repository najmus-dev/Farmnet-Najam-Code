
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your images
import slide1 from "../Assets/slide1.png";
import slide2 from "../Assets/slide2.png";
import slide3 from "../Assets/slide3.png";
import seeMoreBg from "../Assets/see-more-bg.svg";
const slides = [
  { image: slide1, title: "Building seed banks" },
  { image: slide2, title: "Sustainable farming" },
  { image: slide3, title: "Agritech Innovations" },
];

const CustomPrevArrow = (props) => (
  <button
    {...props}
    className="absolute bottom-4 right-80 bg-[#054413] p-2 rounded-full z-10 hover:bg-[#D2F34A] transition w-[61px] h-[61px] flex items-center justify-center"
  >
    <ChevronLeft className="text-white w-[34px] h-[34px]" />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    {...props}
    className="absolute bottom-4 right-52 bg-[#054413] p-2 rounded-full z-10 flex hover:bg-[#D2F34A] transition w-[61px] h-[61px] items-center justify-center"
  >
    <ChevronRight className="text-white w-[34px] h-[34px]" />
  </button>
);

const HeroCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative bg-[#152C24] p-4 text-white w-full mx-auto">
      <div className="bg-[#152C24] w-[88%] mx-auto text-white py-12 md:px-16 flex flex-col md:flex-row justify-between">
        <div className="">
          <h3 className="text-[#FDBD26] font-inter font-bold text-[36px] leading-[120%] tracking-[0%] align-middle">
            AgriTech
          </h3>
          <h1 className="font-inter font-bold text-[54px] leading-[120%] tracking-[0%] align-middle mt-2">
            Revolutionizing Agriculture with Digital <br />
            solutions
          </h1>
          <p className="font-inter font-normal text-[32px] leading-[120%] tracking-[0%] align-middle mt-2">
            Stay informed with insights and innovations in Agriculture
          </p>
        </div>
        <div className="">
          <img
            src="https://s3-alpha-sig.figma.com/img/b832/8bd4/6654cbc78bc556457aa0668fdc151d14?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OI7MCGBA9DkMdPgDhFKDdzi4ygo-CQkFaoCEQhGfO1iWbZ9u08Bjqs25SuR6VDroHDTEALc8Zr7NviecMYJ0cRMlQUQEXoIzRe~Bnyq7j6Cj7~rWRrpwnq5GEfbpUQINNOVyMOZxlLi3afFBCFduCqPU~Xs~RdFvvt6Xyv8uDlITVhvgLN8dZ8xCPMpcuMAmxcx5ol2fFAtV5rckOf4kqSf8fBY7Lud-62CWEfISj1s9Zg6~1KUTP5ErjtqUzwxScYHRmJ3bK7KDStkdLtdggLewhI-rrtEJGOuzHZs2dVJ82w8gHXRnUVWmhGqDrLMj34gdm5~rkV8G3vf2GUJCcA__"
            alt="Leaf Icon"
            className="w-12 h-12"
          />
        </div>
      </div>

      {/* Slider */}
      <Slider {...settings} className="overflow-hidden rounded-md">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-[80%] h-[622px] object-cover rounded-md mx-auto"
            />

            <div className="absolute top-0 left-40">
              {/* SVG Background */}
              <svg
                width="293"
                height="76"
                viewBox="0 0 293 76"
                fill="#152C24"
                className="absolute inset-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H293V47.0041C293 63.4352 280.599 76 259 76H0V0Z"
                  fill="#152C24"
                />
              </svg>

              <button className="flex items-center relative bg-[#D2F34A] text-black px-4 py-2 w-[249px] mx-2 rounded-md font-bold transition">
                <p className="font-inter font-bold text-[20px] leading-[120%] tracking-wide ml-4">
                  See More
                </p>
                <ChevronRight className="text-black w-[34px] h-[34px] ml-16" />
              </button>
            </div>

            <div className="absolute bottom-6 left-48">
              <p className="font-inter font-semibold text-[24px] leading-[120%] tracking-[0%] align-middle">
                SEED BANKS
              </p>
              <h2 className="font-inter font-bold text-[40px] leading-[120%] tracking-[0%] align-middle">
                {slide.title}
              </h2>
            </div>

            <div className="absolute bottom-0 right-40">
              {/* SVG Background */}
              <svg
                width="293"
                height="76"
                viewBox="0 0 293 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 50C0 22.3858 22.3858 0 50 0H293V76H0V50Z"
                  fill="#152C24"
                />
              </svg>
            </div>
          </div>
        ))}
      </Slider>

      <div className="w-[80%] mx-auto py-10 px-6">
      <h2 
        className="text-white mb-6"
        style={{
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "120%",
          letterSpacing: "0%",
          verticalAlign: "middle",
        }}
      >
        Partners&nbsp; <span className="text-gray-300">supporting farmers</span>
      </h2>
      <div className="flex flex-wrap justify-between">
        <img src="https://s3-alpha-sig.figma.com/img/a956/3d4a/256aa8d0eeedf53f38b88eab97a13c05?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YqMl1fpRfi9kCqWe5fKAX4oOUfozvvVFhrtTbY5v01AZCkFqhNt~6ipr6ATSQmZj5qFgyqh8lgK9rjeOPvGWtB31AeVN9TxR874jgrnh0pky30JLLikDcwODsTVQfHCYRKkDVuSUaJpZcVqavFOsbWqrDqfJyen-C-Y28QrHhynVM07YkQl0OVcfcPUsmmPFNndo6flOwwnVcArorSOHC6Vp4Y1Br-rx~IIHcO~pFgfRhQ0LfQVTPfLOJpRjPZyOD8vEeOI7DDBkRM~NlLISF0lyTmJ8TwWT-axPKwm-Sonbt5cIu08i0iZXB1MGaLDq84RBrSQ8xF45uJhRHVFoew__" alt="Farmers Networks" className="h-16" />
        <img src="https://s3-alpha-sig.figma.com/img/aa66/9ec5/8c95cd909abe878f10fbe1a186315319?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rnL02-XR3Xb1BIXTRsHscnKbdfOWPzpmvRJWp9K50fMxjTLqDslAb2HFlFrBESxlFbIGqg1oiODHSmIKZRsivl3E-zt7-cHqg9EMSAQlYdPke~2tvPnOI8XceVIx6bIdz2k8aak10J-hapcrPohG91brTkH9lvVPNxvUBr51W3s2PCbe73VFGCAy0JzoUwzAx89-VDEUbgeYVVQCweu6ZUoDzvnXr-2Y~bsQ24dI-LlyLTgFO~xDEYmBpyipKpsY2nVGpcKoX5-OIbSEO2yCxXNtSBfJU81c9e5ujoFMADX~omv6GTlKTEzNIZFtyYjVZxsKzzRXMCNlm8OLm8R18Q__" alt="Partner 2" className="h-16" />
        <img src="https://s3-alpha-sig.figma.com/img/bed5/b343/5175862a41959813fefdeb16b40e3337?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=snRRlawGzuUFXU931Dox4hiuL6j9~vIfX-n1mYWi2DcOkOY4FQKn8RS7LOr0rd4mE8laMNo2ZnNHEP20in4By8HbK23Q8XQWzucy3LcUC0s4DPFGjhECyc0335IPDAy2FVHf1AemaU91eo4KQ9qsNAZFwPkleiLyvPTl5yaSLYopbDFiaDsoFWAVVSBNe241whE7ClNGdoBiMzVn1VlbK4hZntbXPHMaZDzfxeewUwQRcKnIadVs7QNWJUDNo1atBd3~EDZDlBKGEa8wLZr~cM60h4kj-luQ0VO1b9vC0kJO0cskbdBvCkvvk8SZA58GIz3OGiduC5W6WJ1cPjQfSg__" alt="Trendstec" className="h-16" />
        <img src="https://s3-alpha-sig.figma.com/img/7d6d/e0d9/2bc3db7b1e3185b594ac7a9ddbcb03cf?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kkSUJlhzVHbFw~PQM~-NWeoikDSf3e~rb-3USdWsXMolhsdry7F2yeRYIbMXdiK6vxJ4o-q3mIleaq3vrh5mv-shey0bcBVVnsq-1ZTnzs0lNlCwBLAYpSOjqNAJbq-D7rl4TRPJ6KJbLA9gRjmpACOFrpvwQIpaLv~hdQJFepoucn4D-K5FS5JW5TWNmmI82wgsFJxuekPxMnGR4k1nUNtY3qY-UaNmSnGkCuy5sJ0uPUDy~hOvuarcYJKlYxGstBTIvNzvdvNuXagA0KQpCpJPrjiAPYGs1StQXzXrAQLWBRLLYLKoQpA1P0zMFuE38fxY12Aa2tm5HDwC~mXAGA__" alt="MyHUSTLE" className="h-16" />
      </div>
    </div>
    </div>
  );
};

export default HeroCarousel;
