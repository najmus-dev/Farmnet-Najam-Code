import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const ContactUs = () => {
  return (
    <div className="bg-[#EDF0EF] min-h-screen font-Inter">
      {/* Top Section */}
      <div className="bg-white px-4 md:px-8 pb-14 md:pb-10 py-2 md:h-[319px]">
        <h2 className="text-green-900 font-bold text-2xl md:text-3xl mt-6 ">
          PRIVACY POLICY
        </h2>
        <p className="md:mt-4 text-base md:text-2xl font-medium ">
          “Farmnet helps crop and livestock farmers maintain accurate records,
          improving their planning and management. By digitizing and sharing
          these records with service providers and partners, farmers gain access
          to tailored solutions that enhance both production and market access.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row h-auto md:h-[330px] mx-4 md:mx-8 -mt-10 md:-mt-20 relative z-10">
        {/* Left Section */}
        <div className="bg-[#8EC543] text-white p-6 rounded-sm md:w-[307px] h-auto md:h-full z-20 mb-4 md:mb-0">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Contact Information
          </h2>
          <p className="text-base md:text-xl mb-4">
            We provide software as a service (SaaS) to farmers, service
            providers, partners, institutions, and government.
          </p>
          <div className="flex items-center space-x-2 mb-2">
            <IoCallOutline className="text-black" />
            <p className="font-medium text-sm md:text-base">+27647566059</p>
          </div>
          <div className="flex items-center space-x-2">
            <CiMail className="text-black" />
            <p className="font-medium text-sm md:text-base">
              info@farmnet.africa
            </p>
          </div>
        </div>

        {/* Right Section */}
        <form className="flex-1 bg-[#F3F5F5] rounded-sm p-6 z-10 flex flex-col justify-between">
          {/* Row for Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Name Field */}
            <div className="bg-[#FAFBFB] rounded shadow-md border-b-4 p-1 text-black">
              <label
                className="block text-sm font-medium px-4 text-gray-700 mb-1"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Johnnes Shikongo"
                className="w-full px-4 py-2 bg-[#FAFBFB] font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-200"
              />
            </div>

            {/* Email Field */}
            <div className="bg-[#FAFBFB] rounded shadow-md border-b-4 p-1 text-black">
              <label
                className="block text-sm font-medium px-4 text-gray-700 mb-1"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Johnnes.Shikongo@email.com"
                className="w-full px-4 py-2 bg-[#FAFBFB] font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>

          {/* Subject Field and Button */}
          <div className="relative bg-[#FAFBFB] rounded shadow-md border-b-4 p-1 text-black">
            <label
              className="block text-sm font-medium text-gray-700 px-4 mb-1"
              htmlFor="subject"
            >
              Your Subject
            </label>
            <textarea
              id="subject"
              placeholder="I want to register as a farmer"
              className="w-full h-[120px] md:h-[161px] px-4 py-2 bg-[#FAFBFB] font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-200"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="absolute bottom-4 md:bottom-6 right-2 bg-[#155528] text-white px-4 md:px-6 py-2 rounded-md hover:bg-[#0c3117] transition duration-150"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
