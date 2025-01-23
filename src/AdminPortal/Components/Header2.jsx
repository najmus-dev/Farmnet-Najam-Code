import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import angolaFlag from "../Assets/angola.png";
import BotswanaFlag from "../Assets/botswana.png";
import cameroonFlag from "../Assets/cameroon.png";
import drcFlag from "../Assets/DRC.png";
import coteDivorieFlag from "../Assets/cotedivorie.png";
import eswatiniFlag from "../Assets/eswatini.png";
import ethiopiaFlag from "../Assets/ethiopia.png";
import ghanaFlag from "../Assets/ghana.png";
import kenyaFlag from "../Assets/kenya.png";
import lesothoFlag from "../Assets/lesotho.png";
import malawiFlag from "../Assets/malawi.png";
import mozambiqueFlag from "../Assets/mozambique.png";
import namibiaFlag from "../Assets/namibia.png";
import nigeriaFlag from "../Assets/nigeria.png";
import rawandaFlag from "../Assets/rawanda.png";
import senegalFlag from "../Assets/senegal.png";
import somaliaFlag from "../Assets/somalia.png";
import southAfricaFlag from "../Assets/southafrica.png";
import southSudanFlag from "../Assets/southsudan.png";
import tanzaniaFlag from "../Assets/tanzania.png";
import ugandaFlag from "../Assets/uganda.png";
import zambiaFlag from "../Assets/zambia.png";
import zimbabweFlag from "../Assets/zimbabwe.png";
import { HiSearch } from "react-icons/hi";
import listicon from "../Assets/listicon.png";

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(namibiaFlag);

  // Array of country objects with name and flag
  const countries = [
    { name: "Angola", flag: angolaFlag },
    { name: "Botswana", flag: BotswanaFlag },
    { name: "Cameroon", flag: cameroonFlag },
    { name: "DRC", flag: drcFlag },
    { name: "Cote d'Ivoire", flag: coteDivorieFlag },
    { name: "Eswatini", flag: eswatiniFlag },
    { name: "Ethiopia", flag: ethiopiaFlag },
    { name: "Ghana", flag: ghanaFlag },
    { name: "Kenya", flag: kenyaFlag },
    { name: "Lesotho", flag: lesothoFlag },
    { name: "Malawi", flag: malawiFlag },
    { name: "Mozambique", flag: mozambiqueFlag },
    { name: "Namibia", flag: namibiaFlag },
    { name: "Nigeria", flag: nigeriaFlag },
    { name: "Rwanda", flag: rawandaFlag },
    { name: "Senegal", flag: senegalFlag },
    { name: "Somalia", flag: somaliaFlag },
    { name: "South Africa", flag: southAfricaFlag },
    { name: "South Sudan", flag: southSudanFlag },
    { name: "Tanzania", flag: tanzaniaFlag },
    { name: "Uganda", flag: ugandaFlag },
    { name: "Zambia", flag: zambiaFlag },
    { name: "Zimbabwe", flag: zimbabweFlag },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectFlag = (flag) => {
    setSelectedFlag(flag);
    setIsOpen(false);
  };

  return (
    <div className="font-Inter px-2 py-4 ">
      <div className="flex justify-between mb-2">
        <div>
          <h1 className="font-semibold text-[16px] md:text-[24px]">
            Welcome to Farmnet
          </h1>
          <h1 className="text-[12px] md:text-[20px]">
            Here is how to manage your website
          </h1>
        </div>
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={selectedFlag}
              alt="selected country"
              className="w-8 h-8 md:w-[48px] md:h-[45px] mr-2"
            />
            <IoMdArrowDropdown size={20} />
          </div>

          {isOpen && (
            <div className="absolute top-10 -left-16 w-40 bg-white border rounded shadow-lg z-10">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectFlag(country.flag)}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-8 h-8 mr-2"
                  />
                  <span>{country.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center space-x-0 md:space-x-12 flex-col lg:flex-row lg:justify-between">
        <div className="flex justify-between w-full">
          <h1 className="font-semibold text-[24px]">Namibia</h1>

          {/* Watch List */}
          <a href="/admin/countries-page">
            <div className="flex items-center space-x-2">
              <img
                src={listicon}
                alt="listicon"
                className="w-[30px] h-[31px]"
              />
              <h1 className="font-semibold text-[16px] text-[#979797]">
                Watch List
              </h1>
            </div>
          </a>
        </div>

        {/* Search Input */}
        <div className="flex flex-col w-full lg:w-auto gap-4 lg:gap-0  ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full md:w-[622px] md:h-[57px] text-[#919291] md:text-[15px] font-medium p-3 pr-10 border-[3px] border-[#D9D9D9] rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <HiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
