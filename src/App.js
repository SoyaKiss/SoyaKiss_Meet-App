import React, { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { extractLocations, getEvents } from "./api";
import Header from "./components/Header";
import { InfoAlert } from "./components/Alert";
import "./styles/App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();

    if (!allEvents) {
      console.error("No events found");
      return;
    }

    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);

    if (Array.isArray(filteredEvents)) {
      setEvents(filteredEvents.slice(0, currentNOE));
    } else {
      console.warn("Filtered events is not an array:", filteredEvents);
      setEvents([]);
    }

    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
      <Header />
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents updateEventCount={setCurrentNOE} />
      <EventList events={events} />
    </div>
  );
};

export default App;
