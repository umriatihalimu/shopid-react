import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./Breadcrum.css";

// CARA KERJA TERIMA PROPERTY DARI COMPONENT PRODUCT
// property yg dikirim itu product ditangkap sama "props". skrng isinya product ="props".
// Sekarang isi dari product sdh bisa diakses caranya "console.log(props.product);"
// spy saat dipanggil lebih di p lebih singkat buat dlu variabel yg menampung object dari isinya props
// const { product } = props;

const Breadcrum = ({ product }) => {
  // const { product } = props;

  return (
    <div className="breadcrum">
      <p>Home</p>
      <AiOutlineRight />
      <p>Shop</p>
      <AiOutlineRight />
      <p>{product.category} </p>
      <AiOutlineRight />
      <p>{product.name} </p>
    </div>
  );
};

export default Breadcrum;
