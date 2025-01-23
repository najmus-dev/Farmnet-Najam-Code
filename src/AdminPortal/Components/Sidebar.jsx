import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";
import leftarrow from "../Assets/leftarrow.png";
import settingsicon from "../Assets/settingsicon.png";

const Sidebar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "User Accounts", path: "/admin/user-account" },
    { label: "Dashboards", path: "/admin/dashboards" },
    { label: "Top Banner", path: "/admin/top-banner-main-page" },
    { label: "About us", path: "/admin/about-us-main-page" },
    { label: "Services", path: "/admin/services-main-page" },
    { label: "News", path: "news-main-page" },
    { label: "Voice of Farmers", path: "/admin/voice-of-farmaers-main-page" },
    { label: "Reports", path: "/admin/reports" },
    { label: "Communities", path: "/admin/communities" },
    { label: "Resources", path: "/admin/resources-main-page" },
    { label: "Gallery", path: "/admin/gallery" },
  ];

  return (
    <div>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-[#FAFBFB] p-4 border-b-[4px] border-[#EDF0EF]">
        <img src={logo} alt="logo" className="w-[120px] h-auto" />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {/* Menu Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar for larger screens */}
      <div className="bg-[#FAFBFB] hidden md:block h-full font-Inter border-r-[4px] border-[#EDF0EF]">
        <div className="p-4 flex justify-between">
          <img src={logo} alt="logo" className="w-[168px] h-[41px]" />
          <img src={leftarrow} alt="leftarrow" />
        </div>

        <nav className="py-6 flex flex-col w-full px-4">
          <a href="/admin/overview">
            <h1 className="text-[24px] font-semibold mb-2">Overview</h1>
          </a>

          {navItems.slice(0, 2).map((item, index) => (
            <a key={index} href={item.path}>
              <h1
                className={`text-[20px] font-semibold rounded-md p-4 mb-2 md:h-[65px] ${
                  location.pathname === item.path
                    ? "bg-[#155528] text-white"
                    : "bg-[#EDF0EF] text-black hover:bg-[#155528] hover:text-white"
                }`}
              >
                {item.label}
              </h1>
            </a>
          ))}

          <h1 className="text-[24px] font-semibold mb-2">Navigation</h1>

          {navItems.slice(2).map((item, index) => (
            <a key={index + 2} href={item.path}>
              <h1
                className={`text-[20px] font-semibold rounded-md p-4 mb-2 md:h-[65px] ${
                  location.pathname === item.path
                    ? "bg-[#155528] text-white"
                    : "bg-[#EDF0EF] text-black hover:bg-[#155528] hover:text-white"
                }`}
              >
                {item.label}
              </h1>
            </a>
          ))}

          <div className="flex items-center mt-4">
            <img src={settingsicon} alt="settingsicon" className="mr-4" />
            <h1 className="text-[24px] font-semibold">Settings</h1>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 w-2/3 h-full bg-[#FAFBFB] shadow-lg p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 focus:outline-none mb-4"
            >
              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="flex flex-col">
              <a
                href="/admin/overview"
                className="text-[24px] font-semibold mb-4"
              >
                Overview
              </a>

              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className={`text-[20px] font-semibold rounded-md p-4 mb-2 ${
                    location.pathname === item.path
                      ? "bg-[#155528] text-white"
                      : "bg-[#EDF0EF] text-black hover:bg-[#155528] hover:text-white"
                  } md:h-[65px]`}
                >
                  {item.label}
                </a>
              ))}

              <div className="flex items-center mt-4">
                <img src={settingsicon} alt="settingsicon" className="mr-4" />
                <h1 className="text-[24px] font-semibold">Settings</h1>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
