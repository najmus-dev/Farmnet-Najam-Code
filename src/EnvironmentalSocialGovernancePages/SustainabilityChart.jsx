// import React from "react";

// // Data array containing sustainability priorities and percentages
// const data = [
//   {
//     priority: "Increase waste reduction and recycling",
//     crops: 56,
//     livestock: 56,
//     communities: 56,
//   },
//   {
//     priority: "Improve supply chain ethics and transparency",
//     crops: 95,
//     livestock: 95,
//     communities: 95,
//   },
//   {
//     priority: "Reducing carbon foot prints",
//     crops: 100,
//     livestock: 100,
//     communities: 100,
//   },
//   {
//     priority: "Collaborating with external partners",
//     crops: 100,
//     livestock: 100,
//     communities: 100,
//   },
//   {
//     priority: "ESG Compliance",
//     crops: 85,
//     livestock: 85,
//     communities: 85,
//   },
//   {
//     priority: "Implementing circular economy practices",
//     crops: 99,
//     livestock: 99,
//     communities: 99,
//   },
// ];

// // SustainabilityChart component definition
// const SustainabilityChart = () => {
//   return (
//     <div className="w-full p-4">
//       {/* Title Section */}
//       <h1 className="font-bold text-xl mb-4">
//         Sustainability priorities (% top / high priorities)
//       </h1>

//       {/* Chart Container */}
//       <div className="grid grid-cols-4 gap-2 items-center">
//         {/* Headers for Crops, Livestock, and Communities */}
//         <div></div> {/* Empty cell for alignment */}
//         <div className="font-bold text-green-700 text-left text-[20px] ml-4 border-l-4 border-[#83C543] pl-2">
//           Crops
//         </div>{" "}
//         {/* Header for Crops */}
//         <div className="font-bold text-green-800 text-left text-[20px] ml-4 border-l-4 border-[#5C9247] pl-2">
//           Livestock
//         </div>{" "}
//         {/* Header for Livestock */}
//         <div className="font-bold text-green-900 text-left text-[20px] ml-4 border-l-4 border-[#114918] pl-2">
//           Communities
//         </div>{" "}
//         {/* Header for Communities */}
//         {/* Data Rows */}
//         {data.map((item, index) => (
//           <React.Fragment key={index}>
//             {/* Priority Labels */}
//             <div className="bg-gray-100 text-[20px] leading-5 p-2 h-[60px] mr-2">
//               {item.priority}
//             </div>

//             {/* Bars for each category (Crops, Livestock, Communities) */}
//             {[
//               { key: "crops", color: "bg-[#83C543]" },
//               { key: "livestock", color: "bg-[#5C9247]" },
//               { key: "communities", color: "bg-[#114918]" },
//             ].map(({ key, color }, i) => (
//               <div
//                 key={i}
//                 className="relative w-full h-[60px] bg-white rounded"
//               >
//                 {/* Colored bar representing percentage */}
//                 <div
//                   className={`absolute top-0 left-0 h-full ${color} rounded-r flex items-center`}
//                   style={{ width: `${item[key]}%` }}
//                 >
//                   {/* Percentage text inside the bar */}
//                   <span className="ml-2 text-[20px] font-semibold text-white">
//                     {item[key]}%
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SustainabilityChart;

// import React from "react";

// // Data array containing sustainability priorities and percentages
// const data = [
//   {
//     priority: "Increase waste reduction and recycling",
//     crops: 56,
//     livestock: 56,
//     communities: 56,
//   },
//   {
//     priority: "Improve supply chain ethics and transparency",
//     crops: 95,
//     livestock: 95,
//     communities: 95,
//   },
//   {
//     priority: "Reducing carbon foot prints",
//     crops: 100,
//     livestock: 100,
//     communities: 100,
//   },
//   {
//     priority: "Collaborating with external partners",
//     crops: 100,
//     livestock: 100,
//     communities: 100,
//   },
//   {
//     priority: "ESG Compliance",
//     crops: 85,
//     livestock: 85,
//     communities: 85,
//   },
//   {
//     priority: "Implementing circular economy practices",
//     crops: 99,
//     livestock: 99,
//     communities: 99,
//   },
// ];

