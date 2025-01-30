import UserAccountHeader from "../UserAccounts/UserAccountHeader";
import editicon from "../Assets/editicon.png";
import importicon from "../Assets/importicon.png";
import gallery1 from "../Assets/gallery1.png";
import gallery2 from "../Assets/gallery2.png";
import gallery3 from "../Assets/gallery3.png";
import gallery4 from "../Assets/gallery4.png";
import addicon from "../Assets/addicon.png";
const CommunityGalleryCard = ({ image, title, description, linkPath }) => {
  return (
    
    <div className="relative w-full mt-1 pl-8 p-4">
      {/* Buttons outside the card */}
      <div className="font-Inter   md:mt-0 w-full  border-[#EDF0EF]">
      <div className="flex flex-nowrap justify-center space-x-2 px-4 md:px-4">
       
       
       
       
      <h1 className="text-[14px] font-medium w-[136px] h-[40px] flex items-center justify-center text-center mb-4 bg-[#F3F5F5] hover:text-white hover:bg-[#155528] rounded-md md:mb-2">
  <a href="/#" className="w-full font-medium h-full flex items-center justify-center hover:bg-[#155528] hover:text-white">
    Gallery
  </a>
</h1>
     
       
<h1 className="text-[14px] font-medium w-[136px] h-[40px] flex items-center justify-center text-center mb-4 bg-[#F3F5F5] hover:text-white hover:bg-[#155528] rounded-md md:mb-2">
  <a href="/#" className="w-full h-full font-medium flex items-center justify-center hover:bg-[#155528] hover:text-white">
  History
  </a>
</h1>
     
       
<h1 className="text-[14px] font-medium w-[136px] h-[40px] flex items-center justify-center text-center mb-4 bg-[#F3F5F5] hover:text-white hover:bg-[#155528] rounded-md md:mb-2">
  <a href="/#" className="w-full h-full font-medium flex items-center justify-center hover:bg-[#155528] hover:text-white">
  Publish
  </a>
</h1>
     
       
       
      
      </div>
    </div>

      {/* Card */}
      <div className="bg-[#F3F5F5] overflow-hidden w-full  mt-2 sm:mr-7">
        {/* Image with link */}
        <div className="relative">
  <a href={linkPath} className="block">
    <img
      src={image}
      alt={title}
      className="w-full h-auto min-h-[200px] max-h-[289px] object-cover object-center aspect-[16/9] md:w-[434px] md:h-[289px] sm:h-[250px] lg:h-[267px]"
    />
  </a>
  <img
                    src={addicon}
                    alt="plus2btn"
                    className="absolute top-1 right-1 w-8 h-8 filter invert"
                  />
                </div>



        {/* Content */}
        <div className="p-1">
        <div className="flex justify-between items-center">
    <h2 className=" text-[#155528] text-xl sm:text-[20px] md:text-[24px] font-bold">
      Trade Fair
    </h2>
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <img src={editicon} alt="edit icon" className="w-6 h-6" />
        <h1 className="text-[16px] font-bold">Edit</h1>
      </div>
      <div className="flex items-center space-x-2">
        <img src={importicon} alt="import icon" className="w-6 h-6" />
        <h1 className="text-[16px] font-bold">Save</h1>
      </div>
    </div>
  </div>
          <h3 className="font-bold md:mt-1 text-base sm:text-sm md:text-[16px]">
          International Trade Fair
          </h3>
          <h3 className="font-bold md:mt-1 text-base sm:text-sm md:text-[16px]">
          Green House tunnels.
          </h3>
          {/* Flex container */}
          <div className="flex flex-nonwrap items-start justify-between">
            <p className="text-xs  sm:text-sm md:text-[12px]  mt-1">
              {description}
            </p>
            {/* Graph */}
          
          </div>

   
          
        </div>
      </div>
    </div>
  );
};



  
  const CommunityGallery = () => {
    const cards = [
      {
        image: gallery1, // Replace with actual paths
       
        description:
          "Nairobi International Trade fair - 10th-20th October 2024",
          linkPath: "/Communityfarmer2",
      
      },
      {
        image: gallery2,
       
        description:
          " Nairobi International Trade fair - 10th-20th October 2024",
        linkPath: "/Communityfarmer2",
      },
      {
        image: gallery3,
      
        description:
          " Nairobi International Trade fair - 10th-20th October 2024",
        linkPath: "/Communityfarmer3",
      },
      {
        image: gallery4,
       
        description:
          " Nairobi International Trade fair - 10th-20th October 2024",
        linkPath: "/Communityfarmer4",
      },
     
    ];
  
    return (
      <>
     
         <UserAccountHeader />
   
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
     
        {cards.map((card, index) => (
 <>
 <CommunityGalleryCard

            key={index}
            image={card.image}
          
            description={card.description}
            linkPath={card.linkPath} /></>
        ))}
      </div></>
    );
  };
  
  export default CommunityGallery;
  