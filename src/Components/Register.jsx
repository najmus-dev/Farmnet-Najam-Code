// // import React from "react";
// // import { useState } from "react";
// // import { SlLocationPin } from "react-icons/sl";
// // import registerimg from "../Assets/registerimg.png";
// // import plus1 from "../Assets/plus.png";

// // const Register = () => {
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [farmSize, setFarmSize] = useState(3);
// //   const [farmUnit, setFarmUnit] = useState("Acres");
// //   const [farmingType, setFarmingType] = useState("Crop");

// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0];
// //     setSelectedFile(URL.createObjectURL(file));
// //   };

// //   return (
// //     <div className="flex flex-col sm:flex-row md:flex-row md:justify-between md:gap-4 p-4">
// //       {/* Left Section */}
// //       <div className="w-full md:w-[40%] p-4">
// //         <h1 className="text-[26px] font-Inter font-bold text-[#155528]">Registration</h1>
// //         <form action="">
// //           <h2 className="mt-4">
// //             <span className="text-red-700 text-[14px] font-semibold font-Inter">*</span>
// //             Basic Information
// //           </h2>
// //           <div className="flex flex-col sm:flex-row gap-4 mt-2">
// //             <label htmlFor="Name" className="flex flex-col w-full">
// //               Name
// //               <input
// //                 type="text"
// //                 placeholder="Enter name"
// //                 name="name"
// //                 className="border-[1px] w-full rounded pl-1 py-2 border-[#979797] bg-gray-100 outline-none"
// //               />
// //             </label>
// //             <label htmlFor="Surname" className="flex flex-col w-full">
// //               Surname
// //               <input
// //                 type="text"
// //                 placeholder="Enter Surname"
// //                 name="surname"
// //                 className="border-[1px] w-full rounded pl-1 py-2 border-[#979797] bg-gray-100 outline-none"
// //               />
// //             </label>
// //           </div>

// //           <div className="mt-2">
// //             <label htmlFor="country" className="block mt-2">Country</label>
// //             <select
// //               name="country"
// //               id="countries"
// //               className="border-[#979797] border-[1px] p-2 pl-1 py-2 rounded w-full outline-none bg-gray-100"

// //             >
// //               <option value="">Select Country</option>
// //             </select>
// //           </div>
// //           <div className="mt-2">
// //             <label htmlFor="location" className="block">Location</label>
// //             <select
// //               name="location"
// //               id="locations"
// //               className="border-[1px] border-[#979797] p-2 pl-1 py-2 rounded w-full outline-none text-gray-700 bg-gray-100"
// //             >
// //               <option value="" >Select administrative division</option>
// //             </select>
// //           </div>
// //           <div className="mt-2">
// //             <label htmlFor="farming" className="block">Farming</label>
// //             <select
// //               name="farming"
// //               id="farming"
// //               className="border-[1px] border-[#979797] p-2 pl-1 py-2 rounded w-full outline-none text-gray-700 bg-gray-100"
// //             >
// //               <option value="" >Select type of farming</option>
// //             </select>
// //           </div>

// //           <div className="flex flex-col sm:flex-row gap-6 mt-2">
// //             <label htmlFor="mobile" className="flex flex-col w-full">
// //               Mobile
// //               <input
// //                 type="tel"
// //                 placeholder="Enter mobile number"
// //                 name="mobile"
// //                 className="border-[1px] w-full rounded pl-1 py-2 border-[#979797] bg-gray-100 outline-none"
// //               />
// //             </label>
// //             <label htmlFor="email" className="flex flex-col w-full">
// //               Email
// //               <input
// //                 type="email"
// //                 placeholder="Enter email"
// //                 name="email"
// //                 className="border-[1px] w-full rounded pl-1 py-2 border-[#979797] bg-gray-100 outline-none"
// //               />
// //             </label>
// //           </div>

// //           <p className="text-sm sm:text-base md:text-lg lg:text-xl py-2 sm:py-3 md:py-4  whitespace-nowrap">
// //             <span className="text-red-700">*</span> We will not share your personal information without your authorization
// //           </p>

// //         </form>
// //       </div>

