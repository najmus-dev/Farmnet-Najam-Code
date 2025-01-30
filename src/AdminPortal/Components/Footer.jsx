// import React from "react";

// const Footer = () => {
//   return (
//     <div className="font-Inter bg-[#FAFBFB] mt-6 md:mt-0 w-full border-t-[4px] border-[#EDF0EF]">
//       <div className="flex flex-wrap md:flex-row space-x-2 px-4 md:px-6 py-4 w-full">
//         <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
//           License
//         </h1>
//         <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
//           Terms & Conditions
//         </h1>
//         <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
//           Privacy Policy
//         </h1>
//         <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
//           Data Policy
//         </h1>
//         <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
//           FAQs
//         </h1>
//         <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
//           API
//         </h1>
//         <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
//           Contact us
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="font-Inter bg-[#FAFBFB] mt-6 md:mt-0 w-full border-t-[4px] border-[#EDF0EF]">
      <div className="flex flex-wrap md:flex-row space-x-2 px-4 md:px-6 py-4 w-full">
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
          <a href="/admin/license" className="hover:underline">
            License
          </a>
        </h1>
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
          <a href="/admin/termsandcondition" className="hover:underline">
            Terms and conditions
          </a>
        </h1>
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
          <a href="/admin/privacypolicy" className="hover:underline">
            Privacy Policy
          </a>
        </h1>
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
          <a href="/admin/datausage" className="hover:underline">
            Data Usage
          </a>
        </h1>
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
          <a href="/admin/faqs" className="hover:underline">
            {" "}
            FAQs
          </a>
        </h1>
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
          API
        </h1>
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow  md:w-auto">
          <a href="/admin/contactus" className="hover:underline">
            {" "}
            Contact us
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
