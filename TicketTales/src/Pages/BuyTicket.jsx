import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BuyTicket.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function BuyTicket() {
  const [event, Set_event] = useState(null);
  const [error, setError] = useState(null);
  const email = sessionStorage.getItem("email");
  const location = useLocation();

  const navigate = useNavigate();

  const [popupcontent, setPopupContent] = useState(null);
  const [popupvisible, setIsPopupVisible] = useState(false);

  const { eventid } = location.state || {};

  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  const handleIncrease = () => {
    if (event && ticketQuantity < event.available_seats) {
      setTicketQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (ticketQuantity > 1) {
      setTicketQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const GotoRegisterPage = () => {
    navigate("/UserProfile");
  };

  const order_date = new Date().toLocaleDateString();

  useEffect(() => {
    if (eventid) {
      console.log(eventid);
      const fetchEvents = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/EventById/${eventid}`
          );
          Set_event(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };
      fetchEvents();
    }
  }, [eventid]);

  useEffect(() => {
    if (event) {
      setTotalCost(ticketQuantity * event.ticket_price);
    }
  }, [ticketQuantity, event]);

  console.log(email);

  const showPopup = (event) => {
    setPopupContent(event);
    setIsPopupVisible(true);
    setTicketQuantity(1);
  };

  const closepopup = () => {
    setIsPopupVisible(false);
  };

  const confirmbooking = async () => {
    if (email === null) {
      console.log("require");
      GotoRegisterPage();
    }

    const data = {
      event_id: event.id,
      title: event.title,
      email,
      num_tickets: ticketQuantity,
      total_price: totalCost,
      order_date,
    };

    // event.available_seats - ticketQuantity;

    try {
      const response = await axios.post(
        "http://localhost:8083/orderSave",
        data
      );

      const emailResponse = await axios.post(
        "http://localhost:8082/send-email",
        {
          email,
          subject: `Ticket Confirmation: ${event.title}`,
          message: `
    Hello ${email},

    🎉 Your Ticket Order has been Confirmed! 🎉

    Thank you for purchasing tickets to the ${
      event.title
    }event. We are excited to have you join us! Here are your ticket details:

    📅 Event Title: ${event.title}
    🗓️ Event Date & Time:${event.date_time}
    📍 Venue: ${event.venue}

    🛒 Your Order Details:
    -----------------------------------
    ➡️ Ticket Quantity: ${ticketQuantity}
    ➡️ Total Price:${totalCost.toFixed(2)} LKR
    ➡️ Order Date: ${order_date}

    📅 Important Information:
    ------------------------------
    - Ticket Validity:Each ticket is valid for one person and must be presented at the entrance.
    - Refunds and Exchanges: All tickets are non-refundable, unless the event is canceled or rescheduled.
    - Event Policies:For your convenience, please check out the event's policies for entry, re-entry, and prohibited items.

    🛍️ Ticket Delivery:
    -------------------------
    Your tickets will be available for collection at the venue or will be sent to your registered email closer to the event date. Make sure to keep your tickets safe!

    🎁 Additional Information:
    ------------------------------
    - Access your booking anytime by visiting your account on our platform.
    - Don't miss out on event updates follow us on social media or subscribe to our newsletter for the latest information.

    We hope you have an amazing time at the event! 🎶🎤

    Best regards,
    The ${event.title} Team

    📧 For any inquiries, reach out to us :+94 001 001 222

    ------------------------
    TicketTales.lk
  `,
        }
      );

      // const updatetableresponse = await axios.post("http://localhost:8083/orderSave",updateticket);
      // alert("update succes ");
    } catch (error) {
      console.log("eror updting deatils", error);
    }

    console.log(data);
  };

  return (
    <div>
      <Navbar />
      {event ? (
        <div className="details-container">
          {popupvisible && (
            <div className="buy-now-popup-container">
              <div className="buy-now-div">
                {popupcontent && (
                  <div>
                    <p className="list-0"> Ticket details</p>
                    <p className="list-1">
                      Tickets are not reserved yet. To secure your tickets,
                      click, "Confirm tickets"
                    </p>
                    <hr></hr>
                    <div className="entrance-ticket-quntity-div">
                      <div>
                        <p className="list-3">Genaral Entrance</p>
                        <p className="list-4">({event.ticket_price})LKR</p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          marginTop: "6px",
                        }}
                      >
                        <button
                          onClick={handleDecrease}
                          disabled={ticketQuantity === 1}
                          className="circle-div"
                        >
                          -
                        </button>
                        <p className="tickt-quntity-text">{ticketQuantity}</p>

                        <button
                          onClick={handleIncrease}
                          disabled={ticketQuantity === event.available_seats}
                          className="circle-div"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <hr></hr>

                <div className="order-confirm-div">
                  <div>
                    <p>Subtotal</p>
                    <p>{ticketQuantity} Ticket(s)</p>
                  </div>
                  <div>
                    <p className="totalcost-text">{totalCost.toFixed(2)} LKR</p>
                  </div>
                </div>
                <div className="confirm-close-div">
                  <button onClick={closepopup} className="close-button">
                    close
                  </button>
                  <button onClick={confirmbooking} className="confirm-button">
                    confirm
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="TicketBuy-header-conatiner">
            <p className="event-title">{event.title}</p>
            <div className="header-details-under-div">
              <div className="header-details-under-div">
                <i class="fa-solid fa-calendar-days"></i>
                <p className="">{event.date_time}</p>
              </div>
              <div className="header-details-under-div">
                <i class="fa-solid fa-location-dot"></i>
                <p className="">{event.venue}</p>
              </div>
            </div>
          </div>
          <div className="ticket-buy-conayiner">
            <div className="detiails-container-ticket-buy">
              <p className="show-description-title">{event.title}</p>
              <p className="show-description">{event.show_description}</p>
              <div className="ticket-policies">
                <h1>
                  <strong>Ticket Policies</strong>
                </h1>
                <ul>
                  <li>
                    <strong>Ticket Validity:</strong> Each ticket is valid for
                    one person only and must be presented for entry.
                  </li>
                  <li>
                    <strong>Refunds and Exchanges:</strong> Tickets are
                    non-refundable and non-transferable unless the event is
                    canceled or rescheduled.
                  </li>
                  <li>
                    <strong>Age Restrictions:</strong> Children under 12 years
                    must be accompanied by an adult. Entry for infants may
                    require a specific ticket or be free—please confirm with the
                    organizers.
                  </li>
                  <li>
                    <strong>Entry and Re-entry:</strong> Re-entry to the venue
                    is not permitted. Once you exit, a new ticket will be
                    required for re-entry.
                  </li>
                  <li>
                    <strong>Lost Tickets:</strong> Lost or stolen tickets cannot
                    be reissued. Please keep your ticket secure.
                  </li>
                  <li>
                    <strong>Prohibited Items:</strong> No outside food,
                    beverages, weapons, or prohibited substances are allowed.
                    Bags may be subject to security checks.
                  </li>
                  <li>
                    <strong>Event Cancellation:</strong> In case of
                    cancellation, ticket holders will be notified, and a refund
                    or alternate arrangements will be provided.
                  </li>
                </ul>
                <h1>
                  <strong>Return Policies</strong>
                </h1>
                <ul>
                  <li>
                    <strong>Non-Refundable Tickets:</strong> All ticket
                    purchases are final and non-refundable, except in the case
                    of event cancellation.
                  </li>
                  <li>
                    <strong>Transfer of Tickets:</strong> Tickets may be
                    transferred to another individual, subject to the festival’s
                    terms and conditions.
                  </li>
                  <li>
                    <strong>Event Cancellation:</strong> In the event of
                    cancellation, ticket holders will be eligible for a full
                    refund or a reschedule option.
                  </li>
                  <li>
                    <strong>Rescheduled Events:</strong> If the festival is
                    postponed, purchased tickets will be valid for the
                    rescheduled date. Refunds will not be issued unless
                    explicitly stated by the organizers.
                  </li>
                  <li>
                    <strong>Lost or Stolen Tickets:</strong> The festival
                    organizers are not responsible for lost or stolen tickets.
                    Ensure you keep your ticket secure.
                  </li>
                </ul>
              </div>
            </div>
            <div className="ticket-container">
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
              </div>
              {event.available_seats > 0 ? (
                <button
                  onClick={() => showPopup(event)}
                  className="Buy-ticket-button"
                >
                  Buy ticket
                </button>
              ) : (
                <button
                  onClick={() => showPopup(event)}
                  className="sold-out-button"
                >
                  sold Out
                </button>
              )}
              
            </div>
          </div>
        </div>
      ) : (
        <p>jfevb </p>
      )}
      <Footer />
    </div>
  );
}

export default BuyTicket;
