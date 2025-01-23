import React from "react";
import { HiSearch } from "react-icons/hi";
import environmental99 from "../../Assets/environmental99.png";
import { IoMdArrowDropdown } from "react-icons/io";
import calender from "../../Assets/calender.png";
import clock from "../../Assets/clock.png";
import SustainabilityChart from "../SustainabilityChart";
import ReportsGraph from "../../ReportsPages/ReportsGraph";
import colorwheel from "../../Assets/colorwheel.png";

const SocialPage3 = () => {
  return (
    <div className="p-4 md:p-10 font-Inter overflow-x-hidden">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          ENVIRONAMENTAL SOCIAL & GOVERNANCE (ESG)
        </h1>
      </div>
      {/* Search and Filters */}
      <div className="flex flex-col gap-4 lg:flex-row items-center mb-6">
        {/* Search Input */}
        <div className="w-full mb-4 lg:mb-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search report"
              className="w-full md:h-[77px] text-[#919291] md:text-[24px] font-bold p-3 pr-10 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <HiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
              size={40}
            />
          </div>
        </div>
      </div>
      {/* green yellow section */}
      <div className=" mb-6 md:mb-12 font-semibold ">
        {/* Country Filter section*/}
        <div className="flex">
          <h1 className="text-white bg-[#155528] p-2 md:p-6 rounded-tl-lg font-bold md:text-[28px] w-1/2 md:w-[830px] md:h-[90px]">
            Country
          </h1>
          {/* Country Filter with Custom Dropdown Icon */}
          <div className="relative w-1/2 md:w-[590px]">
            <select
              id="country"
              className=" focus:outline-none p-2 md:p-6 rounded-tr-lg font-bold md:text-[28px] w-full md:w-[590px] md:h-[90px] focus:ring-2 focus:ring-green-600 bg-[#5C9247] text-white appearance-none md:pr-10"
            >
              <option value="Angola">Angola</option>
              <option value="Botswana">Botswana</option>
              <option value="Cameroon">Cameroon</option>
              <option value="DRC">DRC</option>
              <option value="Cote d'Ivoire">Cote d'Ivoire</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Malawi">Malawi</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Namibia">Namibia</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Senegal">Senegal</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Uganda">Uganda</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>

            <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-[20px] md:text-[50px]" />
          </div>
        </div>

        {/* Type of Report Filter section*/}
        <div className="flex">
          <h1 className="bg-[#83C543] p-2 md:p-6 rounded-bl-lg font-bold md:text-[28px] w-1/2 md:w-[830px] md:h-[90px]">
            Type of report
          </h1>

          {/* Custom Dropdown with Icon */}
          <div className="relative w-1/2 md:w-[590px]">
            <select
              id="reportType"
              className="  p-2 md:p-6  font-bold md:text-[28px] w-full md:w-[590px] md:h-[90px] rounded-br-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-[#F3F368] text-black appearance-none md:pr-10"
            >
              <option value="Environmental">Environmental</option>
              <option value="SOCIAL">SOCIAL </option>
              <option value="GOVERNANCE">GOVERNANCE</option>
            </select>
            <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-[20px] md:text-[50px] " />
          </div>
        </div>
      </div>
      {/* title and dates section */}
      <div className="flex flex-col md:flex-row md:justify-between items-center my-2 mb-4 md:mb-12 ">
        <h1 className="text-green-900 font-bold text-2xl lg:text-[36px]">
          ENVIRONMENTAL
        </h1>

        <div className="flex space-x-8 text-[#19253C]">
          <div className="flex space-x-4 items-center">
            <h1 className="italic  md:text-[24px] ">Opening Date</h1>
            <img src={calender} alt="calender" className="w-[25px] h-[26px]" />
          </div>
          <div className="flex  space-x-4 items-center">
            <h1 className="italic  md:text-[24px]">Closing Date</h1>
            <img src={calender} alt="calender" className="w-[25px] h-[26px]" />
          </div>
        </div>
      </div>
      {/* image */}
      <img
        src={environmental99}
        alt="environmental99"
        className="w-full md:h-[760px]"
      />
      {/* nav */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 mt-6 md:mt-10 mb-6">
        <h1 className="font-bold text-xl md:text-[40px]">CO2 Abating</h1>
        <div className="flex space-x-1 md:space-x-4 text-white font-medium text-base md:text-[24px]  lg:w-auto">
          <button className="bg-[#155528] md:w-[254px] md:h-[50px]  px-2 py-1 md:py-2 rounded-md">
            Save Forests
          </button>

          <button className="bg-[#155528] md:w-[254px] md:h-[50px] px-2 py-1 md:py-2 rounded-md">
            Forestation
          </button>

          <button className="bg-[#155528] md:w-[254px] md:h-[50px] px-2 py-1 md:py-2 rounded-md">
            Conservation
          </button>
        </div>
      </div>
      {/* time and writer section */}
      <div className="flex items-center justify-start space-x-12 mt-2  ">
        {/* Writer Info */}
        <h1 className="text-sm md:text-[20px]">Story by Farmnet</h1>
        {/* Read Time */}
        <div className="flex items-center space-x-1 text-green-700 ">
          <span className="w-4 h-4 bg-black  rounded-full inline-block"></span>
          <div className=" flex items-center space-x-1">
            <img src={clock} alt="clock" className="ml-2 w-[24px] h-[24px]" />
            <h1 className="text-sm md:text-[20px]">19/11/2024</h1>
          </div>
        </div>
      </div>
      <p className="md:text-[34px] leading-5 mt-6 md:mt-10">
        The importance of ESG (Environmental, Social, and Governance) in
        business includes Improving
        <span className="hidden md:block">
          <br />
        </span>
        a company’s image and reputation, which attracts more investors.
        Affecting the triple bottom line
        <span className="hidden md:block">
          <br />
        </span>
        through new regulations from governments worldwide. Forcing companies to
        innovate, leading
        <span className="hidden md:block">
          <br />
        </span>
        to new opportunities. Benefiting the environment, which is good for
        future generations.
      </p>
      <h1 className="font-bold text-[22px] md:text-[32px] mt-6 md:mt-12 mb-4">
        SUSTAINABILITY PRIORITIES{" "}
      </h1>
      <SustainabilityChart />
      {/* Subscribtion button */}
      <div className="flex justify-end mt-8">
        <button className="text-[24px] rounded-md font-medium bg-[#155528] text-white w-[440px] h-[50px] py-1">
          Subscribe for reports
        </button>
      </div>
      <h1 className="font-bold text-2xl md:text-[32px] mt-4 md:mt-8">
        Save forests
      </h1>
      <ReportsGraph />
      <h1 className="font-bold text-2xl md:text-[32px] mt-4 md:mt-8">
        Forestation
      </h1>
      <p className="text-base md:text-[34px] leading-5 md:leading-10">
        In 2024, maize production in Namibia is projected to experience an
        increase of 2% compared to 2022 production levels, with an annual
        production estimated at 3,834,618 metric tons.
      </p>
      <p className="text-base md:text-[34px] leading-5 md:leading-10">
        This growth is significant, and it’s worth noting that the Western and
        Southern districts are expected to produce the most substantial volumes
        of maize. Specifically, districts like Masinga (Machakos), Kilgoris
        (Narok), Mwala (Machakos), Cherangany (Trans Nzoia), Yatta (Machakos),
        and Kibwezi West (Makueni) are anticipated to contribute significantly
        to maize production in Kenya.
      </p>
      <ReportsGraph />
      <h1 className="font-bold text-2xl md:text-[32px] mt-4 md:mt-8">
        Reforestation
      </h1>
      <p className="text-base md:text-[34px] leading-5 md:leading-10">
        In 2024, maize production in Namibia is projected to experience an
        increase of 2% compared to 2022 production levels, with an annual
        production estimated at 3,834,618 metric tons.
      </p>
      <p className="text-base md:text-[34px] leading-5 md:leading-10">
        This growth is significant, and it’s worth noting that the Western and
        Southern districts are expected to produce the most substantial volumes
        of maize. Specifically, districts like Masinga (Machakos), Kilgoris
        (Narok), Mwala (Machakos), Cherangany (Trans Nzoia), Yatta (Machakos),
        and Kibwezi West (Makueni) are anticipated to contribute significantly
        to maize production in Kenya.
      </p>
      {/* Donation button */}
      <div className="flex justify-end mt-6">
        <button className="text-[24px] rounded-md font-medium bg-[#155528] text-white w-[440px] h-[50px] py-1">
          Support-Donate
        </button>
      </div>
      {/* color wheel section */}
      <a href="/environmental-social-governance-main-page">
        <div className="bg-[#FAFBFB] flex items-center justify-between mt-8 p-6 border-b-2 border-gray-300 rounded-md">
          <div>
            <h1 className="font-bold text-2xl md:text-[32px] mb-4">
              SDG No 13
            </h1>
            <p className="text-base md:text-[32px] mt-6 mb-4">
              Take urgent action to combat climate change and its impacts
            </p>
          </div>
          <img src={colorwheel} alt="colorwheel" />
        </div>
      </a>
    </div>
  );
};

export default SocialPage3;
