import React from "react";
import NavigationBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import iphone16 from '../components/assets/images/iphone16.jpg';
import iphone16pro from '../components/assets/images/iphone16pro.jpg';
import iphone16Small from '../components/assets/images/iphone16-small.jpg';
import iphone16proSmall from '../components/assets/images/iphone16pro-small.jpg';
import MiniSlider from "../components/MiniSlider";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection 
        image={iphone16pro} 
        smallImage={iphone16proSmall} 
        name="iPhone 16 Pro" 
        description="Hello, Apple Intelligence." 
        ptSmall={"500px"}
      />
      <HeroSection 
        image={iphone16} 
        smallImage={iphone16Small} 
        name="iPhone 16" 
        description="Hello, Apple Intelligence." 
        ptSmall={"50px"}
      />
      <ProductSection />
      <Slider />
      <MiniSlider/>
      <Footer />
    </>
  );
};

export default Home;
