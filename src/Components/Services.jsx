// import React, { useState } from "react";
// import Slider from "react-slick";
// import Modal from "./ServicesModal";
// import serviceSlide1 from "../Assets/serviceSlide1.png";
// import serviceSlide2 from "../Assets/serviceSlide2.png";
// import serviceSlide3 from "../Assets/serviceSlide3.png";
// import serviceSlide4 from "../Assets/serviceSlide4.png";
// import serviceSlide5 from "../Assets/serviceSlide5.png";
// import serviceSlide6 from "../Assets/serviceSlide6.png";
// import playbtn from "../Assets/playbtn.png";
// import servicesSlideVideo1 from "../Assets/servicesSlideVideo1.mp4";
// import servicesSlideVideo2 from "../Assets/servicesSlideVideo2.mp4";
// import servicesSlideVideo3 from "../Assets/servicesSlideVideo3.mp4";
// import servicesSlideVideo4 from "../Assets/servicesSlideVideo4.mp4";
// import mobile from "../Assets/mobile.png";

// // Reusable Card Component
// const ServiceCard = ({ image, title, description, onPlay, link }) => (
//   <div className="px-3 md:px-0">
//     <div className="overflow-hidden font-Inter">
//       <div className="relative">
//         <div className="bg-[#EDF0EF] w-[250px] h-32 md:w-[444px] md:h-[276px] rounded-t-md"></div>
//         <div className="bg-[#155528] w-[250px] h-64 sm:w-[80px] md:w-[444px] sm:h-80 rounded-b-md md:h-[335px] p-2 md:p-4">
//           <div className="text-white mt-24 md:mt-44 px-3 md:px-2">
//             <h1 className="font-bold mb-1 md:mb-2 text-sm md:text-[20px]">
//               {title}
//             </h1>
//             <a href={link}>
//               <p className="text-xs md:text-[16px] font-medium leading-5">
//                 {description}
//               </p>
//             </a>
//           </div>
//         </div>

//         <div className="absolute bottom-32   flex justify-center items-center inset-0">
//           <img
//             src={image}
//             alt={title}
//             className="h-48 w-[120px] md:h-[425px] md:w-[215px] max-w-full"
//           />
//           {/* Play button overlay */}
//           <div
//             className="absolute inset-0 flex justify-center items-center cursor-pointer"
//             onClick={onPlay}
//           >
//             <img
//               src={playbtn}
//               alt="Play Button"
//               className="w-6 h-6 md:w-[95px] md:h-[95px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// // Services Component
// const Services = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState("");

//   const openModal = (videoSrc) => {
//     setCurrentVideo(videoSrc);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setCurrentVideo("");
//     setIsModalOpen(false);
//   };

//   //   // Array of card data
//   const cardData = [
//     {
//       image: serviceSlide1,
//       title: "Profile",
//       description:
//         "Farmer's Basic Information, Farm Details, Experience & Expertise, Farming Practices, Products and Services, along with Reviews and Ratings",
//       link: "/ServicesPage",
//       video: servicesSlideVideo1,
//     },
//     {
//       image: serviceSlide2,
//       title: "Record Keeping",
//       description:
//         "Farmers can easily log essential data in real-time, capturing key details about their farming activities directly through the app.",
//       link: "/ServicesPage",
//       video: servicesSlideVideo3,
//     },
//     {
//       image: serviceSlide3,
//       title: "Invoice",
//       description:
//         "Farmers can create invoices, quotations, and delivery notes, while also tracking payments and financial transactions",
//       link: "/ServicesPage",
//       video: servicesSlideVideo2,
//     },
//     {
//       image: serviceSlide4,
//       title: "Catalogues",
//       description:
//         "Farmers receive comprehensive catalogs showcasing the produce and services they offer, which can also be used for marketing purposes",
//       link: "/ServicesPage",
//       video: servicesSlideVideo4,
//     },
//     {
//       image: serviceSlide5,
//       title: "Resources -Scanner",
//       description:
//         "Farmers can scan their crops or livestock for diseases, receive diagnoses, and manage the treatment or prevention of these diseases",
//       link: "/ServicesPage",
//       video: servicesSlideVideo1,
//     },
//     {
//       image: serviceSlide6,
//       title: "Resources - Funding",
//       description: "Users can apply for funding",
//       link: "/ServicesPage",
//       video: servicesSlideVideo2,
//     },
//   ];

