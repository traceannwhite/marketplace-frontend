import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <img
        src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1626735924/mountain-547363_jrh8ct.jpg"
        alt=""
        className="hero-image"
      />
      <h1 className="headline"> What resonates with you?</h1>
    </div>
  );
};

export default Hero;
