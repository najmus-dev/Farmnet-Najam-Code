// import React, { useState } from "react";
// import MainHeader from "../Components/MainHeader";
// import addicon2 from "../Assets/addicon2.png";
// import crop1 from "../Assets/crop1.png";
// import crop2 from "../Assets/crop2.png";
// import editIcon from "../Assets/editicon.png";
// import thumb_down from "../Assets/thumb_down.png";
// import thumb_up from "../Assets/thumb_up.png";
// import importicon from "../Assets/importicon.png";

// const ResourcesPage1 = () => {
//   const [activeBar, setActiveBar] = useState("CROP");

//   const progressBars = ["Crop", "Livestock "];

//   return (
//     <div>
//       <MainHeader />
//       <div className="px-4 md:px-6 mt-2 font-Inter">
//         {/* Progress Bars Section */}
//         <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-2  mb-4">
//           {progressBars.map((bar) => (
//             <div
//               key={bar}
//               className="w-full cursor-pointer"
//               onClick={() => setActiveBar(bar)}
//             >
//               <div className="flex justify-between mb-1">
//                 <p
//                   className={`text-[20px] font-bold ${
//                     activeBar === bar ? "text-green-900" : ""
//                   }`}
//                 >
//                   {bar}
//                 </p>
//               </div>
//               <div className="h-[10px] rounded-sm overflow-hidden bg-[#D9D9D9]">
//                 <div
//                   className={`h-full rounded-sm ${
//                     activeBar === bar ? "bg-[#114918]" : ""
//                   } w-[100%]`}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Flex container for left and right content */}
//         <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-32">
//           {/* Left Column */}
//           <div className="flex-1 w-full">
//             {/* Publish button */}
//             <div className="flex mb-4">
//               <button className="text-[14px] font-bold bg-[#114918] text-white rounded-md w-[114px] h-[26px]">
//                 Publish
//               </button>
//             </div>
//             {/* Card with image and text section */}
//             <div className="relative w-full">
//               {/* Card Image with specific dimensions */}
//               <img
//                 src={crop1}
//                 alt="crop1"
//                 className="w-full h-[289px] object-cover"
//               />
//               {/* Add Icon */}
//               <div className="absolute top-4 right-4 z-10">
//                 <img src={addicon2} alt="Add Icon" className="h-6 w-6" />
//               </div>
//             </div>
//             {/* Text section */}
//             <div className="space-y-2 mt-4 w-full">
//               <div className="flex items-center justify-between">
//                 <h1 className="text-[#155528] text-sm md:text-[24px] font-bold">
//                   CAPSICUM
//                 </h1>
//                 {/* Edit button */}
//                 <div className="flex items-center gap-2 mr-6">
//                   <img src={editIcon} alt="Edit Icon" className="h-5 w-5" />
//                   <span className="text-sm md:text-[20px] font-bold ">
//                     Edit
//                   </span>
//                 </div>
//               </div>
//               <h2 className="text-sm md:text-[16px] font-bold">
//                 Successful farming guide
//               </h2>
//               <div className="font-medium text-[14px] md:leading-tight">
//                 <p>
//                   To secure agriculture in Namibia, the country is exploring
//                   <br className="md:block hidden" />
//                   strategies such as diversifying agriculture, modernizing
//                   <br className="md:block hidden" />
//                   productivity, and addressing food insecurity. The
//                   <br className="md:block hidden" /> Comprehensive Conservation
//                   Agriculture Programme II aims to
//                   <br className="md:block hidden" /> combat resource degradation
//                   and food insecurity caused by
//                   <br className="md:block hidden" /> climate change and human
//                   activities. Namibia's heavy reliance
//                   <br className="md:block hidden" /> on food imports highlights
//                   the urgency of improving domestic
//                   <br className="md:block hidden" /> agricultural capabilities.
//                   The Namibia Agriculture Policy,
//                   <br className="md:block hidden" /> developed through a
//                   consultative process, aims to address
//                   <br className="md:block hidden" /> poverty, hunger, and
//                   inequity in the country.
//                 </p>
//                 <p>
//                   Securing agriculture in Namibia involves a combination of
//                   <br className="md:block hidden" />
//                   strategies to address various challenges such as livestock
//                   theft,
//                   <br className="md:block hidden" /> crop loss, and climate
//                   change. Here are some key measures:
//                 </p>
//                 <p>
//                   1. Surveillance and Monitoring:
//                   <br className="md:block hidden" /> Camera Surveillance:
//                   Installing surveillance cameras around
//                   <br className="md:block hidden" /> farms can help monitor
//                   livestock and deter theft. Cameras can
//                   <br className="md:block hidden" /> provide real-time insights
//                   and alert farmers to any suspicious
//                   <br className="md:block hidden" /> activity1.
//                 </p>
//                 <p>
//                   GPS Tracking: Using GPS collars on livestock can help track
//                   their
//                   <br className="md:block hidden" /> movements and ensure they
//                   stay within designated areas.
//                   <br className="md:block hidden" /> 2. Climate Resilience:
//                 </p>
//               </div>