// //       {/* Center Section */}
// //       <div className="w-full md:w-[40%] p-4 ">
// //         <h2 className="text-[#155528] text-[14px] font-semibold lg:-ml-8 mb-4">Why register as a farmer in Namibia?</h2>
// //         <p className="text-[12px] mb-4 lg:-ml-8 left-[29px]">
// //           Registering as a farmer in Namibia offers several key benefits that can significantly improve farm management and sustainability. Here are some reasons why registering is valuable:
// //         </p>

// //         <ol className="list-decimal  text-[12px]">
// //           <li><strong>Access to Support Services:</strong>  Registration allows farmers to receive support in managing their
// //             farms. This includes technical  assistance, advice on best practices, and access to government  programs aimed at boosting productivity and profitability.</li>
// //           <li><strong>Resources and Grants:</strong>  Registered farmers may be eligible for access to various
// //             resources such as seeds, equipment, and financial grants. These
// //             resources are often provided bygovernment initiatives or
// //             development partners to help farmers grow and improve their
// //             businesses.</li>
// //           <li><strong>Link to Verified Service Providers:</strong>  Being a registered farmer gives you access to a network of verified service providers. This network can include suppliers, agronomists, veterinarians, and other experts who can provide quality services tailored to your specific needs.</li>
// //           <li><strong>Partnerships with Development Organizations:</strong> Registration can connect farmers to development partners, NGOs, and international agencies that support agricultural development. These partnerships may open doors to collaborative projects, funding opportunities, and skill-building programs.</li>
// //           <li><strong>Market Access:</strong> : Farmers who are officially registered have better access to both local and international markets. Registration can provide opportunities to sell products to established buyers, cooperatives, or even government procurement programs, ensuring fair pricing and reliable sales channels.</li>
// //         </ol>
// //       </div>

// //       {/* Right Section */}
// //       <div className="w-full md:w-[21%] bg-[#F3F5F5] p-4 mb-6 rounded-lg">
// //         <h2 className="text-lg font-semibold mb-4">Additional Information</h2>

// //         <div className="flex flex-col justify-end mb-4">
// //           <div className="relative w-36 h-32 flex items-end justify-end mb-4">
// //             <img
// //               src={selectedFile || registerimg}
// //               alt="Uploaded"
// //               className="w-full h-full absolute left-[98px] object-cover rounded-lg border"
// //             />
// //             <img
// //               src={plus1}
// //               alt="Add Icon"
// //               className="absolute top-2 left-[208px] w-6 h-6 cursor-pointer"
// //             />
// //             <input
// //               type="file"
// //               accept="image/*"
// //               className="hidden"
// //               onChange={handleImageUpload}
// //             />
// //           </div>   <p className="text-center text-sm text-gray-500">Insert picture</p>     </div>

// //         <button className="flex items-center justify-start gap-2 font-medium text-sm mb-2">
// //           <SlLocationPin className="text-base" />
// //           Set location
// //         </button>

// //         <hr className="border-t border-gray-300 mb-4" />

// //         <div className="flex justify-between items-center mb-4">
// //           <div className="w-[48%]">
// //             <label className="text-[10px] font-medium text-gray-700 block mb-1">Select farm measure</label>
// //             <div className="relative">   <select
// //               value={farmUnit}
// //               onChange={(e) => setFarmUnit(e.target.value)}
// //               className="w-full appearance-none p-2 border rounded-md"
// //             >
// //               <option value="Acres">Acres</option>
// //               <option value="Hectares">Hectares</option>
// //             </select>  <svg
// //               viewBox="0 0 34 33"
// //               className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[34px] h-[33px] text-white"
// //               fill="none"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //                 <g id="arrow_drop_down">
// //                   <path
// //                     id="Vector"
// //                     d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z"
// //                     fill="black"
// //                   />
// //                 </g>
// //               </svg>
// //             </div>
// //           </div>
// //           <div className="w-[48%]">
// //             <label className="text-[10px] font-medium text-gray-700 block mb-1">Enter size</label>
// //             <input
// //               type="number"
// //               value={farmSize}
// //               onChange={(e) => setFarmSize(e.target.value)}
// //               className="w-full p-2 border rounded-md"
// //             />
// //           </div>
// //         </div>

// //         <hr className="border-t border-gray-300 mb-4" />

