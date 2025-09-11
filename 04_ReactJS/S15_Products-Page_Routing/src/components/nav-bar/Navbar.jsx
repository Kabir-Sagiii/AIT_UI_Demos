import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div id="brand">
        <h1>Dude'sMart</h1>
      </div>
      <div id="links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/profile">Profile</a>
        <a href="/contact">ContactUs</a>
      </div>
      <div id="icons">
        <i style={{ fontSize: "27px" }} className="bi bi-bag-check"></i>
        <i style={{ fontSize: "27px" }} className="bi bi-suit-heart-fill"></i>

        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
