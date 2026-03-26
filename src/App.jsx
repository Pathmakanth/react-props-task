import React from "react";
import "./style.css";

function App() {
  const users = [
    {
      id: 1,
      name: "Ravi Kumar",
      email: "ravi@gmail.com",
      city: "Chennai",
      age: 25,
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Meena Sharma",
      email: "meena@gmail.com",
      city: "Mumbai",
      age: 28,
      phone: "9876501234",
    },
    {
      id: 3,
      name: "Arun Raj",
      email: "arun@gmail.com",
      city: "Bangalore",
      age: 23,
      phone: "9123456780",
    },
    {
      id: 4,
      name: "Priya Singh",
      email: "priya@gmail.com",
      city: "Delhi",
      age: 30,
      phone: "9988776655",
    },
    {
      id: 5,
      name: "John David",
      email: "john@gmail.com",
      city: "Hyderabad",
      age: 27,
      phone: "9001122334",
    },
  ];

  return (
    <div className="container">
      <h1>User List</h1>

      <div className="card-container">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.city}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;