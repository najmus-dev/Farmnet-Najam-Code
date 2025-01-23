import React from "react";
import playbtn from "../Assets/playbtn.png";
import invoice from "../Assets/invoice.png";
import logo2 from "../Assets/logo2.png";
import rect from "../Assets/rect.png";

const Invoice = () => {
  return (
    <>
      <div className="p-5 top-[180px] font-Inter text-base md:text-xl">
        <h2 className="font-bold text-2xl lg:text-[32px] leading-[150%]">
          Invoicing
        </h2>
        <div className="mt-2">
          <p className="lg:text-[32px] leading-[150%] ">
            Farmers can create invoices, quotations, and delivery notes, while
            also tracking <br />
            payments and financial transactions
          </p>
        </div>
        <div className="mt-6">
          <p className="font-bold lg:text-[32px] leading-[150%]">
            How to Invoice
          </p>
          <p className="mt-2 lg:text-[32px] leading-[150%]">
            Click play to watch video
          </p>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex items-center w-[97%] mx-auto  justify-center relative bg-[#9FAFAF]">
          <img
            src={invoice}
            alt="service11"
            className="md:w-[425px] md:h-[834px]  mt-6 md:mt-2 mb-6 md:mb-2"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={playbtn}
              alt="play button"
              className="w-10 h-10 md:w-[133px] md:h-[133px]"
            />
          </div>
          <img
            src={logo2}
            alt="service11"
            className="absolute left-2 bottom-2 w-[50px] sm:w-[98px] md:w-[208px] h-auto"
          />
        </div>
      </div>
      <div className="p-6 top-[105px] font-Inter text-base md:text-xl">
        <h2 className="font-bold text-2xl lg:text-[32px] leading-[150%]">
          How to
        </h2>
        <div className="mt-2">
          <p className="lg:text-[32px] leading-[150%]">
            User goes to Enterprise and under Money, clicks on Invoice. Enters
            items to be invoiced
            <br /> and price.
          </p>
        </div>

        <h2 className="font-bold mt-4 lg:text-[32px] leading-[150%] text-2xl  border-[#979797] border-b-[2px]">
          Benefits
        </h2>
        <p className="mt-2 lg:text-[32px] leading-[150%]">Make own invoices</p>
        <p className="mt-2 lg:text-[32px] leading-[150%]">Track Payments</p>
        <p className="mt-2 lg:text-[32px] leading-[150%] ">
          Manage money better
        </p>
      </div>

      <div className="p-6 font-Inter text-base md:text-xl flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="font-bold mb-4 text-2xl lg:text-[32px] leading-[150%]">
            Rewards Program
          </h2>
          <p className="mt-6 lg:text-[32px] leading-[150%]">
            Gain points by updating your profile.
          </p>
          <p className="mt-2 lg:text-[32px] leading-[150%]">
            Redeem goods & services out of the points gained
          </p>
        </div>
        <div className="flex flex-col items-end">
          <img
            src={rect}
            alt="Rewards"
            className="md:w-92 md:h-32 object-cover"
          />
          <p className="mt-2 text-sm md:text-[20px] whitespace-nowrap text-[#919291]">
            View rewards program
          </p>
        </div>
      </div>
    </>
  );
};

export default Invoice;
