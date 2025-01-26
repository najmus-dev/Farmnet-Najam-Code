import React from "react";
import playbtn from "../Assets/playbtn.png";
import profile from "../Assets/profile.png";
import logo2 from "../Assets/logo2.png";
import rect from "../Assets/rect.png";
import Header4 from "../Components/Header4";
import editicon from "../Assets/editicon.png";
import importicon from "../Assets/importicon.png";
import { IoAddCircleOutline } from "react-icons/io5";

const AdminFunding = () => {
  return (
    <div>
      <Header4 />
      <div className="px-4 md:px-8 mt-8 top-[180px] font-Inter text-base md:text-xl">
        <div className="flex justify-between items-center mt-2">
          <h2 className="font-bold text-2xl lg:text-[32px] leading-[150%]">
            Profile
          </h2>
          {/* edit save options */}
          <div className="flex  items-center space-x-6 md:space-x-40 ">
            <div className="flex items-center space-x-2">
              <img src={editicon} alt="edit icon" className="w-6 h-6" />
              <h1 className=" text-[20px] font-bold">Edit</h1>
            </div>
            <div className="flex items-center space-x-2">
              <h1 className=" text-[20px] font-bold">Save</h1>
              <img src={importicon} alt="importicon" className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p className="md:font-medium md:text-[32px] md:leading-10 mt-2 md:mt-6 ">
            Farmer's Basic Information, Farm Details, Experience & Expertise,
            Farming Practices,
            <br /> Products and Services, along with Reviews and Ratings
          </p>
        </div>
        <div className="mt-6">
          <p className="font-semibold md:text-[32px] mt-2 md:mt-6 ">
            How to keep records
          </p>
          <p className=" md:text-[32px]  mt-2 md:mt-6 mb-4">
            Click play to watch video
          </p>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex items-center md:w-[97%] mx-auto  justify-center relative bg-[#9FAFAF]">
          <img
            src={profile}
            alt="service11"
            className="md:w-[425px] md:h-[834px] w-1/2 mt-6 md:mt-4 mb-6 md:mb-2"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={playbtn}
              alt="play button"
              className="w-16 h-16 md:w-[133px] md:h-[133px]"
            />
          </div>
          <img
            src={logo2}
            alt="service11"
            className="absolute left-2 bottom-2 w-[80px] sm:w-[98px] md:w-[208px] h-auto"
          />
        </div>
      </div>
      <div className="p-6 top-[105px] font-Inter text-base md:text-xl">
        <h2 className="font-bold text-2xl lg:text-[32px] leading-[150%]">
          How to
        </h2>
        <div className="mt-2">
          <p className="lg:text-[32px] leading-[150%]">
            Click on user profile picture on the top left corner of the home
            screen to open profile updates and shares or advertises products.
          </p>
        </div>
        <h2 className="font-bold mt-4 lg:text-[32px] leading-[150%] text-2xl  border-[#979797] border-b-[2px]">
          Benefits
        </h2>
        <p className="mt-2 lg:text-[32px] leading-[150%] font-medium">
          Sell products & Services
        </p>
        <p className="mt-2 lg:text-[32px] leading-[150%] font-medium">
          Market farmers business
        </p>
        <p className="mt-2 lg:text-[32px] leading-[150%] font-medium ">
          Access partner benefits
        </p>
        <p className="mt-2 lg:text-[32px] leading-[150%] font-medium border-[#979797] border-b-[2px]">
          Participate in community activities
        </p>
      </div>

      <div className="px-6 md:p-6 font-Inter text-base md:text-xl flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="font-bold md:mb-4 text-2xl lg:text-[32px] leading-[150%]">
            Rewards Program
          </h2>
          <p className="md:mt-6 lg:text-[32px] leading-[150%] font-medium">
            Gain points by updating your profile.
          </p>
          <p className="mt-2 lg:text-[32px] leading-[150%] font-medium">
            Redeem goods & services out of the points gained
          </p>
        </div>
        <div className="relative flex flex-col items-end mt-4 md:mt-0">
          <img
            src={rect}
            alt="Rewards"
            className="md:w-[358px] md:h-[158px] object-cover"
          />

          <IoAddCircleOutline className="absolute top-2 right-2 w-6 h-6 md:w-10 md:h-10" />

          <p className="mt-2 text-sm md:text-[24px] font-bold whitespace-nowrap text-[#919291]">
            View rewards program
          </p>
        </div>
      </div>

      {/* edit save options */}
      <div className="flex justify-end items-center space-x-6 md:space-x-40 px-4 md:px-8 mt-10 mb-40">
        <div className="flex items-center space-x-2">
          <img src={editicon} alt="edit icon" className="w-6 h-6" />
          <h1 className=" text-[20px] font-bold">Edit</h1>
        </div>
        <div className="flex items-center space-x-2">
          <h1 className=" text-[20px] font-bold">Save</h1>
          <img src={importicon} alt="import icon" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default AdminFunding;
