

import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import registerimg from "../Assets/registerimg.png";
import plus2btn from "../Assets/plus2btn.png";
import locationicon from "../Assets/locationicon.png";
import UserAccountHeader from "../UserAccounts/UserAccountHeader";
const Registration = () => {
  return (
    <>        <UserAccountHeader />
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
    </div></>
  );
};

export default Registration;
