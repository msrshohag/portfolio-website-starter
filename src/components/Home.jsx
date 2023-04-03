import React from "react";
import About from "./About";
import Brands from "./Brands";
import Hero from "./Hero";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
