import React, { useReducer } from "react";
import "../style.css";

// Initial State
const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  country: "",
  zip: "",
  dob: "",
  gender: "",
};

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handle Change
  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="form-container">
      <h2>Registration Form (useReducer)</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={state.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={state.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" value={state.phone} onChange={handleChange} />
        <input name="address" placeholder="Address" value={state.address} onChange={handleChange} />
        <input name="city" placeholder="City" value={state.city} onChange={handleChange} />
        <input name="state" placeholder="State" value={state.state} onChange={handleChange} />
        <input name="country" placeholder="Country" value={state.country} onChange={handleChange} />
        <input name="zip" placeholder="Zip Code" value={state.zip} onChange={handleChange} />

        <input type="date" name="dob" value={state.dob} onChange={handleChange} />

        <select name="gender" value={state.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => dispatch({ type: "RESET" })}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;