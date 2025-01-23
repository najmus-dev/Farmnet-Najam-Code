import React, { useState } from "react";
import profile from "../Assets/profile.png";
import record from "../Assets/record.png";
import catalogues from "../Assets/catalogues.png";

import invoice from "../Assets/invoice.png";
import scanner from "../Assets/scanner.png";
import eyes from "../Assets/eyes.png";
import funding from "../Assets/funding.png";
import provider from "../Assets/provider.png";
import market from "../Assets/market.png";
import Profile from "./Profile";
import Reward from "./Reward";
import comment from "../Assets/comment.png";
import community from "../Assets/community.png";
import reward from "../Assets/reward.png";
import contract from "../Assets/contract.png";
import Records from "./Records";
import Invoice from "./Invoice";
import Community from "./Community";
import Catalogues from "./Catalogues";
import Slider from "react-slick";
import Scanner from "./Scanner";
import Funding from "./Funding";
import ServiceProvider from "./ServiceProvider";
import Contract from "./Contract";
import Market from "./Market";

const ServiceCard = ({ image, title, description, link, onClick }) => (
  <a href={link}>
    <div onClick={onClick} className=" cursor-pointer ">
      <div className="overflow-hidden font-Inter ">
        <div className=" relative ">
          <div className="bg-[#EDF0EF] w-[461px] h-32 md:w-[691px] md:h-[207px] rounded-t-md">
            <div className="text-black sm:w-80 md:w-[491px] sm:h-80 md:h-[72px] p-2 md:p-4">
              <h1 className="font-bold mb-1 md:mb-2 text-[18px] md:text-[32px]">
                <a to={link} className="hover:underline">
                  {title}
                </a>
              </h1>
              <p className="text-md md:text-[20px] pr-48 md:pr-0 text-[10px] font-Inter leading-[150%] break-words">
                {description}
              </p>
            </div>
          </div>
          <div className="bg-[#CFD7D7] w-[461px] h-[62px] sm:w-20 md:w-[691px] sm:h-100 md:h-[72px] p-2 md:p-2">
            <div className="flex  items-center lg:text-xl  text-[12px] lg:leading-[150%] font-semibold text-white">
              <span className="lg:mr-2 lg:ml-4">231 Views</span>
              <img
                src={eyes}
                alt="views icon"
                className="lg:w-[23px] lg:h-6 h-3 w-[14px] lg:ml-4 ml-2 "
              />

              <span className="lg:ml-[92px] ml-3 ">17 Comments</span>
              <img
                src={comment}
                alt="comments icon"
                className=":lg:w-[23px] lg:h-6 h-3 w-[18px] lg:ml-4 ml-2 "
              />
            </div>
          </div>

          <div className="absolute bottom-2 flex justify-end items-start inset-0 p-2">
            <img
              src={image}
              alt={title}
              className="h-[150px] sm:h-[180px] md:h-[250px] absolute bottom-2 lg:h-[250px] md:mr-10 w-auto object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  </a>
);

