import React, { useState } from "react";
import serviceSlide1 from "../Assets/serviceSlide1.png";
import serviceSlide2 from "../Assets/serviceSlide2.png";
import serviceSlide3 from "../Assets/serviceSlide3.png";
import playbtn from "../Assets/playbtn.png";

import { ChevronRight } from "lucide-react";

const slides = [
  {
    image: serviceSlide1,
    title: "Records",
    description:
      "Farmers update records on the go and presented in easy-to-read dashboards for management.",
  },
  {
    image: serviceSlide2,
    title: "Service Providers",
    description:
      "Service providers can access farming records for efficient service delivery.",
  },
  {
    image: serviceSlide3,
    title: "Agri Insights",
    description:
      "Gain insights into farm activities with real-time updates and analytics.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="bg-[#152C24] text-white p-8 h-[495px]">
        <h1 className="text-3xl w-[80%] mx-auto font-bold mb-6">
          Experience Farmnet App
        </h1>
      </div>

      <div className="bg-[#2E453D] w-[80%] mx-auto text-white -mt-96">
        <div className="relative p-6 flex flex-col items-center">
          {/* Play Button Centered on Main Slide */}
          <div className="relative">
            <img
              src={slides[activeIndex].image}
              className="w-96 h-auto rounded-md"
              alt={slides[activeIndex].title}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white p-2 rounded-full">
                <img src={playbtn} className="w-12 h-12" alt="Play" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">

            <h2 className="text-xl absolute left-8 bottom-4 font-semibold text-[44px] leading-[1.2] pb-4 pl-4">
              {slides[activeIndex].title}
            </h2>

            <div className="absolute right-0 bottom-0">
              <svg
                width="293"
                height="76"
                viewBox="0 0 293 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 0H293V76H0V50C0 22.3858 22.3858 0 50 0Z"
                  fill="#152C24"
                />
              </svg>
              <button className="absolute flex right-4 bottom-4 text-white font-bold text-[20px] tracking-wide">
                See More{" "}
                <ChevronRight className="text-white w-[34px] h-[34px] ml-16" />
              </button>
            </div>
            <div className="absolute left-4 top-4">
            <img src="https://s3-alpha-sig.figma.com/img/7bb6/61a7/1ec4ec8818551bbe7e1658535c1a8be8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RhZfs6yzpc4EMttVn0f7X4F9QoqlVCDf7qZzU93MdDk10CS1-i25FnWOcO-5HOVnETeSGmbmh9HZ~bSdZwTJd7M~Ly7Z0lmUiuEbeMIy1SF8e0QoVYtXkWbMn05RdQLilIrmXvuWF0fDgHb-3g~M~lJ9bwBq~ui6IHhq8fOO4PL5jQAThWG~qO9TZpDCt2tS62YCMdGr80vAog-j7ChBJ1Apxz1qm-nIs7TpWpWGTVeb0zSNpuUbKX23hCgJPvkTF~2oRg-WYM9e87RbD5NBw8it9XU22NECG-RwIK7Zl34WzL0J1locSSgLwhoM2hAC4QyAfOPjso5HjP1mi9dIJA__" className="w-[157px] h-[48px] " alt="Pla" />

            </div>
          </div>
        </div>
      </div>

      {/* Clickable Small Previews to Change Slide */}

      <div className="flex justify-center gap-6 mt-6 w-[80%] mx-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-[30%] cursor-pointer p-6 rounded-lg"
            onClick={() => setActiveIndex(index)} // Change slide when clicking preview
          >
            <div
              className={`border-t-4 ${
                index === activeIndex ? "border-green-700" : "bg-[#D9D9D9]"
              }  mb-3 h-[5px] rounded-full`}
            ></div>
            <h3 className="font-bold text-lg">{slide.title}</h3>
            <div className="flex justify-between">
              <p className="text-gray-600 mt-2">{slide.description}</p>
              <div className="flex justify-end items-center mt-4">
                <img
                  src={slide.image}
                  className="w-12 h-auto"
                  alt={slide.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;


// export default Services;
// import React, { useState } from "react";
// import Slider from "react-slick";
// import playbtn from "../Assets/playbtn.png";
// import serviceSlide1 from "../Assets/serviceSlide1.png";
// import serviceSlide2 from "../Assets/serviceSlide2.png";
// import serviceSlide3 from "../Assets/serviceSlide3.png";
// import serviceSlide4 from "../Assets/serviceSlide4.png";
// import serviceSlide5 from "../Assets/serviceSlide5.png";
// import serviceSlide6 from "../Assets/serviceSlide6.png";
// import { ChevronRight } from "lucide-react";

// const slides = [
//   {
//     image: serviceSlide1,
//     title: "Records",
//     description:
//       "Farmers update records on the go and presented in easy-to-read dashboards for management.",
//   },
//   {
//     image: serviceSlide2,
//     title: "Service Providers",
//     description:
//       "Farmers update records on the go and presented in easy-to-read dashboards for management.",
//   },
//   {
//     image: serviceSlide3,
//     title: "Contracts",
//     description:
//       "Farmers update records on the go and presented in easy-to-read dashboards for management.",
//   },

// ];

// const Services = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1, // Show 1 main slide at a time
//     slidesToScroll: 1,
//     centerMode: true, // Centers the current slide
//     centerPadding: "0px", // Keeps the slide centered
//     afterChange: (index) => setActiveIndex(index),
//     arrows: false, // Hides left and right navigation arrows

//   };

//   return (
//     <>
//       <div className="bg-[#152C24] text-white p-8 h-[495px]">
//         <h1 className="text-3xl w-[80%] mx-auto font-bold mb-6">
//           Experience Farmnet App
//         </h1>
//       </div>
//       <div className="bg-[#2E453D] w-[80%] mx-auto text-white -mt-96">
//         <div className="relative">
//           {/* Main Slide */}
//           <Slider {...settings} className="mb-6">
//             {slides.map((slide, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 {/* Play Button - Centered */}
//                 <div className="relative w-96 flex justify-center">
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className="w-96 h-auto rounded-md"
//                   />
//                   {/* Centering Play Button */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <img
//                       src={playbtn}
//                       alt="Play Button"
//                       className="w-16 h-16 cursor-pointer"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>

//           {/* Bottom Section */}

//             <div className="relative flex items-center justify-between">
//             <h2 className="text-xl font-semibold align-middle text-[44px] leading-[1.2] pb-4 pl-4">
//               {slides[activeIndex].title}
//             </h2>

//             <div className="absolute right-0 bottom-0">
//             <svg
//               width="293"
//               height="76"
//               viewBox="0 0 293 76"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M50 0H293V76H0V50C0 22.3858 22.3858 0 50 0Z" fill="#152C24" />
//             </svg>
//             <button className="absolute flex right-4 bottom-3 text-white font-bold text-[20px] tracking-wide">
//               See More    <ChevronRight className="text-white w-[34px] h-[34px] ml-16" />
//             </button>
//           </div>

//           </div>
//         </div>
//       </div>

//       {/* Small Previews */}
//       <div className="flex mt-4 space-x-2 overflow-x-auto w-[80%] mx-auto">
//         {slides.map((slide, index) => (

//           <div
//             key={index}
//             className="w-[30%] bg-gray-100 p-6 rounded-lg shadow-lg"
//           >
//             <div
//               className={`border-t-4 ${
//                 index === activeIndex ? "border-green-700" : "bg-[#D9D9D9]"
//               }  mb-3 h-[5px] rounded-full`}
//             ></div>
//             <h3 className="font-bold text-lg">{slide.title}</h3>
//             <div className="flex justify-between">
//               <p className="text-gray-600 mt-2">{slide.description}</p>
//               <div className="flex justify-end items-center mt-4">
//                 <img
//                   src={slide.image}
//                   className="w-12 h-auto"
//                   alt={slide.title}
//                 />
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Services;
