import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminEventComponent() {
  const [title, Set_Title] = useState("");
  const [venue, Set_venue] = useState("");
  const [show_date, Set_showdate] = useState("");
  const [_description, Set_description] = useState("");
  const [ticket_price, Set_ticketPrice] = useState("");
  const [available_seats, Set_available_seates] = useState("");
  const [image, Set_image] = useState(null);
  const [ticket_type, Set_ticketType] = useState("");
  const [date_time, Set_date_time] = useState("");
  const [isAddEventVisible, setAddEventVisible] = useState(false);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handle_title = (event) => Set_Title(event.target.value);
  const handle_venue = (event) => Set_venue(event.target.value);
  const handle_showDate = (event) => Set_showdate(event.target.value);
  const handle_description = (event) => Set_description(event.target.value);
  const handle_TicketPrice = (event) => Set_ticketPrice(event.target.value);
  const handle_availableSeats = (event) =>
    Set_available_seates(event.target.value);
  const handle_image = (event) => Set_image(event.target.files[0]);
  const handle_ticketType = (event) => Set_ticketType(event.target.value);

  // const handle_tickettype = (event) => Set_ticketType(event.rat)

  const handle_dateTime = (event) => Set_date_time(event.target.value);
  // const

  // const
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

  const toggleAddEvent = () => {
    setAddEventVisible((prevState) => !prevState);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/DeleteEvent/${id}`);
      setEvents(events.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Error deleting event", error);
      setError("Failed to delete event");
    }
  };

  const Addevent = async (event) => {
    event.preventDefault();
  
    const data = new FormData();
    data.append("title", title);
    data.append("venue", venue);
    data.append("show_date", show_date);
    data.append("show_description", _description); 
    data.append("ticket_type", ticket_type);
    data.append("ticket_price", ticket_price);
    data.append("available_seats", available_seats);
    data.append("date_time", date_time);
    data.append("image", image);
  
    try {
      await axios.post("http://localhost:8080/SaveEvent", data, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
      alert("Success");
    } catch (error) {
      console.log("Error catching data", error);
      setError("Failed to load data");
    }
  };
  

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  const lastone = events.slice(-1);

  return (
    <div>
      <button onClick={toggleAddEvent}>
        {isAddEventVisible ? "Close Add Event" : "Add Event"}
      </button>
      {isAddEventVisible && (
        <div className="add-event-div">
          <form onSubmit={Addevent}>
            <input
              type="text"
              onChange={handle_title}
              value={title}
              name="Title"
              placeholder="Enter your Title"
            ></input>
            <br></br>

            <input
              type="text"
              onChange={handle_venue}
              value={venue}
              name="venue"
              placeholder="Enter your venue"
            ></input>
            <br></br>
            <input
              type="text"
              onChange={handle_showDate}
              value={show_date}
              name="show_date"
              placeholder="Enter your show Month"
            ></input>
            <br></br>
            <input
              type="text"
              onChange={handle_description}
              value={_description}
              name="_description"
              placeholder="Enter your description"
            ></input>
            <br></br>
            <input
              type="text"
              onChange={handle_TicketPrice}
              value={ticket_price}
              name="ticket_price"
              placeholder="Enter your ticket price"
            ></input>
            <br></br>
            <input
              type="text"
              onChange={handle_availableSeats}
              value={available_seats}
              name="available_seates"
              placeholder="Enter your available seates"
            ></input>
            <br></br>
            <input
              type="text"
              onChange={handle_dateTime}
              value={date_time}
              name="date_time"
              placeholder="Enter your date ,time"
            ></input>
            <br></br>
            <select
              name="ticket_type"
              value={ticket_type}
              onChange={handle_ticketType}
              required
              className="options"
            >
              <option value="" disabled>
                Select Event Type
              </option>
              <option value="Basic">Basic</option>
              <option value="Deals">Deals</option>
            </select>
            <input
              type="file"
              onChange={handle_image}
              name="image"
              accept="image/*"
            />
            <br></br>
            <button type="submit" className="button-submit-addevent">
              Add event
            </button>
          </form>
        </div>
      )}

      <h2 className="head-title">Event Management</h2>
      <table style={{ width: "98%" }}>
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map((event) => (
              <tr key={event.id} style={{ height: "50px" }}>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {event.id}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {event.title}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {event.show_date}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {event.venue}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  <button onClick={() => handleDelete(event.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No events found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {lastone.length > 0 && lastone[0].image ? (
        lastone.map((event) => (
          <div className="flex-div-lastevnet">
            <div key={event.id}>
              <h2 className="head-title">Latest event</h2>
              <img
                className="last-im"
                src={`data:image/jpeg;base64,${event.image}`}
                alt={event.title}
              />
            </div>
            <div>
              <p>{event.title}</p>
              <p>LKR {event.ticket_price}</p>
              <p>{event.venue}</p>
              <p>{event.date_time}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No recent event image available</p>
      )}
    </div>
  );
}

export default AdminEventComponent;
