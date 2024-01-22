import React, { useContext } from "react";
import "./css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from "../Components/Item/Item";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import Breadcrum from "../Components/Breadcrum/Breadcrum";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); //shopContext berisi nilai all_product
  return (
    <div className="shop-category">
      <img className="shop-banner" src={props.banner} alt="" />

      <div className="shop-category-indexShort">
        <p>
          <span>Showing 1-6</span> of our all products
        </p>
        <div className="shop-category-short">
          <p>Short by</p>
          <RiArrowDropDownLine size={30} />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, i) => {
          if (item.category === props.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="shop-more">
        <p>Explore more</p>
        <MdOutlineKeyboardArrowRight size={20} />
      </div>
    </div>
  );
};

export default ShopCategory;
