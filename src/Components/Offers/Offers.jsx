import React from "react";
import "./Offers.css";
import offer_img from "../Assets/offer_img.jpg";

const Offers = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <h2>Exclusive </h2>
        <h2>Offer For You</h2>
        <p>BEST SELLERS PRODUCTS</p>
        <button>Check now!</button>
      </div>
      <div className="offer-right">
        <img src={offer_img} alt="" />
      </div>
    </div>
  );
};

export default Offers;
