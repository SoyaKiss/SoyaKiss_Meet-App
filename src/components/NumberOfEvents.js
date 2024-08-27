import React, { useState } from "react";

const NumberOfEvents = ({ updateEventCount }) => {
  const [eventCount, setEventCount] = useState(32);

  const handleInputChanged = (event) => {
    let value = event.target.value;

    // Only update if the value is a number and greater than 0
    if (value === "") {
      setEventCount(""); // Allow the input to be empty
      updateEventCount(0); // You might want to handle this differently if needed
    } else {
      let numericValue = parseInt(value, 10);
      if (!isNaN(numericValue) && numericValue >= 0) {
        setEventCount(numericValue);
        updateEventCount(numericValue);
      }
    }
  };

  return (
    <div id="number-of-events">
      <input
        type="number"
        className="event-number"
        value={eventCount}
        onChange={handleInputChanged}
        aria-label="Number of events"
        min="1"
      />
    </div>
  );
};

export default NumberOfEvents;
