import React from "react";
import { HiSearch } from "react-icons/hi";
import seed1 from "../../Assets/seed1.png";
import donation from "../../Assets/donation.png";
import usericon from "../../Assets/usericon.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import okicon from "../../Assets/okicon.png";
import editicon from "../../Assets/editicon.png";
import colorwheel from "../../Assets/colorwheel.png";

const VegetablesDonationPage = () => {
  return (
    <div className="p-4 md:p-8  overflow-x-hidden">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          DONATE
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
      {/* main image and title*/}
      <h1 className="text-[#155528] font-bold text-2xl md:text-[36px] mb-4">
        NAMIBIA FARMERS
      </h1>
      <img src={seed1} alt="seed1" className="w-full h-auto" />
      {/* nav */}
      <div className="flex items-center justify-between mt-8 mb-10">
        <div className="flex space-x-8 md:space-x-36">
          <h1 className="font-bold text-2xl md:text-[40px]">ESG</h1>
          <IoMdArrowDropdown className="text-[30px]" />
        </div>
        <div className="flex space-x-1 md:space-x-4 text-white font-medium text-base md:text-[24px]  lg:w-auto">
          <a href="/buy-page">
            <button className="bg-[#155528] md:w-[254px] md:h-[50px]  px-2 py-1 md:py-2 rounded-md">
              Buy
            </button>
          </a>
          <a href="/vegetables-investment-tracker">
            <button className="bg-[#155528] md:w-[254px] md:h-[50px] px-2 py-1 md:py-2 rounded-md">
              Invest
            </button>
          </a>
          <a href="/vegetables-donation-page">
            <button className="bg-[#155528] md:w-[254px] md:h-[50px] px-2 py-1 md:py-2 rounded-md">
              Donate
            </button>
          </a>
        </div>
      </div>
      <h1 className="font-bold text-2xl md:text-[32px] mb-4">
        Maize Production
      </h1>
      <div className="text-xl md:text-[30px] md:leading-8">
        <p>Model of excellence in Agri business development.</p>
        <p>Sustainable communities to drive employment and enterprise.</p>
        <p>Valu addition uints</p>
        <p className="mt-10 mb-6">Benefits :,,,,,,,</p>
      </div>
      {/* image card */}
      <div className="flex items-center justify-center  bg-white">
        <div className="w-full md:w-[1410px] h-[480px] md:h-[991px] bg-[#FAFBFB] rounded-md border border-[#919291]">
          <div className="pt-6">
            <h1 className="text-bold md:text-[32px] font-bold text-center mb-6">
              Support -A-Community of farmers
            </h1>
            <img
              src={donation}
              alt="Support A Community of Farmers"
              className="w-full md:w-[1410px] h-[300px] md:h-[686px] object-cover"
            />
          </div>
        </div>
      </div>
      <h1 className="font-bold text-2xl md:text-[34px] mt-4 md:mt-14 text-center mb-2 mr-8">
        Choose amount
      </h1>
      <h1 className="font-bold text-xl md:text-[34px] md:leading-relaxed mb-4">
        How much would you like to donate?
      </h1>
      <div className=" text-xl md:text-[36px] mb-2  md:leading-10">
        <p>
          As a contributor to supporting the developments of farmers
          communities, we make sure that you donation goes directly in
          supporting our course.
        </p>
        <p>Thank you for your support.</p>
      </div>
      {/* buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8 md:mt-20 text-[20px] md:text-[48px] font-bold">
        <button className="w-full md:w-[271px] rounded-md h-[80px] md:h-[105px] bg-[#D9D9D9]">
          USD5
        </button>
        <button className="w-full md:w-[271px] rounded-md h-[80px] md:h-[105px] bg-[#D9D9D9]">
          USD10
        </button>
        <button className="w-full md:w-[271px] rounded-md h-[80px] md:h-[105px] bg-[#D9D9D9]">
          USD20
        </button>
        <button className="w-full md:w-[271px] rounded-md h-[80px] md:h-[105px] bg-[#155528] text-white">
          USD50
        </button>
        <button className="w-full md:w-[271px] rounded-md h-[80px] md:h-[105px] text-[16px] md:text-[24px] bg-[#D9D9D9]">
          Customise your donation
        </button>
      </div>

      <h1 className="font-bold text-2xl md:text-[34px] md:leading-relaxed mb-4 mt-6">
        Donner Information.
      </h1>
      <p className=" text-2xl md:text-[37px] mb-4 md:leading-10">
        We will never share this information with anyone.
      </p>
      {/* form  */}
      <div className="space-y-6 text-2xl md:text-[40px] mt-8 md:mt-16">
        {/* First Name and Last Name */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full">
            <img
              src={usericon}
              alt="usericon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-[70px] md:h-[114px] pl-16 border bg-[#FAFBFB] border-[#919291] rounded-md text-black placeholder-black"
            />
          </div>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full h-[70px] md:h-[114px] pl-16 border bg-[#FAFBFB] border-[#919291] rounded-md text-black placeholder-black"
          />
        </div>

        {/* Email */}
        <div className="relative w-full">
          <MdOutlineMailOutline className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-800 font-thin" />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-[70px] md:h-[114px] pl-16 border bg-[#FAFBFB] border-[#919291] rounded-md placeholder-black"
          />
        </div>

        {/* Country Dropdown */}
        <div className="relative w-full">
          <select className="w-full h-[70px] md:h-[114px] pl-16 border bg-[#FAFBFB] border-[#919291] rounded-md px-4 pr-10 appearance-none placeholder-black">
            <option value="Kenya">Kenya</option>
            <option value="Botswana">Botswana</option>
            <option value="Cameroon">Cameroon</option>
            <option value="DRC">DRC</option>
            <option value="Cote d'Ivoire">Cote d'Ivoire</option>
            <option value="Eswatini">Eswatini</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Ghana">Ghana</option>
            <option value="Kenya">Angola</option>
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
          <IoMdArrowDropdown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>

        {/* Address Line 1 and Address Line 2 */}
        <input
          type="text"
          placeholder="Address line 1"
          className="w-full h-[70px] md:h-[114px] pl-16 border bg-[#FAFBFB] border-[#919291] rounded-md px-4 placeholder-black"
        />
        <input
          type="text"
          placeholder="Address line 2"
          className="w-full h-[70px] md:h-[114px] pl-16 border bg-[#FAFBFB] border-[#919291] rounded-md px-4 placeholder-black"
        />

        {/* City Input with Red Asterisk */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="City"
            className="w-full h-[70px] md:h-[114px] pl-16 border bg-[#FAFBFB] border-[#919291] rounded-md px-4 placeholder-black"
            required
          />
          <span className="absolute top-1/2 left-10 transform -translate-y-1/2 text-red-500">
            *
          </span>
        </div>

        {/* Nairobi and Zip Code */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Nairobi"
            className="w-full pl-16 h-[70px] md:h-[114px] border bg-[#FAFBFB] border-[#919291] rounded-md px-4 placeholder-black"
          />
          <input
            type="text"
            placeholder="Zip code / Postal code"
            className="w-full h-[70px] md:h-[114px] pl-16 border bg-[#FAFBFB] border-[#919291] rounded-md px-4 placeholder-black"
          />
        </div>
      </div>
      <p className=" text-2xl md:text-[37px] mb-4 mt-6 md:mt-16 md:leading-10">
        To make a donation towards supporting a farmer, by direct deposit to
        bank, follow this steps
      </p>
      <div className="flex items-center space-x-2 md:space-x-8 mb-4 md:mt-16">
        <img
          src={okicon}
          alt="okicon"
          className="md:w-[71px] w-[35px] h-[37px] md:h-[74px]"
        />
        <p className="text-lg md:text-[37px]  md:leading-10">
          I agree to the
          <span className="text-[#155528] underline">
            {" "}
            terms and conditions{" "}
          </span>
          of the donation
        </p>
      </div>
      <div className="flex items-center space-x-2 justify-end">
        <h1 className="text-[24px]">Edit Donation</h1>
        <img
          src={editicon}
          alt="editicon"
          className="md:w-[55px] w-[25px] h-[26px] md:h-[54px]"
        />
      </div>
      <h1 className="font-semibold text-2xl md:text-[34px] leading-relaxed mb-4 mt-8">
        Please confirm the amount you are donating.
      </h1>
      {/* section */}
      <div className="space-y-4 p-4">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:w-full lg:h-[114px] border border-[#919291] rounded-lg bg-[#FAFBFB]  pt-4 md:pt-0">
          <h1 className="mb-2 md:mb-0 text-[24px] lg:text-[36px] lg:pl-12">
            Payment amount
          </h1>
          <h1 className="flex items-center justify-center w-full lg:w-[396px] h-[60px] lg:h-[114px] border-2 border-[#919291] rounded-lg bg-[#F3F5F5] text-[24px] lg:text-[36px] font-semibold md:font-bold text-gray-800">
            USD 100
          </h1>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:w-full lg:h-[114px] border-2 border-[#919291] rounded-lg bg-[#FAFBFB]  pt-4 md:pt-0">
          <h1 className="mb-2 md:mb-0 text-[24px] lg:text-[36px] lg:pl-12">
            Frequency
          </h1>
          <h1 className="flex items-center justify-center w-full lg:w-[396px] h-[60px] lg:h-[114px] border-2 border-[#919291] rounded-lg bg-[#F3F5F5] text-[24px] lg:text-[36px] font-semibold md:font-bold text-gray-800">
            One time
          </h1>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:w-full lg:h-[114px] border-2 border-[#919291] rounded-lg bg-[#FAFBFB]  pt-4 md:pt-0">
          <h1 className="mb-2 md:mb-0 text-[24px] lg:text-[36px] lg:pl-12 font-semibold md:font-bold">
            Donation Total
          </h1>
          <h1 className="flex items-center justify-center w-full lg:w-[396px] h-[60px] lg:h-[114px] border-2 border-[#919291] rounded-lg bg-[#F3F5F5] text-[24px] lg:text-[36px] font-semibold md:font-bold text-gray-800">
            USD 100
          </h1>
        </div>
      </div>

      {/* buttons */}
      <div className="flex w-full space-x-4 mt-8">
        <button className="bg-[#8EC543] py-2 md:h-[65px] text-white w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-medium text-lg md:text-[32px] rounded-md">
          Contact Admin
        </button>
        <a
          href="/vegetables-donation-confirmation"
          className="bg-[#FAFBFB] py-2 md:h-[65px] border-b-2 w-full md:flex md:items-center md:justify-start p-2 md:p-8 font-medium text-lg md:text-[32px] rounded-md"
        >
          <button>Donate now</button>
        </a>
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

export default VegetablesDonationPage;
