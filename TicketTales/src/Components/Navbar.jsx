import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar =  () => {
  const email = sessionStorage.getItem("email");

    const navigate = useNavigate();

    const handleNavigate = (path) =>{
        navigate(path)
    } 
    return (
    <div className="">
    <nav className="nav">
      <span className="logo">TICketTales</span>
      <ul className="nav-features">
        <li className="activeTab">
          <a href="" onClick={() => handleNavigate("/")}>
            Home
          </a>
        </li>
        <li style={{display:'flex',gap:'4px'}}>
          <a href="" onClick={() => handleNavigate("/events")}>
            Events
          </a>
          <i class="fa-solid fa-angle-down" style={{marginTop:'7px'}}></i>        </li>
        <li>
          <a href="" onClick={() => handleNavigate("/events")}>
            Deals
          </a>
        </li>

        <li>
          <a href="" onClick={() => handleNavigate("/UserProfile")}>
            My Account
          </a>
        </li>
      </ul>
        {/* <i
          className="fa-regular fa-user"
          onClick={() => handleNavigate("/UserProfile")}
        ></i> */}
      {/* </div> */}



     {email===null?(
      <div className='else-sign-in-div'>
        <button className='register-button'>Register</button>
        <button className='sign-in-button'>Sign in</button>
      </div>
     ):(
      <p>done</p>
     )}
      
    </nav>
  </div>
  )
}

export default Navbar
