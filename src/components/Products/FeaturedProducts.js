import React from "react";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/products";
import Loading from "../Loading";
import ProductList from "./ProductList";
export default function FeaturedProducts() {
  const { loading, products, featured } = React.useContext(ProductContext);
  if (loading) {
    return <Loading />;
  }

  return <ProductList title="Featured Products" products={featured} />;
}
