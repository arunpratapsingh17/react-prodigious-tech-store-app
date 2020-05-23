import React from "react";
import { UserContext } from "../context/user";
import { cartContext } from "../context/cart";
import { Link } from "react-router-dom";
export default function LoginLink() {
  const { user, userLogout } = React.useContext(UserContext);
  const { clearCart } = React.useContext(cartContext);
  if (user.token) {
    return (
      <button
        className="login-btn"
        onClick={() => {
          userLogout();
          clearCart();
        }}
      >
        logout
      </button>
    );
  }
  return <Link to="/login">login</Link>;
}
