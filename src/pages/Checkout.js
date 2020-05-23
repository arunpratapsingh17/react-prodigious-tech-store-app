import React from "react";
import { UserContext } from "../context/user";
import { cartContext } from "../context/cart";
import { useHistory } from "react-router-dom";
import EmptyCart from "../components/Cart/EmptyCart";
//react-stripe-element
import submitOrder from "../strapi/submitOrder";
export default function Checkout(props) {
  const { cart, total, clearCart } = React.useContext(cartContext);
  const { alert, showAlert, hideAlert, user } = React.useContext(UserContext);
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const isEmpty = !name || alert.show;
  async function handleSubmit(e) {
    e.preventDefault();
  }
  if (cart.length < 1) {
    return <EmptyCart />;
  }
  return (
    <section className="section form">
      <h2 className="section-title">checkout</h2>
      <form className="checkout-form">
        <h3>
          order total:<span>{total}</span>
        </h3>
        {/* Single input */}
        <div className="form-control">
          <label htmlFor="name">your name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        {/* End of Single input */}
        {/* Card ELement */}
        <div className="stripe-input">
          <label htmlFor="card-element">Credit Or Debit Card</label>
          <p className="stripe-info">
            Test Using this credit card:<span> 4242 4242 4242 4242 </span>
            <br />
            enter 5 digit for the zipcode
            <br />
            enter 3 digit for the CVC
          </p>
        </div>
        {/*End of Card ELement */}
        {/* STRIPE ELEMENTS */}
        {/* Stripe Errors */}
        {error && <p className="form-empty">{error}</p>}
        {/* Empty value */}
        {isEmpty ? (
          <p className="form-empty">please fill out name field</p>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary btn-block"
          >
            submit
          </button>
        )}
      </form>
    </section>
  );
}
