import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </>
  );
};

export default Home;