//               <div className="flex items-center justify-between">
//                 {/* Like button */}
//                 <div className="flex items-center justify-center space-x-4">
//                   <span className="text-[20px] font-medium">More like</span>
//                   <img src={thumb_up} alt="thumb_up" />
//                 </div>
//                 {/* Few like button */}
//                 <div className="flex items-center justify-center space-x-4">
//                   <span className="text-[20px] font-medium">Few like like</span>
//                   <img src={thumb_down} alt="thumb_down" />
//                 </div>
//                 {/* Save button */}
//                 <div className="flex items-center justify-center gap-2 mr-6">
//                   <img src={importicon} alt="saveicon" className="h-5 w-5" />
//                   <span className="text-sm md:text-[20px] font-bold ">
//                     Save
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex-1 w-full">
//             {/* Publish button */}
//             <div className="flex mb-6">
//               <button className="text-[14px] font-bold bg-[#114918] text-white rounded-md w-[114px] h-[26px]">
//                 Publish
//               </button>
//             </div>
//             {/* Duplicate the same content as the left side */}
//             {/* Card with image and text section */}
//             <div className="relative w-full">
//               {/* Card Image with specific dimensions */}
//               <img
//                 src={crop2}
//                 alt="crop2"
//                 className="w-full h-[289px] object-cover"
//               />
//               {/* Add Icon */}
//               <div className="absolute top-4 right-4 z-10">
//                 <img src={addicon2} alt="Add Icon" className="h-6 w-6" />
//               </div>
//             </div>
//             {/* Text section */}
//             <div className="space-y-2 mt-4 w-full">
//               <div className="flex items-center justify-between">
//                 <h1 className="text-[#155528] text-sm md:text-[24px] font-bold">
//                   KALE
//                 </h1>
//                 {/* Edit button */}
//                 <div className="flex items-center gap-2 mr-6">
//                   <img src={editIcon} alt="Edit Icon" className="h-5 w-5" />
//                   <span className="text-sm md:text-[20px] font-bold ">
//                     Edit
//                   </span>
//                 </div>
//               </div>
//               <h2 className="text-sm md:text-[16px] font-bold">
//                 Successful farming guide
//               </h2>
//               <div className="font-medium text-[14px] leading-tight">
//                 <p>
//                   To secure agriculture in Namibia, the country is exploring
//                   <br className="md:block hidden" />
//                   strategies such as diversifying agriculture, modernizing
//                   <br className="md:block hidden" />
//                   productivity, and addressing food insecurity. The
//                   <br className="md:block hidden" /> Comprehensive Conservation
//                   Agriculture Programme II aims to
//                   <br className="md:block hidden" /> combat resource degradation
//                   and food insecurity caused by
//                   <br className="md:block hidden" /> climate change and human
//                   activities. Namibia's heavy reliance
//                   <br className="md:block hidden" /> on food imports highlights
//                   the urgency of improving domestic
//                   <br className="md:block hidden" /> agricultural capabilities.
//                   The Namibia Agriculture Policy,
//                   <br className="md:block hidden" /> developed through a
//                   consultative process, aims to address
//                   <br className="md:block hidden" /> poverty, hunger, and
//                   inequity in the country.
//                 </p>
//                 <p>
//                   Securing agriculture in Namibia involves a combination of
//                   <br className="md:block hidden" />
//                   strategies to address various challenges such as livestock
//                   theft,
//                   <br className="md:block hidden" /> crop loss, and climate
//                   change. Here are some key measures:
//                 </p>
//                 <p>
//                   1. Surveillance and Monitoring:
//                   <br className="md:block hidden" /> Camera Surveillance:
//                   Installing surveillance cameras around
//                   <br className="md:block hidden" /> farms can help monitor
//                   livestock and deter theft. Cameras can
//                   <br className="md:block hidden" /> provide real-time insights
//                   and alert farmers to any suspicious
//                   <br className="md:block hidden" /> activity1.
//                 </p>
//                 <p>
//                   GPS Tracking: Using GPS collars on livestock can help track
//                   their
//                   <br className="md:block hidden" /> movements and ensure they
//                   stay within designated areas.
//                   <br className="md:block hidden" /> 2. Climate Resilience:
//                 </p>
//               </div>
//               <div className="flex items-center justify-between">
//                 {/* Like button */}
//                 <div className="flex items-center justify-center space-x-4">
//                   <span className="text-[20px] font-medium">More like</span>
//                   <img src={thumb_up} alt="thumb_up" />
//                 </div>
//                 {/* Few like button */}
//                 <div className="flex items-center justify-center space-x-4">
//                   <span className="text-[20px] font-medium">Few like like</span>
//                   <img src={thumb_down} alt="thumb_down" />
//                 </div>
//                 {/* Save button */}
//                 <div className="flex items-center justify-center gap-2 mr-6">
//                   <img src={importicon} alt="saveicon" className="h-5 w-5" />
//                   <span className="text-sm md:text-[20px] font-bold ">
//                     Save
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResourcesPage1;

