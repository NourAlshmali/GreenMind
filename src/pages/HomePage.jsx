import React from "react";
import NavBar from "../components/NavBar";
import Hero from "./Hero";
import Selling from "./Selling";
import AboutUs from "./AboutUs";
import Categories from "./Categories";
import Reviews from "./Reviews";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-white flex flex-col">
      <Hero />
      <Selling />
      <AboutUs />
      <Categories />
      <Reviews />
    </div>
  );
};

export default HomePage;
