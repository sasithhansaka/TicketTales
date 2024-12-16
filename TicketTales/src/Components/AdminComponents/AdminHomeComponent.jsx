import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

function AdminHomeComponent() {
  const [eventCounts, setEventCounts] = useState({ deal: 0, basic: 0 });
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/AllEvents");
        setEvents(response.data);
        const counts = response.data.reduce(
          (acc, event) => {
            if (event.ticket_type === "Deals") {
              acc.deal += 1;
            } else if (event.ticket_type === "Basic") {
              acc.basic += 1;
            }
            return acc;
          },
          { deal: 0, basic: 0 }
        );
        setEventCounts(counts);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, []);

  const chartData = {
    labels: ["Deal", "Basic"],
    datasets: [
      {
        label: "Event Type Count",
        data: [eventCounts.deal, eventCounts.basic],
        backgroundColor: ["#1259f3", "#010101"],
        borderColor: ["#2A8CD0", "#D94465"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Event Type Distribution (Deal vs Basic)",
      },
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    barThickness: 40,
  };

  const lastten = events.slice(-5);

  return (
    <div>
      <div style={{display:'flex',gap:'20px'}}>
      <div
        style={{
          width: "320px",
          marginTop: "30px",
          borderRadius: "25px",
          backgroundColor: "aliceblue",
          padding: "30px",
          height:'440px'
        }}
      >
        <h4>Upcoming shedules</h4>
        <hr></hr>

        {lastten.length > 0 ? (
          lastten.map((event, index) => (
            <div
              key={index}
              style={{ display: "flex", gap: "20px", marginTop: "20px" }}
            >
              <h4>{event.title}</h4>
              <p>{event.venue}</p>
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>

      <div className="bar" style={{ fontFamily: "Poppins, sans-serif" }}>
        <h3>Event Type Distribution (Bar Chart)</h3>
        <Bar data={chartData} options={chartOptions} />
      </div>
      
      </div>

      <div className="client-top-div">
      <h4>Latest clients registrations</h4>
      </div>
    </div>
  );
}

export default AdminHomeComponent;
