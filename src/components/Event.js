import React, { useState, useRef, useEffect } from "react";
import "../styles/Event.css";

const Event = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef(null);

  const handleToggleDetails = (event) => {
    event.stopPropagation(); // Prevent the click from reaching the document
    setIsExpanded(!isExpanded);
  };

  const handleClickOutside = (event) => {
    if (detailsRef.current && !detailsRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isExpanded]);

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
        <div className="event-details" ref={detailsRef}>
          <p>{event.description}</p>
          <p>Start: {event.start.dateTime}</p>
          <p className="event-end">End: {event.end.dateTime}</p>
        </div>
      )}
    </li>
  );
};

export default Event;
