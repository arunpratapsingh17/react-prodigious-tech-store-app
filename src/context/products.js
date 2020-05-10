import React from "react";
import axios from "axios";
import url from "../utils/URL";
export const ProductContext = React.createContext();
//Provider,Consumer,useContext()
//Provider will be returned by ProductProvider function,and then we will wrap the whole app around ProductProvider in index.js
export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  React.useEffect(() => {
    setLoading(true);
    //Cleanup Function(It is necessary in useEffect function)
    axios.get(`${url}/products`).then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
    return () => {};
  }, []);
  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
