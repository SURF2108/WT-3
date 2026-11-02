import React from "react";

function Food({ food, addToCart }) {
  return (
    <div className="food">
      <h3>{food.name}</h3>
      <p>Category: {food.category}</p>
      <p>Price: ₹{food.price}</p>
      <button onClick={() => addToCart(food)}>Add to Cart</button>
    </div>
  );
}

export default Food;