// //         <div className="mb-6">
// //           <p className="text-[10px] font-medium text-gray-700 mb-2">Type of farming</p>
// //           <div className="flex items-center gap-4">
// //             <label className="flex items-center">
// //               <input
// //                 type="radio"
// //                 name="farmingType"
// //                 value="Crop"
// //                 checked={farmingType === "Crop"}
// //                 onChange={() => setFarmingType("Crop")}
// //                 className="mr-2 accent-[#155528]"
// //               />
// //               Crop
// //             </label>
// //             <label className="flex items-center">
// //               <input
// //                 type="radio"
// //                 name="farmingType"
// //                 value="Livestock"
// //                 checked={farmingType === "Livestock"}
// //                 onChange={() => setFarmingType("Livestock")}
// //                 className="mr-2 accent-[#155528]"
// //               />
// //               Livestock
// //             </label>
// //           </div>
// //         </div>

// //         <button className="w-full mt-11 py-2 bg-[#155528] text-white text-lg font-medium rounded-md hover:bg-green-700 transition">
// //           Register
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
// import React, { useState } from "react";
// import { SlLocationPin } from "react-icons/sl";
// import registerimg from "../Assets/registerimg.png";
// import plus1 from "../Assets/plus.png";

// const Register = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [farmSize, setFarmSize] = useState(3);
//   const [farmUnit, setFarmUnit] = useState("Acres");
//   const [farmingType, setFarmingType] = useState("Crop");

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(URL.createObjectURL(file));
//   };

//   return (
//     <div className="flex flex-col md:flex-row md:justify-between md:gap-4 p-4">
//       {/* Left Section */}
//       <div className="w-full md:w-[40%] p-4">
//         <h1 className="text-[26px] font-Inter font-bold text-[#155528]">
//           Registration
//         </h1>
//         <form>
//           <h2 className="mt-4">
//             <span className="text-red-700 text-[14px] font-semibold font-Inter">
//               *
//             </span>
//             Basic Information
//           </h2>
//           <div className="flex flex-col sm:flex-row gap-4 mt-2">
//             <label htmlFor="Name" className="flex flex-col w-full">
//               Name
//               <input
//                 type="text"
//                 placeholder="Enter name"
//                 className="border-[1px] w-full rounded pl-1 py-2 border-[#979797] bg-gray-100 outline-none"
//               />
//             </label>
//             <label htmlFor="Surname" className="flex flex-col w-full">
//               Surname
//               <input
//                 type="text"
//                 placeholder="Enter surname"
//                 className="border-[1px] w-full rounded pl-1 py-2 border-[#979797] bg-gray-100 outline-none"
//               />
//             </label>
//           </div>

//           <div className="mt-2 relative">
//             <label htmlFor="country" className="block mt-2">
//               Country
//             </label>
//             <select className="border-[#979797] border-[1px] p-2 pl-1 py-2 rounded w-full appearance-none outline-none bg-gray-100">
//               <option value="">Select Country</option>
//             </select>
//             <svg
//               viewBox="0 0 34 33"
//               className="absolute right-4 top-1/2 transform -translate-y-1/4 w-[34px] h-[33px] text-white"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g id="arrow_drop_down">
//                 <path
//                   id="Vector"
//                   d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z"
//                   fill="black"
//                 />
//               </g>
//             </svg>
//           </div>
//           <div className="mt-2 relative">
//             <label htmlFor="location" className="block">
//               Location
//             </label>
//             <select className="border-[1px] border-[#979797] p-2 pl-1 py-2 rounded w-full appearance-none outline-none text-gray-700 bg-gray-100">
//               <option value="">Select administrative division</option>
//             </select>
//             <svg
//               viewBox="0 0 34 33"
//               className="absolute right-4 top-1/2 transform -translate-y-1/4 w-[34px] h-[33px] text-white"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g id="arrow_drop_down">
//                 <path
//                   id="Vector"
//                   d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z"
//                   fill="black"
//                 />
//               </g>
//             </svg>
//           </div>
//           <div className="mt-2 relative">
//             <label htmlFor="farming" className="block">
//               Farming
//             </label>
//             <select className="border-[1px] border-[#979797] p-2 pl-1 py-2 rounded w-full appearance-none outline-none text-gray-700 bg-gray-100">
//               <option value="">Select type of farming</option>
//             </select>{" "}
//             <svg
//               viewBox="0 0 34 33"
//               className="absolute right-4 top-1/2 transform -translate-y-1/4 w-[34px] h-[33px] text-white"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g id="arrow_drop_down">
//                 <path
//                   id="Vector"
//                   d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z"
//                   fill="black"
//                 />
//               </g>
//             </svg>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-6 mt-2">
//             <label htmlFor="mobile" className="flex flex-col w-full">
//               Mobile
//               <input
//                 type="tel"
//                 placeholder="Enter mobile number"
//                 className="border-[1px] w-full rounded pl-1 py-2 border-[#979797] bg-gray-100 outline-none"
//               />
//             </label>
//             <label htmlFor="email" className="flex flex-col w-full">
//               Email
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 className="border-[1px] w-full rounded pl-1 py-2 border-[#979797] bg-gray-100 outline-none"
//               />
//             </label>
//           </div>

