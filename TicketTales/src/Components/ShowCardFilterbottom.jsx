import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShowCard.css";

const ShowCardFilterbottom = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/AllEvents");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div style={{display:'flex',gap:'300px',marginLeft:'180px',marginTop:'150px',marginBottom:'300px'}}><div className="loader"></div><div className="loader"></div><div className="loader"></div><div className="loader"></div></div> ;
  if (error) return <p>{error}</p>;

  const currentMonth = new Date()
    .toLocaleString("default", { month: "long" })
    .toUpperCase();

  // const filterEvents = events.filter((event)=>{
  //      const isEvenetType= event.ticket_type && event.ticket_type==="Basic"
  //      return isEvenetType

  // });

  const LatestEightEvents = events.slice(-8);

  return (
    <div>
      <div className="clothe-card-container">
        {LatestEightEvents.length > 0 ? (
          LatestEightEvents.map((event) => (
            <div className="show-card" key={event.id}>
              {event.ticket_type === "Deals" ? (
                <div className="deal-card"></div>
              ) : (
                <div></div>
              )}

              {event.ticket_type === "Deals" ? (
                <div className="Deals-star">
                  <i class="fa-solid fa-star"></i>
                </div>
              ) : (
                <p></p>
              )}

              {event.show_date === currentMonth ? (
                <div className="Star-function">
                  <p>{event.show_date}</p>
                </div>
              ) : (
                <div></div>
              )}

              {event.image && (
                <img
                  src={`data:image/jpeg;base64,${event.image}`}
                  alt={event.title}
                />
              )}
              <div className="showcard-event-details">
                {event.ticket_type == "Deals" ? (
                  <h4 className="event-title">{event.title}-Deals</h4>
                ) : (
                  <h4 className="event-title">{event.title} </h4>
                )}
                <div style={{ display: "flex", gap: "5px", marginTop: "8px" }}>
                  <i class="fa-solid fa-calendar-days"></i>
                  <p className="event-date_time">{event.date_time}</p>
                </div>

                <div style={{ display: "flex", gap: "5px", marginTop: "6px" }}>
                  <i class="fa-solid fa-location-dot"></i>
                  <p className="event-venue">{event.venue}</p>
                </div>

                {event.ticket_type === "Deals" ? (
                  <div>
                    <p className="event-ticket_price">
                      <strong className="highlight">
                        {event.ticket_price.toFixed(2) - 1000} LKR
                      </strong>
                      <span
                        style={{
                          textDecoration: "line-through",
                          marginRight: "8px",
                          marginLeft: "4px",
                        }}
                      >
                        {event.ticket_price.toFixed(2)} LKR
                      </span>
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="event-ticket_price">
                      <strong className="highlight">
                        {event.ticket_price.toFixed(2)} LKR{" "}
                      </strong>
                      upwards
                    </p>
                  </div>
                )}

                {/* <div className="Star-function">
                  <p>{event.show_date}</p>
                </div> */}
              </div>

              {event.available_seats > 0 ? (
                <button className="Buy-ticket-button">Buy Ticket</button>
              ) : (
                <button className="sold-out-button">sold Out</button>
              )}
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  );
};

export default ShowCardFilterbottom;
