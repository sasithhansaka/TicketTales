import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "./ProfilePage.css";
import axios from "axios";

function ProfilePage() {
  const [user, setUser] = useState(null); // Default to null for better loading handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const email = sessionStorage.getItem("email");

  useEffect(() => {
  
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/detailsByemail/${email}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Failed to fetch user details"); // Use a string for better rendering
      } finally {
        setLoading(false); 
      }
    };

    fetchdata();
  }, [email]);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          gap: "300px",
          marginLeft: "180px",
          marginTop: "150px",
          marginBottom: "300px",
        }}
      >
        <div className="loader"></div>
      </div>
    );

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="Profile-page-container">
      <Navbar />

      <h3>Profile</h3>
      <div>
        <button>
          <i className="fa-regular fa-user"></i>
          My Details
        </button>
        <button>
          <i className="fa-solid fa-ticket"></i>
          Booking History
        </button>
      </div>

      <div className="user-details-div">
        {user ? (
          <div>
            <p>Full name</p>
            <p>{user.first_name} {" "} {user.last_name}</p>
            <p>Contact number</p>
            <p>{user.contact_number}</p>
            <p>email</p>
            <p>{user.email}</p>

          </div>
        ) : (
          <p></p>
        )}
      </div>

      <div className="booking div"></div>
    </div>
  );
}

export default ProfilePage;
