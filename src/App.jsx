import React from "react";
import Parent from "./components/Parent"; // ✅ correct
import "./style.css";

function App() {
  return (
    <div className="container">
      <h1>Student List App</h1>
      <Parent />
    </div>
  );
}

export default App;