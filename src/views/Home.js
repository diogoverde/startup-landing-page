import React from "react";
import Hero from "../components/sections/Hero";
import Cta from "../components/sections/Cta";
import FeatureTiles from "../components/sections/FeatureTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";

const Home = () => {
  return (
    <>
      <Hero className='illustration-section-01'/>
      <FeatureTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
};

export default Home;
