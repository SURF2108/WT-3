import React from "react";
import Food from "../components/Food";

const foods = [
  { id: 1, name: "Pizza", category: "Pizza", price: 200 },
  { id: 2, name: "Burger", category: "Burger", price: 120 },
  { id: 3, name: "Veg Biryani", category: "Indian", price: 180 },
  { id: 4, name: "Masala Dosa", category: "Indian", price: 100 },
  { id: 5, name: "Fried Rice", category: "Chinese", price: 150 },
  { id: 6, name: "Noodles", category: "Chinese", price: 140 }
];

function Menu({ addToCart }) {
  return (
    <div className="page">
      <h1>Menu</h1>

      <div className="food-list">
        {foods.map((food) => (
          <Food key={food.id} food={food} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Menu;