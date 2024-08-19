import React, { useState } from "react";

const NumberOfEvents = ({ updateEventCount }) => {
  const [eventCount, setEventCount] = useState(32);

  const handleInputChanged = (event) => {
    let value = parseInt(event.target.value, 10);
    if (isNaN(value)) {
      value = 0; // Default to 0 if the value isn't a valid number
    }
    setEventCount(value);
    updateEventCount(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="number"
        className="event-number"
        value={eventCount}
        onChange={handleInputChanged}
        aria-label="Number of events"
      />
    </div>
  );
};

export default NumberOfEvents;
