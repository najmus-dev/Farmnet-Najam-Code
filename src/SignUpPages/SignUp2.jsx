import React from "react";


function  SignUp2 ()  {
  return (
    <>
    
      <div className="w-full h-screen bg-[#155528] font-inter text-white">
       
        <div className="absolute top-30 px-4 mt-9 sm:top-11 sm:px-4 md:top-30 md:px-6 lg:top-28 lg:px-6">
          <h2 className="text-sm font-bold md:text-2xl lg:text-3xl">
            Get One - Time- Password (OTP)
          </h2>
          {/* <p className="text-xsm md:text-base mt-8 lg:text-xl italic leading-18">
            Please enter the 4-digit code sent to your email or
            <br/> SMS
          </p> */}
          <p className="text-xs md:text-base mt-8 lg:text-xl italic leading-relaxed">
  Please enter the 4-digit code sent to your email or
  <br /> SMS
</p>

        </div>

       
        <div className="absolute md:top-[241px] mt-12 md:left-[9px] left-[12px] md:flex md:justify-start sm:justify-center flex justify-start top-[201px] gap-2 md:gap-6 lg:gap-8 px-2 w-full">
          <input
            type="number"
            required
            maxLength={1}
            placeholder="1"
            className="bg-[#489B15] text-center px-4 py-2 md:w-[18px] md:h-[88px] w-14 h-16 lg:w-36 lg:h-24"
          />
          <input
            type="number"
            required
            maxLength={1}
            placeholder="4"
            className="bg-[#489B15] text-center px-4 py-2 w-16 h-16 md:w-20 md:h-20 lg:w-36 lg:h-24"
          />
          <input
            type="number"
            required
            maxLength={1}
            placeholder="9"
            className="bg-[#489B15] text-center px-4 py-2 w-16 h-16 md:w-20 md:h-20 lg:w-36 lg:h-24"
          />
          <input
            type="number"
            required
            maxLength={1}
            placeholder="1"
            className="bg-[#489B15] text-center px-4 py-2 w-16 h-16 md:w-20 md:h-20 lg:w-36 lg:h-24"
          />
        </div>

        <div className="absolute top-[391px] md:left-[12px] mt-9 md:text-start text-start w-full px-4">
          <p className="text-md md:text-base lg:text-lg italic">
            <i>If you didn’t receive the code</i>{' '}
            <span className="font-bold underline cursor-pointer">Resend</span>
          </p>
        </div>

        
       
<div className="absolute top-[509px] md:left-[22px] left-[25px] flex justify-start md:flex md:justify-start w-full">
<a  href="/reset"> <button className="bg-[#fdbb26] md:left-[22px] rounded text-white font-bold  py-2 px-[42px] md:px-[50px] lg:px-[250px] text-base md:text-lg lg:text-xl">
    Verify and Proceed
  </button></a>  
</div>

   
        <div className="absolute top-[593px] w-full  text-start md:text-start md:left-[22px] px-4">
          <p className="text-md md:text-base lg:text-lg">By</p>
          <p className="text-md font-bold md:text-xl lg:text-2xl">
            Farmers Networks
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp2;
