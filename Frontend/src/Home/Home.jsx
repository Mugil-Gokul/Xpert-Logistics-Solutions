import React from "react";
import HomeHero from "./HomeHero";
import HeroBadges from "./HeroBadges";
import HomeAboutUs from "./HomeAboutUs";
import WhatWeOffer from "./WhatWeOffer";
import HomeChooseUs from "./HomeChooseUs";
import HomeTestimonials from "./HomeTestimonials";
import HomeCareer from "./HomeCareer";

const Home = () => {
  return (
    <>
      <div className="relative w-full">
        {/* Hero Section */}
        <HomeHero />

        {/* Badge Section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-6xl z-10">
          <HeroBadges />
        </div>
      </div>
      <HomeAboutUs />
      <WhatWeOffer />
      <HomeChooseUs/>
      <HomeTestimonials/>
      <HomeCareer/>
    </>
  );
};

export default Home;
