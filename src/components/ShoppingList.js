import React, { useState } from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import Item from "./Item";
import itemsData from "../data/items"; // your initial list

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(itemsData);

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  const visibleItems = items
    .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter search={search} onSearchChange={setSearch} />
      
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <ul className="Items">
        {visibleItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
