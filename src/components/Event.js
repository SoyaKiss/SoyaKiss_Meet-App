import React, { useState } from "react";
import "../styles/Event.css";

const Event = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  console.log("Event Data:", event); // Add this line

  const handleToggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className="event">
      <h1 className="event-title">{event.summary}</h1>
      <p className="event-date">{event.created}</p>
      <p className="event-location">{event.location}</p>
      <div className="details-btn-container">
        <button className="details-btn" onClick={handleToggleDetails}>
          {isExpanded ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {isExpanded && (
        <div className="event-details">
          <p>{event.description}</p> {/* This paragraph is no longer bold */}
          <p>Start: {event.start.dateTime}</p>
          <p className="event-end">End: {event.end.dateTime}</p>
        </div>
      )}
    </li>
  );
};

export default Event;
