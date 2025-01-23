import logo1 from "../Assets/logo1.png";


function LogIn  () {
  return (
    <>
    
      <div className="w-full relative bg-[#155528] h-[1024px] overflow-hidden flex flex-col items-start justify-start text-left text-white font-inter">
      
        <h2 className="absolute top-[43px] left-[20px]  text-[28px] md:text-[36px] lg:text-[47px] font-bold leading-[120%] md:top-[50px]">
          Welcome
        </h2>
       
        <h2 className="absolute top-[93px] left-[20px] text-[20px] sm:text-[24px] md:text-[30px] font-semibold leading-[120%] md:top-[120px]">
          Log In to continue
        </h2>


        <img
          className="absolute top-[124px] left-[20px] md:top-[84px] md:left-[1100px] md:w-[164px] md:h-[29px] w-[99px] h-[20px] object-cover"
          alt="Logo"
          src={logo1}
        />

      
        <b className="absolute top-[193px] left-[20px] text-[22px] md:text-[40px] leading-[120%] w-full">
          {/* <span className="text-[18px] md:text-[42px] font-bold">"</span> */}
         
          <span className="text-[22px] md:text-[42px] font-bold">
<p className="m-0">
<span className="md:text-[34px] text-[22px] ">"</span>
<span>Farmnet: Digitizing Farming,
Empowering Growth."</span>
</p>
</span>


        </b>

   
        <form>
          <input
            type="email"
            required
            className="absolute top-[303px] left-[58px] w-[90%] md:w-[1200px] h-[56px] md:h-[89px] text-black text-xl md:text-3xl placeholder:font-bold placeholder-black bg-[#fff] rounded placeholder:pl-5"
            placeholder="Enter Email Address"
          />
          <input
            type="password"
            required
            className="absolute top-[403px] left-[58px] w-[90%] md:w-[1200px] h-[56px] md:h-[89px] text-black text-xl md:text-3xl placeholder:font-bold placeholder-black bg-[#fff] rounded placeholder:pl-5"
            placeholder="Enter Password"
          />

        
          <a
            href="/signup1"
            className="absolute top-[533px] left-[58px] w-[90%] md:w-[1200px] h-[56px] md:h-[89px] bg-[#fdbb26] text-black  rounded text-xl flex items-start  md:text-3xl pl-5"
          >
            <b className="mt-6">Continue</b>
          </a>
        </form>

       
        <h2 className="absolute top-[661px] left-[20px] md:text-[24px] font-semibold">By</h2>
        <h2 className="absolute top-[712px] left-[20px] md:text-[38px] font-bold">
          Farmers Networks
        </h2>
      </div>
    </>
  );
};

export default LogIn;