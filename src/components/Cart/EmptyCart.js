import React from "react";
import { Link } from "react-router-dom";
export default function EmptyCart() {
  return (
    <section className="empty-cart session">
      <h2>the cart is empty</h2>
      <Link to="/products" className="btn btn-primary">
        Fill The Cart
      </Link>
    </section>
  );
}
