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
    const {
      image: { url },
      title,
      price,
      description,
    } = product;
    console.log(title);

    return (
      <section className="single-product">
        <img
          src={url}
          alt="image of single product"
          className="single-product-image"
        />
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              //Add to cart
              history.push("/cart");
            }}
          >
            add to cart
          </button>
        </article>
      </section>
    );
  } else {
    return <h1>Chutiya mat bana bc</h1>;
  }
}
