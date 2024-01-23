import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const CartItem = () => {
  const { getTotalCart, all_product, cartItem, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cart-item">
      <div className="cartitem-product">
        <table>
          <tr>
            <th>Products</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>

          {all_product.map((e, i) => {
            if (cartItem[e.id] > 0) {
              return (
                <tr>
                  <td>
                    <img src={e.image} alt="" />
                  </td>
                  <td>{e.name}</td>
                  <td>${e.new_price}</td>
                  <td>{cartItem[e.id]}</td>
                  <td>${e.new_price * cartItem[e.id]}</td>
                  <td>
                    <IoIosRemoveCircleOutline
                      size={24}
                      style={{ cursor: "pointer" }}
                      onClick={() => removeFromCart(e.id)}
                    />
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </table>
      </div>

      <div className="cartitem-down">
        <div className="cart-total">
          <h4>Cart Totals</h4>
          <div className="subtotal">
            <p>Subtotal</p>
            <p>${getTotalCart()}</p>
          </div>
          <hr />
          <div className="shipping">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="total">
            <p style={{ fontWeight: "600" }}>Total</p>
            <p>${getTotalCart()}</p>
          </div>
          <hr />
          <button>CHECKOUT</button>
        </div>
        <div>
          <p style={{ fontSize: "13px" }}>
            If you have a promo code, enter it here
          </p>
          <div className="promo-code">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

// {all_product.map((e) =>{
//   if (cartItem[e.id] > 0) {
//     return (
//       <div>
//         <img src={e.image} alt="" />
//         <p>{e.name}</p>
//         <p>{e.new_price}</p>
//         <button>{cartItem}</button>
//         <p>{e.new_price * cartItem[e.id]}</p>
//         <IoIosRemoveCircleOutline
//           onClick={() => removeFromCart(e.id)}
//         />
//       </div>
//     );
//   }
// })}