// import React, { useState } from "react";
// import MainHeader from "../Components/MainHeader";
// import addicon2 from "../Assets/addicon2.png";
// import crop1 from "../Assets/crop1.png";
// import crop2 from "../Assets/crop2.png";
// import cattle1 from "../Assets/cattle1.png";
// import cattle2 from "../Assets/cattle2.png";
// import editIcon from "../Assets/editicon.png";
// import thumb_down from "../Assets/thumb_down.png";
// import thumb_up from "../Assets/thumb_up.png";
// import importicon from "../Assets/importicon.png";

// const ResourcesPage1 = () => {
//   const [activeBar, setActiveBar] = useState("Crop");

//   const data = {
//     Crop: [
//       {
//         image: crop1,
//         title: "CAPSICUM",
//         description: "Successful farming guide",
//         content: `
//           To secure agriculture in Namibia, the country is exploring strategies such as diversifying agriculture, modernizing productivity, and addressing food insecurity. The Comprehensive Conservation Agriculture Programme II aims to combat resource degradation and food insecurity caused by climate change and human activities. Namibia's heavy reliance on food imports highlights the urgency of improving domestic agricultural capabilities. The Namibia Agriculture Policy, developed through a consultative process, aims to address poverty, hunger, and inequity in the country.
//         `,
//       },
//       {
//         image: crop2,
//         title: "KALE",
//         description: "Successful farming guide",
//         content: `
//           Securing agriculture in Namibia involves a combination of strategies to address various challenges such as livestock theft, crop loss, and climate change. Key measures include surveillance and monitoring through camera surveillance and GPS tracking, as well as improving climate resilience.
//         `,
//       },
//     ],
//     Livestock: [
//       {
//         image: cattle1,
//         title: "CATTLE",
//         description: "Livestock care guide",
//         content: `
//           Effective livestock farming in Namibia involves addressing climate challenges, providing proper nutrition, and ensuring adequate healthcare for animals. Focus on disease prevention and drought-resilient strategies to secure livestock farming.
//         `,
//       },
//       {
//         image: cattle2,
//         title: "GOATS",
//         description: "Livestock care guide",
//         content: `
//           Goats are a key resource for small-scale farmers. Providing adequate grazing, protecting from predators, and ensuring water availability are critical for successful goat farming.
//         `,
//       },
//     ],
//   };

//   const activeContent = data[activeBar];

