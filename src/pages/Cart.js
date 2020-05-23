import React from "react";
import { cartContext } from "../context/cart";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";

export default function Cart() {
  const { user } = React.useContext(UserContext);
  console.log("user from cart page");
  console.log(user);
  const { total, cart } = React.useContext(cartContext);
  console.log("Henlo from Cart.js");
  console.log({ total, cart });
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section className="cart-items section">
      <h2>your cart</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2>Total:${total}</h2>
      {user.token ? (
        <Link to="/checkout" className="btn btn-primary btn-block">
          checkout
        </Link>
      ) : (
        <Link to="/login" className="btn btn-primary btn-block">
          login
        </Link>
      )}
    </section>
  );
}
