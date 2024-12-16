import React, { useEffect } from "react";
import ShowCard from "../Components/ShowCardFilterMonth";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import ShowCardFilterbottom from "../Components/ShowCardFilterbottom";
import DealsShowCard from "../Components/DealsShowCard";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ShowCardAllEvents from "../Components/ShowCardAllEvents";

const HomePage = () => {
  const naigate = useNavigate();
  const email = sessionStorage.getItem("email");

  console.log(email);

  const GotoEventPAge = () => {
    naigate("/events");
  };

  const GotoRegisterPage = () => {
    naigate("/UserProfile");
  };

  const GotoAdminPage = () => {
    naigate("/AdminPage");
  };

  return (
    <div>
      <div className="Navbar">
        <Navbar />
        {/* <button onClick={GotoRegisterPage}>Register</button> */}
      </div>
      <div className="hero-section">
        <div className="hero-header">
          <h2>Ready to Book Your Ticket?</h2>
          <p>
            Don't miss out on the experience! Book your ticket today and secure
            your spot at the event.
          </p>
          <button>Best Deals</button>
        </div>
        <div className="hero-image">
          <svg
            width="273"
            height="261"
            viewBox="0 0 420 400"
            xmlns="http://www.w3.org/2000/svg"
            style={{ backgroundColor: "#111111" }}
          >
            {/* Puzzle Piece Paths */}
            <path
              d="M0 0 H200 C210 50 240 50 250 0 H400 V200 C350 210 350 240 400 250 V400 H200 C190 350 160 350 150 400 H0 V200 C50 190 50 160 0 150 Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="Show-card-Header">
        <p>
          what's trending <strong class="highlight">this month</strong>
        </p>
        <button className="this-month-button ">This Month</button>
        <button onClick={GotoEventPAge} className="View-button">
          View More
          <i
            class="fa-solid fa-angle-right"
            style={{ fontSize: "15px", marginLeft: "7px" }}
          ></i>
        </button>
      </div>

      <ShowCard />

      <div className="Show-card-Header">
        <p>My Tickets Deals</p>

        <button
          onClick={GotoEventPAge}
          className="View-button"
          style={{ marginLeft: "880px" }}
        >
          View More
          <i
            class="fa-solid fa-angle-right"
            style={{ fontSize: "15px", marginLeft: "7px" }}
          ></i>
        </button>
      </div>
      <DealsShowCard />

      <div className="e-ticket-resend-div">
        <div style={{ width: "570px", marginLeft: "50px" }}>
          <h2>RESEND YOUR E TICKETS</h2>
          <p>
            The "Resend Your E-Tickets" option allows users to effortlessly
            retrieve previously purchased tickets by sending a duplicate copy to
            their registered email address. This feature ensures that customers
            can easily regain access to their tickets in case they were deleted,
            misplaced, or not initially received. 
          </p>
          <button>Register now</button>
        </div>
        <img src="./src/Images/hero-illo.webp" />
      </div>

      <div className="Show-card-Header">
        <p>Events</p>

        <button
          onClick={GotoEventPAge}
          className="View-button"
          style={{ marginLeft: "1020px" }}
        >
          View More
          <i
            class="fa-solid fa-angle-right"
            style={{ fontSize: "15px", marginLeft: "7px" }}
          ></i>
        </button>
      </div>

      <div className="Search-container"></div>
      <ShowCardFilterbottom />

      <button onClick={GotoAdminPage}>Admin</button>

      <Footer />
    </div>
  );
};

export default HomePage;
