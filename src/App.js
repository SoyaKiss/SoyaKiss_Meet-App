import React, { useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [eventCount, setEventCount] = useState(32);

  const updateEventCount = (count) => {
    setEventCount(count);
  };

  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents updateEventCount={updateEventCount} />
      <EventList events={events.slice(0, eventCount)} />
    </div>
  );
}

export default App;
