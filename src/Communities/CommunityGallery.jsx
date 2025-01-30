// import React, { useState } from "react";
// import community1 from "../Assets/community1.png";
// import community2 from "../Assets/community2.png";
// import community3 from "../Assets/community3.png";
// import community4 from "../Assets/community4.png";
// import community5 from "../Assets/community5.png";
// import community6 from "../Assets/community6.png";
// import graph from "../Assets/graph.png";

// // CommunityGalleryCard Component
// const CommunityGalleryCard = ({
//   image,
//   title,
//   description,
//   linkPath,
//   heading,
// }) => {
//   return (
//     <div className="bg-[#F3F5F5] rounded-lg overflow-hidden w-full">
//       {/* Image  */}
//       <div className="relative">
//         <a href={linkPath} className="block">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-[197px] sm:h-[250px] md:h-[300px] lg:h-[397px] object-cover"
//           />
//         </a>
//         <div className="absolute bottom-4 md:bottom-8 left-4">
//           <h2 className="text-white text-xl sm:text-[20px] md:text-[24px] font-bold">
//             {title}
//           </h2>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-2">
//         <h3 className="font-bold md:mt-1 text-base sm:text-sm md:text-[16px]">
//           {heading}
//         </h3>

//         {/* Flex container */}
//         <div className="flex items-start justify-between">
//           <p
//             className="text-xs sm:text-sm md:text-[18px] mt-2"
//             dangerouslySetInnerHTML={{
//               __html: description.replace(/\./g, ".<br />"),
//             }}
//           ></p>
//           {/* Graph */}
//           <img src={graph} alt="Graph" className="w-6 h-6 mt-2 sm:mt-0" />
//         </div>

//         {/* Button */}
//         <div className="flex justify-end">
//           <button className="inline-flex items-center text-xs sm:text-sm md:text-[10px] md:w-[104px] w-[100px] h-[22px] py-1 px-4 sm:px-6 text-center text-white bg-green-900 rounded-tr-lg rounded-bl-lg font-semibold hover:bg-green-700">
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // CommunityGallery Component
// const CommunityGallery = () => {
//   const [activeBar, setActiveBar] = useState("PRODUCTION");

//   const progressBars = ["PRODUCTION", "Services", "ESG", "-"];

//   const allCards = [
//     {
//       image: community1,
//       title: "HAMLAR FARMERS",
//       description:
//         "Sustainable farming based on local solutions driven by community. Chili Farming.",
//       linkPath: "/seed-overview",
//       heading: "Horticulture",
//     },
//     {
//       image: community2,
//       title: "TET FARMERS",
//       description:
//         "Sustainable farming based on local solutions driven by community. Vegetable farming",
//       linkPath: "/valueaddition-overview ",
//       heading: "Vegetables",
//     },
//     {
//       image: community3,
//       title: "ALOTH FARMERS",
//       description:
//         "Sustainable farming based on local solutions driven by community. Vegetable farming",
//       linkPath: "/vegetables-overview",
//       heading: "Vegetables",
//     },
//     {
//       image: community4,
//       title: "PUR FARMERS",
//       description:
//         "Sustainable farming based on local solutions driven by community. Horticulture farming",
//       linkPath: "/horticulture-overview",
//       heading: "Horticulture",
//     },
//     {
//       image: community5,
//       title: "PITH FARMERS",
//       description:
//         "Sustainable farming based on local solutions driven by community. Cattle rearing.",
//       linkPath: "/esg-overview",
//       heading: "Cattle",
//     },
//     {
//       image: community6,
//       title: "Chicken",
//       description:
//         "Sustainable farming based on local solutions driven by community. Chicken rearing.",
//       linkPath: "/cattles-overview",
//       heading: "Chicken Rearing Overview",
//     },
//   ];

//   return (
//     <div className="mt-4 font-Inter">
//       {/* Progress Bars */}
//       <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p-2 mb-8">
//         {progressBars.map((bar) => (
//           <div
//             key={bar}
//             className="w-full md:w-[20%]"
//             onClick={() => setActiveBar(bar)}
//           >
//             <div className="flex justify-between mb-1">
//               <p
//                 className={`md:text-[20px] font-bold  ${
//                   activeBar === bar ? "text-green-900" : ""
//                 }`}
//               >
//                 {bar}
//               </p>
//             </div>
//             <div className="h-3 rounded-full overflow-hidden bg-[#D9D9D9]">
//               <div
//                 className={`h-full rounded-full ${
//                   activeBar === bar ? "bg-[#114918]" : ""
//                 } w-[100%]`}
//               ></div>
//             </div>
//           </div>
//         ))}
//         {/* View More Text */}
//         <div className="w-full md:w-[20%] flex items-center justify-end">
//           <h1 className="text-lg md:text-[20px] hover:underline text-[#919291] font-bold">
//             View More
//           </h1>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {allCards.map((card, index) => (
//           <CommunityGalleryCard
//             key={index}
//             image={card.image}
//             title={card.title}
//             description={card.description}
//             linkPath={card.linkPath}
//             heading={card.heading}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommunityGallery;

