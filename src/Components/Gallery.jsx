// import React from "react";
// import gallery1 from "../Assets/gallery1.png";
// import gallery2 from "../Assets/gallery2.png";
// import gallery3 from "../Assets/gallery3.png";
// import gallery4 from "../Assets/gallery4.png";
// import gallery5 from "../Assets/gallery5.png";
// import gallery6 from "../Assets/gallery6.png";

// // Reusable Card Component
// const Card = ({ image, title, subtitle, description, date }) => {
//   return (
//     <div className="border rounded-b-md w-full">
//       {/* Image Section */}
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-[200px] sm:h-[250px] md:h-[289px] object-cover"
//       />
//       {/* Text Section */}
//       <div className="bg-[#F3F5F5] p-4">
//         <h2 className="text-[#155528] font-bold text-lg md:text-[22px]">
//           {title}
//         </h2>
//         <h3 className="text-black font-bold text-sm md:text-[16px]">
//           {subtitle}
//         </h3>
//         <p className="text-black mt-1 font-medium text-xs md:text-[14px]">
//           {description}
//         </p>
//         <p className="text-black font-medium text-[12px] md:text-[14px]">
//           {date}
//         </p>
//       </div>
//     </div>
//   );
// };

// const Gallery = () => {
//   const cardsData = [
//     {
//       image: gallery1,
//       title: "Trade Fair",
//       subtitle: "International Trade Fair",
//       description: "Green House tunnels.",
//       date: "Nairobi International Trade fair - 10th-20th October 2024",
//     },
//     {
//       image: gallery2,
//       title: "Trade Fair",
//       subtitle: "International Trade Fair",
//       description: "Green House tunnels.",
//       date: "Nairobi International Trade fair - 10th-20th October 2024",
//     },
//     {
//       image: gallery3,
//       title: "Trade Fair",
//       subtitle: "International Trade Fair",
//       description: "Green House tunnels.",
//       date: "Nairobi International Trade fair - 10th-20th October 2024",
//     },
//     {
//       image: gallery4,
//       title: "Trade Fair",
//       subtitle: "International Trade Fair",
//       description: "Green House tunnels.",
//       date: "Nairobi International Trade fair - 10th-20th October 2024",
//     },
//     {
//       image: gallery5,
//       title: "Trade Fair",
//       subtitle: "International Trade Fair",
//       description: "Green House tunnels.",
//       date: "Nairobi International Trade fair - 10th-20th October 2024",
//     },
//     {
//       image: gallery6,
//       title: "Trade Fair",
//       subtitle: "International Trade Fair",
//       description: "Green House tunnels.",
//       date: "Nairobi International Trade fair - 10th-20th October 2024",
//     },
//   ];

//   return (
//     <div className="font-Inter px-4 sm:px-6 lg:px-8">
//       {/* Title */}
//       <h1 className="text-[#155528] mt-8  font-bold text-2xl md:text-[36px]">
//         GALLERY
//       </h1>
//       <h1 className="text-[18px] hover:underline mb-2 md:mb-4 text-[#919291] text-right font-bold">
//         View more
//       </h1>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cardsData.map((card, index) => (
//           <Card
//             key={index}
//             image={card.image}
//             title={card.title}
//             subtitle={card.subtitle}
//             description={card.description}
//             date={card.date}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React from "react";
import gallery1 from "../Assets/gallery1.png";
import gallery2 from "../Assets/gallery2.png";
import gallery3 from "../Assets/gallery3.png";
import gallery4 from "../Assets/gallery4.png";
import gallery5 from "../Assets/gallery5.png";
import gallery6 from "../Assets/gallery6.png";
import gallery7 from "../Assets/gallery7.png";
import gallery8 from "../Assets/gallery8.png";
import gallery9 from "../Assets/gallery9.png";
import gallery10 from "../Assets/gallery10.png";
import gallery11 from "../Assets/gallery11.png";
import gallery12 from "../Assets/gallery12.png";

