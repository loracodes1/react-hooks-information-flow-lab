// App.js
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header"; 
import itemData from "../data/items";

function App() {
  // State for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function for dark mode
  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Dynamic class name based on the state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header 
        isDarkMode={isDarkMode} 
        onDarkModeClick={handleDarkModeToggle} 
      />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
