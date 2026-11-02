import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart((currentCart) => {
      const item = currentCart.find((x) => x.id === food.id);

      if (item) {
        return currentCart.map((x) =>
          x.id === food.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      }

      return [...currentCart, { ...food, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((x) => x.id !== id));
  };

  const changeQuantity = (id, change) => {
    setCart((currentCart) =>
      currentCart
        .map((x) =>
          x.id === id ? { ...x, quantity: x.quantity + change } : x
        )
        .filter((x) => x.quantity > 0)
    );
  };

  return (
    <>
      <Navbar cartCount={cart.reduce((a, x) => a + x.quantity, 0)} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              changeQuantity={changeQuantity}
            />
          }
        />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}

export default App;