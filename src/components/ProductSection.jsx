import React from "react";
import "./ProductSection.css";
import watch from './assets/images/watch.jpg'
import watchUltra from './assets/images/watch-ultra.jpg'
import ipadPro from './assets/images/ipadpro.jpg'
import macbookair from './assets/images/macbook.jpg'
import tradeIn from './assets/images/trade-in.jpg'
import card from './assets/images/card.jpg'

const products = [
  {
    id: 1,
    title: "WATCH",
    description: "Thinstant classic.",
    image: watch,
    color: 'black',
    btnPrimary : 'Learn more',
    btnSecondery : 'Buy',
  },
  {
    id: 2,
    title: "WATCH",
    description: "United by rhythm. Discover the new Black Unity watch band and face.",
    image: watchUltra,
    color: 'white',
    btnPrimary : 'Learn more',
    btnSecondery : 'Buy',
  },
  {
    id: 3,
    title: "Mac Book Air",
    description: "Lean. Mean. M3 machine.",
    image: macbookair,
    color: 'black',
    btnPrimary : 'Learn more',
    btnSecondery : 'Buy',
  },
  {
    id: 4,
    title: "iPad Pro",
    description: "Unbelievably thin. Incredibly powerful.",
    image: ipadPro,
    color: 'white',
    btnPrimary : 'Learn more',
    btnSecondery : 'Buy',
  },
  {
    id: 5,
    title: "TradeIn",
    description: 'Get $180–$650 in credit when you trade in iPhone 12 or higher.',
    image: tradeIn,
    color: 'black',
    btnPrimary : 'Get your estimate',
    display : 'none'
  },
  {
    id: 6,
    title: "TradeIn",
    description: 'Get up to 3% Daily Cash back with every purchase.',
    image: card,
    color: 'black',
    btnPrimary : 'Learn more',
    btnSecondery : 'Apply now',
  }
];

const ProductSection = () => {
  return (
    <div className="product-section">
      {products.map((product) => (
        <div key={product.id} className="product-card" style={{ backgroundImage: `url(${product.image})` }}>
          <h2 style={{color: `${product.color}`}}>{product.title}</h2>
          <p style={{color: `${product.color}`}}>{product.description}</p>
          <div className="buttons" >
            <button  className="learn-more">{product.btnPrimary}</button>
            <button className="buy" style={{display: `${product.display}`}}>{product.btnSecondery}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