export default function ServicesPage() {
  const [selectedSection, setSelectedSection] = useState("crops");
  const [selectedCard, setSelectedCard] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "15px",
        },
      },
    ],
  };

  const cardData = [
    {
      image: profile,
      title: "Profile",
      description:
        "Farmer's Basic Information, Farm Details," +
        "Experience & Expertise, Farming Practices, Products and Services, along with Reviews and Ratings",
      detailsComponent: <Profile />,
    },
    {
      image: record,
      title: "Records",
      description:
        "Farmers can easily log essential data in real-time, capturing key details about their farming activities directly through the app.",

      detailsComponent: <Records />,
    },
    {
      image: invoice,
      title: "Invoice",
      description:
        "Farmers can create invoices, quotations, and delivery notes, while also tracking payments and financial transactions",

      detailsComponent: <Invoice />,
    },
    {
      image: catalogues,
      title: "Catalogues",
      description:
        "Farmers receive comprehensive catalogs showcasing the produce and services they offer, which can also be used for marketing purposes",

      detailsComponent: <Catalogues />,
    },
    {
      image: scanner,
      title: "Resource - scanner",
      description:
        "Farmers can scan their crops or livestock for diseases, receive diagnoses, and manage the treatment or prevention of these diseases",

      detailsComponent: <Scanner />,
    },
    {
      image: funding,
      title: "Resource - funding",
      description: "Users can apply for funding",

      detailsComponent: <Funding />,
    },
    {
      image: provider,
      title: "Service provider",
      description:
        "User goes to service providers categories , vies providers profiles and selects the preferred service provider to use.",

      detailsComponent: <ServiceProvider />,
    },
    {
      image: market,
      title: "Market",
      description:
        "User updates profile with produce or services they offer. The produce are displayed on the market",

      detailsComponent: <Market />,
    },
    {
      image: contract,
      title: "Contract",
      description:
        "Click on user goes to contract , then to categories, views & selects desired contracts. Request to join contracts.",

      detailsComponent: <Contract />,
    },
    {
      image: community,
      title: "Community",
      description:
        "Farmers can join app-based communities, where they can share knowledge, resources, and best practices with peers, fostering collaboration and collective growth.",

      detailsComponent: <Community />,
    },

    {
      image: reward,
      title: "Rewards Program",
      description:
        "User goes to rewards. Checks the points that they have gained. Redeem points",

      detailsComponent: <Reward />,
    },
  ];
  return (
    <div className="font-Inter px-6 md:px-8">
      <div className="flex flex-col gap-4 lg:flex-row mb-12 items-center  md:mb-6"></div>

      <div className="flex flex-col  md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-8">
        <div
          className="w-full md:w-[50%] cursor-pointer"
          onClick={() => setSelectedSection("crops")}
        >
          <div className="flex justify-between mb-1">
            <p className="md:text-[24px] font-bold ml-2 mb-2">CROP</p>
          </div>
          <div className="h-[9px] rounded-md overflow-hidden bg-[#D9D9D9]">
            <div
              className={`h-[9px] rounded-md bg-[#114918] ${
                selectedSection === "crops" ? "w-[100%]" : "w-[0%]"
              }`}
            ></div>
          </div>
        </div>

        <div
          className="w-full md:w-[50%] cursor-pointer"
          onClick={() => setSelectedSection("livestock")}
        >
          <div className="flex justify-between mb-1">
            <p className="md:text-[24px] font-bold ml-2 mb-2">LIVESTOCK</p>
          </div>
          <div className="h-[9px] rounded-md overflow-hidden bg-[#D9D9D9]">
            <div
              className={`h-[9px] rounded-md bg-[#114918] ${
                selectedSection === "livestock" ? "w-[100%]" : "w-[0%]"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-2  mb-8 md:flex-row md:gap-4 md:mb-0 mt-1">
        {/* Mobile App Div */}
        <div className=" bg-[#155528] border-[#979797] border-b-[3px] rounded-md p-4 box-border w-full flex items-center justify-center">
          <b className="text-white text-center text-sm md:text-[24px]">
            MOBILE APP
            <br />
            <span className="text-xs md:text-[20px] font-normal  text-white">
              Demos
            </span>
          </b>
        </div>

        {/* Farming Div */}
        <div className="bg-[#CFD7D7] border-[#979797] border-b-[3px] rounded-md p-4 box-border w-full flex items-center justify-center">
          <b className="text-[#000]  text-center text-sm md:text-[24px]">
            FARMING
            <br />
            <span className="text-xs md:text-[20px] font-normal  text-[#000] ">
              Demos
            </span>
          </b>
        </div>

        {/* Placeholder Div */}
        <div className="bg-[#CFD7D7] border-[#979797] border-b-[3px] rounded-md p-4 box-border w-full flex items-center justify-center">
          <b className="text-[#000] text-center text-sm md:text-base lg:text-4xl">
            -<br />
            <span className="text-xs sm:text-sm font-semibold text-[#000]"></span>
          </b>
        </div>
      </div>

      <div className=" flex justify-between items-center mt-3 md:mt-8">
        <h1 className="text-2xl md:text-[32px] font-bold ">Select demo</h1>
        <button className="text-[#919291] font-bold text-md md:text-[32px] leading-[120%] cursor-pointer">
          View More
        </button>
      </div>

      <div className="mt-4">
        <div className="slider-container ">
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div key={index} className="pr-4">
                {" "}
                <ServiceCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                  onClick={() => setSelectedCard(card)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {selectedCard && (
        <div className="mt-10">{selectedCard.detailsComponent}</div>
      )}
    </div>
  );
}