// // SustainabilityChart component definition
// const SustainabilityChart = () => {
//   return (
//     <div className="w-full p-4">
//       {/* Title Section */}
//       <h1 className="font-bold text-xl mb-4 text-center md:text-left">
//         Sustainability priorities (% top / high priorities)
//       </h1>

//       {/* Chart Container */}
//       <div className="flex flex-col md:grid md:grid-cols-4 md:gap-4 items-center">
//         {/* Headers for Crops, Livestock, and Communities */}
//         <div className="hidden md:block"></div> {/* Empty cell for alignment */}
//         <div className="hidden md:block font-bold text-green-700 text-left text-[20px] ml-4 border-l-4 border-[#83C543] pl-2">
//           Crops
//         </div>
//         <div className="hidden md:block font-bold text-green-800 text-left text-[20px] ml-4 border-l-4 border-[#5C9247] pl-2">
//           Livestock
//         </div>
//         <div className="hidden md:block font-bold text-green-900 text-left text-[20px] ml-4 border-l-4 border-[#114918] pl-2">
//           Communities
//         </div>
//         {/* Data Rows */}
//         {data.map((item, index) => (
//           <React.Fragment key={index}>
//             {/* Priority Labels */}
//             <div className="bg-gray-100 text-[16px] md:text-[20px] leading-5 p-2 h-auto md:h-[60px] mr-0 md:mr-2 text-center md:text-left font-semibold">
//               {item.priority}
//             </div>

//             {/* Bars for smaller screens */}
//             <div className="flex flex-col md:hidden space-y-2 w-full">
//               <div className="flex items-center">
//                 <span className="text-green-700 font-bold mr-2">Crops:</span>
//                 <div className="relative w-full h-[30px] bg-white rounded">
//                   <div
//                     className="absolute top-0 left-0 h-full bg-[#83C543] rounded-r flex items-center"
//                     style={{ width: `${item.crops}%` }}
//                   >
//                     <span className="ml-2 text-[14px] font-semibold text-white">
//                       {item.crops}%
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <span className="text-green-800 font-bold mr-2">
//                   Livestock:
//                 </span>
//                 <div className="relative w-full h-[30px] bg-white rounded">
//                   <div
//                     className="absolute top-0 left-0 h-full bg-[#5C9247] rounded-r flex items-center"
//                     style={{ width: `${item.livestock}%` }}
//                   >
//                     <span className="ml-2 text-[14px] font-semibold text-white">
//                       {item.livestock}%
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <span className="text-green-900 font-bold mr-2">
//                   Communities:
//                 </span>
//                 <div className="relative w-full h-[30px] bg-white rounded">
//                   <div
//                     className="absolute top-0 left-0 h-full bg-[#114918] rounded-r flex items-center"
//                     style={{ width: `${item.communities}%` }}
//                   >
//                     <span className="ml-2 text-[14px] font-semibold text-white">
//                       {item.communities}%
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Bars for larger screens */}
//             {[
//               { key: "crops", color: "bg-[#83C543]" },
//               { key: "livestock", color: "bg-[#5C9247]" },
//               { key: "communities", color: "bg-[#114918]" },
//             ].map(({ key, color }, i) => (
//               <div
//                 key={i}
//                 className="relative w-full h-[60px] bg-white rounded"
//               >
//                 {/* Colored bar representing percentage */}
//                 <div
//                   className={`absolute top-0 left-0 h-full ${color} rounded-r flex items-center`}
//                   style={{ width: `${item[key]}%` }}
//                 >
//                   {/* Percentage text inside the bar */}
//                   <span className="ml-2 text-[20px] font-semibold text-white">
//                     {item[key]}%
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SustainabilityChart;

