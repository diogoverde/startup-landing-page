import React from "react";
import Hero from "../components/sections/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="features">Features</div>
      <div className="testimonials">Testimonials</div>
      <div className="cta">Cta</div>
    </>
  );
};

export default Home;
