import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1 className="hero-title">think,code,deploy</h1>
        <p className="hero-subtitle">emrace your choices-we do</p>
        {children}
      </div>
    </div>
  );
}
