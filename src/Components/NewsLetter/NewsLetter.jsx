import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our newletter</p>
      <div>
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
