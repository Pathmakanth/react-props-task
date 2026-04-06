import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Profile from "./components/Profile";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <Profile />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;