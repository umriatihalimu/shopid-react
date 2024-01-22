import React from "react";
import "./ProductDisplay.css";
import { IoMdStar } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

// perulangan untuk bintangnya
const Rating = ({ rate }) => {
  return (
    <>
      {[...Array(rate)].map((index) => (
        <IoMdStar color="#f48d18" />
      ))}
    </>
  );
};
const ProductDisplay = ({ product }) => {
  return (
    <div className="product-display">
      <div className="display-left">
        <img className="product-image" src={product.image} alt="" />
      </div>
      <div className="display-right">
        <h3>{product.name}</h3>
        <div className="rating">
          <Rating rate={4} />
          <IoMdStar color="#ebbe8a" />
          <p>(122)</p>
        </div>
        <div className="price">
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            {product.new_price}
          </p>
          <p
            style={{
              fontSize: "16px",
              textDecoration: "line-through",
              color: "rgb(137, 131, 131)",
            }}
          >
            {product.old_price}
          </p>
        </div>
        <p style={{ fontSize: "13.5px" }}>
          Colorful clothes create a cheerful, bright and energetic impression.
          Colored clothing can cover a wide range of styles, from casual to
          formal, providing flexibility in appearance.
        </p>
        <div className="right-size">
          <h3>Select size</h3>
          <p style={{ fontSize: "14px" }}>S</p>
          <p style={{ fontSize: "14px" }}>M</p>
          <p style={{ fontSize: "14px" }}>L</p>
          <p style={{ fontSize: "14px" }}>XL</p>
          <p style={{ fontSize: "14px" }}>XXL</p>
        </div>
        <p>
          <span>Category</span> {product.category}, Clothes
        </p>
        <button>
          <IoAdd size={22} />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
