import { useState, useEffect, useRef } from "react";
import { MdArrowDropDown } from "react-icons/md";
import adminicon from "../Assets/adminicon.png";

const UserAccountHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAdminLevel, setSelectedAdminLevel] = useState("Admin Level 5");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // List of all admin levels
  const adminLevels = [
    "Admin Level 1",
    "Admin Level 2",
    "Admin Level 3",
    "Admin Level 4",
    "Admin Level 5",
  ];

  // Close dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Handle selecting an admin level
  const handleAdminLevelSelect = (level) => {
    setSelectedAdminLevel(level); // Update selected level
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="font-Inter bg-[#FAFBFB] mt-0 w-full border-b-[4px] border-[#EDF0EF]">
      <div className="flex flex-wrap md:flex-row space-x-2 px-4 md:px-6 py-4 w-full">
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
          Providers
        </h1>
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
          Offtake
        </h1>
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
          Development
        </h1>
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
          Investors
        </h1>
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
          Institutions
        </h1>
        <h1 className="text-[15px] font-medium bg-[#F3F5F5] rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
          Community
        </h1>
        {/* Admin level dropdown */}
        <div className="relative" ref={dropdownRef}>
          <h1
            className="text-[20px] font-medium rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto cursor-pointer"
            onClick={toggleDropdown}
          >
            {selectedAdminLevel} {/* Display selected admin level */}
            <MdArrowDropDown className="inline ml-2" />
          </h1>

          {isOpen && (
            <div
              className="absolute left-0 mt-2 w-full bg-[#EBEBEB] shadow-lg rounded-md p-2"
              onMouseLeave={() => setIsOpen(false)} // Close on mouse leave
            >
              <ul>
                {adminLevels
                  .filter((level) => level !== selectedAdminLevel) // Exclude the selected admin level
                  .map((level) => (
                    <li
                      key={level}
                      className="flex items-center p-2 hover:bg-[#AFAFAF] cursor-pointer"
                      onClick={() => handleAdminLevelSelect(level)} // Update when clicked
                    >
                      <img
                        src={adminicon}
                        alt="Admin Icon"
                        className="w-5 h-5 mr-2"
                      />
                      {level}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAccountHeader;
