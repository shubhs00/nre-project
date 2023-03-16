import React, { useState } from "react";
import "./TicketBooking.css";

const TicketBooking = ({ show }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, phone };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Your booking has been submitted!");
  };

  return (
    <div className="container">
      <h1 className="title">Book a Show</h1>
      <div className="booking-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketBooking;
