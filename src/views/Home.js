import React from "react";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <div className="testimonials">Testimonials</div>
      <div className="cta">Cta</div>
    </>
  );
};

export default Home;