//           <p className="text-sm sm:text-base md:text-lg lg:text-xl py-2 sm:py-3 md:py-4 lg:whitespace-nowrap">
//             <span className="text-red-700">*</span> We will not share your
//             personal information without your authorization
//           </p>
//         </form>
//       </div>

//       {/* Center Section */}
//       <div className="w-full md:w-[40%] p-4">
//         {/* <h2 className="text-[#155528] text-[14px] font-semibold mb-4">Why register as a farmer in Namibia?</h2>
//         <p className="text-[12px] mb-4">
//           Registering as a farmer in Namibia offers several key benefits that can significantly improve farm management and sustainability. Here are some reasons why registering is valuable:
//         </p> */}
//         <h2 className="text-[#155528] text-[14px] font-semibold lg:-ml-8 mb-4">
//           Why register as a farmer in Namibia?
//         </h2>
//         <p className="text-[12px] mb-4 lg:-ml-8 left-[29px]">
//           Registering as a farmer in Namibia offers several key benefits that
//           can significantly improve farm management and sustainability. Here are
//           some reasons why registering is valuable:
//         </p>
//         {/*
//         <ol className="list-decimal text-[12px]">
//           <li><strong>Access to Support Services:</strong> Receive technical assistance, advice on best practices, and access to government programs.</li>
//           <li><strong>Resources and Grants:</strong> Eligibility for resources like seeds, equipment, and financial grants.</li>
//           <li><strong>Link to Verified Service Providers:</strong> Connect with a network of suppliers, agronomists, veterinarians, and other experts.</li>
//           <li><strong>Partnerships with Development Organizations:</strong> Collaborate with NGOs, international agencies, and development partners.</li>
//           <li><strong>Market Access:</strong> Gain better access to local and international markets with fair pricing and reliable sales channels.</li>
//         </ol> */}
//         <ol className="list-decimal  text-[12px]">
//           <li>
//             <strong>Access to Support Services:</strong> Registration allows
//             farmers to receive support in managing their farms. This includes
//             technical assistance, advice on best practices, and access to
//             government programs aimed at boosting productivity and
//             profitability.
//           </li>
//           <li>
//             <strong>Resources and Grants:</strong> Registered farmers may be
//             eligible for access to various resources such as seeds, equipment,
//             and financial grants. These resources are often provided
//             bygovernment initiatives or development partners to help farmers
//             grow and improve their businesses.
//           </li>
//           <li>
//             <strong>Link to Verified Service Providers:</strong> Being a
//             registered farmer gives you access to a network of verified service
//             providers. This network can include suppliers, agronomists,
//             veterinarians, and other experts who can provide quality services
//             tailored to your specific needs.
//           </li>
//           <li>
//             <strong>Partnerships with Development Organizations:</strong>{" "}
//             Registration can connect farmers to development partners, NGOs, and
//             international agencies that support agricultural development. These
//             partnerships may open doors to collaborative projects, funding
//             opportunities, and skill-building programs.
//           </li>
//           <li>
//             <strong>Market Access:</strong> : Farmers who are officially
//             registered have better access to both local and international
//             markets. Registration can provide opportunities to sell products to
//             established buyers, cooperatives, or even government procurement
//             programs, ensuring fair pricing and reliable sales channels.
//           </li>
//         </ol>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-[21%] bg-[#F3F5F5] p-4 mb-6 rounded-lg">
//         <h2 className="text-lg font-semibold mb-4">Additional Information</h2>

