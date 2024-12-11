import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminEventComponent() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(()=>{
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/AllEvents");
        setEvents(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;



  return (
    <div>
    <h2>Admin Event Management</h2>
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Event ID</th>
          <th>Event Name</th>
          <th>Event Date</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {events.length > 0 ? (
          events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.show_date}</td>
              <td>{event.venue}</td>
              <td>
                  <button onClick={() => handleDelete(event.id)}>Delete</button>
                </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              No events found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  )
}

export default AdminEventComponent
