import React, { useEffect, useState } from "react";
import "./EventsPage.css";
import ShowCardAllEvents from "../Components/ShowCardAllEvents";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function EventsPage() {
  const email = sessionStorage.getItem("email");
  const [filter, setFilter] = useState("All");

  console.log(email);

  const handleFilterChange = (filter_type) => {
    setFilter(filter_type);
  };

  return (
    <div className="Body-container">
   <Navbar/>

      <div className="header-container">
        <p>Events</p>
      </div>
      <div className="all-events-divider-container">
        <button
          className={`all-events-tag ${filter === "All" ? "active" : ""}`}
          onClick={() => handleFilterChange("All")}
        >
          All Events
        </button>
        <button
          className={`all-events-tag ${filter === "Deals" ? "active" : ""}`}
          onClick={() => handleFilterChange("Deals")}
        >
          Events Deals
        </button>
        <button
          className={`all-events-tag ${filter === "This_month" ? "active" : ""}`}
          onClick={() => handleFilterChange("This_month")}
        >
          This Month
        </button>
        <button
          className={`all-events-tag ${filter === "Educational" ? "active" : ""}`}
          onClick={() => handleFilterChange("Educational")}
        >
          Educational
        </button>
      </div>

      <ShowCardAllEvents filter={filter} />
      <Footer />
    </div>
  );
}

export default EventsPage;
