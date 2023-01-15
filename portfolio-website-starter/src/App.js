import React from "react";
import Brands from "./components/Brands";
import Header from "./components/Header";
import Hero from "./components/Hero";

// import components

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands/>
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default App;