//   return (
//     <div className="font-Inter mb-10 overflow-x-hidden">
//       {/* Text Section */}
//       <div className="flex flex-col px-6 md:px-8 lg:px-12 sm:flex-row justify-between items-start sm:items-center">
//         <div>
//           <h1 className="text-[#155528] text-2xl md:text-[40px] font-bold">
//             WHAT DO WE DO
//           </h1>
//           <h1 className="text-2xl md:text-[48px] font-bold mt-3 md:mt-6">
//             SERVICES WE OFFER
//           </h1>
//         </div>
//         <div className="flex flex-col mt-4 sm:mt-0">
//           <div className="flex justify-end">
//             <a href="/contact-us">
//               <h1 className="text-lg md:text-[36px] text-[#919291] font-medium">
//                 View More
//               </h1>
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Slider Section */}
//       <div className="mt-10">
//         <div className="slider-container pl-6">
//           <Slider
//             dots={false}
//             infinite={true}
//             speed={500}
//             autoplay={true}
//             autoplaySpeed={2000}
//             slidesToShow={3.1}
//             slidesToScroll={1}
//             centerMode={true}
//             centerPadding="60px"
//             responsive={[
//               {
//                 breakpoint: 420,
//                 settings: { slidesToShow: 1.1, centerPadding: "20px" },
//               },
//               {
//                 breakpoint: 768,
//                 settings: { slidesToShow: 1.1, centerPadding: "40px" },
//               },
//               {
//                 breakpoint: 1024,
//                 settings: { slidesToShow: 2.5, centerPadding: "100px" },
//               },
//             ]}
//           >
//             {cardData.map((card, index) => (
//               <div key={index} className="pr-4">
//                 <ServiceCard
//                   image={card.image}
//                   title={card.title}
//                   description={card.description}
//                   link={card.link}
//                   onPlay={() => openModal(card.video)}
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//       {/* Modal Component */}
//       <Modal
//         isOpen={isModalOpen}
//         videoSrc={currentVideo}
//         onClose={closeModal}
//       />
//     </div>
//   );
// };

// export default Services;

import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "./ServicesModal";
import serviceSlide1 from "../Assets/serviceSlide1.png";
import serviceSlide2 from "../Assets/serviceSlide2.png";
import serviceSlide3 from "../Assets/serviceSlide3.png";
import serviceSlide4 from "../Assets/serviceSlide4.png";
import serviceSlide5 from "../Assets/serviceSlide5.png";
import serviceSlide6 from "../Assets/serviceSlide6.png";
import playbtn from "../Assets/playbtn.png";
import servicesSlideVideo1 from "../Assets/servicesSlideVideo1.mp4";
import servicesSlideVideo2 from "../Assets/servicesSlideVideo2.mp4";
import servicesSlideVideo3 from "../Assets/servicesSlideVideo3.mp4";
import servicesSlideVideo4 from "../Assets/servicesSlideVideo4.mp4";
import mobile from "../Assets/mobile.png";

