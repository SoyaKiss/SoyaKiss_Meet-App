import React, { useState, useEffect } from "react";
import { InfoAlert, ErrorAlert } from "./Alert";

const CitySearch = ({
  allLocations,
  setCurrentCity,
  setInfoAlert,
  setErrorAlert,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setQuery(value);

    const filteredLocations = allLocations
      ? allLocations.filter((location) =>
          location.toUpperCase().startsWith(value.toUpperCase())
        )
      : [];

    setSuggestions(filteredLocations);

    if (value.length > 0 && filteredLocations.length === 0) {
      if (
        allLocations.some(
          (location) => location.toUpperCase() === value.toUpperCase()
        )
      ) {
        setInfoAlert("");
        setErrorAlert(
          `There are no events in "${value}". Please try another city.`
        );
      } else {
        if (value.length > 2) {
          setErrorAlert(`City "${value}" not found. Please try another city.`);
          setInfoAlert("");
        } else {
          setInfoAlert(
            "We cannot find the city you are looking for. Please try another city."
          );
          setErrorAlert("");
        }
      }
    } else {
      setInfoAlert("");
      setErrorAlert("");
    }
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false);
    setCurrentCity(value);
    setInfoAlert("");
    setErrorAlert("");
  };

  useEffect(() => {
    setSuggestions(allLocations);
  }, [allLocations]);

  return (
    <div id="city-search">
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        onChange={handleInputChanged}
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions ? (
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return (
              <li onClick={handleItemClicked} key={suggestion}>
                {suggestion}
              </li>
            );
          })}
          <li key="See all cities" onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CitySearch;
