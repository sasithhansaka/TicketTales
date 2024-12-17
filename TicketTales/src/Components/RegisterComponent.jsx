import axios from "axios";
import React, { useState } from "react";
import "./RegisterComponent.css";

function RegisterComponents() {
  const [first_name, Set_first_name] = useState("");
  const [last_name, Set_last_name] = useState("");
  const [contact_number, Set_contact_number] = useState("");
  const [email, Set_email] = useState("");
  const [password, Set_password] = useState("");
  const [error, set_error] = useState(null);
  const [success, set_success] = useState(false); 

  const handle_first_name = (event) => Set_first_name(event.target.value);
  const handle_last_name = (event) => Set_last_name(event.target.value);
  const handle_contact_number = (event) =>
    Set_contact_number(event.target.value);
  const handle_email = (event) => Set_email(event.target.value);
  const handle_password = (event) => Set_password(event.target.value);

  const validateForm = () => {
    if (!first_name || !last_name || !contact_number || !email || !password) {
      set_error("All fields must be filled.");
      return false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      set_error("Invalid email format.");
      return false;
    }
    if (!/^\d{10}$/.test(contact_number)) {
      set_error("Contact number must be 10 digits.");
      return false;
    }
    if (password.length < 6) {
      set_error("Password must be at least 6 characters.");
      return false;
    }
    set_error(null);
    return true;
  };

  const saveRegisterUser = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const data = {
      first_name,
      last_name,
      contact_number,
      email,
      password,
    };

    try {
      await axios.post("http://localhost:8081/Save_user", data);
      set_success(true);
      setTimeout(() => set_success(false), 2000);
      Set_first_name("");
      Set_last_name("");
      Set_contact_number("");
      Set_email("");
      Set_password("");
    } catch (error) {
      console.log("Error while saving user:", error);
      set_error("Failed to register. Please try again later.");
    }
  };

  return (
    <div>
      {success && (
        <div className="success-popup">
          <h3>Registration Successful!</h3>
          <p>Welcome to TicketTales!</p>
        </div>
      )}
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={saveRegisterUser} className="register-form">
        <h4>TicketTales</h4>
        <h2>Register</h2>
        <p className="intro">
          Create your account and enjoy additional features and exclusive deals
        </p>
        <p className="text-label">First Name</p>
        <input
          type="text"
          onChange={handle_first_name}
          value={first_name}
          name="first_name"
          placeholder="Enter your first name"
          className="user-input-field"
        />
        <p className="text-label">Last Name</p>
        <input
          type="text"
          onChange={handle_last_name}
          value={last_name}
          placeholder="Enter your last name"
          name="last_name"
          className="user-input-field"
        />
        <p className="text-label">Contact Number</p>
        <input
          type="text"
          onChange={handle_contact_number}
          value={contact_number}
          placeholder="Enter your contact number"
          name="contact_number"
          className="user-input-field"
        />
        <p className="text-label">Email</p>
        <input
          type="email"
          onChange={handle_email}
          value={email}
          placeholder="Enter your email"
          name="email"
          className="user-input-field"
        />
        <p className="text-label">Password</p>
        <input
          type="password"
          onChange={handle_password}
          value={password}
          placeholder="Enter your password"
          name="password"
          className="user-input-field"
        />
        <button type="submit" className="Submit-register-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterComponents;
