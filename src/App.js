import React, { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { extractLocations, getEvents } from "./api";
import Header from "./components/Header";
import {
  InfoAlert,
  ErrorAlert,
  ErrorTwoAlert,
  WarningAlert,
} from "./components/Alert";
import "./styles/App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [errorTwoAlert, setErrorTwoAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    const onlineStatus =
      typeof navigator.onLine === "boolean" ? navigator.onLine : true;
    console.log("Navigator online status:", onlineStatus);

    if (onlineStatus) {
      setWarningAlert("");
    } else {
      setWarningAlert(
        "You are offline. The displayed list has been loaded from cache."
      );
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    try {
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
    } catch (error) {
      setErrorAlert("An error occurred while fetching events");
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
        setErrorAlert={setErrorAlert}
      />
      <NumberOfEvents
        updateEventCount={setCurrentNOE}
        setErrorTwoAlert={setErrorTwoAlert}
      />
      <div className="error-alert-container">
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {errorTwoAlert.length ? <ErrorTwoAlert text={errorTwoAlert} /> : null}
      </div>
      <EventList events={events} />
    </div>
  );
};

export default App;
