import React, { useState } from "react";

const Event = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li>
      <h1>{event.summary}</h1>
      <p>{event.created}</p>
      <p>{event.location}</p>
      <button onClick={handleToggleDetails}>
        {isExpanded ? "Hide Details" : "Show Details"}
      </button>
      {isExpanded && (
        <div>
          <p>{event.description}</p>
          <p>Start: {event.start.dateTime}</p>
          <p>End: {event.end.dateTime}</p>
        </div>
      )}
    </li>
  );
};

export default Event;
