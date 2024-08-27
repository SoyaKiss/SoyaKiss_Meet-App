Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default
        Given the user is on the main page
        When the user sees the event list
        Then the event element should be collapsed by default

    Scenario: User can expand an event to see details
        Given the user has an event collapsed
        When the user clicks on the event's "Show Details" button
        Then the event's details should be displayed

    Scenario: User can collapse an event to hide details
        Given the user has an event expanded
        When the user clicks on the event's "Hide Details" button
        Then the event's details should be hidden