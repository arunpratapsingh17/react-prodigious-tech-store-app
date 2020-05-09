import React from "react";
import Loading from "../assets/loading.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h2>loading...</h2>
      <img src={Loading} alt="Loading" />
    </div>
  );
}
