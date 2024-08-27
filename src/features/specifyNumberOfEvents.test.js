import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { getEvents } from "../mock-data";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppComponent;
  let EventListDOM;

  test("When user has not not specified a number, 32 events are shown by default", ({
    given,
    when,
    then,
  }) => {
    given("the user is on the main page", () => {
      act(() => {
        AppComponent = render(<App events={getEvents()} />);
      });
    });
    when("the user has not specified a number of events to display", () => {
      EventListDOM = AppComponent.container.querySelector("#event-list");
    });
    then("32 events should be shown by default", async () => {
      await waitFor(() => {
        const events = within(EventListDOM).queryAllByRole("listitem");
        expect(events.length).toBe(32);
      });
    });
  });

  test("User can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    given(
      "the user has not specified a number of events to display",
      async () => {
        await act(async () => {
          AppComponent = render(<App events={getEvents()} />);
        });
        EventListDOM = AppComponent.container.querySelector("#event-list");
      }
    );
    when("the user changes the number of events to display to 10", async () => {
      const user = userEvent.setup();
      const numberInput = AppComponent.container.querySelector(
        'input[type="number"]'
      );
      await act(async () => {
        await user.clear(numberInput);
        await user.type(numberInput, "10");
      });
    });
    then("the user should see 10 events displayed", async () => {
      await waitFor(() => {
        const events = within(EventListDOM).queryAllByRole("listitem");
        expect(events.length).toBe(10);
      });
    });
  });
});
