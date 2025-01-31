import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection = ({ image, name, description, smallImage , ptSmall }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentImage = windowWidth <= 768 ? smallImage : image;
  const currentPadding = windowWidth <= 768 ? ptSmall : "50px";
  const currentWidth = windowWidth <= 768 ? "btn-sm" : "btn-lg";

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${currentImage})` , paddingTop: `${currentPadding}`}} >
      <Container className="text-center text-white">
        <h1 className="display-3 fw-bold">{name}</h1>
        <p className="lead">{description}</p>
        <a href="#" className= {`btn btn-primary m-2 ${currentWidth}`}>Learn More</a>
        <a href="#" className= {`btn btn-outline-primary ${currentWidth}`}>Buy</a>
      </Container>
    </div>
  );
};

export default HeroSection;
