import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { getEvents } from "../mock-data";

const feature = loadFeature("./src/features/showHideEventDetails.feature");

defineFeature(feature, (test) => {
  let AppComponent;
  let EventListDOM;
  let eventDetails;

  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("the user is on the main page", () => {
      act(() => {
        AppComponent = render(<App events={getEvents()} />);
      });
    });

    when("the user sees the event list", () => {
      EventListDOM = AppComponent.container.querySelector("#event-list");
    });

    then("the event element should be collapsed by default", async () => {
      await waitFor(() => {
        eventDetails = within(EventListDOM).queryAllByText(/Start:/i);
        expect(eventDetails.length).toBe(0);
      });
    });
  });

  test("User can expand an event to see details", ({ given, when, then }) => {
    given("the user has an event collapsed", async () => {
      await act(async () => {
        AppComponent = render(<App events={getEvents()} />);
      });
      EventListDOM = AppComponent.container.querySelector("#event-list");
    });

    when(
      /^the user clicks on the event's "(.*)" button$/,
      async (buttonText) => {
        const user = userEvent.setup();
        const showDetailsButtons =
          within(EventListDOM).queryAllByText(buttonText);

        if (showDetailsButtons.length > 0) {
          await act(async () => {
            await user.click(showDetailsButtons[0]);
          });
        } else {
          console.error("Show Details button not found!");
        }
      }
    );

    then("the event's details should be displayed", async () => {
      await waitFor(() => {
        eventDetails = within(EventListDOM).queryAllByText(/Start:/i);
        expect(eventDetails.length).toBeGreaterThan(0);
      });
    });
  });

  test("User can collapse an event to hide details", ({
    given,
    when,
    then,
  }) => {
    given("the user has an event expanded", async () => {
      await act(async () => {
        AppComponent = render(<App events={getEvents()} />);
      });
      EventListDOM = AppComponent.container.querySelector("#event-list");

      const user = userEvent.setup();
      const showDetailsButtons =
        within(EventListDOM).queryAllByText(/Show Details/i);

      await act(async () => {
        await user.click(showDetailsButtons[0]);
      });
    });

    when(
      /^the user clicks on the event's "(.*)" button$/,
      async (buttonText) => {
        const user = userEvent.setup();
        const hideDetailsButtons =
          within(EventListDOM).queryAllByText(buttonText);

        await act(async () => {
          await user.click(hideDetailsButtons[0]);
        });
      }
    );

    then("the event's details should be hidden", async () => {
      await waitFor(() => {
        eventDetails = within(EventListDOM).queryAllByText(/Start:/i);
        expect(eventDetails.length).toBe(0);
      });
    });
  });
});
