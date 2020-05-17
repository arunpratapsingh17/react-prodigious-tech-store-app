// cart context
import React from "react";
import localCart from "../utils/localCart";
function getDataFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

export const cartContext = React.createContext();
export default function CartProvider({ children }) {
  const [cart, setCart] = React.useState(getDataFromLocalStorage);
  const [total, setTotal] = React.useState(0);
  const [cartItem, setCartItem] = React.useState(0);

  React.useEffect(() => {
    //Local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    //Cart Items
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
  const addToCart = (product) => {
    const { image, id, title, price } = product;
    const tempProduct1 = cart.find((item) => item.id === id);
    console.log("Ac");
    console.log(tempProduct1);

    if (tempProduct1) {
      increaseAmount(id);
    } else {
      const tempItem = { id, title, image, price, amount: 1 };
      console.log("Wdfert");

      console.log(tempItem);

      const tempCart = [...cart, tempItem];
      setCart(tempCart);
    }
  };
  const clearCart = () => {
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
