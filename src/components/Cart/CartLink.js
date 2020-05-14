import React from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cart";
export default function CartLink() {
  const { cartItem } = React.useContext(cartContext);
  return (
    <div className="cart-link-container">
      <Link to="/cart">cart</Link>
      <span className="cart-link-total">{cartItem}</span>
    </div>
  );
}
