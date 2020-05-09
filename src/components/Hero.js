import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>think,code,deploy</h1>
        <p>emrace your choices-we do</p>
        {children}
      </div>
    </div>
  );
}
