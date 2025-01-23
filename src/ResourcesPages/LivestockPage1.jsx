// import React from "react";
// import capsicum from "../Assets/capsicum.png";
// import livestock11 from "../Assets/livestock11.png";
// import livestock1 from "../Assets/livestock1.png";
// import logo2 from "../Assets/logo2.png";
// import colorwheel from "../Assets/colorwheel.png";

// const LivestockPage1 = () => {
//   return (
//     <div className=" font-Inter ">
//       {/* Title */}
//       <div className="mb-6 mt-8 px-4 md:px-7">
//         <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
//           FARMING GUIDE
//         </h1>
//       </div>
//       <h1 className="px-4 md:px-7 mb-8 mt-8 md:text-[40px] font-bold">
//         Capsicum
//       </h1>
//       {/* row 1 */}
//       <div className=" flex flex-wrap md:flex-nowrap gap-4 md:gap-0">
//         <div className=" w-full md:w-[35%] h-auto md:h-[610px] bg-[#F8FAF9]  p-6">
//           <div className="flex items-center justify-between mb-6">
//             <h1 className="text-[20px] md:text-[24px] font-bold text-[#155528] ">
//               Capsicum
//             </h1>
//             <img src={capsicum} alt="capsicum" />
//           </div>

//           <p className="text-[18px] md:text-[24px] text-[#1E1E1E] leading-8">
//             The population of <br className="md:block hidden" /> smallholder
//             Farmers in Kenya <br className="md:block hidden" /> is 8 Million.
//             Current registered users of the Farmers{" "}
//             <br className="md:block hidden" /> Networks App and type of{" "}
//             <br className="md:block hidden" /> crop or livestock Farming and{" "}
//             <br className="md:block hidden" /> land size used for Farming.
//           </p>
//         </div>
//         <div className="w-full  pt-10 h-auto md:h-[580px] bg-[#FBFEFD] rounded-r-md flex flex-wrap items-center justify-center space-x-12">
//           {/* Card 1 */}
//           <div className="w-full sm:w-[304px] h-auto">
//             <img
//               src={livestock1}
//               alt="livestock1"
//               className="w-full h-[230px] object-cover"
//             />
//             <h1 className="text-[#155528] text-[24px] font-bold mt-6">
//               CAP variety 1
//             </h1>
//             <h1 className="md:text-[24px] text-[16px] leading-tight text-ellipsis break-words  ">
//               Cultivation guide
//             </h1>

//             <div className="flex items-center justify-end">
//               <button className="bg-[#155528] mt-40 text-white font-semibold text-[12px] md:text-[14px] rounded-tr-lg rounded-bl-lg w-full md:w-[151px] h-[34px] text-center">
//                 View More
//               </button>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="w-full sm:w-[304px] h-auto">
//             <img
//               src={livestock1}
//               alt="livestock1"
//               className="w-full h-[230px] object-cover"
//             />
//             <h1 className="text-[#155528] text-[24px] font-bold mt-6">
//               CAP variety 2
//             </h1>
//             <h1 className="md:text-[24px] text-[16px] leading-tight text-ellipsis break-words  ">
//               Cultivation guide
//             </h1>

//             <div className="flex items-center justify-end">
//               <button className="bg-[#155528] mt-40 text-white font-semibold text-[12px] md:text-[14px] rounded-tr-lg rounded-bl-lg w-full md:w-[151px] h-[34px] text-center">
//                 View More
//               </button>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="w-full sm:w-[304px] h-auto">
//             <img
//               src={livestock1}
//               alt="livestock1"
//               className="w-full h-[230px] object-cover"
//             />
//             <h1 className="text-[#155528] text-[24px] font-bold mt-6">
//               CAP variety 3
//             </h1>
//             <h1 className="md:text-[24px] text-[16px] leading-tight text-ellipsis break-words  ">
//               Cultivation guide
//             </h1>