import React, { useState } from "react";
import community1 from "../Assets/community1.png";
import community2 from "../Assets/community2.png";
import community3 from "../Assets/community3.png";
import community4 from "../Assets/community4.png";
import community5 from "../Assets/community5.png";
import community6 from "../Assets/community6.png";
import graph from "../Assets/graph.png";

// CommunityGalleryCard Component
const CommunityGalleryCard = ({
  image,
  title,
  description,
  linkPath,
  heading,
}) => {
  return (
    <div className="bg-[#F3F5F5] rounded-lg overflow-hidden w-full">
      {/* Image  */}
      <div className="relative">
        <a href={linkPath} className="block">
          <img
            src={image}
            alt={title}
            className="w-full h-[197px] sm:h-[250px] md:h-[300px] lg:h-[397px] object-cover"
          />
        </a>

        <div className="absolute bottom-4 md:bottom-8 left-4">
          <h2 className="text-white text-xl sm:text-[20px] md:text-[24px] font-bold">
            {title}
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-2">
        <h3 className="font-bold md:mt-1 text-base sm:text-sm md:text-[16px]">
          {heading}
        </h3>

        {/* Flex container */}
        <div className="flex items-start justify-between">
          <p
            className="text-xs sm:text-sm md:text-[18px] mt-2"
            dangerouslySetInnerHTML={{
              __html: description.replace(/\./g, ".<br />"),
            }}
          ></p>
          {/* Graph */}
          <img src={graph} alt="Graph" className="w-6 h-6 mt-2 sm:mt-0" />
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button className="inline-flex items-center text-xs sm:text-sm md:text-[10px] md:w-[104px] w-[100px] h-[22px] py-1 px-4 sm:px-6 text-center text-white bg-green-900 rounded-tr-lg rounded-bl-lg font-semibold hover:bg-green-700">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

// CommunityGallery Component
const CommunityGallery = () => {
  const [activeBar, setActiveBar] = useState("PRODUCTION");

  const progressBars = ["PRODUCTION", "Services", "ESG", "-"];

  const allCards = [
    {
      image: community1,
      title: "HAMLAR FARMERS",
      description:
        "Sustainable farming based on local solutions driven by community. Chili Farming.",
      linkPath: "/seed-overview",
      heading: "Horticulture",
    },
    {
      image: community2,
      title: "TET FARMERS",
      description:
        "Sustainable farming based on local solutions driven by community. Vegetable farming",
      linkPath: "/valueaddition-overview ",
      heading: "Vegetables",
    },
    {
      image: community3,
      title: "ALOTH FARMERS",
      description:
        "Sustainable farming based on local solutions driven by community. Vegetable farming",
      linkPath: "/vegetables-overview",
      heading: "Vegetables",
    },
    {
      image: community4,
      title: "PUR FARMERS",
      description:
        "Sustainable farming based on local solutions driven by community. Horticulture farming",
      linkPath: "/horticulture-overview",
      heading: "Horticulture",
    },
    {
      image: community5,
      title: "PITH FARMERS",
      description:
        "Sustainable farming based on local solutions driven by community. Cattle rearing.",
      linkPath: "/esg-overview",
      heading: "Cattle",
    },
    {
      image: community6,
      title: "Chicken",
      description:
        "Sustainable farming based on local solutions driven by community. Chicken rearing.",
      linkPath: "/cattles-overview",
      heading: "Chicken Rearing Overview",
    },
  ];

  return (
    <div className="mt-4 font-Inter">
      {/* Progress Bars */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p-2 mb-8">
        {progressBars.map((bar) => (
          <div
            key={bar}
            className="w-full md:w-[20%]"
            onClick={() => setActiveBar(bar)}
          >
            <div className="flex justify-between mb-1">
              <p
                className={`md:text-[20px] font-bold  ${
                  activeBar === bar ? "text-green-900" : ""
                }`}
              >
                {bar}
              </p>
            </div>
            <div className="h-3 rounded-full overflow-hidden bg-[#D9D9D9]">
              <div
                className={`h-full rounded-full ${
                  activeBar === bar ? "bg-[#114918]" : ""
                } w-[100%]`}
              ></div>
            </div>
          </div>
        ))}
        {/* View More Text */}
        <div className="w-full md:w-[20%] flex items-center justify-end">
          <h1 className="text-lg md:text-[20px] hover:underline text-[#919291] font-bold">
            View More
          </h1>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {allCards.map((card, index) => (
          <CommunityGalleryCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            linkPath={card.linkPath}
            heading={card.heading}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityGallery;
