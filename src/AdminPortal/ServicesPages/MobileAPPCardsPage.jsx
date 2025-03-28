import React from "react";
import services1 from "../Assets/services1.png";
import eyes from "../Assets/eyes.png";
import comment from "../Assets/comment.png";
import adicon from "../Assets/adicon.png";

const MobileAPPCardsPage = () => {
  // Example data for the cards
  const mobileAppCardsData = [
    {
      title: "Profile",
      description: (
        <>
          Farmer's Basic Information, Farm Details,
          <br /> Experience & Expertise, Farming Practices,
          <br /> Products and Services, along with Reviews and
          <br /> Ratings
        </>
      ),
      views: 231,
      comments: 17,
      imageSrc: services1,
      link: "/admin/profile-page",
    },
    {
      title: "Profile",
      description: (
        <>
          Farmer's Basic Information, Farm Details,
          <br /> Experience & Expertise, Farming Practices,
          <br /> Products and Services, along with Reviews and
          <br /> Ratings
        </>
      ),
      views: 231,
      comments: 17,
      imageSrc: services1,
      link: "/admin/profile-page",
    },
    {
      title: "Profile",
      description: (
        <>
          Farmer's Basic Information, Farm Details,
          <br /> Experience & Expertise, Farming Practices,
          <br /> Products and Services, along with Reviews and
          <br /> Ratings
        </>
      ),
      views: 231,
      comments: 17,
      imageSrc: services1,
      link: "/admin/profile-page",
    },
    {
      title: "Profile",
      description: (
        <>
          Farmer's Basic Information, Farm Details,
          <br /> Experience & Expertise, Farming Practices,
          <br /> Products and Services, along with Reviews and
          <br /> Ratings
        </>
      ),
      views: 231,
      comments: 17,
      imageSrc: services1,
      link: "/admin/profile-page",
    },
    {
      title: "Profile",
      description: (
        <>
          Farmer's Basic Information, Farm Details,
          <br /> Experience & Expertise, Farming Practices,
          <br /> Products and Services, along with Reviews and
          <br /> Ratings
        </>
      ),
      views: 231,
      comments: 17,
      imageSrc: services1,
      link: "/admin/profile-page",
    },
    {
      title: "Profile",
      description: (
        <>
          Farmer's Basic Information, Farm Details,
          <br /> Experience & Expertise, Farming Practices,
          <br /> Products and Services, along with Reviews and
          <br /> Ratings
        </>
      ),
      views: 231,
      comments: 17,
      imageSrc: services1,
      link: "/admin/profile-page",
    },
    {
      title: "Profile",
      description: (
        <>
          Farmer's Basic Information, Farm Details,
          <br /> Experience & Expertise, Farming Practices,
          <br /> Products and Services, along with Reviews and
          <br /> Ratings
        </>
      ),
      views: 231,
      comments: 17,
      imageSrc: services1,
      link: "/admin/profile-page",
    },
    {
      title: "Profile",
      description: (
        <>
          Farmer's Basic Information, Farm Details,
          <br /> Experience & Expertise, Farming Practices,
          <br /> Products and Services, along with Reviews and
          <br /> Ratings
        </>
      ),
      views: 231,
      comments: 17,
      imageSrc: services1,
      link: "/admin/profile-page",
    },
    {
      title: "Profile",
      description: (
        <>
          Farmer's Basic Information, Farm Details,
          <br /> Experience & Expertise, Farming Practices,
          <br /> Products and Services, along with Reviews and
          <br /> Ratings
        </>
      ),
      views: 231,
      comments: 17,
      imageSrc: services1,
      link: "/admin/profile-page",
    },
    {
      title: "Profile",
      description: (
        <>
          Farmer's Basic Information, Farm Details,
          <br /> Experience & Expertise, Farming Practices,
          <br /> Products and Services, along with Reviews and
          <br /> Ratings
        </>
      ),
      views: 231,
      comments: 17,
      imageSrc: services1,
      link: "/admin/profile-page",
    },
    {
      title: "Profile",
      description: (
        <>
          Farmer's Basic Information, Farm Details,
          <br /> Experience & Expertise, Farming Practices,
          <br /> Products and Services, along with Reviews and
          <br /> Ratings
        </>
      ),
      views: 231,
      comments: 17,
      imageSrc: services1,
      link: "/admin/profile-page",
    },
    {
      title: "Profile",
      description: (
        <>
          Farmer's Basic Information, Farm Details,
          <br /> Experience & Expertise, Farming Practices,
          <br /> Products and Services, along with Reviews and
          <br /> Ratings
        </>
      ),
      views: 231,
      comments: 17,
      imageSrc: services1,
      link: "/admin/profile-page",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 mt-4 overflow-x-hidden">
      {mobileAppCardsData.map((mobileAppCard, index) => (
        <div key={index} className="cursor-pointer">
          <a href={mobileAppCard.link} className="block">
            <div className="font-Inter relative h-[131px]">
              <div className="bg-[#EDF0EF] w-full md:w-[335px] rounded-t-md">
                <div className="text-black w-full p-2">
                  <h1 className="font-bold text-[12px] mb-1">
                    {mobileAppCard.title}
                  </h1>
                  <p className="text-[10px]">{mobileAppCard.description}</p>
                </div>
              </div>
              <div className="bg-[#CFD7D7] w-full md:w-[335px] h-[40px] p-2 flex justify-between items-center rounded-b-md">
                <div className="flex items-center text-[12px] font-bold text-white">
                  <span className="mr-2">{mobileAppCard.views} Views</span>
                  <img
                    src={eyes}
                    alt="views icon"
                    className="w-[23px] h-[24px] ml-2"
                  />
                  <span className="ml-3">
                    {mobileAppCard.comments} Comments
                  </span>
                  <img
                    src={comment}
                    alt="comments icon"
                    className="w-[23px] h-[24px] ml-2"
                  />
                </div>
                {/* <img
                  src={mobileAppCard.imageSrc}
                  alt="mobileAppCardimage"
                  className="h-[110px] w-[57px] absolute left-64 top-4"
                /> */}
                <div className=" flex items-start justify-center sm:justify-start md:justify-center lg:justify-end p-2">
                  <img
                    src={mobileAppCard.imageSrc}
                    alt="serviceimage"
                    className="h-[110px] w-[57px] -mt-24"
                  />
                </div>
              </div>
            </div>
          </a>
          {/* Ad Button */}
          <div className="flex items-center justify-end mt-4">
            <h1 className="text-[8px] font-medium text-[#979797]">Advertise</h1>
            <img src={adicon} alt="adicon" className="w-[16px] h-[16px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileAPPCardsPage;