//             <div className="flex items-center justify-end">
//               <button className="bg-[#155528] mt-40 text-white font-semibold text-[12px] md:text-[14px] rounded-tr-lg rounded-bl-lg w-full md:w-[151px] h-[34px] text-center">
//                 View More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* image section */}
//       <div className="relative mb-24">
//         <img src={livestock11} alt="livestock11" className="w-full " />
//         <img src={logo2} alt="logo2" className="absolute top-12 left-8" />
//         <div className="absolute bottom-2 md:bottom-16 left-4 md:left-10 text-left">
//           <h1 className="text-[24px] font-bold text-white">
//             Capsicum Cultivation Guide
//           </h1>
//         </div>
//       </div>
//       {/* text section */}
//       <div className="text-[36px] text-[#19253C] px-10 leading-9 mb-10">
//         <p>
//           Capsicum Annuum plants grow very fast and can grow very tall. Most
//           varieties will grow eight to fifteen leaves before the first flower
//           appear.
//         </p>
//         <p>Here are some tips for Capsicum farming:</p>
//         <p>
//           Suitable Climate for Capsicum: Capsicum is basically a cool season
//           crop and day temperatures less than 30°C is favorable for growth and
//           yield. But due to the introduction of a good number of hybrids with
//           wider adaptability, it can be successfully cultivated in a warm
//           climatic place like Goa state. But very high temperature results in
//           rapid plant growth and affects fruit set. Lower night temperature
//           favors flowering and fruit set 1.
//         </p>
//         <p>
//           Selection of Planting Material for Capsicum Production: The planting
//           material should be healthy, resistant to diseases & pests. Age of the
//           seedling should be 35 to 40 days old. Height of the seedling should be
//           16 – 20 cm. The plant should possess good rooting system. The seedling
//           should have at least 4 – 6 leaves on the stem at the time of
//           plantation. Other characteristics like fruit shape, fruit color,
//           production, fruit quality, and vigor should also be considered while
//           selecting plant material of a good variety of capsicum 1.
//         </p>
//         <p>
//           Growing Beds and Soil Sterilization: Capsicum requires well-drained
//           soil with a pH range of 6.0 to 7.0. The soil should be sterilized
//           before planting to prevent soil-borne diseases. Raised beds of 1.2 m
//           width and 15 cm height are prepared 1.
//         </p>
//         <p>
//           Planting, Pruning, and Training of Capsicum Plants: Capsicum is
//           planted in double rows with a spacing of 60 cm between rows and 45 cm
//           between plants. The plants are pruned to maintain a single stem and to
//           remove the side shoots. The plants are trained to a height of 1.5 m 1.
//         </p>
//         <p>
//           Fertigation and Manure: Capsicum requires a balanced dose of
//           fertilizers. Fertigation is the best method of fertilizer application.
//           The manure is applied at the time of bed preparation 1.
//         </p>
//         <p>
//           Disease and Pest Control of Capsicum: Capsicum is susceptible to a
//           number of diseases and pests. The common diseases are damping off,
//           anthracnose, bacterial wilt, and powdery mildew. The common pests are
//           aphids, thrips, mites, and whiteflies. The diseases and pests can be
//           controlled by using appropriate chemicals 1.
//         </p>
//         <p>
//           Fruit Thinning in Capsicum Farming: Fruit thinning is done to increase
//           the size and quality of the fruits. The fruits are thinned when they
//           are 1-2 cm in diameter 1.
//         </p>
//         <p>
//           Harvesting and Yield of Capsicum: Capsicum is harvested when the
//           fruits attain full size and color. The yield of capsicum in open field
//           cultivation ranges between 20-40t/ha, whereas in a greenhouse the
//           yield range is from 100-120 tonnes/ha 1.
//         </p>
//         <p>
//           Post Harvesting and Storage of Capsicum: Capsicum should be harvested
//           carefully to avoid damage. The harvested fruits should be graded and
//           packed in ventilated crates. The crates should be stored in a cool and
//           dry place .
//         </p>
//       </div>
//       {/* Contact button */}
//       <div className="flex justify-end mt-8 md:mt-16 mb-20 md:mb-96 mr-8">
//         <button className="text-[18px]  font-medium bg-[#155528] text-white rounded-tr-lg rounded-bl-lg w-[302px] h-[48px] py-1">
//           Contact provider
//         </button>
//       </div>
//       {/* color wheel section */}
//       <a href="/environmental-social-governance-main-page">
//         <div className="bg-[#FAFBFB] mx-8 mb-8 flex items-center justify-between mt-8 p-6 border-b-2 border-gray-300 rounded-md">
//           <div>
//             <h1 className="font-bold text-2xl md:text-[32px] mb-4">
//               SDG No 13
//             </h1>
//             <p className="text-base md:text-[32px] mt-6 mb-4">
//               Take urgent action to combat climate change and its impacts
//             </p>
//           </div>
//           <img src={colorwheel} alt="colorwheel" />
//         </div>
//       </a>
//     </div>
//   );
// };

// export default LivestockPage1;

import React from "react";
// import livestock11 from "../Assets/livestock11.png";
import livestock1 from "../Assets/livestock1.png";
import capsicum from "../Assets/capsicum.png";
import livestock11 from "../Assets/livestock11.png";
import logo2 from "../Assets/logo2.png";
import colorwheel from "../Assets/colorwheel.png";

// Reusable Card Component
const CropCard = ({ image, title, guide }) => {
  return (
    <div className="w-full md:w-[304px] h-auto px-4 md:px-0">
      <img
        src={image}
        alt={title}
        className="w-full md:w-[275px] h-[200px] md:h-[230px] object-cover rounded-md"
      />
      <h1 className="text-[#155528] text-[24px] font-bold mt-6">{title}</h1>
      <h1 className="md:text-[24px] text-[16px] leading-tight text-ellipsis break-words">
        {guide}
      </h1>
      <div className="flex items-center justify-end">
        <button className="bg-[#155528] mt-4 md:mt-36 text-white font-semibold text-[12px] md:text-[14px] rounded-tr-lg rounded-bl-lg w-full md:w-[151px] h-[34px] text-center">
          View More
        </button>
      </div>
    </div>
  );
};

