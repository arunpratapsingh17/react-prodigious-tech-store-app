import React, { useContext } from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";
export default function Products() {
  const { products, loading } = useContext(ProductContext);
  if (loading) {
    return <Loading />;
  }
  return <ProductList title="Our Products" products={products} />;
}