//   return (
//     <div>
//       <MainHeader />
//       <div className="px-4 md:px-6 mt-2 font-Inter">
//         {/* Progress Bars Section */}
//         <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-2 mb-4">
//           {Object.keys(data).map((bar) => (
//             <div
//               key={bar}
//               className="w-full cursor-pointer"
//               onClick={() => setActiveBar(bar)}
//             >
//               <div className="flex justify-between mb-1">
//                 <p
//                   className={`text-[20px] font-bold ${
//                     activeBar === bar ? "text-green-900" : ""
//                   }`}
//                 >
//                   {bar}
//                 </p>
//               </div>
//               <div className="h-[10px] rounded-sm overflow-hidden bg-[#D9D9D9]">
//                 <div
//                   className={`h-full rounded-sm ${
//                     activeBar === bar ? "bg-[#114918]" : ""
//                   } w-[100%]`}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Flex container for left and right content */}
//         <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-32">
//           {activeContent.map((item, index) => (
//             <div key={index} className="flex-1 w-full">
//               {/* Publish button */}
//               <div className="flex mb-4">
//                 <button className="text-[14px] font-bold bg-[#114918] text-white rounded-md w-[114px] h-[26px]">
//                   Publish
//                 </button>
//               </div>
//               {/* Card with image and text section */}
//               <div className="relative w-full">
//                 {/* Card Image with specific dimensions */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-[289px] object-cover"
//                 />
//                 {/* Add Icon */}
//                 <div className="absolute top-4 right-4 z-10">
//                   <img src={addicon2} alt="Add Icon" className="h-6 w-6" />
//                 </div>
//               </div>
//               {/* Text section */}
//               <div className="space-y-2 mt-4 w-full">
//                 <div className="flex items-center justify-between">
//                   <h1 className="text-[#155528] text-sm md:text-[24px] font-bold">
//                     {item.title}
//                   </h1>
//                   {/* Edit button */}
//                   <div className="flex items-center gap-2 mr-6">
//                     <img src={editIcon} alt="Edit Icon" className="h-5 w-5" />
//                     <span className="text-sm md:text-[20px] font-bold">
//                       Edit
//                     </span>
//                   </div>
//                 </div>
//                 <h2 className="text-sm md:text-[16px] font-bold">
//                   {item.description}
//                 </h2>
//                 <div className="font-medium text-[14px] md:leading-tight">
//                   <p>{item.content}</p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   {/* Like button */}
//                   <div className="flex items-center justify-center space-x-4">
//                     <span className="text-[20px] font-medium">More like</span>
//                     <img src={thumb_up} alt="thumb_up" />
//                   </div>
//                   {/* Few like button */}
//                   <div className="flex items-center justify-center space-x-4">
//                     <span className="text-[20px] font-medium">Few like</span>
//                     <img src={thumb_down} alt="thumb_down" />
//                   </div>
//                   {/* Save button */}
//                   <div className="flex items-center justify-center gap-2 mr-6">
//                     <img src={importicon} alt="saveicon" className="h-5 w-5" />
//                     <span className="text-sm md:text-[20px] font-bold">
//                       Save
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResourcesPage1;

// import React, { useState } from "react";
// import MainHeader from "../Components/MainHeader";
// import addicon2 from "../Assets/addicon2.png";
// import crop1 from "../Assets/crop1.png";
// import crop2 from "../Assets/crop2.png";
// import cattle1 from "../Assets/cattle1.png";
// import cattle2 from "../Assets/cattle2.png";
// import editIcon from "../Assets/editicon.png";
// import thumb_down from "../Assets/thumb_down.png";
// import thumb_up from "../Assets/thumb_up.png";
// import importicon from "../Assets/importicon.png";

// const ResourcesPage1 = () => {
//   const [activeBar, setActiveBar] = useState("Crop");

