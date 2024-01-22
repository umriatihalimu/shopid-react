import React from "react";
import "./Hero.css";
import { MdWavingHand } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import hero_image from "../Assets/hero-image.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left ">
        <h4>New Arrivals Only</h4>
        <div className="hero-hand-icon">
          <p>new</p>
          <MdWavingHand size={30} color="#eba22e" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <FaArrowRightLong />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" width={400} height={300} />
      </div>
    </div>
  );
};

export default Hero;
