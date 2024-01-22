import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/Description/Description";

const Product = () => {
 
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Description />
    </div>
  );
};

// CARA KERJA KIRIM PROPERTY KE COMPONENT BREADCRUM
// Breadcrum mengirim {}/kurawal untuk bungkusan dari properti atau objek.
// Di komponen breadcrump ditangkap dalam bentuk "props"
// klo di console.log(props isinya adalah objek yg di kurung kurawal tadi)

// jadi kalo dari contoh dibawah ini nama propertynya adlh "product" isinya {product} atau idnya. kemudian dikirim ke component breadcrump
// <div>
//   <Breadcrum product={product} />
// </div>

export default Product;
