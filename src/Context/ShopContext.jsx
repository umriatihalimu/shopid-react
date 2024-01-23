import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

// fungsi untuk nilai awal cartnya yaitu 0
const getDefaultCart = () => {
  let cart = {}; // Membuat objek kosong untuk mewakili keranjang belanja

  // Menggunakan loop untuk menetapkan nilai awal 0 pada setiap item dalam keranjang
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0; //inisialisasi nilai awal tiap cartnya item 0
  }
  return cart; // Mengembalikan objek keranjang belanja yang telah diinisialisasi
};

// untuk global props spy bisa pake isi dari all_product (propertinya)
const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log(cartItem);
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCart = () => {
    let totalCart = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalCart += itemInfo.new_price * cartItem[item];
      }
    }
    return totalCart;
  };

  const getTotalCartItem = () => {
    let cart = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        cart += cartItem[item];
      }
    }
    return cart;
  };

  const contextValue = {
    getTotalCart,
    getTotalCartItem,
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
