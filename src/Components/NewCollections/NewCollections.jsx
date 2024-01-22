import React from "react";
import "./NewCollections.css";
// import Item from "../Item/Item";
// import new_collection from "../Assets/new_collection";
import SwiperContent from "../Swiper/Swiper";

const NewCollections = () => {
  return (
    <div className="new-collection">
      <h2>New Collections</h2>
      <hr />
      <SwiperContent />
      {/* <div className="collection-item">
        {new_collection.map((item, i) => {
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
      </div> */}
    </div>
  );
};

export default NewCollections;
