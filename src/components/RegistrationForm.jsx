import React, { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";

    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email";
    }

    if (!form.phone) {
      err.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      err.phone = "Enter 10 digit number";
    }

    if (!form.password) {
      err.password = "Password required";
    } else if (form.password.length < 6) {
      err.password = "Min 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      err.confirmPassword = "Passwords do not match";
    }

    if (!form.address) err.address = "Address required";
    if (!form.city) err.city = "City required";
    if (!form.state) err.state = "State required";
    if (!form.country) err.country = "Country required";

    if (!form.zip) {
      err.zip = "Zip required";
    } else if (!/^\d{5,6}$/.test(form.zip)) {
      err.zip = "Invalid zip";
    }

    if (!form.agree) err.agree = "Accept terms";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registration Successful ✅");
      console.log(form);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <input name="name" placeholder="Name" onChange={handleChange} />
        <p>{errors.name}</p>

        <input name="email" placeholder="Email" onChange={handleChange} />
        <p>{errors.email}</p>

        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <p>{errors.phone}</p>

        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <p>{errors.password}</p>

        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
        <p>{errors.confirmPassword}</p>

        <input name="address" placeholder="Address" onChange={handleChange} />
        <p>{errors.address}</p>

        <input name="city" placeholder="City" onChange={handleChange} />
        <p>{errors.city}</p>

        <input name="state" placeholder="State" onChange={handleChange} />
        <p>{errors.state}</p>

        <input name="country" placeholder="Country" onChange={handleChange} />
        <p>{errors.country}</p>

        <input name="zip" placeholder="Zip Code" onChange={handleChange} />
        <p>{errors.zip}</p>

        <div>
          <input type="checkbox" name="agree" onChange={handleChange} />
          <label> I agree to terms</label>
        </div>
        <p>{errors.agree}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;