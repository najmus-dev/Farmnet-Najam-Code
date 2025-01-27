import React from "react";
import farmingdemo from "../Assets/farmingdemo.png";
import eyes from "../Assets/eyes.png";
import comment from "../Assets/comment.png";

const farmingDemoCardsData = [
  {
    title: "Demo",
    description: (
      <>
        Farmer's Basic Information, Farm Details, Experience &
        <br />
        Expertise, Farming Practices, Products and Services, along with
        <br /> Reviews and Ratings
      </>
    ),
    views: 231,
    comments: 17,
    link: "/admin/farming-demo-page-1",
    imageSrc: farmingdemo,
  },
  {
    title: "Demo",
    description: (
      <>
        Farmer's Basic Information, Farm Details, Experience &
        <br />
        Expertise, Farming Practices, Products and Services, along with
        <br /> Reviews and Ratings
      </>
    ),
    views: 231,
    comments: 17,
    link: "/admin/farming-demo-page-1",
    imageSrc: farmingdemo,
  },
  {
    title: "Demo",
    description: (
      <>
        Farmer's Basic Information, Farm Details, Experience &
        <br />
        Expertise, Farming Practices, Products and Services, along with
        <br /> Reviews and Ratings
      </>
    ),
    views: 231,
    comments: 17,
    link: "/admin/farming-demo-page-1",
    imageSrc: farmingdemo,
  },
  {
    title: "Demo",
    description: (
      <>
        Farmer's Basic Information, Farm Details, Experience &
        <br />
        Expertise, Farming Practices, Products and Services, along with
        <br /> Reviews and Ratings
      </>
    ),
    views: 231,
    comments: 17,
    link: "/admin/farming-demo-page-1",
    imageSrc: farmingdemo,
  },
  {
    title: "Demo",
    description: (
      <>
        Farmer's Basic Information, Farm Details, Experience &
        <br />
        Expertise, Farming Practices, Products and Services, along with
        <br /> Reviews and Ratings
      </>
    ),
    views: 231,
    comments: 17,
    link: "/admin/farming-demo-page-1",
    imageSrc: farmingdemo,
  },
  {
    title: "Demo",
    description: (
      <>
        Farmer's Basic Information, Farm Details, Experience &
        <br />
        Expertise, Farming Practices, Products and Services, along with
        <br /> Reviews and Ratings
      </>
    ),
    views: 231,
    comments: 17,
    link: "/admin/farming-demo-page-1",
    imageSrc: farmingdemo,
  },
  {
    title: "Demo",
    description: (
      <>
        Farmer's Basic Information, Farm Details, Experience &
        <br />
        Expertise, Farming Practices, Products and Services, along with
        <br /> Reviews and Ratings
      </>
    ),
    views: 231,
    comments: 17,
    link: "/admin/farming-demo-page-1",
    imageSrc: farmingdemo,
  },
  {
    title: "Demo",
    description: (
      <>
        Farmer's Basic Information, Farm Details, Experience &
        <br />
        Expertise, Farming Practices, Products and Services, along with
        <br /> Reviews and Ratings
      </>
    ),
    views: 231,
    comments: 17,
    link: "/admin/farming-demo-page-1",
    imageSrc: farmingdemo,
  },
  {
    title: "Demo",
    description: (
      <>
        Farmer's Basic Information, Farm Details, Experience &
        <br />
        Expertise, Farming Practices, Products and Services, along with
        <br /> Reviews and Ratings
      </>
    ),
    views: 231,
    comments: 17,
    link: "/admin/farming-demo-page-1",
    imageSrc: farmingdemo,
  },
];

const FarmingDemoCardsPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-2 mt-4 overflow-x-hidden">
      {farmingDemoCardsData.map((farmingCard, index) => (
        <div key={index} className="cursor-pointer">
          <a href={farmingCard.link} className="block">
            <div className="font-Inter relative">
              {/* Card Background with Fixed Dimensions */}
              <div
                className="relative bg-[#EDF0EF] w-[340px] h-[167px] rounded-t-md bg-cover bg-center"
                style={{
                  backgroundImage: `url(${farmingCard.imageSrc})`,
                }}
              >
                {/* Title and Description Overlay */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-2 rounded-t-md">
                  <h1 className="font-bold text-[12px] mb-1">
                    {farmingCard.title}
                  </h1>
                  <p className="font-light text-[10px]">
                    {farmingCard.description}
                  </p>
                </div>
              </div>
              {/* Bottom Section */}
              <div className="bg-[#CFD7D7] w-[340px] h-[40px] p-2 flex justify-between items-center rounded-b-md">
                <div className="flex items-center text-[12px] font-bold text-white">
                  <span className="mr-2">{farmingCard.views} Views</span>
                  <img
                    src={eyes}
                    alt="views icon"
                    className="w-[23px] h-[24px] ml-2"
                  />
                  <span className="ml-3">{farmingCard.comments} Comments</span>
                  <img
                    src={comment}
                    alt="comments icon"
                    className="w-[23px] h-[24px] ml-2"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FarmingDemoCardsPage;
