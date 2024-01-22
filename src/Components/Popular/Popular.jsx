import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
import data_product from "../Assets/data";

const Popular = () => {
  return (
    <div className="popular">
      <h2>Popular In Women</h2>
      <hr />
      <div className="popular-item ">
        {data_product.map((item, i) => {
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
        })}
      </div>
      {/* <Item /> */}
    </div>
  );
};

export default Popular;