//   const data = {
//     Crop: [
//       {
//         image: crop1,
//         title: "CAPSICUM",
//         description: "Successful farming guide",
//         content: (
//           <>
//             <p>
//               To secure agriculture in Namibia, the country is exploring
//               <br className="md:block hidden" />
//               strategies such as diversifying agriculture, modernizing
//               <br className="md:block hidden" />
//               productivity, and addressing food insecurity. The
//               <br className="md:block hidden" /> Comprehensive Conservation
//               Agriculture Programme II aims to
//               <br className="md:block hidden" /> combat resource degradation and
//               food insecurity caused by
//               <br className="md:block hidden" /> climate change and human
//               activities. Namibia's heavy reliance
//               <br className="md:block hidden" /> on food imports highlights the
//               urgency of improving domestic
//               <br className="md:block hidden" /> agricultural capabilities. The
//               Namibia Agriculture Policy,
//               <br className="md:block hidden" /> developed through a
//               consultative process, aims to address
//               <br className="md:block hidden" /> poverty, hunger, and inequity
//               in the country.
//             </p>
//             <p>
//               Securing agriculture in Namibia involves a combination of
//               <br className="md:block hidden" />
//               strategies to address various challenges such as livestock theft,
//               <br className="md:block hidden" /> crop loss, and climate change.
//               Here are some key measures:
//             </p>
//             <p>
//               1. Surveillance and Monitoring:
//               <br className="md:block hidden" /> Camera Surveillance: Installing
//               surveillance cameras around
//               <br className="md:block hidden" /> farms can help monitor
//               livestock and deter theft. Cameras can
//               <br className="md:block hidden" /> provide real-time insights and
//               alert farmers to any suspicious
//               <br className="md:block hidden" /> activity1.
//             </p>
//             <p>
//               GPS Tracking: Using GPS collars on livestock can help track their
//               <br className="md:block hidden" /> movements and ensure they stay
//               within designated areas.
//               <br className="md:block hidden" /> 2. Climate Resilience:
//             </p>
//           </>
//         ),
//       },
//       {
//         image: crop2,
//         title: "KALE",
//         description: "Successful farming guide",
//         content: (
//           <>
//             <p>
//               To secure agriculture in Namibia, the country is exploring
//               <br className="md:block hidden" />
//               strategies such as diversifying agriculture, modernizing
//               <br className="md:block hidden" />
//               productivity, and addressing food insecurity. The
//               <br className="md:block hidden" /> Comprehensive Conservation
//               Agriculture Programme II aims to
//               <br className="md:block hidden" /> combat resource degradation and
//               food insecurity caused by
//               <br className="md:block hidden" /> climate change and human
//               activities. Namibia's heavy reliance
//               <br className="md:block hidden" /> on food imports highlights the
//               urgency of improving domestic
//               <br className="md:block hidden" /> agricultural capabilities. The
//               Namibia Agriculture Policy,
//               <br className="md:block hidden" /> developed through a
//               consultative process, aims to address
//               <br className="md:block hidden" /> poverty, hunger, and inequity
//               in the country.
//             </p>
//             <p>
//               Securing agriculture in Namibia involves a combination of
//               <br className="md:block hidden" />
//               strategies to address various challenges such as livestock theft,
//               <br className="md:block hidden" /> crop loss, and climate change.
//               Here are some key measures:
//             </p>
//             <p>
//               1. Surveillance and Monitoring:
//               <br className="md:block hidden" /> Camera Surveillance: Installing
//               surveillance cameras around
//               <br className="md:block hidden" /> farms can help monitor
//               livestock and deter theft. Cameras can
//               <br className="md:block hidden" /> provide real-time insights and
//               alert farmers to any suspicious
//               <br className="md:block hidden" /> activity1.
//             </p>
//             <p>
//               GPS Tracking: Using GPS collars on livestock can help track their
//               <br className="md:block hidden" /> movements and ensure they stay
//               within designated areas.
//               <br className="md:block hidden" /> 2. Climate Resilience:
//             </p>
//           </>
//         ),
//       },
//     ],
//     Livestock: [
//       {
//         image: cattle1,
//         title: "CATTLE",
//         description: "Livestock care guide",
//         content: (
//           <>
//             <p>
//               Effective livestock farming in Namibia involves addressing
//               <br className="md:block hidden" />
//               climate challenges, providing proper nutrition, and ensuring
//               <br className="md:block hidden" />
//               adequate healthcare for animals. Focus on disease prevention
//               <br className="md:block hidden" /> and drought-resilient
//               strategies to secure livestock farming.
//             </p>
//           </>
//         ),
//       },
//       {
//         image: cattle2,
//         title: "GOATS",
//         description: "Livestock care guide",
//         content: (
//           <>
//             <p>
//               Goats are a key resource for small-scale farmers.
//               <br className="md:block hidden" />
//               Providing adequate grazing, protecting from predators, and
//               <br className="md:block hidden" />
//               ensuring water availability are critical for successful goat
//               farming.
//             </p>
//           </>
//         ),
//       },
//     ],
//   };

