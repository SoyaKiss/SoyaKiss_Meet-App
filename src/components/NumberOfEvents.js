import React, { useState } from "react";

const NumberOfEvents = ({ updateEventCount }) => {
  const [eventCount, setEventCount] = useState(32);

  const handleInputChanged = (event) => {
    let value = event.target.value;

    if (value === "" || isNaN(value)) {
      setEventCount("");
    } else {
      const numericValue = parseInt(value, 10);
      if (numericValue >= 0) {
        setEventCount(numericValue);
        updateEventCount(numericValue);
      }
    }
  };

  const handleInputBlur = () => {
    if (eventCount === "") {
      setEventCount(0);
      updateEventCount(0);
    }
  };

  return (
    <div id="number-of-events">
      <input
        type="number"
        className="event-number"
        value={eventCount !== null ? eventCount : ""}
        onChange={handleInputChanged}
        onBlur={handleInputBlur}
        aria-label="Number of events"
        min="1"
      />
    </div>
  );
};

export default NumberOfEvents;
