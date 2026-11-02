import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div className="navbar">
      <h2>Online Food Ordering</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </div>
  );
}

export default Navbar;