//   const activeContent = data[activeBar];

//   return (
//     <div>
//       <MainHeader />
//       <div className="px-4 md:px-6 mt-2 font-Inter">
//         {/* Progress Bars Section */}
//         <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-2 mb-4">
//           {Object.keys(data).map((bar) => (
//             <div
//               key={bar}
//               className="w-full cursor-pointer"
//               onClick={() => setActiveBar(bar)}
//             >
//               <div className="flex justify-between mb-1">
//                 <p
//                   className={`text-[20px] font-bold ${
//                     activeBar === bar ? "text-green-900" : ""
//                   }`}
//                 >
//                   {bar}
//                 </p>
//               </div>
//               <div className="h-[10px] rounded-sm overflow-hidden bg-[#D9D9D9]">
//                 <div
//                   className={`h-full rounded-sm ${
//                     activeBar === bar ? "bg-[#114918]" : ""
//                   } w-[100%]`}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Flex container */}
//         <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-32">
//           {activeContent.map((item, index) => (
//             <div key={index} className="flex-1 w-full">
//               <div className="relative w-full">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-[289px] object-cover"
//                 />
//               </div>
//               <h1 className="text-[#155528] font-bold">{item.title}</h1>
//               <div className="font-medium text-[14px] leading-tight">
//                 {item.content}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResourcesPage1;

import React, { useState } from "react";
import MainHeader from "../Components/MainHeader";
import addicon2 from "../Assets/addicon2.png";
import crop1 from "../Assets/crop1.png";
import crop2 from "../Assets/crop2.png";
import cattle1 from "../Assets/cattle1.png";
import cattle2 from "../Assets/cattle2.png";
import editIcon from "../Assets/editicon.png";
import thumb_down from "../Assets/thumb_down.png";
import thumb_up from "../Assets/thumb_up.png";
import importicon from "../Assets/importicon.png";

