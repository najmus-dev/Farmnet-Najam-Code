import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Stories from "./Stories";
import Subscription from "./Subscription";
import NewsSection from "./NewsSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <NewsSection />
      <Stories />
      <Subscription />
    </div>
  );
};

export default HomePage;
