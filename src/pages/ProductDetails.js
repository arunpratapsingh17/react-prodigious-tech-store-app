import React, { useContext } from "react";
import { ProductContext } from "../context/products";
import { useConext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(id));
  if (products.length === 0) {
    return <Loading />;
  }
  if (product) {
    console.log(product);
    return <h1>hello from product details page</h1>;
  } else {
    return <h1>Chutiya mat bana bc</h1>;
  }
}
