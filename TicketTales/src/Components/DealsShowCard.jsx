import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShowCard.css";
import { useNavigate } from "react-router-dom";

const DealsShowCard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  const currentMonth = new Date()
    .toLocaleString("default", { month: "long" })
    .toUpperCase();

    const GotoTicketBuy = (eventid) => {
      console.log("click");
      navigate("/PurchaseTicket", { state: { eventid } });
    };

  const filterEvents = events.filter((event) => {
    const isEvenetType = event.ticket_type && event.ticket_type === "Deals";
    return isEvenetType;
  });
  const LatestEightEvents = filterEvents.slice(0, 4);
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
                        {(event.ticket_price.toFixed(2)-1000)} LKR
                      </strong>
                      <span
                        style={{
                          textDecoration: "line-through",
                          marginRight: "8px",
                          marginLeft:'4px'
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
                <button
                  onClick={() => GotoTicketBuy(event.id)}
                  className="Buy-ticket-button"
                >
                  Buy ticket
                </button>
              ) : (
                <button
                  onClick={() => GotoTicketBuy(event.id)}
                  className="sold-out-button"
                >
                  sold Out
                </button>
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

export default DealsShowCard;
