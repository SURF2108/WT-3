import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Online Food Ordering System</h1>
      <p>Order your favourite food online.</p>

      <h3>Food Categories</h3>
      <ul>
        <li>Pizza</li>
        <li>Burgers</li>
        <li>Indian Food</li>
        <li>Chinese Food</li>
      </ul>

      <Link to="/menu">
        <button>View Menu</button>
      </Link>
    </div>
  );
}

export default Home;