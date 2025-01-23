import googlebtn from "../Assets/googlebtn.png";
import applebtn from "../Assets/applebtn.png";
import huaweibtn from "../Assets/huaweibtn.png";

const Subscription = () => {
  return (
    <div className="px-6 mb-10 font-Inter">
      <div className="flex justify-between mt-3 md:mt-10">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[40px] mb-6">
          REGISTER AS A FARMER
        </h1>

        <h1 className="text-lg md:text-[36px] text-[#919291] font-medium">
          Download app
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
        {/* REGISTER Button */}
        <a href="/register">
          <div className="relative group flex items-center justify-center bg-[#155528] hover:bg-green-900 text-white px-4 py-2 md:py-4 rounded-md max-w-xs md:max-w-md mx-auto h-[60px] md:h-[86px] md:w-[343px]">
            {/* Main box */}
            <p className="text-lg md:text-[32px] font-bold text-center">
              REGISTER
            </p>
            {/* Triangle */}
            <div
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[50%] w-8 h-8 md:w-[85px] md:h-[85px] bg-[#155528] group-hover:bg-green-900"
              style={{
                clipPath: "polygon(100% 50%, 0 0, 0 100%)",
              }}
            ></div>
          </div>
        </a>

        {/* Google Play */}
        <img
          src={googlebtn}
          alt="googlebtn"
          className="w-[191px] h-[90px] md:w-[291px] md:h-[101px] ml-4 md:ml-8"
        />
        {/* APP Store */}
        <img
          src={applebtn}
          alt="applebtn"
          className="w-[191px] h-[90px] md:w-[291px] md:h-[101px]"
        />
        {/* Huawei */}
        <img
          src={huaweibtn}
          alt="huaweibtn"
          className="w-[200px] h-[60px] md:w-[347px] md:h-[93px]"
        />
      </div>
    </div>
  );
};

export default Subscription;
