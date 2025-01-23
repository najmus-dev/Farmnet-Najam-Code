import React from "react";
import namibiaFlag from "../Assets/namibia.png";
import downloadIcon from "../Assets/downloadicon.png";
import editIcon from "../Assets/editicon.png";
import southAfricaFlag from "../Assets/southafrica.png";
import zambiaFlag from "../Assets/zambia.png";
import kenyaFlag from "../Assets/kenya.png";
import lesothoFlag from "../Assets/lesotho.png";
import zimbabweFlag from "../Assets/zimbabwe.png";
import Header2 from "./Header2";

const OverviewCard = ({ title, flag, stats }) => (
  <div className="w-full max-w-[480px] h-auto font-Inter rounded-md p-4 flex flex-col justify-between bg-[#EDF0EF]">
    {/* Header */}
    <div className="flex items-center justify-between">
      <h2 className="text-[20px] md:text-[24px] font-semibold">{title}</h2>
      <img
        src={flag}
        alt={`${title} Flag`}
        className="w-[40px] h-[38px] md:w-[48px] md::h-[45px] object-cover"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col space-y-1 mt-4 text-[12px] md:text-[16px] font-semibold">
      {stats.map((stat, index) => (
        <div key={index} className="flex justify-between">
          <span className="bg-[#FAFBFB] px-2 md:px-4 py-2 w-[60%] md:w-[269px] h-[38px]">
            {stat.label}
          </span>
          <span className="bg-[#F3F5F5] px-2 md:px-4 py-2 w-[40%] md:w-[181px] h-[38px]">
            {stat.value}
          </span>
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="flex flex-wrap justify-end space-x-8 mt-2 mr-6">
      <div className="flex items-center space-x-1">
        <img src={editIcon} alt="Edit Icon" className="w-[15px] h-[13px]" />
        <button className="text-[12px] font-bold hover:underline">Edit</button>
      </div>
      <div className="flex items-center space-x-1">
        <img
          src={downloadIcon}
          alt="Download Icon"
          className="w-[15px] h-[12px]"
        />
        <button className="text-[12px] font-bold hover:underline">Save</button>
      </div>
    </div>
  </div>
);

const OverviewGrid = () => {
  const data = [
    {
      title: "Namibia",
      flag: namibiaFlag,
      stats: [
        { label: "GDP", value: "USD 12.35B" },
        { label: "Agriculture Revenue (5%)", value: "USD 12.35B" },
        { label: "Farmers", value: "100,000" },
      ],
    },
    {
      title: "South Africa",
      flag: southAfricaFlag,
      stats: [
        { label: "GDP", value: "USD 12.35B" },
        { label: "Agriculture Revenue (5%)", value: "USD 12.35B" },
        { label: "Farmers", value: "100,000" },
      ],
    },
    {
      title: "Zambia",
      flag: zambiaFlag,
      stats: [
        { label: "GDP", value: "USD 12.35B" },
        { label: "Agriculture Revenue (5%)", value: "USD 12.35B" },
        { label: "Farmers", value: "100,000" },
      ],
    },
    {
      title: "Kenya",
      flag: kenyaFlag,
      stats: [
        { label: "GDP", value: "USD 12.35B" },
        { label: "Agriculture Revenue (5%)", value: "USD 12.35B" },
        { label: "Farmers", value: "100,000" },
      ],
    },
    {
      title: "Lesotho",
      flag: lesothoFlag,
      stats: [
        { label: "GDP", value: "USD 12.35B" },
        { label: "Agriculture Revenue (5%)", value: "USD 12.35B" },
        { label: "Farmers", value: "100,000" },
      ],
    },
    {
      title: "Zimbabwe",
      flag: zimbabweFlag,
      stats: [
        { label: "GDP", value: "USD 12.35B" },
        { label: "Agriculture Revenue (5%)", value: "USD 12.35B" },
        { label: "Farmers", value: "100,000" },
      ],
    },
  ];

  return (
    <div className="px-4 md:px-6">
      <Header2 />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3 mb-4">
        {data.map((item, index) => (
          <OverviewCard
            key={index}
            title={item.title}
            flag={item.flag}
            stats={item.stats}
          />
        ))}
      </div>
    </div>
  );
};

export default OverviewGrid;
