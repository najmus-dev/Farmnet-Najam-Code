
import React from "react";

function Recover () {
  return (
    <>
  
    <div className="w-full h-screen bg-[#155528] font-Inter text-white">
   
      <h2 className="absolute top-[169px] ml-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:ml-9 lg:text-[38px]">
      Forgot password


      </h2>

     
      <div className="absolute top-[233px] ml-4 text-base  leading-5 sm:text-lg md:text-[24px] lg:ml-9">
  <p className="m-0 whitespace-pre-wrap">
  Your new password must be different from previously 
  </p>
  <p className="mt-2 whitespace-pre-wrap">used passwords</p>
</div>

     
      <button className="absolute top-[393px] rounded ml-4 w-[90%] h-[45px] text-lg font-semibold text-white bg-[#fdbb26] sm:text-xl md:w-[60%] lg:w-[603px] lg:h-[49px] lg:text-[24px] lg:ml-9">
      Recover password
      </button>

     
      <div className="absolute top-[463px] w-full  text-start md:text-start md:left-[22px] px-4">
          <p className="text-md md:text-base lg:text-lg">By</p>
          <p className="text-md top-[483px] font-bold md:text-xl lg:text-3xl">
            Farmers Networks
          </p>
        </div>
    </div>
    </>
  );
};

export default Recover;