const CropsPage1 = () => {
  return (
    <div className=" font-Inter ">
      {/* Title */}
      <div className="mb-6 mt-8 px-4 md:px-7">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          FARMING GUIDE
        </h1>
      </div>
      <h1 className="px-4 md:px-7 mb-8 mt-8 md:text-[40px] font-bold">
        Capsicum
      </h1>

      {/* Row 1 */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[35%] h-auto md:h-[610px] bg-[#F8FAF9] p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-[20px] md:text-[24px] font-bold text-[#155528]">
              Capsicum
            </h1>
            <img src={capsicum} alt="capsicum" />
          </div>
          <p className="text-[18px] md:text-[24px] text-[#1E1E1E] leading-8">
            The population of <br className="md:block hidden" /> smallholder
            Farmers in Kenya <br className="md:block hidden" /> is 8 Million.
            Current registered users of the Farmers{" "}
            <br className="md:block hidden" /> Networks App and type of{" "}
            <br className="md:block hidden" /> crop or livestock Farming and{" "}
            <br className="md:block hidden" /> land size used for Farming.
          </p>
        </div>

        <div className="px-4 md:px-0 w-full pt-10 h-auto md:h-[580px] space-y-6 md:space-y-0 space-x-4 bg-[#FBFEFD] rounded-r-md flex flex-col md:flex-row items-center justify-center">
          {/* Reusable Cards */}
          <CropCard
            image={livestock1}
            title="CAP variety 1"
            guide="Cultivation guide"
          />
          <CropCard
            image={livestock1}
            title="CAP variety 2"
            guide="Cultivation guide"
          />
          <CropCard
            image={livestock1}
            title="CAP variety 3"
            guide="Cultivation guide"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="relative mt-6 md:mt-0 mb-4 md:mb-24">
        <img src={livestock11} alt="livestock11" className="w-full" />
        <img
          src={logo2}
          alt="logo2"
          className="absolute top-2 md:top-10 left-4 md:left-8 w-[100px] h-[40px] md:w-[158px] md:h-[78px] "
        />
        <div className="absolute bottom-2 md:bottom-16 left-4 md:left-10 text-left">
          <h1 className="text-[16px] md:text-[24px] font-bold text-white">
            Capsicum Cultivation Guide
          </h1>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-[20px]  md:text-[36px] text-[#19253C] px-4 md:px-10 md:leading-9 mb-10">
        <p>
          Capsicum Annuum plants grow very fast and can grow very tall. Most
          varieties will grow eight to fifteen leaves before the first flower
          appear.
        </p>
        <p>Here are some tips for Capsicum farming:</p>
        <p>
          Suitable Climate for Capsicum: Capsicum is basically a cool season
          crop and day temperatures less than 30°C is favorable for growth and
          yield. But due to the introduction of a good number of hybrids with
          wider adaptability, it can be successfully cultivated in a warm
          climatic place like Goa state. But very high temperature results in
          rapid plant growth and affects fruit set. Lower night temperature
          favors flowering and fruit set 1.
        </p>
        <p>
          Selection of Planting Material for Capsicum Production: The planting
          material should be healthy, resistant to diseases & pests. Age of the
          seedling should be 35 to 40 days old. Height of the seedling should be
          16 – 20 cm. The plant should possess good rooting system. The seedling
          should have at least 4 – 6 leaves on the stem at the time of
          plantation. Other characteristics like fruit shape, fruit color,
          production, fruit quality, and vigor should also be considered while
          selecting plant material of a good variety of capsicum 1.
        </p>
        {/* Remaining content */}
      </div>

      {/* Contact Button */}
      <div className="flex justify-end mt-8 md:mt-16 mb-20 md:mb-96 mr-8">
        <button className="text-[18px] font-medium bg-[#155528] text-white rounded-tr-lg rounded-bl-lg w-[302px] h-[48px] py-1">
          Contact provider
        </button>
      </div>

      {/* Color Wheel Section */}
      <a href="/environmental-social-governance-main-page">
        <div className="bg-[#FAFBFB] mx-8 mb-8 flex items-center justify-between mt-8 p-6 border-b-2 border-gray-300 rounded-md">
          <div>
            <h1 className="font-bold text-2xl md:text-[32px] mb-4">
              SDG No 13
            </h1>
            <p className="text-base md:text-[32px] mt-6 mb-4">
              Take urgent action to combat climate change and its impacts
            </p>
          </div>
          <img src={colorwheel} alt="colorwheel" />
        </div>
      </a>
    </div>
  );
};

export default CropsPage1;
