import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Stories from "./Stories";
import Subscription from "./Subscription";
import NewsSection from "./NewsSection";
import AgritechSection from './AgritechSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AgritechSection/>
      <Services />
      {/* <AboutUs /> */}
      <Stories />
      <NewsSection />
     
     
     
{/*       
      <Subscription /> */}
    </div>
  );
};

export default HomePage;