// import React from "react";

// // Data array containing sustainability priorities and percentages
// const data = [
//   {
//     priority: "Increase waste reduction and recycling",
//     crops: 56,
//     livestock: 56,
//     communities: 56,
//   },
//   {
//     priority: "Improve supply chain ethics and transparency",
//     crops: 95,
//     livestock: 95,
//     communities: 95,
//   },
//   {
//     priority: "Reducing carbon foot prints",
//     crops: 100,
//     livestock: 100,
//     communities: 100,
//   },
//   {
//     priority: "Collaborating with external partners",
//     crops: 100,
//     livestock: 100,
//     communities: 100,
//   },
//   {
//     priority: "ESG Compliance",
//     crops: 85,
//     livestock: 85,
//     communities: 85,
//   },
//   {
//     priority: "Implementing circular economy practices",
//     crops: 99,
//     livestock: 99,
//     communities: 99,
//   },
// ];

// // SustainabilityChart component definition
// const SustainabilityChart = () => {
//   return (
//     <div className="w-full p-4">
//       {/* Title Section */}
//       <h1 className="font-bold text-xl mb-4 text-center md:text-left">
//         Sustainability priorities (% top / high priorities)
//       </h1>

//       {/* Chart Container */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
//         {/* Headers for Crops, Livestock, and Communities */}
//         <div></div> {/* Empty cell for alignment */}
//         <div className="font-bold text-green-700 text-left text-[20px] ml-4 border-l-4 border-[#83C543] pl-2">
//           Crops
//         </div>{" "}
//         {/* Header for Crops */}
//         <div className="font-bold text-green-800 text-left text-[20px] ml-4 border-l-4 border-[#5C9247] pl-2">
//           Livestock
//         </div>{" "}
//         {/* Header for Livestock */}
//         <div className="font-bold text-green-900 text-left text-[20px] ml-4 border-l-4 border-[#114918] pl-2">
//           Communities
//         </div>{" "}
//         {/* Header for Communities */}
//         {/* Data Rows */}
//         {data.map((item, index) => (
//           <React.Fragment key={index}>
//             {/* Priority Labels */}
//             <div className="bg-gray-100 text-[16px] md:text-[20px] leading-5 p-2 h-[60px] mr-0 md:mr-2 text-center md:text-left font-semibold">
//               {item.priority}
//             </div>

//             {/* Bars for each category (Crops, Livestock, Communities) */}
//             {[
//               { key: "crops", color: "bg-[#83C543]" },
//               { key: "livestock", color: "bg-[#5C9247]" },
//               { key: "communities", color: "bg-[#114918]" },
//             ].map(({ key, color }, i) => (
//               <div
//                 key={i}
//                 className="relative w-full h-[60px] bg-white rounded mb-2"
//               >
//                 {/* Colored bar representing percentage */}
//                 <div
//                   className={`absolute top-0 left-0 h-full ${color} rounded-r flex items-center`}
//                   style={{ width: `${item[key]}%` }}
//                 >
//                   {/* Percentage text inside the bar */}
//                   <span className="ml-2 text-[16px] md:text-[20px] font-semibold text-white">
//                     {item[key]}%
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SustainabilityChart;

import React from "react";

// Data array containing sustainability priorities and percentages
const data = [
  {
    priority: "Increase waste reduction and recycling",
    crops: 56,
    livestock: 56,
    communities: 56,
  },
  {
    priority: "Improve supply chain ethics and transparency",
    crops: 95,
    livestock: 95,
    communities: 95,
  },
  {
    priority: "Reducing carbon foot prints",
    crops: 100,
    livestock: 100,
    communities: 100,
  },
  {
    priority: "Collaborating with external partners",
    crops: 100,
    livestock: 100,
    communities: 100,
  },
  {
    priority: "ESG Compliance",
    crops: 85,
    livestock: 85,
    communities: 85,
  },
  {
    priority: "Implementing circular economy practices",
    crops: 99,
    livestock: 99,
    communities: 99,
  },
];

