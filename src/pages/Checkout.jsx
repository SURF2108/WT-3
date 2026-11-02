import React, { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(null);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const hasErrors = Object.values(errors).some(Boolean);

  const clearError = (field) => {
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    const nextErrors = {};
    const trimmedName = name.trim();
    const trimmedAddress = address.trim();
    const trimmedPhone = phone.trim();

    if (trimmedName.length < 2) {
      nextErrors.name = "Enter your name (at least 2 characters).";
    }

    if (trimmedAddress.length < 10) {
      nextErrors.address =
        "Enter a delivery address with at least 10 characters.";
    }

    if (!/^(?:\+91[\s-]?)?[6-9]\d{9}$/.test(trimmedPhone)) {
      nextErrors.phone =
        "Enter a valid 10-digit Indian mobile number, optionally with +91.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setConfirmation({ name: trimmedName, total });
    setCart([]);
  };

  if (confirmation) {
    return (
      <div className="page">
        <h1>Order confirmed</h1>
        <p className="form-success" role="status" aria-live="polite">
          Thank you, {confirmation.name}! Your order for ₹{confirmation.total} has
          been placed successfully.
        </p>
        <Link to="/menu">Back to Menu</Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="page">
        <h1>Checkout</h1>
        <p>Your cart is empty. Add items before checking out.</p>
        <Link to="/menu">Go to Menu</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Checkout</h1>

      <form onSubmit={placeOrder} noValidate>
        {hasErrors && (
          <p className="form-error-summary" role="alert">
            Please correct the highlighted fields before placing your order.
          </p>
        )}

        <label htmlFor="checkout-name">Name</label>
        <input
          id="checkout-name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "checkout-name-error" : undefined}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            clearError("name");
          }}
        />
        {errors.name && (
          <p className="form-error" id="checkout-name-error">{errors.name}</p>
        )}

        <label htmlFor="checkout-address">Address</label>
        <textarea
          id="checkout-address"
          autoComplete="street-address"
          aria-invalid={Boolean(errors.address)}
          aria-describedby={
            errors.address ? "checkout-address-error" : undefined
          }
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            clearError("address");
          }}
        />
        {errors.address && (
          <p className="form-error" id="checkout-address-error">
            {errors.address}
          </p>
        )}

        <label htmlFor="checkout-phone">Phone</label>
        <input
          id="checkout-phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          maxLength={16}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "checkout-phone-error" : undefined}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            clearError("phone");
          }}
        />
        {errors.phone && (
          <p className="form-error" id="checkout-phone-error">
            {errors.phone}
          </p>
        )}

        <p className="checkout-total">Total Amount: ₹{total}</p>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;