import { useState } from 'react';
import React from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import EventsPage from './Pages/EventsPage';
import UserProfile from './Pages/UserProfile';
import AdminHomePage from './Pages/AdminHomePage';
import BuyTicket from './Pages/BuyTicket';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/events" element={<EventsPage/>}></Route>
          <Route path="/UserProfile" element={<UserProfile/>}></Route>
          <Route path="/AdminPage" element={<AdminHomePage/>}></Route>
          <Route path="/PurchaseTicket" element={<BuyTicket/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
