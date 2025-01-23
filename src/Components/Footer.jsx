import React from "react";
import footer1 from "../Assets/footer1.png";
import footer2 from "../Assets/footer2.png";
import instabtn from "../Assets/insta-btn.png";
import ytbtn from "../Assets/yt-btn.png";
import tiktokbtn from "../Assets/tittok-btn.png";
import linkedinbtn from "../Assets/linkedin-btn.png";
import twiterbtn from "../Assets/twitter-btn.png";
import whatsappbtn from "../Assets/whatsapp-btn.png";
import fbbtn from "../Assets/fb-btn.png";

const Footer = () => {
  return (
    <footer className="bg-[#155528] text-white font-Inter w-full overflow-x-auto">
      <div className=" md:px-10 px-3 pt-12  text-white  flex md:items-center md:justify-center md:flex-row flex-col  space-x-2">
        {/* Updates Section */}
        <div className=" md:mr-4">
          <h2 className="font-bold text-sm md:text-[20px] mb-4">
            IF YOU WANT UPDATES, STAY CONNECTED
          </h2>
          <h1 className="text-[16px]">Emails</h1>
          <form className="mt-2 flex items-center ">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-1 md:p-4 w-[156px] h-[46px] md:w-[260px] md:h-[68px] text-xs md:text-base bg-white text-black outline-none"
            />
            <button className="p-1 md:p-4 text-xs md:text-base text-start w-[160px] h-[46px] md:w-[340px] md:h-[68px] bg-[#8EC543] hover:bg-[#6e9933]">
              Enter your email address
            </button>
          </form>

          <p className="text-xs md:text-[18px] mt-2 leading-6">
            The privacy statement holds information on the involved data and
            rights
            <br className="md:block hidden" /> to withdraw consent.
          </p>
        </div>

        {/* Links Section */}
        <div className="mt-4 md:mt-0 md:pr-6 flex flex-col  ">
          <h2 className="font-bold text-[16px]  md:text-[22px] md:mb-4">
            LINKS
          </h2>
          <ul className="md:space-y-1 text-[12px] md:text-[18px]">
            <li>
              <a href="/terms-and-conditions" className="hover:underline">
                Terms and conditions
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="/data-policy" className="hover:underline">
                Data Policy
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:underline whitespace-nowrap">
                Frequently asked questions
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Recent News Section  */}
        <div className="mt-4 md:mt-0 pr-20">
          <h2 className="font-bold text-[20px] mb-2 md:mb-4">RECENT NEWS</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <img src={footer1} alt="news-1" className="w-24 h-16 rounded" />
              <div className="flex-1">
                <p className="text-sm font-normal leading-4">
                  November 21, 2024
                </p>
                <p className="text-xs md:text-[15px] leading-4 font-medium mt-1 whitespace-nowrap ">
                  Technology and enterprise development.
                </p>
                <p className="text-xs md:text-[15px] leading-4 mt-1 whitespace-nowrap">
                  Successful Tomato farming using
                  <br className="block md:hidden" /> SMART Farming techniques.
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <img src={footer2} alt="news-2" className="w-24 h-16 rounded" />
              <div className="flex-1">
                <p className="text-sm font-normal leading-4">
                  November 21, 2024
                </p>
                <p className="text-xs md:text-[15px] leading-4 font-medium mt-1 whitespace-nowrap">
                  Technology and enterprise development.
                </p>
                <p className="text-xs md:text-[15px] leading-4 mt-1 whitespace-nowrap">
                  Successful chicken farming using
                  <br className="block md:hidden" /> SMART Farming techniques.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-3  max-w-[95%] mx-auto"></div>

      {/* Socials Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:mb-6 max-w-full px-4 md:px-12 py-2 md:py-3 mt-2 md:mt-6 ">
        <div className="flex flex-wrap justify-center md:justify-start items-center space-x-2 md:space-x-12 ">
          <a href="#">
            <img src={fbbtn} alt="fbbtn" />
          </a>
          <a href="#">
            <img src={instabtn} alt="instabtn" />
          </a>
          <a href="#">
            <img src={tiktokbtn} alt="tiktokbtn" />
          </a>
          <a href="#">
            <img src={ytbtn} alt="ytbtn" />
          </a>
          <a href="#">
            <img src={linkedinbtn} alt="linkedinbtn" />
          </a>
          <a href="#">
            <img src={twiterbtn} alt="twiterbtn" />
          </a>
          <a href="#">
            <img src={whatsappbtn} alt="whatsappbtn" />
          </a>
        </div>

        <div className="text-center text-sm md:text-[20px] font-bold text-white mt-2 mb-2 md:mt-0">
          @Farmnet 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
