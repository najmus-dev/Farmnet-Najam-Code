import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.png";
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(namibiaFlag);

  // State to track the currently selected menu item
  const [selectedMenu, setSelectedMenu] = useState(() => {
    // Retrieve the selected menu item from local storage or default to "Home"
    return localStorage.getItem("selectedMenu") || "Home";
  });

  // Function to handle menu item click
  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem);
    localStorage.setItem("selectedMenu", menuItem);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFlagSelect = (flag) => {
    setSelectedFlag(flag);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    // Ensure selectedMenu is retrieved from local storage on mount
    const savedMenu = localStorage.getItem("selectedMenu");
    if (savedMenu) {
      setSelectedMenu(savedMenu);
    }
  }, []);

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

  return (
    <nav className="bg-white py-4">
      <div className="flex items-center  justify-between space-x-20 px-2">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-[42px] w-[160px]" />
        </div>

        {/* Menu items */}
        <div className="hidden md:flex  space-x-2 font-Inter items-center justify-center text-center font-semibold">
          <a
            href="/"
            className={`p-2 text-[18px] h-[40px] w-[157px] rounded-md ${
              selectedMenu === "Home"
                ? "bg-[#155528] text-white"
                : "bg-[#F3F5F5] hover:bg-green-900 hover:text-white"
            }`}
            onClick={() => handleMenuClick("Home")}
          >
            Home
          </a>
          <a
            href="/solutios-page"
            className={`p-2 text-[18px] h-[40px] w-[157px] rounded-md ${
              selectedMenu === "Services"
                ? "bg-[#155528] text-white"
                : "bg-[#F3F5F5] hover:bg-green-900 hover:text-white"
            }`}
            onClick={() => handleMenuClick("Services")}
          >
            Solutions
          </a>
          <a
            href="/ReportPage"
            className={`p-2 text-[18px] h-[40px] w-[157px] rounded-md ${
              selectedMenu === "Reports"
                ? "bg-[#155528] text-white"
                : "bg-[#F3F5F5] hover:bg-green-900 hover:text-white"
            }`}
            onClick={() => handleMenuClick("Reports")}
          >
            Reports
          </a>
          <a
            href="/communities"
            className={`p-2 text-[18px] h-[40px] w-[157px] rounded-md ${
              selectedMenu === "Communities"
                ? "bg-[#155528] text-white"
                : "bg-[#F3F5F5] hover:bg-green-900 hover:text-white"
            }`}
            onClick={() => handleMenuClick("Communities")}
          >
            Communities
          </a>
          <a
            href="/resources-main-page"
            className={`p-2 text-[18px] h-[40px] w-[157px] rounded-md ${
              selectedMenu === "Resources"
                ? "bg-[#155528] text-white"
                : "bg-[#F3F5F5] hover:bg-green-900 hover:text-white"
            }`}
            onClick={() => handleMenuClick("Resources")}
          >
            Resources
          </a>
          <a
            href="/gallery"
            className={`p-2 text-[18px] h-[40px] w-[157px] rounded-md ${
              selectedMenu === "Gallery"
                ? "bg-[#155528] text-white"
                : "bg-[#F3F5F5] hover:bg-green-900 hover:text-white"
            }`}
            onClick={() => handleMenuClick("Gallery")}
          >
            Gallery
          </a>
          <a
            href="login"
            className={`p-2 text-[18px] h-[40px] w-[157px] rounded-md ${
              selectedMenu === "Login"
                ? "bg-[#155528] text-white"
                : "bg-[#F3F5F5] hover:bg-green-900 hover:text-white"
            }`}
            onClick={() => handleMenuClick("Login")}
          >
            Log-In App
          </a>
          <div className="relative">
            {/* Navbar Button with Selected Flag */}
            <button
              onClick={toggleDropdown}
              className="hover:text-green-900 flex items-center"
            >
              <img
                src={selectedFlag}
                alt="Selected Flag"
                className="h-[46px] w-[50px] ml-4"
              />
              <IoMdArrowDropdown className="" size={20} />
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                {countries.map((country, index) => (
                  <button
                    key={index}
                    onClick={() => handleFlagSelect(country.flag)}
                    className="flex items-center px-4 py-2 text-black hover:bg-gray-200 w-full"
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="h-6 w-8 mr-2"
                    />
                    {country.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded bg-green-900 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-900 text-white">
          <a
            href="/"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => handleMenuClick("Home")}
          >
            Home
          </a>
          <a
            href="/solutios-page"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => handleMenuClick("Services")}
          >
            Solutions
          </a>
          <a
            href="/ReportPage"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => handleMenuClick("Reports")}
          >
            Reports
          </a>
          <a
            href="/communities"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => handleMenuClick("Communities")}
          >
            Communities
          </a>
          <a
            href="/resources-main-page"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => handleMenuClick("Resources")}
          >
            Resources
          </a>
          <a
            href="/gallery"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => handleMenuClick("Gallery")}
          >
            Gallery
          </a>
          <a
            href="#login"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => handleMenuClick("Login")}
          >
            Log-In App
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
