// cart context
import React from "react";
import localCart from "../utils/localCart";
export const cartContext = React.createContext();
export default function CartProvider({ children }) {
  const [cart, setCart] = React.useState(localCart);
  const [total, setTotal] = React.useState(0);
  const [cartItem, setCartItem] = React.useState(0);
  return <cartContext.Provider value="Hello">{children}</cartContext.Provider>;
}
