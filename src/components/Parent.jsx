import React from "react";
import Child from "./Child"; // ✅ correct

function Parent() {
  const students = [
    { id: 1, name: "Arun", course: "React", isActive: true },
    { id: 2, name: "Priya", course: "Node", isActive: false },
    { id: 3, name: "Rahul", course: "JavaScript", isActive: true },
    { id: 4, name: "Sneha", course: "Python", isActive: false },
    { id: 5, name: "Kiran", course: "Java", isActive: true }
  ];

  return (
    <div>
      {students.map((student) => (
        <Child key={student.id} student={student} />
      ))}
    </div>
  );
}

export default Parent;