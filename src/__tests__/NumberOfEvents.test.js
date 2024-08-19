import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  const mockUpdateEventCount = jest.fn();

  test("renders textbox input", () => {
    render(<NumberOfEvents updateEventCount={mockUpdateEventCount} />);
    const inputElement = screen.getByRole("spinbutton", {
      name: /number of events/i,
    });
    expect(inputElement).toBeInTheDocument();
  });

  test("default value of input field is 32", () => {
    render(<NumberOfEvents updateEventCount={mockUpdateEventCount} />);
    const inputElement = screen.getByRole("spinbutton", {
      name: /number of events/i,
    });
    expect(inputElement).toHaveValue(32);
  });

  test("value of input changes when user types in it", async () => {
    const user = userEvent.setup();
    render(<NumberOfEvents updateEventCount={mockUpdateEventCount} />);
    const inputElement = screen.getByRole("spinbutton", {
      name: /number of events/i,
    });

    await user.type(inputElement, "{backspace}{backspace}10");
    expect(inputElement).toHaveValue(10);
    expect(mockUpdateEventCount).toHaveBeenCalledWith(10); // Ensure it's a number, not a string
  });
});