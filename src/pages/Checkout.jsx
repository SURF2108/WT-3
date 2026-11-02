import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    alert("Order placed successfully!");
    setCart([]);
    navigate("/");
  };

  return (
    <div className="page">
      <h1>Checkout</h1>

      <form onSubmit={placeOrder}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          inputMode="tel"
          pattern="\+?[0-9]{7,15}"
          maxLength={16}
          title="Enter 7 to 15 digits, optionally preceded by +."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <p>Total Amount: ₹{total}</p>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;