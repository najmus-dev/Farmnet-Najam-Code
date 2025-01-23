import React from "react";

const GridHeader = ({ months }) => {
  return (
    <div className="grid grid-cols-6 w-full font-semibold text-xs md:text-[16px] gap-x-1">
      {months.map((month, index) => (
        <div key={index} className="px-4 py-2 text-center">
          {month}
        </div>
      ))}
    </div>
  );
};

const DataRow = ({ data }) => {
  return (
    <div className="grid grid-cols-6 w-full font-semibold text-xs md:text-[16px] gap-x-1">
      {data.map((value, index) => (
        <div
          key={index}
          className="bg-[#EDF0EF] md:w-full md:h-[37px] md:p-4 p-2 text-center rounded-sm"
        >
          {value}
        </div>
      ))}
    </div>
  );
};

// The main dashboard component
const DashboardData = () => {
  // Shared data for all sections
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const productionData = [
    "24,000",
    "24,000",
    "24,000",
    "24,000",
    "24,000",
    "24,000",
  ];
  const revenueData = [
    "15,000",
    "20,000",
    "18,000",
    "22,000",
    "19,000",
    "25,000",
  ];
  const farmerData = ["500", "600", "550", "650", "580", "620"];

  return (
    <div className="w-full  md:px-4">
      {/* Section for Production */}
      <h1 className="text-[16px] font-bold ">Production</h1>
      <GridHeader months={months} />
      <DataRow data={productionData} />
      {/* Section for Revenue */}
      <h1 className="text-[16px] font-bold mt-2">Revenue</h1>
      <GridHeader months={months} />
      <DataRow data={revenueData} />
      {/* Section for Farmers */}
      <h1 className="text-[16px] font-bold mt-2">Farmers</h1>
      <GridHeader months={months} />
      <DataRow data={farmerData} />
      {/* Comment */}
      <div className="mt-2">
        <h1 className="text-[16px] font-bold">Comments</h1>
        <p className="text-[12px] font-normal">
          In 2024, maize production in Namibia is projected to experience an
          increase of 2% compared to 2022 production
          <br className="md:block hidden" /> levels, with an annual production
          estimated at 3,834,618 metric tons.
        </p>
      </div>
    </div>
  );
};

export default DashboardData;
