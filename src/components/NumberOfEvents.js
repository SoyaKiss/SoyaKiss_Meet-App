import React, { useState } from "react";
import { ErrorTwoAlert } from "./Alert";

const NumberOfEvents = ({ updateEventCount, setErrorTwoAlert }) => {
  const [eventCount, setEventCount] = useState(32);

  const handleInputChanged = (event) => {
    let value = event.target.value;

    if (value === "" || isNaN(value)) {
      setEventCount(value);
      setErrorTwoAlert("Please enter a valid number.");
    } else {
      const numericValue = parseInt(value, 10);
      if (numericValue < 1) {
        setEventCount(value);
        setErrorTwoAlert("Number of events must be at least 1.");
      } else if (numericValue > 100) {
        setEventCount(numericValue);
        setErrorTwoAlert("Number of events must be 100 or less.");
      } else {
        setEventCount(numericValue);
        updateEventCount(numericValue);
        setErrorTwoAlert("");
      }
    }
  };

  const handleInputBlur = () => {
    if (eventCount === "" || isNaN(eventCount)) {
      setEventCount(0);
      updateEventCount(0);
      setErrorTwoAlert("Number of events cannot be empty or invalid.");
    } else {
      const numericValue = parseInt(eventCount, 10);
      if (numericValue < 1) {
        setEventCount(1);
        updateEventCount(1);
        setErrorTwoAlert("Number of events must be at least 1.");
      }
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
