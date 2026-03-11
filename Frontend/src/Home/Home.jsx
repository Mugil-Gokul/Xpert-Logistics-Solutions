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
        <div
          className="
          relative 
          md:absolute 
          md:bottom-0 
          md:left-1/2 
          md:-translate-x-1/2 
          md:translate-y-1/2 
          w-full 
          max-w-6xl 
          mx-auto 
          px-4 
          md:px-0 
          mt-6 
          md:mt-0 
          z-10
        "
        >
          <HeroBadges />
        </div>
      </div>

      {/* Sections */}
      <div className="">
        <HomeAboutUs />
        <WhatWeOffer />
        <HomeChooseUs />
        <HomeTestimonials />
        <HomeCareer />
      </div>
    </>
  );
};

export default Home;


