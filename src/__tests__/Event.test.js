import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";

describe("Event Component", () => {
  let event;

  beforeAll(async () => {
    const allEvents = await getEvents();
    event = allEvents[0];
  });

  test("user should be able to see event elements collapsed by default", () => {
    render(<Event event={event} />);

    // Check event title
    const titleElement = screen.queryByText(event.summary);
    expect(titleElement).toBeInTheDocument();

    // Check event start time
    const startTimeElement = screen.queryByText(event.created);
    expect(startTimeElement).toBeInTheDocument();

    // Check event location
    const locationElement = screen.queryByText(event.location);
    expect(locationElement).toBeInTheDocument();

    // Check that details are collapsed by default
    const descriptionElement = screen.queryByText(
      event.description.split(" ")[0]
    );
    expect(descriptionElement).not.toBeInTheDocument();

    // Check that "Show Details" button is present
    const showDetailsButton = screen.queryByText(/show details/i);
    expect(showDetailsButton).toBeInTheDocument();
  });

  test("user should be able to expand an event element to see details about the event", () => {
    render(<Event event={event} />);

    // Click to expand the event
    const button = screen.getByText(/show details/i);
    fireEvent.click(button);

    // Check expanded details
    const expandedDescriptionElement = screen.getByText(/Have you wondered/);
    expect(expandedDescriptionElement).toBeInTheDocument();

    const startTimeElement = screen.getByText(`Start: ${event.start.dateTime}`);
    expect(startTimeElement).toBeInTheDocument();

    const endTimeElement = screen.getByText(`End: ${event.end.dateTime}`);
    expect(endTimeElement).toBeInTheDocument();
  });

  test("user should be able to collapse an expanded event to hide details", () => {
    render(<Event event={event} />);

    // Expand the event details
    let button = screen.getByText(/show details/i);
    fireEvent.click(button);

    // Collapse the event details
    button = screen.getByText(/hide details/i);
    fireEvent.click(button);

    // Check that details are no longer visible
    const descriptionElement = screen.queryByText(/Have you wondered/);
    expect(descriptionElement).not.toBeInTheDocument();

    const startTimeElement = screen.queryByText(
      `Start: ${event.start.dateTime}`
    );
    expect(startTimeElement).not.toBeInTheDocument();

    const endTimeElement = screen.queryByText(`End: ${event.end.dateTime}`);
    expect(endTimeElement).not.toBeInTheDocument();
  });

  test("renders event location", () => {
    render(<Event event={event} />);
    expect(screen.queryByText(event.location)).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    render(<Event event={event} />);
    expect(screen.queryByText(/show details/i)).toBeInTheDocument();
  });
});
