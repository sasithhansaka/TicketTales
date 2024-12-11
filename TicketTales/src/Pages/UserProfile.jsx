import React, { useState } from "react";
import LoginComponent from "../Components/LoginComponent";
import RegisterComponents from "../Components/RegisterComponent";
import Navbar from "../Components/Navbar";
import "./UserProfile.css";
import Footer from "../Components/Footer";

// import RegisterComponent
const UserProfile = () => {
  const [step, setStep] = useState(1);
  const MoveToRegister = () => {
    setStep(step + 1);
  };

  const MoveToLogin = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <Navbar/>
      {step === 1 ? (
        <div>
          <LoginComponent />
          <div className="step-div">
          <p>Already registered? Click below to log in.</p>

          <button onClick={MoveToRegister}>Register</button>
          </div>

        </div>
      ) : (
        <div>
          <RegisterComponents />
          <div className="step-div">
          <p>Already registered? Click below to log in.</p>
          <button onClick={MoveToLogin}>Login</button>
          </div>   
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default UserProfile;