//         <div className="flex flex-col justify-end mb-4">
//           <div className="relative w-36 h-32 flex items-end justify-end mb-4">
//             <img
//               src={selectedFile || registerimg}
//               alt="Uploaded"
//               className="w-full h-full absolute md:left-[98px] sm:items-center object-cover rounded-lg border"
//             />
//             <img
//               src={plus1}
//               alt="Add Icon"
//               className="absolute top-2 md:left-[208px] right-2 w-6 h-6 cursor-pointer"
//             />
//             <input
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageUpload}
//             />
//           </div>
//           <p className="text-center text-sm text-gray-500">Insert picture</p>
//         </div>

//         <button className="flex items-center justify-start gap-2 font-medium text-sm mb-2">
//           <SlLocationPin className="text-base" />
//           Set location
//         </button>

//         <hr className="border-t border-gray-300 mb-4" />

//         <div className="flex justify-between items-center mb-4">
//           <div className="w-[48%]">
//             <label className="text-[10px] font-medium text-gray-700 block mb-1">
//               Select farm measure
//             </label>
//             <div className="relative">
//               {" "}
//               <select
//                 value={farmUnit}
//                 onChange={(e) => setFarmUnit(e.target.value)}
//                 className="w-full appearance-none p-2 border rounded-md"
//               >
//                 <option value="Acres">Acres</option>

//                 <option value="Hectares">Hectares</option>
//               </select>{" "}
//               <svg
//                 viewBox="0 0 34 33"
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 w-[34px] h-[33px] text-white"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g id="arrow_drop_down">
//                   <path
//                     id="Vector"
//                     d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z"
//                     fill="black"
//                   />
//                 </g>
//               </svg>
//             </div>
//           </div>
//           <div className="w-[48%]">
//             <label className="text-[10px] font-medium text-gray-700 block mb-1">
//               Enter size
//             </label>
//             <input
//               type="number"
//               value={farmSize}
//               onChange={(e) => setFarmSize(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//         </div>

//         <hr className="border-t border-gray-300 mb-4" />

//         <div className="mb-6">
//           <p className="text-[10px] font-medium text-gray-700 mb-2">
//             Type of farming
//           </p>
//           <div className="flex items-center gap-4">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="farmingType"
//                 value="Crop"
//                 checked={farmingType === "Crop"}
//                 onChange={() => setFarmingType("Crop")}
//                 className="mr-2 accent-[#155528]"
//               />
//               Crop
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="farmingType"
//                 value="Livestock"
//                 checked={farmingType === "Livestock"}
//                 onChange={() => setFarmingType("Livestock")}
//                 className="mr-2 accent-[#155528]"
//               />
//               Livestock
//             </label>
//           </div>
//         </div>

//         <button className="w-full mt-11 py-2 bg-[#155528] text-white text-lg font-medium rounded-md hover:bg-green-700 transition">
//           Register
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import registerimg from "../Assets/registerimg.png";
import plus2btn from "../Assets/plus2btn.png";
import locationicon from "../Assets/locationicon.png";

