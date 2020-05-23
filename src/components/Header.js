import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import CartLink from "./Cart/CartLink";
import LoginLink from "../components/LoginLink";
import { UserContext } from "../context/user";
export default function Header() {
  const { user } = React.useContext(UserContext);
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            {user.token && (
              <l1>
                <Link to="/checkout">checkout</Link>
              </l1>
            )}
          </div>
          <div>
            <li>
              <CartLink />
            </li>
            <li>
              <LoginLink />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
