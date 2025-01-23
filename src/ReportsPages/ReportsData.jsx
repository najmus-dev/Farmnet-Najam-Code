import React from "react";

const ReportsData = () => {
  return (
    <div className="font-Inter text-center text-xs md:text-[26px] md:font-normal overflow-x-auto">
      {/*  table */}
      {/* grid  1*/}
      <div className="grid grid-cols-8 font-bold text-xs md:text-[30px] ">
        {/* header  */}
        <div className="col-span-2"></div>
        <div className=" px-4 py-2 ">Jan</div>
        <div className=" px-4 py-2 ">Feb</div>
        <div className=" px-4 py-2 ">Mar</div>
        <div className=" px-4 py-2 ">Apr</div>
        <div className=" px-4 py-2 ">May</div>
        <div className=" px-4 py-2 ">Jun</div>
      </div>
      {/* grid  2*/}
      <div className="grid grid-cols-8 grid-rows-2 gap-y-3 md:gap-y-6 ">
        {/* row 1*/}
        <div className="col-span-2 md:text-start bg-[#FAFBFB] md:w-[325px] md:h-[43px]  md:p-4 p-2 md:pl-8  row-start-1 ">
          Production
        </div>
        <div className="bg-[#F7FFF8] md:w-[171] md:h-[43px] md:p-4 p-1">
          7800t
        </div>
        <div className="bg-[#E3F9E9] md: w-[171] md:h-[43px] md:p-4 p-1">
          8800t
        </div>
        <div className="bg-[#F7FFF8] md:w-[171] md:h-[43px] md:p-4 p-1">
          9800t
        </div>
        <div className="bg-[#E3F9E9] md:w-[171] md:h-[43px] md:p-4 p-1">
          7800t
        </div>
        <div className="bg-[#F7FFF8] md:w-[171] md:h-[43px] md:p-4 p-1">
          8800t
        </div>
        <div className="bg-[#E3F9E9] md:w-[171] md:h-[43px] md:p-4 p-1">
          7800t
        </div>
        {/* row 2*/}
        <div className="col-span-2 md:text-start bg-[#FAFBFB] md:w-[325px] md:h-[43px] md:p-4 p-2 md:pl-8 row-start-2">
          Revenue
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">
          $2300
        </div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">
          $2460
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">
          $2550
        </div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">
          $2610
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">
          $2420
        </div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">
          $2360
        </div>
      </div>
      {/* grid  3*/}
      <div className="grid grid-cols-8 grid-rows-3 gap-y-1 mt-3 md:mt-6">
        {/* row 3*/}
        <div className="col-span-2 md:text-start bg-[#FAFBFB] md:w-[325px] md:h-[43px] md:p-4 p-2 md:pl-8 row-start-1">
          Inputs
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">
          $1700
        </div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">
          $1800
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">
          $1900
        </div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">
          $2000
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">
          $2100
        </div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">
          $2000
        </div>
        {/* row 4*/}
        <div className="col-span-2 md:text-start bg-[#FAFBFB] md:w-[325px] md:h-[43px] md:p-4 p-2 md:pl-8 row-start-2">
          Cost / Kg
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">
          $1.5
        </div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">
          $1.5
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">
          $1.5
        </div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">
          $1.5
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">
          $1.5
        </div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">
          $1.5
        </div>
        {/* row 5*/}
        <div className="col-span-2 md:text-start bg-[#FAFBFB] md:w-[325px] md:h-[43px] md:p-4 p-2 md:pl-8 row-start-3">
          Price / Kg
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">$2</div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">$2</div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">$2</div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">$2</div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">$2</div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">$2</div>
      </div>
      {/* grid 4 */}
      <div className="grid grid-cols-8 grid-rows-3 gap-y-1 mt-3 md:mt-6">
        {/* row 6 */}
        <div className="col-span-2 md:text-start bg-[#FAFBFB] md:w-[325px] md:h-[43px] md:p-4 p-2 md:pl-8 row-start-1">
          Farmers
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">
          210
        </div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">
          210
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">
          210
        </div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">
          210
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">
          210
        </div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">
          210
        </div>
        {/* row 7*/}
        <div className="col-span-2 md:text-start bg-[#FAFBFB] md:w-[325px] md:h-[43px] md:p-4 p-2 md:pl-8 row-start-2">
          Providers
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">32</div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">32</div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">32</div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">32</div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">32</div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">32</div>
        {/* row 8*/}
        <div className="col-span-2 md:text-start bg-[#FAFBFB] md:w-[325px] md:h-[43px] md:p-4 p-2 md:pl-8 row-start-3">
          Offtake Partners
        </div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">32</div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">32</div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">32</div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">32</div>
        <div className="bg-[#F3F5F5] md:w-[171] md:h-[43px] md:p-4 p-1">32</div>
        <div className="bg-[#EDF0EF] md:w-[171] md:h-[43px] md:p-4 p-1">32</div>
      </div>
    </div>
  );
};

export default ReportsData;
