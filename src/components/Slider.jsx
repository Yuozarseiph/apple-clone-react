import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import film1 from "./assets/images/film1.jpg";
import film2 from "./assets/images/film2.jpg";
import film3 from "./assets/images/film3.jpg";
import film4 from "./assets/images/film4.jpg";
import film5 from "./assets/images/film5.jpg";
import film6 from "./assets/images/film6.jpg";
import film7 from "./assets/images/film7.jpg";
import film8 from "./assets/images/film8.jpg";
import film9 from "./assets/images/film9.jpg";
import film10 from "./assets/images/film10.jpg";

const sliderImages = [
  { id: 1, image: film1 },
  { id: 2, image: film2 },
  { id: 3, image: film3 },
  { id: 4, image: film4 },
  { id: 5, image: film5 },
  { id: 6, image: film6 },
  { id: 7, image: film7 },
  { id: 8, image: film8 },
  { id: 9, image: film9 },
  { id: 10, image: film10 },
];

const ImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  };

  return (
    <div className="main-container">
      <div className="slider-container">
        <Slider {...settings}>
          {sliderImages.map((image) => (
            <div key={image.id} className="slider-item">
              <img src={image.image} alt="" />
              <div className="buttonss">
                <button
                  className="btn btn-lg stream-now"
                  style={{ backgroundColor: "white", borderRadius: "1000px" }}
                >
                  Stream now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
