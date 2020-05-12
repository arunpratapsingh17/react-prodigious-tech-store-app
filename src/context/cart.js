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
  const increseAmount = (e) => {
    console.log("Increased item from context");
  };
  const removeitem = (e) => {
    console.log("Increased item from context");
  };
  const decreaseAmount = (e) => {
    console.log("Increased item from context");
  };
  const addToCart = (e) => {
    console.log("Increased item from context");
  };
  const clearCart = (e) => {
    console.log("Increased item from context");
  };
  return (
    <cartContext.Provider
      value={{
        cart,
        total,
        cartItem,
        removeitem,
        increseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
