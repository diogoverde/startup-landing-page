import React from "react";
import Hero from "../components/sections/Hero";
import FeatureTiles from "../components/sections/FeatureTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";

const Home = () => {
  return (
    <>
      <Hero className='illustration-section-01'/>
      <FeatureTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial />
      <div className="cta">Cta</div>
    </>
  );
};

export default Home;
