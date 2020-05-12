// cart context
import React from "react";
import localCart from "../utils/localCart";
export const cartContext = React.createContext();
export default function CartProvider({ children }) {
  const [cart, setCart] = React.useState(localCart);
  const [total, setTotal] = React.useState(0);
  const [cartItem, setCartItem] = React.useState(0);
  console.log("Henlo from czrt context");
  console.log(cart, total);
  return (
    <cartContext.Provider value={{ cart, total, cartItem }}>
      {children}
    </cartContext.Provider>
  );
}