// Reusable Card Component
const ServiceCard = ({ image, title, description, onPlay, link }) => (
  <div className="px-3 md:px-0">
    <div className="overflow-hidden font-Inter">
      <div className="relative">
        <div className="bg-[#EDF0EF] w-[250px] h-32 md:w-[444px] md:h-[276px] rounded-t-md"></div>
        <div className="bg-[#155528] w-[250px] h-64 sm:w-[80px] md:w-[444px] sm:h-80 rounded-b-md md:h-[335px] p-2 md:p-4">
          <div className="text-white mt-24 md:mt-44 px-3 md:px-2">
            <h1 className="font-bold mb-1 md:mb-2 text-sm md:text-[20px]">
              {title}
            </h1>
            <a href={link}>
              <p className="text-xs md:text-[16px] font-medium leading-5">
                {description}
              </p>
            </a>
          </div>
        </div>

        <div className="absolute bottom-32   flex justify-center items-center inset-0">
          <img
            src={image}
            alt={title}
            className="h-48 w-auto md:h-[425px] md:w-[215px] "
          />
          {/* Play button overlay */}
          <div
            className="absolute inset-0 flex justify-center items-center cursor-pointer"
            onClick={onPlay}
          >
            <img
              src={playbtn}
              alt="Play Button"
              className="w-6 h-6 md:w-[95px] md:h-[95px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Services Component
const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideo("");
    setIsModalOpen(false);
  };

  //   // Array of card data
  const cardData = [
    {
      image: serviceSlide1,
      title: "Profile",
      description:
        "Farmer's Basic Information, Farm Details, Experience & Expertise, Farming Practices, Products and Services, along with Reviews and Ratings",
      link: "/ServicesPage",
      video: servicesSlideVideo1,
    },
    {
      image: serviceSlide2,
      title: "Record Keeping",
      description:
        "Farmers can easily log essential data in real-time, capturing key details about their farming activities directly through the app.",
      link: "/ServicesPage",
      video: servicesSlideVideo3,
    },
    {
      image: serviceSlide3,
      title: "Invoice",
      description:
        "Farmers can create invoices, quotations, and delivery notes, while also tracking payments and financial transactions",
      link: "/ServicesPage",
      video: servicesSlideVideo2,
    },
    {
      image: serviceSlide4,
      title: "Catalogues",
      description:
        "Farmers receive comprehensive catalogs showcasing the produce and services they offer, which can also be used for marketing purposes",
      link: "/ServicesPage",
      video: servicesSlideVideo4,
    },
    {
      image: serviceSlide5,
      title: "Resources -Scanner",
      description:
        "Farmers can scan their crops or livestock for diseases, receive diagnoses, and manage the treatment or prevention of these diseases",
      link: "/ServicesPage",
      video: servicesSlideVideo1,
    },
    {
      image: serviceSlide6,
      title: "Resources - Funding",
      description: "Users can apply for funding",
      link: "/ServicesPage",
      video: servicesSlideVideo2,
    },
  ];

  return (
    <div className="font-Inter mb-10 overflow-x-hidden">
      {/* Text Section */}
      <div className="flex flex-col px-6 md:px-8 lg:px-12 sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-[#155528] text-2xl md:text-[40px] font-bold">
            WHAT DO WE DO
          </h1>
          <h1 className="text-2xl md:text-[48px] font-bold mt-3 md:mt-6">
            SERVICES WE OFFER
          </h1>
        </div>
        <div className="flex flex-col mt-4 sm:mt-0">
          <div className="flex justify-end">
            <a href="/contact-us">
              <h1 className="text-lg md:text-[36px] text-[#919291] font-medium">
                View More
              </h1>
            </a>
          </div>
        </div>
      </div>
      {/* Slider Section */}
      <div className="mt-10">
        <div className="slider-container pl-6">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            autoplay={true}
            autoplaySpeed={2000}
            slidesToShow={3.1}
            slidesToScroll={1}
            centerMode={true}
            centerPadding="60px"
            responsive={[
              {
                breakpoint: 420,
                settings: { slidesToShow: 1.1, centerPadding: "20px" },
              },
              {
                breakpoint: 768,
                settings: { slidesToShow: 1.1, centerPadding: "40px" },
              },
              {
                breakpoint: 1024,
                settings: { slidesToShow: 2.5, centerPadding: "100px" },
              },
            ]}
          >
            {cardData.map((card, index) => (
              <div key={index} className="pr-4">
                <ServiceCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                  onPlay={() => openModal(card.video)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        videoSrc={currentVideo}
        onClose={closeModal}
      />
    </div>
  );
};

export default Services;
