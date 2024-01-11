import React from "react";
import logo from "./images/logo.png";
import "./styles/App.css";

function APropos() {
  return (
    <div>
      <h1>A propos</h1>
      <img src={logo} className="logo" alt="logo" />
      <p>Contact : contact@stockintech_alternative.com</p>
    </div>
  );
}

export default APropos;
