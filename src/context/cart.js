// cart context
import React from "react";
import localCart from "../utils/localCart";
export const cartContext = React.createContext();
export default function CartProvider({ children }) {
  const [cart, setCart] = React.useState(localCart);
  const [total, setTotal] = React.useState(0);
  const [cartItem, setCartItem] = React.useState(0);

  React.useEffect(() => {
    let newcartItem = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItem(newcartItem);
    let newTotal = cart.reduce((total, cartItem) => {
      return (total = total + cartItem.amount * cartItem.price);
    }, 0);
    setTotal(newTotal);
  }, [cart]);
  const increaseAmount = (id) => {
    let newCart = cart.map((item) => {
      if (item.id === id) {
        item.amount = item.amount + 1;
        return item;
      } else {
        item.amount = item.amount;
        return item;
      }
    });
    setCart(newCart);
  };
  const removeitem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeitem(id);
    } else {
      let newCart = cart.map((item) => {
        if (item.id === id) {
          item.amount = item.amount - 1;
          return item;
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };
  const addToCart = (e) => {
    console.log("Increased item from context");
  };
  const clearCart = (e) => {
    setCart([]);
  };
  return (
    <cartContext.Provider
      value={{
        cart,
        total,
        cartItem,
        removeitem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