const ResourcesPage1 = () => {
  const [activeBar, setActiveBar] = useState("Crop");

  const data = {
    Crop: [
      {
        image: crop1,
        title: "CAPSICUM",
        description: "Successful farming guide",
        content: (
          <>
            <p>
              To secure agriculture in Namibia, the country is exploring
              <br className="md:block hidden" />
              strategies such as diversifying agriculture, modernizing
              <br className="md:block hidden" />
              productivity, and addressing food insecurity. The
              <br className="md:block hidden" /> Comprehensive Conservation
              Agriculture Programme II aims to
              <br className="md:block hidden" /> combat resource degradation and
              food insecurity caused by
              <br className="md:block hidden" /> climate change and human
              activities. Namibia's heavy reliance
              <br className="md:block hidden" /> on food imports highlights the
              urgency of improving domestic
              <br className="md:block hidden" /> agricultural capabilities. The
              Namibia Agriculture Policy,
              <br className="md:block hidden" /> developed through a
              consultative process, aims to address
              <br className="md:block hidden" /> poverty, hunger, and inequity
              in the country.
            </p>
            <p>
              Securing agriculture in Namibia involves a combination of
              <br className="md:block hidden" />
              strategies to address various challenges such as livestock theft,
              <br className="md:block hidden" /> crop loss, and climate change.
              Here are some key measures:
            </p>
            <p>
              1. Surveillance and Monitoring:
              <br className="md:block hidden" /> Camera Surveillance: Installing
              surveillance cameras around
              <br className="md:block hidden" /> farms can help monitor
              livestock and deter theft. Cameras can
              <br className="md:block hidden" /> provide real-time insights and
              alert farmers to any suspicious
              <br className="md:block hidden" /> activity1.
            </p>
            <p>
              GPS Tracking: Using GPS collars on livestock can help track their
              <br className="md:block hidden" /> movements and ensure they stay
              within designated areas.
              <br className="md:block hidden" /> 2. Climate Resilience:
            </p>
          </>
        ),
      },
      {
        image: crop2,
        title: "KALE",
        description: "Successful farming guide",
        content: (
          <>
            <p>
              To secure agriculture in Namibia, the country is exploring
              <br className="md:block hidden" />
              strategies such as diversifying agriculture, modernizing
              <br className="md:block hidden" />
              productivity, and addressing food insecurity. The
              <br className="md:block hidden" /> Comprehensive Conservation
              Agriculture Programme II aims to
              <br className="md:block hidden" /> combat resource degradation and
              food insecurity caused by
              <br className="md:block hidden" /> climate change and human
              activities. Namibia's heavy reliance
              <br className="md:block hidden" /> on food imports highlights the
              urgency of improving domestic
              <br className="md:block hidden" /> agricultural capabilities. The
              Namibia Agriculture Policy,
              <br className="md:block hidden" /> developed through a
              consultative process, aims to address
              <br className="md:block hidden" /> poverty, hunger, and inequity
              in the country.
            </p>
            <p>
              Securing agriculture in Namibia involves a combination of
              <br className="md:block hidden" />
              strategies to address various challenges such as livestock theft,
              <br className="md:block hidden" /> crop loss, and climate change.
              Here are some key measures:
            </p>
            <p>
              1. Surveillance and Monitoring:
              <br className="md:block hidden" /> Camera Surveillance: Installing
              surveillance cameras around
              <br className="md:block hidden" /> farms can help monitor
              livestock and deter theft. Cameras can
              <br className="md:block hidden" /> provide real-time insights and
              alert farmers to any suspicious
              <br className="md:block hidden" /> activity1.
            </p>
            <p>
              GPS Tracking: Using GPS collars on livestock can help track their
              <br className="md:block hidden" /> movements and ensure they stay
              within designated areas.
              <br className="md:block hidden" /> 2. Climate Resilience:
            </p>
          </>
        ),
      },
    ],
    Livestock: [
      {
        image: cattle1,
        title: "CATTLE FARMING",
        description: "Livestock farming strategies",
        content: (
          <>
            <p>
              To secure agriculture in Namibia, the country is exploring
              <br className="md:block hidden" />
              strategies such as diversifying agriculture, modernizing
              <br className="md:block hidden" />
              productivity, and addressing food insecurity. The
              <br className="md:block hidden" /> Comprehensive Conservation
              Agriculture Programme II aims to
              <br className="md:block hidden" /> combat resource degradation and
              food insecurity caused by
              <br className="md:block hidden" /> climate change and human
              activities. Namibia's heavy reliance
              <br className="md:block hidden" /> on food imports highlights the
              urgency of improving domestic
              <br className="md:block hidden" /> agricultural capabilities. The
              Namibia Agriculture Policy,
              <br className="md:block hidden" /> developed through a
              consultative process, aims to address
              <br className="md:block hidden" /> poverty, hunger, and inequity
              in the country.
            </p>
            <p>
              Securing agriculture in Namibia involves a combination of
              <br className="md:block hidden" />
              strategies to address various challenges such as livestock theft,
              <br className="md:block hidden" /> crop loss, and climate change.
              Here are some key measures:
            </p>
            <p>
              1. Surveillance and Monitoring:
              <br className="md:block hidden" /> Camera Surveillance: Installing
              surveillance cameras around
              <br className="md:block hidden" /> farms can help monitor
              livestock and deter theft. Cameras can
              <br className="md:block hidden" /> provide real-time insights and
              alert farmers to any suspicious
              <br className="md:block hidden" /> activity1.
            </p>
            <p>
              GPS Tracking: Using GPS collars on livestock can help track their
              <br className="md:block hidden" /> movements and ensure they stay
              within designated areas.
              <br className="md:block hidden" /> 2. Climate Resilience:
            </p>
          </>
        ),
      },
      {
        image: cattle2,
        title: "DAIRY PRODUCTION",
        description: "Effective dairy farming tips",
        content: (
          <>
            <p>
              To secure agriculture in Namibia, the country is exploring
              <br className="md:block hidden" />
              strategies such as diversifying agriculture, modernizing
              <br className="md:block hidden" />
              productivity, and addressing food insecurity. The
              <br className="md:block hidden" /> Comprehensive Conservation
              Agriculture Programme II aims to
              <br className="md:block hidden" /> combat resource degradation and
              food insecurity caused by
              <br className="md:block hidden" /> climate change and human
              activities. Namibia's heavy reliance
              <br className="md:block hidden" /> on food imports highlights the
              urgency of improving domestic
              <br className="md:block hidden" /> agricultural capabilities. The
              Namibia Agriculture Policy,
              <br className="md:block hidden" /> developed through a
              consultative process, aims to address
              <br className="md:block hidden" /> poverty, hunger, and inequity
              in the country.
            </p>
            <p>
              Securing agriculture in Namibia involves a combination of
              <br className="md:block hidden" />
              strategies to address various challenges such as livestock theft,
              <br className="md:block hidden" /> crop loss, and climate change.
              Here are some key measures:
            </p>
            <p>
              1. Surveillance and Monitoring:
              <br className="md:block hidden" /> Camera Surveillance: Installing
              surveillance cameras around
              <br className="md:block hidden" /> farms can help monitor
              livestock and deter theft. Cameras can
              <br className="md:block hidden" /> provide real-time insights and
              alert farmers to any suspicious
              <br className="md:block hidden" /> activity1.
            </p>
            <p>
              GPS Tracking: Using GPS collars on livestock can help track their
              <br className="md:block hidden" /> movements and ensure they stay
              within designated areas.
              <br className="md:block hidden" /> 2. Climate Resilience:
            </p>
          </>
        ),
      },
    ],
  };

  return (
    <div>
      <MainHeader />
      <div className="px-4 md:px-6 mt-2 font-Inter">
        {/* Progress Bars Section */}
        <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-2  mb-3">
          {Object.keys(data).map((bar) => (
            <div
              key={bar}
              className="w-full cursor-pointer"
              onClick={() => setActiveBar(bar)}
            >
              <div className="flex justify-between mb-1">
                <p
                  className={`text-[20px] font-bold ${
                    activeBar === bar ? "text-green-900" : ""
                  }`}
                >
                  {bar}
                </p>
              </div>
              <div className="h-[10px] rounded-sm overflow-hidden bg-[#D9D9D9]">
                <div
                  className={`h-full rounded-sm ${
                    activeBar === bar ? "bg-[#114918]" : ""
                  } w-[100%]`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-32">
          {data[activeBar].map((item, index) => (
            <div key={index} className="flex-1 w-full">
              <div className="flex mb-3">
                <button className="text-[14px] font-bold bg-[#114918] text-white rounded-md w-[114px] h-[26px]">
                  Publish
                </button>
              </div>
              <div className="relative w-full">
                <img
                  src={item.image}
                  alt={`Image ${index}`}
                  className="w-full h-[289px] object-cover"
                />
                <div className="absolute top-4 right-4 z-10">
                  <img src={addicon2} alt="Add Icon" className="h-6 w-6" />
                </div>
              </div>
              <div className="space-y-3 mt-3 w-full">
                <div className="flex items-center justify-between">
                  <h1 className="text-[#155528] text-sm md:text-[24px] font-bold">
                    {item.title}
                  </h1>
                  <div className="flex items-center gap-2 mr-6">
                    <img src={editIcon} alt="Edit Icon" className="h-5 w-5" />
                    <span className="text-sm md:text-[20px] font-bold">
                      Edit
                    </span>
                  </div>
                </div>
                <h2 className="text-sm md:text-[16px] font-bold">
                  {item.description}
                </h2>
                <div className="font-medium text-[14px] md:leading-tight">
                  {item.content}
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-[20px] font-medium">More like</span>
                    <img src={thumb_up} alt="thumb_up" />
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-[20px] font-medium">
                      Few like like
                    </span>
                    <img src={thumb_down} alt="thumb_down" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mr-6">
                    <img src={importicon} alt="saveicon" className="h-5 w-5" />
                    <span className="text-sm md:text-[20px] font-bold">
                      Save
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage1;
