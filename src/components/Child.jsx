import React from "react";

function Child({ student }) {
  return (
    <div className="card">
      <h2>{student.name}</h2>
      <p>Course: {student.course}</p>

      {/* Conditional Rendering */}
      <p>
        Status: {student.isActive ? "Active" : "Inactive"}
      </p>
    </div>
  );
}

export default Child;