import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart, changeQuantity }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="page">
        <h1>Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/menu">Go to Menu</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Cart</h1>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <span>
            {item.name} - ₹{item.price}
          </span>

          <span>
            <button onClick={() => changeQuantity(item.id, -1)}>-</button>
            {" "}{item.quantity}{" "}
            <button onClick={() => changeQuantity(item.id, 1)}>+</button>
          </span>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;