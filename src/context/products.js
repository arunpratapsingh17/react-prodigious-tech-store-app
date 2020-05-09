import React from "react";
export const ProductContext = React.createContext();
//Provider,Consumer,useContext()
//Provider will be returned by ProductProvider function,and then we will wrap the whole app around ProductProvider in index.js
export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState("false");
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
