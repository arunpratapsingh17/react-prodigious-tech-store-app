import React, { useContext } from "react";
import { ProductContext } from "../context/products";
export default function Products() {
  const { products, loading } = useContext(ProductContext);
  console.log(products);

  return <h1>hello from products page</h1>;
}
