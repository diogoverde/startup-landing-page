import React from "react";
import Hero from "../components/sections/Hero";
import FeatureTiles from "../components/sections/FeatureTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";

const Home = () => {
  return (
    <>
      <Hero className='illustration-section-01'/>
      <FeatureTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <div className="testimonials">Testimonials</div>
      <div className="cta">Cta</div>
    </>
  );
};

export default Home;