// Reusable Card Component
const Card = ({ image, title, subtitle, description, date, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="border rounded-b-md w-full hover:shadow-lg transition-shadow">
        {/* Image Section */}
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] sm:h-[250px] md:h-[289px] object-cover"
        />
        {/* Text Section */}
        <div className="bg-[#F3F5F5] p-2">
          <h2 className="text-[#155528] font-bold text-lg md:text-[22px]">
            {title}
          </h2>
          <h3 className="text-black font-bold text-sm md:text-[16px]">
            {subtitle}
          </h3>
          <p className="text-black mt-1 font-medium text-xs md:text-[13px]">
            {description}
          </p>
          <p className="text-black font-medium text-[12px] md:text-[13px]">
            {date}
          </p>
        </div>
      </div>
    </a>
  );
};

const Gallery = () => {
  const cardsData = [
    {
      image: gallery1,
      title: "DIGITAL FARMING",
      subtitle: "How to Farm Digitally",
      description: "Green House tunnels.",
      date: "Nairobi International Trade fair - 10th-20th October 2024",
      link: "/gallery-page-1",
    },
    {
      image: gallery2,
      title: "SUSTAINABILITY",
      subtitle: "Farming  enterpise sustainability",
      description: "Green House tunnels.",
      date: "Nairobi International Trade fair - 10th-20th October 2024",
      link: "/gallery-page-2",
    },
    {
      image: gallery3,
      title: "AQUACULTURE",
      subtitle: "Fish Farming",
      description: "Green House tunnels.",
      date: "Nairobi International Trade fair - 10th-20th October 2024",
      link: "/gallery-page-3",
    },
    {
      image: gallery4,
      title: "PROVIDERS",
      subtitle: "Service providers ",
      description: "Green House tunnels.",
      date: "Nairobi International Trade fair - 10th-20th October 2024",
      link: "/gallery-page-4",
    },
    {
      image: gallery5,
      title: "AGRICULTURAL SERVICES",
      subtitle: "Agricultural extension servcies",
      description: "Green House tunnels.",
      date: "Nairobi International Trade fair - 10th-20th October 2024",
      link: "/gallery-page-5",
    },
    {
      image: gallery6,
      title: "POULTRY",
      subtitle: "Poultry best practice",
      description: "Green House tunnels.",
      date: "Nairobi International Trade fair - 10th-20th October 2024",
      link: "/gallery-page-6",
    },
  ];

  const featuredCardsData = [
    {
      image: gallery7,
      title: "THE FARMERS STORY",
      subtitle: "How did the app begin (March 2020)",
      description:
        "History of Farmnet app. The farmers story, how the journey begun .",

      link: "/gallery-page-7",
    },
    {
      image: gallery8,
      title: "THE FARMERS STORY",
      subtitle: "The Eureka moment (August 2020)",
      description:
        "History of Farmnet app. The farmers story, how the journey begun ",

      link: "/gallery-page-8",
    },
    {
      image: gallery9,
      title: "Early Versions of Farmnet App",
      subtitle: "Farm Management System (February 2021)",
      description:
        "Record keeping solution & farming  advisory services solutions",

      link: "/gallery-page-9",
    },
    {
      image: gallery10,
      title: "Early Versions of Farmnet App",
      subtitle: "Farm Management System (February 2021)",
      description:
        "Record keeping solution & farming  advisory services solutions",

      link: "/gallery-page-10",
    },
    {
      image: gallery11,
      title: "Early Versions of Farmnet App",
      subtitle: "Farm Management System (February 2021)",
      description:
        "Record keeping solution & farming  advisory services solutions",

      link: "/gallery-page-11",
    },
    {
      image: gallery12,
      title: "Early Versions of Farmnet App",
      subtitle: "Farm Management System (February 2021)",
      description:
        "Record keeping solution & farming  advisory services solutions",

      link: "/gallery-page-12",
    },
  ];

  return (
    <div className="font-Inter px-4 sm:px-6 lg:px-8 mb-10">
      {/* Title */}
      <h1 className="text-[#155528] mt-8 font-bold text-2xl md:text-[36px]">
        GALLERY
      </h1>
      <h1 className="text-[18px] hover:underline mb-2 md:mb-4 text-[#919291] text-right font-bold">
        View more
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            date={card.date}
            link={card.link}
          />
        ))}
      </div>

      {/* New Section */}
      <h1 className="text-[#155528] mt-12 font-bold text-2xl md:text-[36px] ">
        History of Farmnet App
      </h1>
      <h1 className="text-[18px] hover:underline mb-2 md:mb-4 text-[#919291] text-right font-bold">
        View more
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 mt-4">
        {featuredCardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            // date={card.date}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
