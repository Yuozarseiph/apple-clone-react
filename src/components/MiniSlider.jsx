import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MiniSlider.css";

import img1 from "../components/assets/images/watch.jpg";
import img2 from "../components/assets/images/ipadpro.jpg";
import img3 from "../components/assets/images/macbook.jpg";
import img4 from "../components/assets/images/card.jpg";
import img5 from "../components/assets/images/trade-in.jpg";

const cards = [
  {
    id: 1,
    img: img1,
    btnText: "Buy",
  },
  {
    id: 2,
    img: img2,
    btnText: "Buy",
  },
  {
    id: 3,
    img: img3,
    btnText: "Buy",
  },
  {
    id: 4,
    img: img4,
    btnText: "Apply",
  },
  {
    id: 5,
    img: img5,
    btnText: "Trade",
  },
]

const MiniSlider = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="mini-slider">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="slide">
            <img src={card.img} alt={`slide-${card.id}`} />
            <div className="btn-container">
              <button className="btn btn-primary btn-sm" style={{borderRadius: "100px"}}>{card.btnText}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MiniSlider;
