// ShoppingList.js
import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"; // Import the new Filter component

function ShoppingList({ items }) {
  // State to track the selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event handler for filter change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on the selected category
  const filteredItems = items.filter((item) => 
    selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
