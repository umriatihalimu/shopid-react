import React from "react";
import "./RelatedProduct.css";
import data_related from "../Assets/data_related";
import Item from "../Item/Item";

const RelatedProduct = () => {
  return (
    <div className="related-product">
      <h3>Related Product</h3>

      <div className="related-item">
        {data_related.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
