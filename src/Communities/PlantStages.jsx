// // import React from "react";
// // import harvest from "../Assets/harvest.png";
// // import fruiting from "../Assets/fruiting.png";
// // import germination from "../Assets/germination.png";
// // import seeding from "../Assets/seeding.png";

// // const stages = [
// //   {
// //     title: "Harvesting",
// //     date: "15/09/2024",
// //     image: harvest,
// //   },
// //   {
// //     title: "Fruiting",
// //     date: "15/08/2024",
// //     image: fruiting,
// //   },
// //   {
// //     title: "Germination",
// //     date: "15/07/2024",
// //     image: germination,
// //   },
// //   {
// //     title: "Seed Planting",
// //     date: "15/06/2024",
// //     image: seeding,
// //   },
// // ];

// // const PlantStages = () => {
// //   return (
// //     <div className="grid grid-cols-2 gap-6 ">
// //       {stages.map((stage, index) => (
// //         <div key={index} className=" overflow-hidden bg-white">
// //           <img
// //             src={stage.image}
// //             alt={stage.title}
// //             className=" h-[378px] w-[668px]"
// //           />
// //           <div className="p-4 flex space-x-2 mt-6">
// //             <h2 className="text-[36px] font-medium">{stage.title}</h2>
// //             <p className="text-[36px] text-[#979797]">{stage.date}</p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default PlantStages;

// // import React from "react";
// // import harvest from "../Assets/harvest.png";
// // import fruiting from "../Assets/fruiting.png";
// // import germination from "../Assets/germination.png";
// // import seeding from "../Assets/seeding.png";
// // import plusbtn from "../Assets/plusbtn.png";

// // const stages = [
// //   {
// //     title: "Harvesting",
// //     date: "15/09/2024",
// //     image: harvest,
// //   },
// //   {
// //     title: "Fruiting",
// //     date: "15/08/2024",
// //     image: fruiting,
// //   },
// //   {
// //     title: "Germination",
// //     date: "15/07/2024",
// //     image: germination,
// //   },
// //   {
// //     title: "Seed Planting",
// //     date: "15/06/2024",
// //     image: seeding,
// //   },
// // ];

// // const PlantStages = () => {
// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6">
// //       {stages.map((stage, index) => (
// //         <div key={index} className="overflow-hidden bg-white">
// //           <img
// //             src={stage.image}
// //             alt={stage.title}
// //             className="h-[190px] md:h-[378px] w-[698px] object-cover rounded-sm"
// //           />
// //           <div className="p-4 flex space-x-2 md:mt-6">
// //             <h2 className="text-[24px] md:text-[36px] font-medium">
// //               {stage.title}
// //             </h2>
// //             <p className="text-[24px] md:text-[36px] text-[#979797]">
// //               {stage.date}
// //             </p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default PlantStages;

// import React from "react";
// import harvest from "../Assets/harvest.png";
// import fruiting from "../Assets/fruiting.png";
// import germination from "../Assets/germination.png";
// import seeding from "../Assets/seeding.png";
// import plusbtn from "../Assets/plusbtn.png";

// const stages = [
//   {
//     title: "Harvesting",
//     date: "15/09/2024",
//     image: harvest,
//   },
//   {
//     title: "Fruiting",
//     date: "15/08/2024",
//     image: fruiting,
//   },
//   {
//     title: "Germination",
//     date: "15/07/2024",
//     image: germination,
//   },
//   {
//     title: "Seed Planting",
//     date: "15/06/2024",
//     image: seeding,
//   },
// ];

// const PlantStages = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6">
//       {stages.map((stage, index) => (
//         <div key={index} className="overflow-hidden bg-white relative">
//           <img
//             src={stage.image}
//             alt={stage.title}
//             className="h-[190px] md:h-[378px] w-[698px] object-cover rounded-sm"
//           />
//           <img
//             src={plusbtn}
//             alt="Add"
//             className="absolute top-6 right-8 w-[54px] h-[63px] cursor-pointer"
//           />
//           <div className="p-4 flex space-x-2 md:mt-6">
//             <h2 className="text-[24px] md:text-[36px] font-medium">
//               {stage.title}
//             </h2>
//             <p className="text-[24px] md:text-[36px] text-[#979797]">
//               {stage.date}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PlantStages;

import React from "react";
import harvest from "../Assets/harvest.png";
import fruiting from "../Assets/fruiting.png";
import germination from "../Assets/germination.png";
import seeding from "../Assets/seeding.png";
import plusbtn from "../Assets/plusbtn.png";

const stages = [
  {
    title: "Harvesting",
    date: "15/09/2024",
    image: harvest,
  },
  {
    title: "Fruiting",
    date: "15/08/2024",
    image: fruiting,
  },
  {
    title: "Germination",
    date: "15/07/2024",
    image: germination,
  },
  {
    title: "Seed Planting",
    date: "15/06/2024",
    image: seeding,
  },
];

const PlantStages = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6">
      {stages.map((stage, index) => (
        <div key={index} className="overflow-hidden bg-white relative">
          <img
            src={stage.image}
            alt={stage.title}
            className="h-[190px] md:h-[378px] w-[698px] object-cover rounded-sm"
          />
          <img
            src={plusbtn}
            alt="Add"
            className="absolute top-6 right-8 w-[54px] h-[63px] cursor-pointer"
          />
          <div className="p-4 flex space-x-2 md:mt-6">
            <h2 className="text-[24px] md:text-[36px] font-medium">
              {stage.title}
            </h2>
            <p className="text-[24px] md:text-[36px] text-[#979797]">
              {stage.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantStages;