// SustainabilityChart component definition
const SustainabilityChart = () => {
  return (
    <div className="w-full ">
      {/* Title Section */}
      <h1 className="font-bold text-[20px] md:text-[24px] mb-4">
        Sustainability prorities (% top / high priorities)
      </h1>

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-4 gap-x-2 gap-y-0 items-center">
        {/* Headers for Crops, Livestock, and Communities */}
        <div></div> {/* Empty cell for alignment */}
        <div className="font-bold text-[#83C543] text-left text-[20px] md:mb-1 ml-4 border-l-4 border-[#83C543] pl-2">
          Crops
        </div>
        <div className="font-bold text-[#5C9247] text-left text-[20px] md:mb-1 ml-4 border-l-4 border-[#5C9247] pl-2">
          Livestock
        </div>
        <div className="font-bold text-[#114918] text-left text-[20px] md:mb-1 ml-4 border-l-4 border-[#114918] pl-2">
          Communities
        </div>
        {/* Data Rows */}
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {/* Priority Labels */}
            <div className="bg-gray-100 text-[16px] md:text-[20px] leading-5 p-2 h-[60px] mr-0 md:mr-3 text-center md:text-left font-semibold">
              {item.priority}
            </div>

            {/* Bars for each category (Crops, Livestock, Communities) */}
            {[
              { key: "crops", color: "bg-[#83C543]" },
              { key: "livestock", color: "bg-[#5C9247]" },
              { key: "communities", color: "bg-[#114918]" },
            ].map(({ key, color }, i) => (
              <div
                key={i}
                className="relative w-full  h-[60px] bg-white rounded mb-2"
              >
                <div
                  className={`absolute top-0 left-0 h-full ${color} rounded-r flex items-center`}
                  style={{ width: `${item[key]}%` }}
                >
                  <span className="ml-2 text-[16px] md:text-[20px] font-semibold text-white">
                    {item[key]}%
                  </span>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden mt-4">
        {/* Data Rows for Mobile: One priority item at a time */}
        {data.map((item, index) => (
          <div key={index} className="mb-6">
            {/* Priority Title */}
            <h2 className="font-semibold text-lg text-center bg-gray-100 py-2">
              {item.priority}
            </h2>

            {/* Headings and Bars for Crops, Livestock, Communities */}
            <div className="mt-2">
              {/* Crops */}
              <div className="font-bold text-green-700 text-left text-[18px]">
                Crops
              </div>
              <div className="relative w-full h-[30px] bg-white rounded mb-2">
                <div
                  className="absolute top-0 left-0 h-full bg-[#83C543] rounded-r flex items-center"
                  style={{ width: `${item.crops}%` }}
                >
                  <span className="ml-2 text-[14px] font-semibold text-white">
                    {item.crops}%
                  </span>
                </div>
              </div>

              {/* Livestock */}
              <div className="font-bold text-green-800 text-left text-[18px]">
                Livestock
              </div>
              <div className="relative w-full h-[30px] bg-white rounded mb-2">
                <div
                  className="absolute top-0 left-0 h-full bg-[#5C9247] rounded-r flex items-center"
                  style={{ width: `${item.livestock}%` }}
                >
                  <span className="ml-2 text-[14px] font-semibold text-white">
                    {item.livestock}%
                  </span>
                </div>
              </div>

              {/* Communities */}
              <div className="font-bold text-green-900 text-left text-[18px]">
                Communities
              </div>
              <div className="relative w-full h-[30px] bg-white rounded mb-2">
                <div
                  className="absolute top-0 left-0 h-full bg-[#114918] rounded-r flex items-center"
                  style={{ width: `${item.communities}%` }}
                >
                  <span className="ml-2 text-[14px] font-semibold text-white">
                    {item.communities}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SustainabilityChart;