const Register = () => {
  return (
    <div className="font-Inter mt-8 ">
    
      <div className="flex space-x-8">
      
        <div className=" pl-8">
          <h1 className="font-bold text-2xl md:text-[36px] text-[#155528] mb-4">
            REGISTRATION
          </h1>
       
          <form className="space-y-6">
            <h2 className="font-medium text-[24px] mt-4 mb-6">
              <span className="text-red-600">*</span>
              <span>Basic Information</span>
            </h2>

            {/* Name and Surname */}
            <div className="flex flex-col md:flex-row space-x-2  mb-4">
              <div>
                <label className="block text-sm md:text-[24px] font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter name"
                  className="w-full md:w-[299px] md:h-[53px] border-[3px] p-2 rounded placeholder-[#979797] border-[#979797] bg-[#F3F5F5] text-[24px] font-medium"
                />
              </div>
              <div>
                <label className="block text-sm md:text-[24px] font-medium mb-2">
                  Surname
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter surname"
                  className="w-full md:w-[299px] md:h-[53px] border-[3px] p-2 rounded placeholder-[#979797] border-[#979797] bg-[#F3F5F5] text-[24px] font-medium"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm md:text-[24px] font-medium mb-2">
                Country
              </label>
              <div className="flex items-center w-full md:w-[608px] md:h-[53px] border-[3px] rounded border-[#979797] bg-[#F3F5F5]">
                <select
                  className="flex-1 appearance-none bg-transparent text-[24px] font-medium text-[#979797] px-3 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select country
                  </option>
                </select>
                <IoMdArrowDropdown className="text-black text-[30px] mr-3" />
              </div>
            </div>

           
            <div className="mb-4">
              <label className="block text-sm md:text-[24px] font-medium mb-2">
                Location
              </label>
              <div className="flex items-center w-full md:w-[608px] md:h-[53px] border-[3px] rounded border-[#979797] bg-[#F3F5F5]">
                <select
                  className="flex-1 appearance-none bg-transparent text-[24px] font-medium text-[#979797] px-3 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select administrative division
                  </option>
                </select>
                <IoMdArrowDropdown className="text-black text-[30px] mr-3" />
              </div>
            </div>

         
            <div className="mb-4">
              <label className="block text-sm md:text-[24px] font-medium mb-2">
                Farming
              </label>
              <div className="flex items-center w-full md:w-[608px] md:h-[53px] border-[3px] rounded border-[#979797] bg-[#F3F5F5]">
                <select
                  className="flex-1 appearance-none bg-transparent text-[24px] font-medium text-[#979797] px-3 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select type of farming
                  </option>
                </select>
                <IoMdArrowDropdown className="text-black text-[30px] mr-3" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-x-2  mb-4">
              <div>
                <label className="block text-sm md:text-[24px] font-medium mb-2">
                  Mobile
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter mobile number"
                  className="w-full md:w-[299px] md:h-[53px] border-[3px] p-2 rounded placeholder-[#979797] border-[#979797] bg-[#F3F5F5] text-[24px] font-medium"
                />
              </div>
              <div>
                <label className="block text-sm md:text-[24px] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter email"
                  className="w-full md:w-[299px] md:h-[53px] border-[3px] p-2 rounded placeholder-[#979797] border-[#979797] bg-[#F3F5F5] text-[24px] font-medium"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex space-x-4">
        
          <div>
            <h1 className="font-bold text-2xl md:text-[20px] text-[#155528] mb-4">
              Why register as a farmer in Namibia?
            </h1>
            <div className="text-[16px] leading-5">
              <p>
                Registering as a farmer in Namibia offers several key benefits
                that can
                <br className="md:block hidden" /> significantly improve farm
                management and sustainability. Here are
                <br className="md:block hidden" /> some reasons why registering
                is valuable:
              </p>

              <ol className="list-decimal pl-6 mt-4 leading-5">
                <li className="list-decimal marker:text-bold">
                  <span className="font-bold">Access to Support Services:</span>
                  Registration allows farmers to
                  <br className="md:block hidden" /> receive support in managing
                  their farms. This includes technical
                  <br className="md:block hidden" /> assistance, advice on best
                  practices, and access to government
                  <br className="md:block hidden" /> programs aimed at boosting
                  productivity and profitability.
                </li>
                <li>
                  <span className="font-bold">Resources and Grants:</span>
                  Registered farmers may be eligible for
                  <br className="md:block hidden" /> access to various resources
                  such as seeds, equipment, and
                  <br className="md:block hidden" /> financial grants. These
                  resources are often provided by
                  <br className="md:block hidden" /> government initiatives or
                  development partners to help farmers
                  <br className="md:block hidden" /> grow and improve their
                  businesses.
                </li>
                <li>
                  <span className="font-bold">
                    Link to Verified Service Providers:
                  </span>
                  Being a registered farmer gives
                  <br className="md:block hidden" /> you access to a network of
                  verified service providers. This network
                  <br className="md:block hidden" /> can include suppliers,
                  agronomists, veterinarians, and other
                  <br className="md:block hidden" /> experts who can provide
                  quality services tailored to your specific
                  <br className="md:block hidden" /> needs.
                </li>
                <li>
                  <span className="font-bold">
                    Partnerships with Development Organizations:
                  </span>
                  Registration can
                  <br className="md:block hidden" /> connect farmers to
                  development partners, NGOs, and international
                  <br className="md:block hidden" /> agencies that support
                  agricultural development. These
                  <br className="md:block hidden" /> partnerships may open doors
                  to collaborative projects, funding
                  <br className="md:block hidden" /> opportunities, and
                  skill-building programs.
                </li>
                <li>
                  <span className="font-bold">Market Access:</span> Farmers who
                  are officially registered have better
                  <br className="md:block hidden" /> access to both local and
                  international markets. Registration can
                  <br className="md:block hidden" /> provide opportunities to
                  sell products to established buyers,
                  <br className="md:block hidden" /> cooperatives, or even
                  government procurement programs,
                  <br className="md:block hidden" /> ensuring fair pricing and
                  reliable sales channels.
                </li>
              </ol>
            </div>
          </div>
         
          <div className="bg-[#F3F5F5] w-[249px] h-[526px] p-4">
            <h1 className="font-medium text-2xl md:text-[20px] mt-2 mb-4">
              Additional Information
            </h1>
            <div className="flex justify-end items-center">
              <div className="flex flex-col items-start">
                <div className="relative">
                  <img
                    src={registerimg}
                    alt="registerimg"
                    className="w-[136px] h-[121px]"
                  />
                  <img
                    src={plus2btn}
                    alt="plus2btn"
                    className="absolute top-1 right-1"
                  />
                </div>
                <h2 className="text-[10px] mt-1">Insert picture</h2>
              </div>
            </div>

            <div className="mt-4 border-b-4 border-white">
              <div className="flex items-center mb-2">
                <img
                  src={locationicon}
                  alt="locationicon"
                  className="w-[24px] h-[24px]"
                />
                <h1 className="text-[14px]">Set location</h1>
              </div>
            </div>
            <div className="border border-gray-400 mb-4"></div>

          
            <div className=" border-b-4 border-white">
              <div className="text-[10px] space-y-2 mb-6">
              
                <div className="">
                  <div className="text-[10px] space-y-4 border-b-4 border-white">
                    <div className="flex space-x-4">
                    
                      <div className="relative">
                        <h1 className="text-[10px]">Select farm measure</h1>
                        <div className="flex items-center">
                          <input
                            type="text"
                            required
                            placeholder="Acres"
                            className="w-[123px] h-[32px] border  rounded p-2 placeholder-black font-bold text-[14px]"
                          />
                          <IoMdArrowDropdown className="absolute right-2 text-black text-[20px]" />
                        </div>
                      </div>
                  
                      <div>
                        <h1 className="text-[10px]">Enter size</h1>
                        <input
                          type="text"
                          required
                          placeholder="3"
                          className="w-[75px] h-[32px] placeholder-black border  rounded p-2 font-bold text-[14px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-gray-400 "></div>
                </div>

         
                <div>
                  <h1 className="text-[12px] font-medium mb-1">
                    Type of farming
                  </h1>

                  <div className="flex items-center gap-4 text-[12px] mt-3">
                    <div className="flex items-center space-x-4">
                      <input
                        type="radio"
                        id="crop"
                        name="farmingType"
                        defaultChecked
                        className="w-3 h-3 accent-[#155528]" 
                      />
                      <label htmlFor="crop" className="ml-1">
                        Crop
                      </label>
                      <IoMdArrowDropdown className="ml-1  text-[20px]" />
                    </div>

                    <div className="flex items-center space-x-4">
                      <input
                        type="radio"
                        id="livestock"
                        name="farmingType"
                        className="w-3 h-3 accent-[#155528]" // Added accent class for green color
                      />
                      <label htmlFor="livestock" className="ml-1">
                        Livestock
                      </label>
                      <IoMdArrowDropdown className="ml-1  text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-400 mb-4"></div>
          </div>
        </div>
      </div>

      <h2 className="text-[20px] whitespace-nowrap mb-4">
        <span className="text-red-600 ">*</span>
        <span>
          We will not share your personal Information without your
          authorization.
        </span>
      </h2>
    </div>
  );
};

export default Register;
