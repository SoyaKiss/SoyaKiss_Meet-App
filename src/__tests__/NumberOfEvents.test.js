import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  const mockUpdateEventCount = jest.fn();
  const mockSetErrorTwoAlert = jest.fn();

  beforeEach(() => {
    mockUpdateEventCount.mockClear();
    mockSetErrorTwoAlert.mockClear();
  });

  test("renders textbox input", () => {
    render(
      <NumberOfEvents
        updateEventCount={mockUpdateEventCount}
        setErrorTwoAlert={mockSetErrorTwoAlert}
      />
    );
    const inputElement = screen.getByRole("spinbutton", {
      name: /number of events/i,
    });
    expect(inputElement).toBeInTheDocument();
  });

  test("default value of input field is 32", () => {
    render(
      <NumberOfEvents
        updateEventCount={mockUpdateEventCount}
        setErrorTwoAlert={mockSetErrorTwoAlert}
      />
    );
    const inputElement = screen.getByRole("spinbutton", {
      name: /number of events/i,
    });
    expect(inputElement).toHaveValue(32);
  });

  test("value of input changes when user types in it", async () => {
    const user = userEvent.setup();
    render(
      <NumberOfEvents
        updateEventCount={mockUpdateEventCount}
        setErrorTwoAlert={mockSetErrorTwoAlert}
      />
    );
    const inputElement = screen.getByRole("spinbutton", {
      name: /number of events/i,
    });

    await act(async () => {
      await user.type(inputElement, "{backspace}{backspace}10");
    });

    expect(inputElement).toHaveValue(10);
    expect(mockUpdateEventCount).toHaveBeenCalledWith(10);
  });

  test("input does not accept negative numbers", async () => {
    const user = userEvent.setup();
    render(
      <NumberOfEvents
        updateEventCount={mockUpdateEventCount}
        setErrorTwoAlert={mockSetErrorTwoAlert}
      />
    );
    const inputElement = screen.getByRole("spinbutton", {
      name: /number of events/i,
    });

    await act(async () => {
      await user.clear(inputElement);
      await user.type(inputElement, "-10");
    });

    expect(inputElement).toHaveValue(-10);
    expect(mockSetErrorTwoAlert).toHaveBeenCalledWith(
      "Number of events must be at least 1."
    );
  });

  test("input does not accept non-numeric values", async () => {
    const user = userEvent.setup();
    render(
      <NumberOfEvents
        updateEventCount={mockUpdateEventCount}
        setErrorTwoAlert={mockSetErrorTwoAlert}
      />
    );
    const inputElement = screen.getByRole("spinbutton", {
      name: /number of events/i,
    });

    await act(async () => {
      await user.clear(inputElement);
      await user.type(inputElement, "abc");
    });

    expect(inputElement.value).toBe("");
    expect(mockSetErrorTwoAlert).toHaveBeenCalledWith(
      "Please enter a valid number."
    );
  });

  test("allows user to clear input, sets to 0 on blur if empty", async () => {
    const user = userEvent.setup();
    render(
      <NumberOfEvents
        updateEventCount={mockUpdateEventCount}
        setErrorTwoAlert={mockSetErrorTwoAlert}
      />
    );
    const inputElement = screen.getByRole("spinbutton", {
      name: /number of events/i,
    });

    await act(async () => {
      await user.clear(inputElement);
    });

    expect(inputElement.value).toBe("");

    await act(async () => {
      await user.click(document.body);
    });

    expect(inputElement).toHaveValue(0);
    expect(mockUpdateEventCount).toHaveBeenCalledWith(0);
    expect(mockSetErrorTwoAlert).toHaveBeenCalledWith(
      "Number of events cannot be empty or invalid."
    );
  });
});
