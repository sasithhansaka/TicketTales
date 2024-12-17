import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginComponent.css";


const LoginComponent = () => {
  const [email, Set_email] = useState("");
  const [password, Set_password] = useState("");
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate();

  const Handle_email = (event) => Set_email(event.target.value);

  const Handle_password = (event) => Set_password(event.target.value);

  const HandleLogin_user = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Enter all details");
      return;
    }

    const data = { email, password };

    try {
      const response = await axios.post("http://localhost:8081/login", data);
      sessionStorage.setItem("email", email);
      setShowPopup(true); 

      setTimeout(() => {
        setShowPopup(false);
        navigate("/");
      }, 2000);
    } catch (error) {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      {showPopup && ( 
        <div className="success-popup">
          <h3>Login Successful!</h3>
          <p>Redirecting...</p>
        </div>
      )}

      <form onSubmit={HandleLogin_user} className="register-form">
        <h4>TicketTales</h4>
        <h2>Welcome Back</h2>
        <p className="intro">
          Create your account and enjoy additional features and exclusive deals
        </p>
        <p className="text-label">Email</p>
        <input
          type="text"
          onChange={Handle_email}
          value={email}
          placeholder="Enter your email"
          name="email"
          className="user-input-field"
        ></input>
        <p className="text-label">Password</p>
        <input
          type="text"
          onChange={Handle_password}
          value={password}
          name="password"
          placeholder="Enter your password"
          className="user-input-field"
        ></input>
        <button type="submit" className="Submit-register-button">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
